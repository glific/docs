---
name: documentation
description: Generate, update, or review Glific user-facing documentation. Use when a developer asks to document a feature, write a doc page, update existing docs, or after a PR ships to refresh affected docs.
---

# Documentation Skill

Reference and workflow for generating Glific's user-facing Docusaurus documentation. This repo is `glific/docs`.

## When to use

Trigger when the user asks to:
- Generate or update a doc page for a feature ("write docs for Flows", "document HSM Templates")
- Refresh docs after a PR ships ("update docs for #142 in glific-frontend")
- Review existing docs for completeness or accuracy

Start by reading `workflow.md`.

## IA Principles

The docs have 8 top-level sections. Each has a different audience and purpose — read `sections.md` before placing any content.

### Primary audience

NGO program managers and field workers. They are **not technical users**. They need:
- Plain language explanations
- Step-by-step instructions with screenshots
- To know what something does and how to use it — not how it works internally

### Frontend code location

The Glific frontend lives at `../glific-frontend/` relative to this repo.

| Path | What it contains |
|------|-----------------|
| `../glific-frontend/src/containers/` | Feature-level UI components (one dir per feature) |
| `../glific-frontend/src/routes/AuthenticatedRoute/AuthenticatedRoute.tsx` | All route paths (maps feature name → URL) |
| `../glific-frontend/src/graphql/queries/` | GraphQL queries (understand data a feature displays) |

### Backend code location

The Glific backend (Elixir/Phoenix, repo `glific/glific`) lives at `../glific/` relative to this repo. Read it only to confirm **user-observable behavior** the frontend doesn't make obvious — defaults, validation rules, limits, what a setting actually does, why an action is blocked. Do **not** document internal architecture (see the anti-patterns in `style-writing.md`).

| Path | What it contains |
|------|-----------------|
| `../glific/lib/glific/{feature}/` | Domain logic for a feature — defaults, validations, business rules |
| `../glific/lib/glific/{feature}.ex` | The feature's public context module (entry-point functions) |
| `../glific/lib/glific_web/resolvers/{feature}.ex` | GraphQL resolvers — what each query/mutation actually does |
| `../glific/lib/glific_web/schema/{feature}_types.ex` | GraphQL types, fields, and args exposed for the feature |

## File index

| File | Purpose |
|------|---------|
| `workflow.md` | Step-by-step process from research to published markdown |
| `sections.md` | All 8 doc sections: audience, purpose, what belongs where |
| `style-writing.md` | Audience, voice, instructions format, anti-patterns |
| `style-page.md` | Page structure templates for each section type |
| `style-images.md` | Image naming, directory mapping, static/img/ conventions |
| `screenshots.md` | Playwright recipe system for automated screenshots |
