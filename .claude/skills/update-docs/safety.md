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

Blocked, and recorded:
- Any GraphQL `mutation` or `subscription` over HTTP, multipart or upload requests, and requests without query text.
- Side-effect queries `flowGet`, `flowRelease`, `simulatorGet` and `simulatorRelease`. They take or release edit locks, so opening the **flow editor** or the **simulator** would lock them for the org's real staff.
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

## Things you can't capture on production

| UI | Why | Do instead |
|---|---|---|
| Flow editor canvas, flow simulator | Opening them takes a server-side lock (`flowGet`, `simulatorGet`) | Keep the existing screenshots, or use `:::info Screenshot coming soon`. Tell the user. |
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
