---
name: update-docs
description: Write, refresh, review or restructure Glific user docs in this repo, using screenshots and UI checks from the live (production) Glific app. It drives a read-only, auto-redacting playwright-cli browser. Use for "/update-docs ...", "refresh the X page", "write a new doc for X", "review docs for consistency", "restructure docs with tabs", or any docs change that needs current screenshots or must match the live UI.
argument-hint: <what to do, e.g. "refresh the analytics page with new navigation tabs">
---

# update-docs

Updates the Glific docs in this repo (`glific/docs`, Docusaurus) using the **live production Glific app** as the source of truth.

The browser is logged in to a **real organisation's production account**. Two rules override everything else in this skill:

1. **Never change anything in Glific.** Only look and take screenshots. A network guard blocks writes. If the guard trips, **stop at once and warn the user** (see [safety.md](safety.md)).
2. **Never publish an unredacted screenshot.** Take every image with `gdocs shot`. It removes contact data, checks that nothing is left, and records the image so `gdocs lint` can check it later. Then look at each PNG yourself before you use it.

Users don't need to install anything. The cloud environment provides `node`, `playwright-cli`, Chromium and these env vars: `GLIFIC_URL`, `GLIFIC_PHONE`, `GLIFIC_PASSWORD`, `PLAYWRIGHT_BROWSERS_PATH`. Never print, echo or read the credential values. `gdocs` reads them itself.

All commands below run from the repo root. `gdocs` is short for `node .claude/skills/update-docs/scripts/gdocs.mjs`.

## Step 0 — Preflight (always, before anything else)

```bash
node .claude/skills/update-docs/scripts/gdocs.mjs preflight
```

This checks the env vars, `playwright-cli`, the browser launch and the read-only guard. The guard check sends a canary mutation that must be blocked. It also runs a redaction self-test and then logs in to Glific. Only a run that ends with `PREFLIGHT OK` passes.

- **If any check fails**, stop and show the user the `[FAIL]` lines. Explain the likely cause using [troubleshooting](#troubleshooting). Do not try to install anything, and do not work around the guard.
- For a **docs-only** request that needs no browser (pure review or restructure), you may ask the user whether to continue without the live app. If you do, say in the final summary that nothing was checked against the live UI.

## Step 1 — Classify the request

| Intent | Example | Browser? | Read |
|---|---|---|---|
| **Refresh** an existing page | `refresh the analytics page with new navigation tabs` | yes | [workflow-refresh.md](workflow-refresh.md) |
| **New** page | `write a new doc page for HSM v2 page` | yes | [workflow-new.md](workflow-new.md) |
| **Review** a set of pages for consistency | `review document structure for all webhooks and ensure consistency of writing` | optional, for spot-checks | [workflow-review.md](workflow-review.md) |
| **Restructure** (tabs, merges, moves) | `restructure docs with tabs like ...` | optional | [workflow-restructure.md](workflow-restructure.md) |

If the request mixes intents, do them in this order: review/restructure plan → refresh/new content → screenshots.

Always read these too:
- [browsing.md](browsing.md): how to drive the session, take screenshots and find your way around Glific.
- [safety.md](safety.md): what is blocked, the stop-and-warn protocol, and redaction limits.
- The house style in the sibling `documentation` skill. It is the single source for docs conventions, so don't duplicate it here:
  - `.claude/skills/documentation/sections.md`: which of the 8 sections content belongs in
  - `.claude/skills/documentation/style-writing.md`: voice and audience (NGO staff, non-technical)
  - `.claude/skills/documentation/style-page.md`: page templates
  - `.claude/skills/documentation/style-images.md`: image directories, naming and `/img/` paths

## Step 2 — Plan, then confirm

Before you edit files, print a short plan and **wait for the user to confirm**:

```
Plan (<intent>):
- Pages: docs/<section>/<file>.md  (new | update | move → <new path>)
- Screenshots: static/img/<feature>/<name>.png  (new | replace)  — N total
- Live UI checked: <routes you will open>
- Out of scope / can't capture: <e.g. flow editor — opening it locks the flow>
```

## Step 3 — Do the work

Follow the workflow file for the intent. While you work:

- After **every** browser action the PostToolUse hook checks the guard. If it reports `READ-ONLY GUARD TRIPPED`, follow the stop-and-warn protocol in [safety.md](safety.md) before you do anything else.
- Never click buttons that save, submit, send, delete, publish, start, import, upload, sync, assign or change state, even though the guard would block them. Open forms and dialogs only to photograph them, then close them with **Cancel**, **Escape** or by going back.
- Write only what you saw in the live app. If the UI and the user's request disagree, ask.

## Step 4 — Validate and hand off

```bash
node .claude/skills/update-docs/scripts/gdocs.mjs lint           # image provenance + /img refs
node .claude/skills/update-docs/scripts/gdocs.mjs stop           # close the browser
```

- `lint` must pass. It checks image provenance, `/img/` refs and relative `.md` links in changed pages. A provenance failure means an image was not made by `gdocs shot`. Retake it.
- If `node_modules/` exists, also run `yarn build` to catch MDX errors (broken links are ignored by the site config; `lint` covers them). Otherwise say that CI will run the build.
- Finish with a summary: pages changed, screenshots added or replaced, anything that couldn't be captured and why, and any blocked write attempts (passive ones too). Don't commit or open a PR unless the user asks.

## Troubleshooting

| Preflight failure | Likely cause | What to tell the user |
|---|---|---|
| `env — missing …` | Env vars not set in the cloud environment | Add `GLIFIC_URL`, `GLIFIC_PHONE`, `GLIFIC_PASSWORD` to the cloud environment's env settings. |
| `playwright-cli — not on PATH` | Running locally, or the setup script didn't run | Use the cloud environment, or run the env setup script once. |
| `browser launch — … not installed` | `@playwright/cli` and the installed Chromium are different versions | Re-run the environment setup script so both are `@latest` together. |
| `read-only guard — canary … NOT blocked` | Unexpected playwright-cli behaviour | **Do not proceed.** Report it. |
| `login — phone field …` / `page says: …` | Wrong phone format (`91XXXXXXXXXX`), wrong password, or a non-Indian dial code | Check `GLIFIC_PHONE` / `GLIFIC_PASSWORD`. |
| `login — Timeout …waitForURL` | Slow first load or a changed login UI | Retry once with `gdocs start`. If it fails again, report it. |
