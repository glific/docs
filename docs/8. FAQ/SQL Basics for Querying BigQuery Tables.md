<h3>
 <table>
  <tr>
    <td><b>8 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h3>

# SQL Basics for Querying BigQuery Tables

This guide covers the basic SQL you need to pull your own answers out of Glific's BigQuery tables, without waiting on someone else to write the query for you.

It assumes you already have BigQuery set up and linked to Glific - if not, start with [BigQuery Setup and link with Glific](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific/). For a full list of tables and what each column means, see the [Glific BigQuery Tables Guide](https://glific.github.io/docs/docs/FAQ/Glific%20BigQuery%20Tables%20Guide/) - the examples below use tables and columns from that guide.

---

## Naming your table

Every table in BigQuery is referred to with three parts, separated by dots: your Google Cloud project name, your dataset (this is your chatbot's phone number), and the table name. It's written like this, wrapped in backticks:

```sql
`project-name.bot-number.table-name`
```

Replace `project-name` with your Google Cloud project name, and `bot-number` with your chatbot's phone number (with country code, no + or spaces). You'll use this full name every time you refer to a table.

## The basic shape of a query

Every query starts with the same three parts: which columns you want, which table to pull them from, and (optionally) which rows to keep.

```sql
SELECT name, phone, language
FROM `project-name.bot-number.contacts`
WHERE status = "valid"
```

- `SELECT` lists the columns you want back. Use `SELECT *` to get every column, but naming only the ones you need makes results easier to read.
- `FROM` says which table to read.
- `WHERE` filters which rows to keep. It's optional - without it, you get every row in the table.

Run this in the BigQuery query editor (see [BigQuery Setup and link with Glific](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific/) for how to open it) and you'll get a table of results back.

## Filtering rows with WHERE

`WHERE` accepts comparisons, and you can combine several with `AND` / `OR`.

| Comparison | Meaning | Example |
|---|---|---|
| `=` | equals | `status = "valid"` |
| `!=` | not equal to | `status != "blocked"` |
| `>`, `<`, `>=`, `<=` | greater/less than | `sent_at > "2026-01-01"` |
| `LIKE` | partial text match (`%` matches anything) | `name LIKE "%Kumar%"` |
| `IN` | matches any value in a list | `language IN ("English", "Hindi")` |
| `IS NULL` / `IS NOT NULL` | whether a column has a value | `optout_time IS NULL` |

Text values go in double quotes; numbers and dates don't need quotes around the value type itself, but date literals are still written as quoted text, e.g. `"2026-01-01"`.

Example: find every contact in Hindi who hasn't opted out.

```sql
SELECT name, phone
FROM `project-name.bot-number.contacts`
WHERE language = "Hindi"
  AND optout_time IS NULL
```

## Sorting and limiting results

`ORDER BY` sorts your results; add `DESC` to reverse the order (newest/largest first). `LIMIT` caps how many rows come back - useful while you're still testing a query, so you're not scanning (and paying for) more data than you need.

```sql
SELECT name, phone, last_message_at
FROM `project-name.bot-number.contacts`
WHERE status = "valid"
ORDER BY last_message_at DESC
LIMIT 20
```

This returns the 20 contacts who messaged most recently.

## Counting and grouping

`COUNT`, `SUM`, and `AVG` summarize many rows into one number. Pair them with `GROUP BY` to get one summary per distinct value of a column.

```sql
SELECT language, COUNT(*) AS number_of_contacts
FROM `project-name.bot-number.contacts`
WHERE status = "valid"
GROUP BY language
ORDER BY number_of_contacts DESC
```

This counts how many valid contacts you have per language. Every column in `SELECT` that isn't inside `COUNT()`/`SUM()`/`AVG()` must also appear in `GROUP BY` - otherwise BigQuery doesn't know how to group the rows.

## Combining tables with JOIN

Some questions need information spread across two tables. For example, "which contacts are in my *Active Learners* collection?" needs the `contacts` table (contact details) and `contacts_groups` table (which contacts are in which collection).

```sql
SELECT c.name, c.phone
FROM `project-name.bot-number.contacts` AS c
JOIN `project-name.bot-number.contacts_groups` AS g
  ON c.id = g.contact_id
WHERE g.group_name = "Active Learners"
```

- `AS c` and `AS g` are short aliases so you don't have to retype the full table name on every column.
- `ON c.id = g.contact_id` tells BigQuery how the two tables relate - here, a contact's `id` matches the `contact_id` recorded in `contacts_groups`.

You can join as many tables as you need this way, one `JOIN ... ON ...` at a time.

## Common mistakes to avoid

- **Forgetting the backticks** around the full `project.dataset.table` name - without them, BigQuery reads the dots as something else and the query fails.
- **Mismatched project or dataset name** - double-check these against your own BigQuery console; every organization's project name and phone number (dataset) are different.
- **Grouping errors** - if you use `GROUP BY`, every plain column in `SELECT` must also be listed in `GROUP BY`.
- **Case sensitivity in text filters** - `WHERE language = "hindi"` won't match a value stored as `"Hindi"`. Use `LOWER(language) = "hindi"` if you're not sure of the exact casing.
- **Querying without a `LIMIT` while testing** - large tables like `messages` can return huge results. Add `LIMIT 20` while you're still refining a query, then remove it once you're ready for the full result.

## Saving your query for reuse

Once a query works, you can save it as a view so you (or your team) can reuse it without rewriting it - this is also the first step for feeding a query into a Looker Studio dashboard. Click `Save` above your query results and choose `Save View`, then give it a name. See [How To Set Up HSM Delivery Dashboard](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/How%20To%20Set%20Up%20HSM%20Delivery%20Dashboard/) for a full worked example of turning a saved view into a dashboard.

---

You can read more about related features here:
- [Glific BigQuery Tables Guide](https://glific.github.io/docs/docs/FAQ/Glific%20BigQuery%20Tables%20Guide/)
- [BigQuery Setup and link with Glific](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/BigQuery%20Setup%20and%20link%20with%20Glific/)
- [How To Set Up HSM Delivery Dashboard](https://glific.github.io/docs/docs/Product%20Features/Reporting%20&%20Dashboard/How%20To%20Set%20Up%20HSM%20Delivery%20Dashboard/)
