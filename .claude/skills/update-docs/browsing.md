# Browsing the live app

One browser session, `glific-docs`, is opened by `gdocs preflight`/`gdocs start`. It is already logged in, guarded and set to a 1440×900 viewport. Drive it with `playwright-cli -s=glific-docs <command>`. The hook rejects any other session and any command not listed below.

## Session lifecycle

```bash
node .claude/skills/update-docs/scripts/gdocs.mjs status   # alive + guarded? (exit 1 = no, 3 = guard tripped)
node .claude/skills/update-docs/scripts/gdocs.mjs start    # reopen + re-login if the session died (idle 1h)
node .claude/skills/update-docs/scripts/gdocs.mjs stop     # at the end
```

If a command says the browser `is not open`, run `gdocs start`. Never use `playwright-cli open`.

## Allowed commands

| Purpose | Command |
|---|---|
| Navigate | `goto <GLIFIC_URL>/<route>` (use the literal origin printed by preflight), `go-back`, `go-forward`, `reload` |
| See the page | `snapshot` (accessibility tree with refs such as `e12`, or `f3e12` inside frames), `snapshot <ref>`, `find "<text or /regex/>"` |
| Interact (read-only intent) | `click <ref>`, `hover <ref>`, `press Escape`, `type`/`fill` **only in search or filter boxes**, `select` on filter dropdowns, `mousewheel 0 600` |
| Inspect | `eval "<js expr>"` (e.g. `document.title`, `window.scrollTo(0,0)`), `console`, `requests` |
| Tabs | `tab-list`, `tab-new <url>`, `tab-select <n>`, `tab-close <n>` |
| Wait | `eval "new Promise(r => setTimeout(r, 1500))"`, then `snapshot` again |

Glific loads data with Apollo after the page renders. After `goto`, check with `snapshot` or `find` that the list or data has loaded before you take a screenshot.

Snapshot output contains real contact data. Use it to navigate. Don't copy names, numbers or message text into docs, commit messages or replies.

## Screenshots

```bash
# full viewport
node .claude/skills/update-docs/scripts/gdocs.mjs shot static/img/<feature>/<feature>_<what>.png

# cropped to one element (preferred for lists, forms, dialogs, cards)
node .claude/skills/update-docs/scripts/gdocs.mjs shot static/img/<feature>/<feature>_<what>.png --target e42
node .claude/skills/update-docs/scripts/gdocs.mjs shot static/img/<feature>/<feature>_<what>.png --target '[role="dialog"]'

# extra redaction for free-text PII the automatic pass can't detect
node .claude/skills/update-docs/scripts/gdocs.mjs shot static/img/flows/flows_list.png --target main --hide 'tbody td:first-child'
```

- The output path must be under `static/img/`. Follow the naming and directory rules in [style-images.md](style-images.md).
- Redaction changes the live DOM. After a shot, `reload` before you read real values again.
- When you **replace** an existing image, keep the same filename so links don't break, unless the page is being restructured.
- After every shot, **Read the PNG** and check it: no real names, numbers, message text, emails, keys or org-identifying details, and the right UI state is shown. If anything leaks, retake it with `--hide`/`--mask` or a tighter `--target`.
- `shot` refuses to capture while an unacknowledged guard trip exists. Clear it with the stop-and-warn protocol in `safety.md`.

## Finding routes and UI

1. Snapshot the left sidebar after login. The menu items are the feature entry points.
2. If `../glific-frontend/` exists, read `src/routes/AuthenticatedRoute/AuthenticatedRoute.tsx` for the full route list, and `src/containers/<Feature>/` for labels and `data-testid`s.
3. Otherwise read the same files from GitHub without cloning:
   ```bash
   gh api repos/glific/glific-frontend/contents/src/routes/AuthenticatedRoute/AuthenticatedRoute.tsx --jq .content | base64 -d
   ```
4. For "what changed" questions, check recent merged PRs: `gh pr list --repo glific/glific-frontend --state merged --search "<feature>" --limit 10`.

Common entry routes (check them against the sidebar, they change): `/chat`, `/flow`, `/trigger`, `/speed-send`, `/template`, `/interactive-message`, `/search`, `/collection`, `/contact-management`, `/staff-management`, `/notifications`, `/analytics`, `/settings`.

## Opening forms safely

Clicking **Create**/**Add** to photograph an empty form is fine. Then:
- Don't type into form fields, except to show a field's validation or helper text, and then only with obviously fake text such as `Sample template`.
- Leave with **Cancel**, `press Escape` or `go-back`. Never click Save, Submit, Send, Create, Delete, Confirm, Import, Upload, Sync, Start or Publish.
- If a confirmation dialog appears unexpectedly, dismiss it (`press Escape` or click **Cancel**).
