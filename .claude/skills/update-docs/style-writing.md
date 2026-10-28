# Style: Writing

Before you write a new page, read at least two existing pages in the same section and match their tone and density.

## Audience

Primary: **NGO program managers and field workers** who use Glific every day. They are not technical. They need to know *what* to do, not *why* the code works.

Secondary: **Implementation partners** who set up Glific for NGOs. They are more technical, but still prefer clear step-by-step instructions.

**Plain language rules:**
- High-school reading level.
- One idea per sentence.
- Explain what things do, not how they work internally.
- If you can't avoid a Glific term such as "flow", "template" or "collection", explain it the first time you use it, or link to its page.
- Use neutral, direct language that explains the feature and what it does. Use active voice and the present tense.

## Voice

Keep one consistent, neutral voice across the whole page, and across the docs. Don't switch between "I", "we", "they" and "you".

- **Describe features in the third person**: "The **Messages Exchanged** card shows the total number of messages", not "This card shows you how many messages you sent".
- **Write steps in the imperative**: "Select **Apply**", not "You need to click Apply".
- **Name the subject instead of using a pronoun**: "contacts", "the organization", "staff", not "you", "your users", "they" or "we".
- **No first person**, including in notes and feedback lines: "To share feedback, write to info@glific.org", not "We are working on this page, please reach out".
- **No questions in the reader's voice**: "This tab shows whether messages are getting delivered", not "This tab answers 'are my messages getting delivered?'".
- When you edit part of a page, fix any voice switches in the rest of it too, so the page reads consistently.

| Don't | Do instead |
|---|---|
| "Click the button" | "Select **Create Flow**" |
| "The user should navigate to" | "Open **Flows** from the left menu" |
| "It is possible to" / "You can" | Say what the feature does: "The slider zooms into the timeline" |
| "In order to" | "To" |
| Passive voice | Active voice, neutral third person for descriptions, imperative for steps, present tense |
| "Please note that" | Just say it |
| "I", "we", "our", "you", "your", "they" | The feature, UI element or person by name: "the dashboard", "contacts", "the organization" |

## UI labels

- Copy every label **exactly as the live app shows it**, including capitals and "+" prefixes. Check it with `snapshot`/`find` in the session. Don't trust old docs or memory.
- Write menu paths with `>`: **Settings** > **Organization**.
- If the UI renamed something, use the new name everywhere on the page. Mention the old name once only if users will still look for it ("**Dashboards** (previously **Reports**)").

## Page header

Every page starts with a read-time, level and last-updated header. Copy this block exactly, because most pages use it:

```mdx
<h3>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: October 2026</b></td>
  </tr>
</table>
</h3>
```

- **Read time**: count words ÷ 200, plus 10 seconds per image, and round to the nearest minute (minimum 1). Write "1 minute read" or "N minutes read".
- **Level**:
  - `Beginner`: anyone can follow it with no prior Glific knowledge
  - `Intermediate`: assumes the reader knows the basic Glific features
  - `Advanced`: needs an understanding of flows, APIs or technical setup
- **Last Updated**: the month and year of your change. Update it whenever you change a page's content.
- Old pages may use other header variants (`###**N minute read …`, `paddingLeft: 40`, `<h4>`). When you refresh such a page, replace its header with the block above.

## Instructions format

Use numbered steps for actions done in order. One action per step.

**Rules:**
1. **Bold every UI element** the user interacts with: button labels, menu items, tab names and field labels.
2. Place a screenshot *after* the step it shows, not before.
3. Keep steps small: one click or one field per step.
4. Use "Select", not "Click", so the wording also works on touchscreens.
5. Use quotes for exact text the user types, and bold for UI labels they select.

**Example:**
```markdown
1. Open **Flows** from the left menu.

![Flows list](/img/flows/flows_list.png)

2. Select **+ Create Flow**.
3. Enter a name for the flow and select **Save**.
```

## Section intro pattern

After the header, start with a **bold one-liner** that says exactly what the feature does:

```markdown
**Flows are automated conversation sequences that run without staff involvement.**
```

Then add 1–2 sentences of context if needed. Then go straight into the steps or sub-sections.

## Examples and sample data

- Example values in text and screenshots must be made up: "Sample Flow", "+91 XXXXX XXXXX", "user@example.org".
- Never copy real contact names, phone numbers, message text or org names from the live app into a page.

## Anti-patterns

| Don't | Why |
|---|---|
| GitHub CDN image URLs in new or rewritten content | The images can break. Use `static/img/` instead |
| `<img>` tags pointing to GitHub asset URLs | Use standard markdown `![alt](/img/...)` |
| Long intros before the first action | Use header → bold one-liner → steps |
| Repeating WhatsApp or Meta documentation | Link to the official docs instead |
| Explaining GraphQL, Apollo or internal architecture | The audience doesn't need it |
| `Note:` in plain text | Use the `:::note` admonition |
| Documenting UI you couldn't see in the live app | It may be wrong. Ask the user, or mark the screenshot as coming soon |
