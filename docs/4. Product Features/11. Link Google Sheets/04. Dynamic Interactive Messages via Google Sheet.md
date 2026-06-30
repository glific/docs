<h3>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: June 2026</b></td>
  </tr>
</table>
</h3>


## Use Google Sheets with Interactive Messages

Google Sheets can be used to create **dynamic interactive messages** in Glific. Instead of creating multiple interactive messages with different options, you can store the options in a Google Sheet and have Glific fetch them at runtime.

This is useful when:

* The list of options changes frequently.
* Different beneficiaries should receive different options.
* Another team manages the content in the Google Sheet.
* You want to reuse a single interactive message template.

## Step 1: Prepare the Google Sheet

Create a Google Sheet containing the options you want to display in the interactive message.

* The **Key** column identifies the row to retrieve.
* Each subsequent column contains one option.

For example:

| Key | course1 | course2 | course3 | course4 |
| --- | ------- | ------- | ------- | ------- |
| 1   | English | Hindi   | Tamil   | Kannada |

> **Note**
>
> You can update the values in the row at any time, and the interactive message will automatically display the latest options. You can also add additional rows to create different sets of options.

<img width="723" height="415" alt="image" src="https://github.com/user-attachments/assets/cb8468e1-74b3-4125-a123-2d658bac2566" />


## Step 2: Link the Google Sheet in Glific

Add the Google Sheet to Glific by following the steps in the **Read Mode** section of this guide.

<img width="784" height="429" alt="image" src="https://github.com/user-attachments/assets/64f9bb43-a816-4a1b-9885-ae07a12bccf6" />

## Step 3: Create an Interactive Message

Create an **Interactive List Message** (the same approach works for button messages).

When creating the interactive message:

* Enter sample text for the **first option**.
* Leave the remaining options empty.

This allows the interactive message to be created and saved. During flow execution, Glific replaces these placeholder values with the options retrieved from the Google Sheet.

<img width="694" height="728" alt="image" src="https://github.com/user-attachments/assets/c30d1b75-2e94-4f48-9596-69441cc474df" />


## Step 4: Configure the Flow

Create a flow with the following nodes:

1. **Link Google Sheet**
2. **Send Contact an Interactive Message**

*Insert screenshot of the complete flow.*

### Configure the Link Google Sheet Node

Configure the node as follows:

* Select the linked Google Sheet.
* Choose **Read**.
* Select the appropriate worksheet.
* Enter the value used to search the **Key** column.
* Store the output in a variable (for example, `sheet`).

Example:

* **Key value:** `1`
* **Result variable:** `sheet`

This retrieves the row where the **Key** value is `1`.

Instead of a fixed value, you can also use dynamic variables such as:

```text
@calendar.current_date
@contact.fields.course_id
@results.some_variable
```

<img width="688" height="618" alt="image" src="https://github.com/user-attachments/assets/5ca08cf2-bb40-453a-bc52-6498e00b8597" />


## Step 5: Configure the Interactive Message Node

In the **Send Contact an Interactive Message** node:

1. Select the interactive message created earlier.
2. Enable **Dynamic Fields**.
3. Enter the number of variables required.

For example, if your Google Sheet contains **8 options**, enter:

```text
8
```

For each variable:

* **ID:** Any unique identifier.
* **Value:** The corresponding value retrieved from the Google Sheet.

Example:

| ID      | Variable                 |
| ------- | ------------------------ |
| option1 | `@results.sheet.course1` |
| option2 | `@results.sheet.course2` |
| option3 | `@results.sheet.course3` |
| option4 | `@results.sheet.course4` |

Continue the same pattern for all remaining options.

<img width="668" height="706" alt="image" src="https://github.com/user-attachments/assets/26bff284-39c8-4399-95bb-21b42959badc" />


## Step 6: Test the Flow

Run the flow and preview the interactive message.

Glific reads the selected row from the Google Sheet and replaces the placeholder options with the values stored in the sheet.

<img width="329" height="584" alt="image" src="https://github.com/user-attachments/assets/eda34e7d-a04c-488b-aaa9-7173b77dc990" />


## Benefits

Using Google Sheets with interactive messages allows you to:

* Maintain a single interactive message template.
* Update options without editing the flow.
* Allow non-technical teams to manage message content.
* Display different options based on dynamic values.
* Avoid creating multiple interactive messages for similar use cases.

### Handling More Than 10 Options

WhatsApp List Messages support a maximum of **10 options**.

If you need to display more than 10 options:

1. Use **"More"** as the tenth option.
2. Store the next set of options in another row of the Google Sheet.
3. When the user selects **More**, read the next row and display another interactive message with the remaining options.

This approach enables you to present an unlimited number of options while staying within WhatsApp's limits.
