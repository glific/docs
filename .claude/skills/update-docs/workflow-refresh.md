# Workflow: refresh an existing page

Example: `/update-docs refresh the analytics page with new navigation tabs`

Goal: make an existing page match today's live UI. Keep its structure, voice and URL unless the user asks for more.

## 1. Find the page(s)

```bash
grep -ril "<feature>" docs --include=*.md | head -20
ls "docs/4. Product Features/"
```

Pick the page or pages the request means. If there are several candidates, list them and ask. Read each page in full, and note every image it references and the header block (read time, level, **Last Updated**).

## 2. Find what changed

- Use the user's hint (e.g. "new navigation tabs").
- **If the input is a PR** (`#1234`, `glific-frontend#1234`, or a PR URL): `gh pr view <n> --repo glific/glific-frontend` and `gh pr diff <n> --repo glific/glific-frontend`. Map the changed `src/containers/<Feature>/` paths to features, and through [sections.md](sections.md) to pages. One PR can affect several pages. List them in the plan. Only document what is live on production: if the change isn't visible in the live app yet, tell the user and stop.
- Optionally, check recent frontend PRs for the feature: `gh pr list --repo glific/glific-frontend --state merged --search "<feature>" --limit 10`, then `gh pr view <n> --repo glific/glific-frontend`.
- Open the route in the live app (see `browsing.md`). Use `snapshot` to list every tab, section, button label and empty state.

## 3. Diff page vs live UI

Make a table and show it to the user as part of the plan:

| Doc says / shows | Live UI | Action |
|---|---|---|
| "Click **Reports**" | Tab is now **Dashboards** | update text |
| `analytics_home.png` (old layout) | new tab bar | retake |
| — | new **Exports** tab | add section |
| "Filters panel on the right" | no longer exists | remove |

Confirm the plan (SKILL.md Step 2).

## 4. Update

- Edit only what the diff calls for. Keep headings, anchors and filenames stable, because other pages link to them. Check with `grep -rn "<page-filename-or-anchor>" docs`.
- Retake changed screenshots **with the same filenames**. Add new ones for new sections. Follow the naming in [style-images.md](style-images.md).
- If a page still uses old GitHub CDN images (`user-images.githubusercontent.com`) and you are replacing that screenshot, move it to `static/img/<feature>/` with a new local shot. Leave CDN images you don't touch as they are.
- Use UI labels exactly as they appear: bold for buttons and tabs, and `>` for paths (**Settings** > **Organization**).
- Set **Last Updated** in the header to the current month and year (e.g. `October 2026`). Recalculate the read time. If the page uses a legacy header variant, replace it with the standard block from [style-writing.md](style-writing.md#page-header).
- Follow [style-writing.md](style-writing.md): plain language for NGO staff, imperative steps, and a screenshot after the step it shows. Keep the page's template from [style-page.md](style-page.md).

## 5. Validate

Run `gdocs lint`, Read every new PNG, and write the summary (SKILL.md Step 4).
