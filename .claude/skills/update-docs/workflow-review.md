# Workflow: review a set of pages for consistency

Example: `/update-docs review document structure for all webhooks and ensure consistency of writing`

Goal: make a group of related pages read as one set, with the same structure, terms, header and depth, and make sure they are still accurate.

## 1. Collect the set

```bash
grep -ril "webhook" docs --include=*.md
```

List the pages. Group them as **core** (about the topic) or **mentions** (only refer to it), and confirm the scope with the user if there are more than 10 pages. Read every core page in full.

## 2. Audit

Build a matrix of the core pages and report it:

| Page | Header block | Last Updated | Summary line | H2 pattern | Steps style | Terms used | Images (local/CDN/missing) | Broken links | Issues |
|---|---|---|---|---|---|---|---|---|---|

Check:
- **Structure**: the right section template (`style-page.md`), the same H2 pattern across sibling pages, and an intro → steps → related-links order.
- **Terminology**: one name per concept, matching the live UI label (e.g. "Call a webhook" vs "Webhook node" vs "API call"). Pick the term the UI uses.
- **Voice**: `style-writing.md` (second person, imperative, plain language, no internal or technical jargon for Product Features pages).
- **Accuracy**: spot-check the claims that most affect users against the live app (labels, menu paths, field names). Opening the flow editor isn't possible (see `safety.md`), so for flow node pages check the node lists and labels from the frontend/floweditor code instead.
- **Duplication**: the same how-to explained on several pages. Suggest one canonical page with links to it.
- **Links and images**: relative links that resolve, `/img/` paths that exist, and alt text present.

## 3. Propose → confirm

Present a prioritised list of edits: a style guide decision (e.g. the canonical term and the H2 pattern), then a per-page change list. Ask which ones to apply.

## 4. Apply

Make the agreed edits page by page. Keep filenames and anchors unless the user approved renames. If you renamed any, update inbound links with `grep -rn`. Retake screenshots only where they are wrong, and only with `gdocs shot`. Update Last Updated on pages whose content changed.

## 5. Validate

Run `gdocs lint`, then write a summary that includes the audit matrix before and after.
