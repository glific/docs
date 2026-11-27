# Workflow: write a new page

Example: `/update-docs write a new doc page for HSM v2 page`

## 1. Make sure the feature exists and isn't documented yet

- Find it in the live app: the sidebar `snapshot`, then `goto` its route. If you can't find it, ask the user for the menu path or route. The feature may be behind a flag that this org doesn't have.
- Search for existing coverage: `grep -ril "<feature>\|<synonym>" docs`. If a page already covers it, propose a **refresh** instead, or a new page that the old one links to.

## 2. Understand the feature

- In the live app, walk through every tab, list, filter, empty state and **Create/Add** form. Open forms only to look at them. Never submit.
- Read the frontend code for labels, help text and validation rules: `../glific-frontend/src/containers/<Feature>/`, or the same files via `gh api` (see `browsing.md`).
- Note what you **can't** capture safely (see `safety.md`, "Things you can't capture on production").

## 3. Placement plan → confirm

Use [sections.md](sections.md) to pick the section. For `4. Product Features/`, check the existing numbered prefixes with `ls` and choose the next number, or use a sub-folder with a `_category_.json` if it has several pages.

```
Placement plan:
- Doc: docs/<section>/<NN. Title>.md   (new)
- Images: static/img/<feature>/  — <list of planned shots>
- Linked from: <existing pages that should link here>
- Can't capture: <...>
```

Wait for confirmation.

## 4. Write

- Start with the page header block from [style-writing.md](style-writing.md#page-header) (read time, Level, Last Updated). Set Last Updated to the current month and year, then work out the read time once the page is written.
- Use the template for the section from [style-page.md](style-page.md): a bold one-sentence summary, task-focused H2s (“Creating a template”, “Checking template status”), numbered steps, and a screenshot after each major step.
- Take each screenshot with `glific-browser shot` as you write the step it shows. Read each PNG.
- Use `:::info Screenshot coming soon` only for states you can't capture on production. Never invent UI you didn't see.
- Add cross-links both ways: from this page to related pages, and from the closest existing pages to this one.

## 5. Validate

Run `glific-browser lint`. Run `yarn build` if `node_modules/` exists. Then write the summary (SKILL.md Step 4).
