<h3>
 <table>
  <tr>
    <td><b>7 minutes read</b></td>
    <td style={{paddingLeft: '40px'}}><b>Level: Beginner</b></td>
    <td style={{paddingLeft: '40px'}}><b>Last Updated: April 2026</b></td>
  </tr>
</table>
</h3>



The documentation lists the steps to be followed to set up a template dashboard to get insights from the WhatsApp Groups Automation within Glific. 

This can help the org get an overview of the engagement (total groups, total contacts, sending and receiving messages, weekly patterns and errors) from the groups linked to your Glific. For program specific outputs/outcomes tracking, please talk to the glific team or explore the BigQuery tables yourself. 

### Pre-requisites

1. Maytapi set up is completed 
2. WhatsApp Groups are created and the maytapi linked number is added to the groups
3. Google cloud storage and BigQuery set up is completed 

### Before setting up the dashboard 

1. Know your dataset and project id, this is important to replace in the template SQL query. 

   a) **Find your Project ID** — In the [Google Cloud Console](https://console.cloud.google.com/), look at the top navigation bar. Click the project dropdown next to the Google Cloud logo — **your Project ID** is listed below the project name in the dropdown (e.g., _my-project-123456_).

   b) **Find your Dataset Name** — In the left sidebar, navigate to **BigQuery** (or go to console.cloud.google.com/bigquery). In the **Explorer** panel on the left, expand your project name — the folders listed beneath it are your **Dataset names**. This should be the number linked to your Glific account. 


<img width="211" height="472" alt="image" src="https://github.com/user-attachments/assets/9a9666bc-de49-4481-9644-0e22a3ba8a78" />

2. Set up the `group_polls` tables

   a) **Copy the following query and run it in your BigQuery**

```sql
-- 1) Dedup poll messages
WITH dedup AS (
 SELECT
   sent_at,
   id,
   wa_group_name,
   wa_group_id,          -- from wa_messages
   body,
   poll_content,
   inserted_at,
   ROW_NUMBER() OVER (
     PARTITION BY wa_group_name, body
     ORDER BY inserted_at DESC
   ) AS rn
 FROM `tides-saas-309509.918657048982.wa_messages`
 WHERE type = 'poll'
),

-- 2) One row per group id
group_versions AS (
 SELECT
   g.id AS wa_group_id,
   g.label AS group_label,
   g.updated_at,
   ROW_NUMBER() OVER (
     PARTITION BY g.id
     ORDER BY g.updated_at DESC   -- latest record for this group id
   ) AS rn
 FROM `tides-saas-309509.918657048982.wa_groups` AS g
),

group_latest AS (
 SELECT
   wa_group_id,
   group_label
   FROM group_versions
 WHERE rn = 1
)

-- 3) Final result: polls + group
SELECT
 (sent_at) AS sent_date,
 d.wa_group_id,
 COALESCE(gl.group_label, d.wa_group_name) AS group_name,
 id as message_id,
 d.body AS poll_body,
 JSON_VALUE(option_json, '$.name') AS poll_answer,
 CAST(JSON_VALUE(option_json, '$.votes') AS INT64) AS votes
FROM dedup d
LEFT JOIN group_latest gl
 ON d.wa_group_id = gl.wa_group_id
CROSS JOIN UNNEST(JSON_EXTRACT_ARRAY(d.poll_content, '$.options')) AS option_json
WHERE d.rn = 1;
```
  
   b) **Find & Replace the Project ID** — In your SQL editor, find _tides-saas-309509_ and replace it with your own Project ID (e.g., if your project is _my-project-123456_, it becomes _my-project-123456.918657048982_).
   
   c) **Find & Replace the Dataset Name** — Next, find _918657048982_ and replace it with your own Dataset name (e.g., if your dataset is _my_dataset_, the full reference becomes _my-project-123456.my_dataset_).



The query references two tables — make sure both are updated:

- `tides-saas-309509.918657048982.wa_messages`
- `tides-saas-309509.918657048982.wa_groups`

After replacing, they should look like:

- `your-project-id.your_dataset.wa_messages`
- `your-project-id.your_dataset.wa_groups`

    d) Save the query as a “View”, save it in under the same dataset and name the view as `group_poll


<img width="653" height="620" alt="image" src="https://github.com/user-attachments/assets/c3cd1736-9c1a-49be-bf32-fa86acc6dca6" />


### Replicating the template dashboard

1. This is a template dashboard link : https://lookerstudio.google.com/reporting/94f2d8a2-4d6c-4a03-8ee8-cde48a21ca3e/page/yrYoF/preview 

2. This should open a page like below. 

<img width="585" height="308" alt="image" src="https://github.com/user-attachments/assets/1e0e7ac9-916e-4d95-abb2-fa1fd7a8aff6" />


3. Click on `Use my own data` on the top right corner, and click on replace data.

<img width="589" height="320" alt="image" src="https://github.com/user-attachments/assets/f0120af9-175e-49c2-aae1-26109b031ab9" />


4. Replace the tables from your bigquery project and dataset name. Make sure to select the exact table name as is being replaced, and click on “Add”

<img width="597" height="267" alt="image" src="https://github.com/user-attachments/assets/7b46604b-20c3-429a-a96f-693a65d3aeb3" />


5. Repeat this step for all the 4 tables mentioned:

- contact_wa_groups
- wa_messages
- group_polls
- wa_reactions

6. Once completed, click on `edit and share`

<img width="596" height="126" alt="image" src="https://github.com/user-attachments/assets/fbc65cdb-bf93-4a62-9393-3a73642864a4" />

7. Once the copy is created, click on “Edit” and rename the dashboard, and check to make sure that all the charts and tables are getting populated.

8. Provide the access to your team members as needed.


### Understanding the template dashboard 

1. Section 1: Group Level Metrics: Shows the total groups, total distinct contacts and contacts per group.

2. Section 2: Engagement metrics by time: Provides a way to filter down to selected groups, and a time range. And shows the following engagement metrics 

   a. Incoming messages—indicator of engagement by the group members:
        - Total incoming messages
        - Total incoming media 
        - Total incoming texts 
        - Total incoming reactions 

   b. Outgoing messages—indicator of activity by the organization
         - Total outgoing messages 
         - Total outgoing media
         - Total going texts 

    c. Contacts 
           - Total contacts messaging 
           - Total contacts sending media 
           - Total contacts sending texts 
           - Total contacts sending reactions
           
3. Section 3: Polls Engagement: Shows the total outgoing polls, total votes and a table showing breakdown of the polls, options and votes.

4. Section 4: Week on week activity: shows weekly active contacts and number of incoming messages.

5. Section 5: Activity patterns: Shows active time of day and day of week based on incoming messages.

6. Section 6: Errors: shows the count of errors that are being recorded in sending messages.


All of the above sections can be modified as per your discretion once the template has been replicated. 




