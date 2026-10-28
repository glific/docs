# Style: Page Structure

Each section uses its own template. Pick the template that matches the section. `{HEADER}` means the header block from `style-writing.md` (read time, level, Last Updated).

---

## Template 1: Product Feature page (`4. Product Features/`)

```markdown
{HEADER}

**{One-sentence summary of what this feature does.}**

{1–2 sentences of context: when you'd use it and how it fits into Glific.}

## {First capability or action}

{Step-by-step instructions or explanation.}

![{alt text}](/img/{feature}/{filename}.png)

## {Second capability or action}

{Continue as needed.}

---

Related features:
- [{Related feature}]({../path/page.md})
```

**Rules:**
- H2 headings name a task: "Creating a Flow", "Editing a Template", "Viewing Reports".
- One screenshot per major action, placed after the step it shows.
- End with links to related Product Feature pages.
- If the feature has tabs in the UI, use one H2 per tab, in the same order as the UI.

---

## Template 2: Integration page (`5. Integrations/`)

```markdown
{HEADER}

**{What this integration does and why you'd use it.}**

## Prerequisites

- {What the user needs before starting: API keys, accounts, etc.}

## Setup

1. ...
2. ...

## Using {Integration Name} in Glific

{How to use the integration once it's set up.}

:::note
{Any important limitations or caveats.}
:::
```

---

## Template 3: FAQ page (`8. FAQ/`)

```markdown
{HEADER}

**{Restate the question as a one-sentence answer.}**

## Steps

1. ...
2. ...

{Screenshot if helpful.}
```

FAQ pages are short. If the answer needs more than 5 steps or 2 screenshots, it belongs in Product Features instead.

---

## Template 4: Use Case page (`7. Use Cases/`)

```markdown
{HEADER}

**{The problem this use case solves, in one sentence.}**

## The situation

{1–2 sentences describing the real-world scenario.}

## Solution

{Walk through the solution. Link to existing Product Feature pages instead of explaining again how each feature works.}

## Steps

1. ...
2. ...
```

---

## Template 5: Pre Onboarding guide (`2. Pre Onboarding/`)

```markdown
{HEADER}

**{What this guide helps the user do.}**

## Prerequisites

- {External account or information needed before starting.}

## Steps

1. ...

:::note
{Common issues or things to watch out for.}
:::
```

---

## Sibling consistency

Pages in the same folder (for example every `2. Flow Actions/` page) should share the same H2 pattern. Before you write or refresh one of them, read two siblings and copy their headings. Typical headings are "What is it used for", "How to use it" and "Example". `workflow-review.md` audits this across a whole set of pages.

## Tabs inside a page

Use Docusaurus tabs only when the reader picks **one** of several paths, for example a BSP, a platform or a setup method. Don't use them to split up content everyone should read. For the syntax, see `workflow-restructure.md`.
