<h3>
 <table>
  <tr>
    <td><b> 5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Intermediate </b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: January 2026</b></td>
  </tr>
</table>
</h3>

## Sync BigQuery and Google Sheets

Writing data from a WhatsApp chatbot directly to Google Sheets is useful as it allows access to real-time data in a familiar interface. 
However, at scale, this approach has some limitations:

**Challenges of Writing Directly to Google Sheets**

- Extra API Calls: Data is sent to both Google Sheets and BigQuery, which can increase latency and costs.

- Potential Failures: Writing to Sheets may fail due to timeouts or errors.

- Data Completeness Issues: Only messages up to the point where the “Write to Sheets” node is called are captured. If a user does not complete the flow, data from unfinished nodes will not be recorded in Sheets.

**Recommended Approach**

- For reliable and complete data collection, it is recommended to fetch data from BigQuery and write it to Google Sheets, rather than sending data directly from the chatbot.

- Before proceeding:

     - This method ensures reliable data retrieval and reduces failures, unless the BigQuery instance experiences issues.

     - Access to BigQuery is required for setting up this approach, but end users of the Google Sheet do not need BigQuery access.

**Next Steps**

- The following section explains how to fetch data from BigQuery and write it to Google Sheets efficiently.

Step 1: Open Data Connectors

- From the Menu, scroll to the bottom and locate Data Connectors.

- Hover over it and select Connect to BigQuery.

<img width="293" height="301" alt="image" src="https://github.com/user-attachments/assets/f51dcbfb-8113-423f-8605-def850e78860" />

Step 2: Establish a Connection

- In the popup that appears, click Get Connected to link your account.

Step 3: Connect a Project

- On the next screen, click Add a Data Connection.

- Select the project that contains the data you want to connect to this sheet.
(Screenshot not included to protect privacy.)

<img width="283" height="241" alt="image" src="https://github.com/user-attachments/assets/ce612243-0515-4434-ab24-4b1c0f4cc2ac" />

Step 4: Connect a Dataset

- On the next screen, select the dataset from which you want to retrieve data.

Step 5: Connect a Table

- On the next screen, all tables (including views) in the selected dataset will be displayed.

- Choose the table you want to connect and click Connect.

- A success message will confirm that the connection has been established.

<img width="244" height="213" alt="image" src="https://github.com/user-attachments/assets/fca0785e-3d24-477a-af78-6e6d2ca441e7" />

Step 6: Edit Your Query

- In the menu, click Connection Settings (usually located on the right side) to open and edit your query.

<img width="448" height="105" alt="image" src="https://github.com/user-attachments/assets/c762a162-b26b-497e-97c0-be0124ac18ab" />

Step 7: Use the Query Editor

- The Query Editor allows you to write SQL queries to fetch the data you need from BigQuery.

- Once set up, data from even incomplete flows can be pulled and structured directly into Google Sheets, providing a familiar environment without the risk of data loss.
<img width="287" height="222" alt="image" src="https://github.com/user-attachments/assets/114f284b-f9be-45d1-a360-038e797c6b36" />
