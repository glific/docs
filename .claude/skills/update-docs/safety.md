# Safety: read-only browsing and redaction

The session is logged in to a real organisation's **production** Glific account. Contacts, messages and staff are real people. Every safeguard below fails closed: when in doubt, it blocks or refuses.

## Layers

| Layer | Where | What it does |
|---|---|---|
| Network guard | `gdocs.mjs` → `guardCode` (installed on the browser context **before** login) | Blocks every write request. See the rules below. Blocked GraphQL calls get a fake error response. Other blocked calls get a 403. Nothing reaches the server. |
| Canary | `gdocs preflight` / `start` / `status` / `shot` | Sends a fake `mutation DocsGuardCanary`. If it isn't blocked, the session is closed and not used. |
| Command hook (pre) | `.claude/settings.json` → `scripts/pw-guard-hook.sh pre` | Direct `playwright-cli` calls must use `-s=glific-docs` and only an allow-listed set of navigation and inspection commands. It blocks `open`, `run-code`, `unroute`, `screenshot`, `state-save`, cookie and storage access, tracing, video, uploads, and any command that mentions `GLIFIC_PASSWORD`. |
| Guard monitor (post) | `pw-guard-hook.sh post` | After each `glific-docs` command, reads the guard's log. If a non-passive write was blocked, it returns `READ-ONLY GUARD TRIPPED` to you. |
| Redaction | `gdocs shot` | Replaces PII in the DOM of every frame, re-scans what is visible, and refuses to capture if anything phone- or email-like remains. It then masks media and avatars and records the image's SHA-256 in `.playwright-cli/redacted-manifest.json`. |
| Provenance lint | `gdocs lint` | Fails if any new or changed image under `static/img/` isn't in the manifest with a matching hash. |
| Your eyes | You | Read every PNG before you reference it. Regex can't catch names in free text. |

## Guard rules

Allowed:
- `GET`, `HEAD` and `OPTIONS`, unless the URL contains a GraphQL `mutation`.
- `POST /api` when **every** operation is a plain `query`.
- Login and session upkeep: `POST /api/v1/session`, `/session/renew`, `/session/name`.
- Analytics embed token: `POST /api/v1/get-embed-token`. Superset (`moonshine.projecttech4dev.org`) chart-data POSTs use a read-only guest token.
- **The one write exception: opening the flow editor.** `flowGet` (without `isForced`) takes the docs account's edit lock on that flow, and `flowRelease` (fired when the flow list loads) gives it back. Both are logged as `allowed` in `gdocs blocked`. While the lock is held, the org's staff can only open that flow in view-only mode. See "Flow editor" below.

Blocked, and recorded:
- Any GraphQL `mutation` or `subscription` over HTTP, multipart or upload requests, and requests without query text. This includes everything inside the flow editor that changes a flow: publish, reset counts, translate, import, and autosaved revisions (`POST /flow-editor/revisions`).
- `flowGet` with `isForced: true`. That is the **Take Over** button, which would kick a staff member out of a flow they are editing.
- Side-effect queries `simulatorGet` and `simulatorRelease`. They reserve the org's shared simulator contact.
- Every other `POST`, `PUT`, `PATCH` or `DELETE` to the Glific host, including logout, the simulator, onboarding and registration (which sends an OTP).
- WebSocket frames that carry a mutation.

Dropped silently (not recorded): writes to third-party hosts, such as telemetry (PostHog, Sentry).

**Passive** blocks are fired by the UI on its own, not by something you clicked: `markContactMessagesAsRead` when a chat is opened, `markNotificationAsRead`, and `/session/tracker`. They are blocked and listed, but you don't need to stop for them. Mention them in the final summary.

## Stop-and-warn protocol

Do this when `READ-ONLY GUARD TRIPPED` appears (from the hook or from `gdocs blocked`/`shot`/`status`), or when you notice you were about to change data:

1. **Stop.** Make no more browser calls.
2. Tell the user right away, in this form:
   > ⚠️ **Read-only guard tripped.** My last action, `<command / button you clicked on which page>`, tried to `<blocked operation from the log>` on the live Glific account. It was blocked and nothing was changed on the server. `<one line on why it happened>`.
3. Run `gdocs blocked` and include its lines.
4. **Wait** for the user to say how to proceed. When they reply, run `gdocs blocked --ack`, reload the page (the UI may now show an error state), and continue without repeating that action.

Never try to "fix" a trip by changing the guard, the hook, the session or the scripts. Never run `playwright-cli` outside the `glific-docs` session.

## Flow editor

You may open the flow editor to document it. It is the only place where the skill takes a server-side lock, so keep its impact small:

1. **Prefer flows that staff aren't working on**: template flows, demo or sample flows, or old inactive flows. Ask the user which flow to use if none is obvious. Never pick a flow just because it is recently modified.
2. **If the editor shows the "View Only Mode" banner**, someone else is editing that flow. Photograph the view-only editor or choose another flow. **Never select Take Over.** It is blocked anyway and would trip the guard.
3. **Look, don't edit.** Don't drag, add, delete or edit nodes, and don't open node editors and change fields. Every change autosaves a revision, which is blocked and trips the guard. You may open a node's settings dialog to photograph it, then close it with **Cancel** or `press Escape`.
4. **Never select** **Publish**, **Reset flow counts**, **Translate**, **Export**/**Import**, **Preview** (the simulator) or **Save**.
5. **Release the lock as soon as you are done**: `goto <GLIFIC_URL>/flow` (loading the flow list fires `flowRelease`). `gdocs blocked` shows `NOTE flow editor lock is held` until it is released, and `gdocs stop` releases it automatically before closing.
6. List every flow you opened in the final summary.

## Things you can't capture on production

| UI | Why | Do instead |
|---|---|---|
| Flow simulator (**Preview**) | Opening it reserves the org's shared simulator contact (`simulatorGet`) | Keep the existing screenshots, or use `:::info Screenshot coming soon`. Tell the user. |
| Flow editor states after an edit (new node added, publish dialog result) | Would need a write | Photograph existing flows that already show the state. Otherwise describe it in text. |
| Saved or confirmed states ("Template submitted", success toasts) | Would need a write | Describe them in text. Photograph only the form before it is submitted. |
| Contact profiles and chat threads with real conversations | Heavy PII | Prefer list or empty views. If you must, crop tightly with `--target` and check the redaction carefully. |
| Settings → credentials and provider keys | Secrets | Inputs that look like keys are masked automatically. Prefer the list view. |

## Redaction details and limits

`gdocs shot` replaces:
- Phone-like numbers (10–15 digits) → `+91 XXXXX XXXXX`; emails → `user@example.org`; long token-like strings → `••••••••`.
- Contact names (chat list, conversation header, profile header, WA group members, sender names) → `Contact Name`; staff name in the user menu → `Staff Member`.
- Table columns headed Name, Contact, Beneficiary, Staff, User, Member, Assigned to or Owner → `Contact 1…n`.
- Message text in chat bubbles and previews → `Sample message text`.
- Input values that look like secrets → `••••••••••`. Other input values are scanned for phones and emails.
- Images, video, stickers, documents, locations and avatars in chats → blurred, and masked in the capture.

What it **can't** detect on its own: names or personal details written in free text, such as flow names like "Asha's follow-up", collection names, notes, labels, template bodies with real names, and data inside charts. When you see any of these in the PNG:

```bash
node .claude/skills/update-docs/scripts/gdocs.mjs shot static/img/<feature>/<name>.png --hide '<css of the area>'
```

`--hide` overwrites the text with `████` and blurs images. `--mask` adds an opaque box over an element in the capture. You can repeat either flag. Retake until the image is clean.
