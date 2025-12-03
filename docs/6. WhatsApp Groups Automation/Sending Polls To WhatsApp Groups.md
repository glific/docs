
## Sending Polls to WhatsApp Group Collections. 

<h4>
 <table>
  <tr>
    <td><b>5 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Beginner</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: December 2025</b></td>
  </tr>
</table>
</h4>

Glific platform can be used to create polls. Send or scheudule the polls in advance to multiple groups. 

### Pre-requisites
1. WhatsApp Groups Integration should be enabled. [Read here](https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/Setting%20up%20WhatsApp%20Groups%20Automation%20for%20existing%20NGOs)

### Create the poll in Glific platform

1. Go to the `WhatsApp Polls` under the `WhatsApp Groups` section 

2. Click on `Create` and provide the title, the question of the poll in content and the options. Ensure you make the right choice for allowing multiple responses. 
3. Poll questions are limited to 255 characters.
4. Under Options enter up to 12 poll options. 
5. Poll options are limited to 100 characters.
6. To allow users voting for more than one option, turn on `Allow multiple answers`
  <img width="1410" alt="Screenshot 2025-02-14 at 2 51 54 PM" src="https://github.com/user-attachments/assets/0aba91ac-7871-4a30-badf-8d075aa57458" />

8. Click on `Save`. This creates the poll.
9. Copy the UUID
<img width="1404" alt="Screenshot 2025-02-14 at 2 51 07 PM" src="https://github.com/user-attachments/assets/5c3a4768-9211-46ed-8089-68f9f78485a2" />

### Create a flow to send the poll
1. Create a new flow
2. Add a `call a webhook` node. 

- By default, `FUNCTION` would be selected. Leave this as it is.

<img width="446" height="372" alt="Screenshot 2025-12-03 at 12 45 20 PM" src="https://github.com/user-attachments/assets/7e55f3ac-0bf3-4634-8084-92ac9caa2001" />

- In the `FUNCTION` field, select the pre-defined function `send_wa_group_poll` from the dropdown and give the result name.

<img width="586" height="487" alt="Screenshot 2025-12-03 at 12 46 01 PM" src="https://github.com/user-attachments/assets/ccf0745b-bdf1-4f62-8cf4-4e889c94cd98" />

<img width="632" height="529" alt="Screenshot 2025-12-03 at 12 46 54 PM" src="https://github.com/user-attachments/assets/39dd1da6-6d1d-4ab5-ab1f-eacd2e368e91" />

3. Add the parameters in the FUNCTION Body.

- Go to `FUNCTION Body` on top right corner. You would see the following.

<img width="629" height="449" alt="Screenshot 2025-12-03 at 12 48 56 PM" src="https://github.com/user-attachments/assets/cb5dd8a6-fa4c-4e11-8c5f-7952baceb021" />

- Pass the following parameters.

`{
  "wa_group": "@wa_group",
 "poll_uuid": ""
}`

<img width="703" alt="Screenshot 2025-02-14 at 2 50 43 PM" src="https://github.com/user-attachments/assets/1972b5da-1e94-489d-af94-d3d53e2b0b02" />

- `“poll_uuid”: ""` from the polls list paging by selecting on `Copy UUID`.
- `“wa_group”: “@wa_group”` will remain as is.

4. This completes the flow
<img width="850" alt="Screenshot 2025-02-14 at 4 08 36 PM" src="https://github.com/user-attachments/assets/717abce9-faf1-496e-b051-d2831fd4fa7f" />

**5. Please note: No further `send message node` is needed to send the poll to WhatsApp group. The webhook success response sends the poll with the given poll uuid to the groups.**

Here is a [SAMPLE FLOW](https://drive.google.com/file/d/13CyRD8Gmq0J1J_lICrwIq55TBbwHND90/view?usp=sharing). To use this flow, go to the link, download the csv, and upload this flow using `import a flow` in your Glific instance. Change the `poll_uuid` in the webhook function body to match the `poll_uuid` of the poll you have created in your Glific instace.

### Sending the poll to required WhatsApp Group or Collection. 

1. This can be done by setting a [trigger to a WhatsApp Group Collection](https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/WhatsApp%20Groups%20Automation%20Features#scheduling-messages-and-media) 
2. Or the particular flow can be started for the WhatsApp Group by starting a flow for the group like shown below.
<img width="1410" alt="Screenshot 2025-02-14 at 4 15 51 PM" src="https://github.com/user-attachments/assets/25c9cd63-3b5a-409d-99f7-1ee274d4a89c" />


### Polls can also be used from Google sheet, to send different polls based on the date or any other incremental counter logic. 

1. [Link a readable Google Sheet](https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/WhatsApp%20Groups%20Automation%20Features#scheduling-messages-and-media) in the Glific, which has the Key and poll uuids
  <img width="505" alt="Screenshot 2025-02-14 at 4 17 07 PM" src="https://github.com/user-attachments/assets/529ad253-ef1a-4deb-9e8c-b295792aa0fd" />

3. Use Link a google sheet node to read the poll uuid from the sheet based on your choice of variables (could be date wise etc). Please note that above is just one example of how it can be used. 
4. Call the webhook function `send_wa_group_poll` and use the sheet result to populate the `poll_uuid` in the function body of the webhook call. 
<img width="932" alt="Screenshot 2025-02-14 at 4 17 46 PM" src="https://github.com/user-attachments/assets/7c6aa69a-e6b2-4cba-a86d-58315c6bc078" />
5. This flow picture is only to illustrate how google sheet can be used to send polls. 

### Getting the data of responses

1. Responses to the polls are stored in the `wa_messages` tables
2. The `type` field stores the type of message being sent or received. Filtering for `poll` under this field gives all the poll type text messages sent from the number to the groups
3. `poll_content` field contains the json structure for the poll. This contains the entire poll body, options and the vote count.
4. At present it is possible to get only the no of responses to a particular option, and not which phone number has responded what. 
5. Following query creates a view to get the aggregated output of all the polls and its responses.  This can be further manipulated to get the responses for a particular poll across the various groups or drill down to responses from a particular group. (replace the xxxxxxxxxx with the table dataset from your chatbot. It is usually the phone number of your chatbot)

```
   WITH distinct_data AS (
    SELECT 
      id,
      wa_group_id,
      wa_group_name,
      MAX(body) AS body,
      MAX(poll_content) AS poll_content,
      MAX(inserted_at) as inserted_at
    FROM 
      `tides-saas-309509.917834811114.wa_messages`
    GROUP BY id, wa_group_id, wa_group_name
  ),
  parsed_data AS (
    SELECT
      id,
      body,
      wa_group_id,
      wa_group_name,
      JSON_EXTRACT_ARRAY(poll_content, '$.options') AS options,
      inserted_at
    FROM
      distinct_data
  )

  SELECT 
    wa_group_id,
    wa_group_name,
    body,
    JSON_EXTRACT_SCALAR(option, '$.name') AS option_name,
    SUM(CAST(JSON_EXTRACT_SCALAR(option, '$.votes') AS INT64)) AS votes,
    MAX(inserted_at) as inserted_at
  FROM 
    parsed_data,
    UNNEST(options) AS option
  GROUP BY body, option_name, wa_group_id, wa_group_name
```

**Points to note: **
1. While creating the poll, please populate the options you want to them to appear in when being read on WhatsApp
2. Poll once created cannot be edited, please review and test thoroughly before using it in actual groups. 



