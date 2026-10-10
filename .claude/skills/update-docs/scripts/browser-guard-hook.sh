#!/usr/bin/env bash
# Claude Code Bash hook for the update-docs skill (wired in .claude/settings.json).
#
#   pre  — PreToolUse: direct `playwright-cli` calls may only target the guarded
#          "glific-docs" session and only use navigation/inspection commands.
#          Everything that could open an unguarded browser, drop the guard,
#          bypass redaction or leak tokens must go through glific-browser.mjs.
#   post — PostToolUse: after any glific-docs browser command, check whether the
#          read-only guard blocked a write and, if so, tell Claude to stop.
#
# Exit 2 = block (pre) / feed stderr back to Claude (post). Anything else = allow.
# Must never break unrelated Bash calls, so every failure path exits 0.

mode="${1:-pre}"
input="$(cat)"

# Cheap filter: almost every Bash call ends here.
case "$input" in
  *playwright-cli*|*GLIFIC_PASSWORD*) ;;
  *) exit 0 ;;
esac

cmd="$(printf '%s' "$input" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("command",""))' 2>/dev/null)" \
  || cmd="$(printf '%s' "$input" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{console.log(JSON.parse(s).tool_input.command||"")}catch{}})' 2>/dev/null)" \
  || cmd="$input"

session="glific-docs"
allowed=" goto click dblclick hover snapshot find eval press type fill select check uncheck go-back go-forward reload resize tab-list tab-new tab-select tab-close console requests mousewheel mousemove generate-locator highlight dialog-dismiss set-color-scheme clear-color-scheme close list "

deny() {
  echo "update-docs guard: $1" >&2
  echo "Use: node .claude/skills/update-docs/scripts/glific-browser.mjs <preflight|start|status|shot|blocked|stop>" >&2
  exit 2
}

if [ "$mode" = "pre" ]; then
  case "$cmd" in
    *GLIFIC_PASSWORD*) deny "commands must not reference GLIFIC_PASSWORD; glific-browser.mjs reads credentials itself." ;;
  esac

  while IFS= read -r inv; do
    [ -z "$inv" ] && continue
    set -f
    # shellcheck disable=SC2086
    set -- $inv
    shift # drop "playwright-cli"
    sess=""
    sub=""
    for tok in "$@"; do
      case "$tok" in
        -s=*) sess="${tok#-s=}" ;;
        --session=*) sess="${tok#--session=}" ;;
        --version|--help|-h) [ -z "$sub" ] && sub="$tok" ;;
        -*) ;;
        *) [ -z "$sub" ] && sub="$tok" ;;
      esac
    done
    sess="${sess//\"/}"; sess="${sess//\'/}"
    case "$sub" in ""|--version|--help|-h|list) continue ;; esac
    [ "$sess" = "$session" ] || deny "playwright-cli must use -s=$session (the only read-only, guarded session). Got: '${sess:-default}'."
    case "$allowed" in *" $sub "*) continue ;; esac
    case "$sub" in
      screenshot|pdf|video-*|tracing-*) deny "'$sub' is not allowed directly — use 'glific-browser.mjs shot' so images are redacted." ;;
      open|attach) deny "'$sub' would create an unguarded browser — use 'glific-browser.mjs start'." ;;
      *) deny "'playwright-cli $sub' is not allowed in the docs session (it can bypass the read-only guard or expose credentials)." ;;
    esac
  # Only invocations in command position (start, after ; & | ( ` or npx/env),
  # so `grep "playwright-cli open"` etc. is not mistaken for a call.
  done < <(printf '%s\n' "$cmd" \
    | grep -oE '(^|[;&|(`]|npx|env|sudo|exec|time|xargs|then|do|[A-Za-z_][A-Za-z0-9_]*=[^[:space:]]*)[[:space:]]*playwright-cli([[:space:]]+[^[:space:];&|)]+)*' 2>/dev/null \
    | sed -E 's/^.*playwright-cli/playwright-cli/')
  exit 0
fi

if [ "$mode" = "post" ]; then
  case "$cmd" in
    *"-s=$session"*|*"--session=$session"*) ;;
    *) exit 0 ;;
  esac
  dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
  out="$(node "$dir/glific-browser.mjs" blocked --quiet 2>&1)"
  if [ $? -eq 3 ]; then
    printf '%s\n' "$out" >&2
    exit 2
  fi
  exit 0
fi

exit 0
