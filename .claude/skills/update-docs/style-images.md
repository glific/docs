# Style: Images

## How images are made

Every new or replaced screenshot is taken with `glific-browser shot` from the live app (see `browsing.md`). It redacts PII and records the image for `glific-browser lint`. Don't add images from anywhere else. A local screenshot tool, a copied GitHub asset or an AI-generated mock-up all fail the provenance lint, and they may contain real contact data.

## Storage policy

| Image type | Where to store |
|------------|----------------|
| New screenshots (new pages, new sections, replaced shots) | `static/img/{feature}/` in this repo |
| Existing GitHub CDN images on pages you don't otherwise touch | Leave them as they are |
| Existing GitHub CDN image whose screenshot you are replacing | New local shot in `static/img/{feature}/` |

**Never add new GitHub CDN image URLs to a page.**

## Directory mapping

One directory per feature area under `static/img/`:

| Feature | Directory |
|---------|-----------|
| Chats | `static/img/chats/` |
| Speed Sends | `static/img/speed-sends/` |
| Flows | `static/img/flows/` |
| Triggers | `static/img/triggers/` |
| Searches | `static/img/searches/` |
| HSM Templates | `static/img/hsm-templates/` |
| Interactive Messages | `static/img/interactive-messages/` |
| Notifications | `static/img/notifications/` |
| Reporting & Dashboard / Analytics | `static/img/analytics/` |
| Collections | `static/img/collections/` |
| Contact Management | `static/img/contact-management/` |
| Staff Management | `static/img/staff-management/` |
| Settings | `static/img/settings/` |
| Integrations (OpenAI) | `static/img/integrations/openai/` |
| Integrations (Sheets) | `static/img/integrations/sheets/` |
| WhatsApp Groups | `static/img/wa-groups/` |

If a feature has no directory yet, `glific-browser shot` creates it. Use a lowercase, hyphenated name. Check `ls static/img/` first so you don't create a near-duplicate.

## File naming

Format: `{feature}_{description}.png`. Use lowercase and underscores, with no spaces.

Examples:
- `flows_list.png`: the list of flows
- `flows_create_dialog.png`: the create-flow dialog
- `hsm-templates_new_template_form.png`: the new template form
- `chats_session_timer.png`: the session timer in the chat window

When you replace a screenshot, **keep its filename** so existing links keep working.

## Markdown syntax

Docusaurus serves `static/` at the site root. Always use the `/img/` prefix, never `static/img/`:

```markdown
![Flows list](/img/flows/flows_list.png)
```

Don't use:
- `import Image from ...` with JSX
- Absolute GitHub CDN URLs for new images
- Relative paths such as `../../static/img/...`

The alt text should say what the image shows ("Template list with the Status filter open"), not the filename.

## Framing

- **Crop to the relevant element** with `--target` (a dialog, form, list or card). Use a full-viewport shot only when the layout itself matters, such as navigation tabs or where something sits on the screen.
- Show the state the step describes: the dropdown open, the tab selected, the form empty.
- Prefer views with little personal data, such as lists, empty states and forms, over chat threads and contact profiles.

## Screenshot placement

Put the screenshot **after** the step it shows, never before. Use one screenshot per major step or UI state.

## Missing screenshots

If you can't capture a state on production (the simulator, success states after saving, flow editor states that need an edit; see `safety.md`), or the feature isn't live yet:

```markdown
:::info Screenshot coming soon
:::
```

Never use HTML comment placeholders (`<!-- SCREENSHOT: ... -->`).

## Image dimensions

The session captures at a **1440×900 viewport** (set in `scripts/cli.config.json`). Don't resize or compress images. Docusaurus serves them at natural size and the browser scales them.
