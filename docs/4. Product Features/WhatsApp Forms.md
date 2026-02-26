 <table>
    <tr>
      <td><b>3 minute read</b></td>
          <td style={{ paddingLeft: 40 }}><b>Level: Intermediate</b></td>
          <td style={{ paddingLeft: 40 }}><b>Last updated: February 2026</b></td>
    </tr>
  </table>



## WhatsApp Forms

A step-by-step guide for NGOs to create, publish, use, and analyze WhatsApp Forms with Glific.

### Introduction to WhatsApp Forms

<img width="563" height="210" alt="Screenshot 2025-12-01 at 11 58 41 AM" src="https://github.com/user-attachments/assets/662aad7d-1b70-44de-b6de-9dc0b8994281" />

WhatsApp Forms is an implementation of [WhatsApp Flows](https://developers.facebook.com/docs/whatsapp/flows/) in Glific (form-like interface introduced by WhatsApp), which allows NGOs to collect structured data inside WhatsApp—just like a Google Form, but fully embedded within the conversation.
This can help you collect:
- Registrations
- Feedback
- Session attendance
- Health screening
- Field survey data
- Monitoring & evaluation responses
- And much more

WhatsApp Forms reduce back-and-forth messaging and ensure clean, structured data for reporting.

<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1ezJ47pIHoFFPxGI0Du4CfjjRM9eW8cEx/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

### How to Create WhatsApp Forms in Glific

Steps:
1. Go to `Quick Tools` → `WhatsApp Forms` in Glific.
2. Click `Create` Form
3. Provide a form `title` and `category`
4. For data storage, add a `google sheet` with write access to the google service account to automatically capture the responses to the form. This step is optional. A google sheet can be added before the form is `submitted to Meta`
6. Click on Save and go to the form builder interface
<img width="568" height="386" alt="Screenshot 2026-02-24 at 3 51 24 PM" src="https://github.com/user-attachments/assets/15e81cc8-0da5-43a0-95fd-298177bb567a" />

### Navigating the form builder interface.
The form builder interface can be used to create forms

There are 3 major actions:

1. Form Json - this allows you to toggle to the from json view, and edit things in the form json as it gets developed by adding screens and components from 
2. Save Draft - while the changes being made are auto-saved, this button is provided as a back-up.
3. Submit to Meta - this is the final step of form creation. Click on `Submit to meta` once the form is ready to be used by over WhatsApp. Please note: once the form is submitted to meta, it cannot be changed further. To make changes, a new form will need to be created and modified.

<img width="570" height="365" alt="Screenshot 2026-02-24 at 3 54 14 PM" src="https://github.com/user-attachments/assets/08b36aa4-3d3b-46f0-8251-db54da39f050" />

Other details: 

1. There is a form builder section with buttons to add content to the form like dropdowns, checkboxes, date fields, titles, captions, images and new screens to build out the form with required fields.
2. The preview section allows you to get glimpse of how the form will turn out on WhatsApp. The preview has tabs to `preview`, see the `field names` and the `revision history` of the form. 
4.  Please note, the preview mode is not fully representative of how the form will look on WhatsApp of your beneficiaries, as this varies a lot based on the version of WhatsApp and the device type such as android, ios etc. 

### Form Builder Action
1. Adding screens: Use `Add new` button to the in line of the Screens header to add new screens. Screen title can be added in the `Screen Name` entry field
2. Building the form: click on `Add Content` to select the type of data collection field you’d like to add under a particular screen.
<img width="696" height="788" alt="Screenshot 2026-02-24 at 5 02 06 PM" src="https://github.com/user-attachments/assets/6064456a-b3b0-480a-9c1c-96d9dbd245c7" />

### Types of content that can be added 
1. **Titles and Captions**: Under the `Text` content, heading, subheading, captions, and texts can be added to the form.

<img width="1165" height="813" alt="Screenshot 2026-02-24 at 5 00 45 PM" src="https://github.com/user-attachments/assets/19b33e4a-48b5-4450-af39-976c9104dd44" />
2. **Media**: An image file, of type JPEG, PNG can be added upto 300kb in size. 
<img width="543" height="367" alt="Screenshot 2026-02-24 at 4 42 06 PM" src="https://github.com/user-attachments/assets/5ef5b08f-6b38-4b6f-842f-bc94845d29f0" />

3. **Text answer**: A short answer, paragraph answer or date field can be captured using this type. 
<img width="581" height="381" alt="Screenshot 2026-02-24 at 4 42 30 PM" src="https://github.com/user-attachments/assets/c3d56c7c-07fc-4b39-9286-485a892c8704" />

4. **Selection**: Dropdown, Single choice, multiple choice, opt-in can be collected using the selection type of content

<img width="561" height="384" alt="Screenshot 2026-02-24 at 4 42 45 PM" src="https://github.com/user-attachments/assets/589faff4-47b8-4edb-b382-967caecc5815" />

#### What are field names and how to use them?
Field names are the captions/ titles that appear above the input field in the form. This serves 2 function 
1. To appear as the caption for the user to see in the WhatsApp Form
2. To appear as the header under which the responses are being captured. The header can be seen by toggling to `Field Names` section next to `Preview` button
<img width="561" height="385" alt="Screenshot 2026-02-24 at 4 43 45 PM" src="https://github.com/user-attachments/assets/6bb2c0d4-e877-42d1-bcaf-13bfdd551e51" />


The header name can be changed by clicking on the edit button
<img width="566" height="386" alt="Screenshot 2026-02-24 at 4 44 32 PM" src="https://github.com/user-attachments/assets/f7068240-3f09-44c0-8df7-89b2cccfffef" />

Field names are useful to refer to any response from the form, and also the field names appear as the headers in the attached google sheet. 

#### How to use field names in the flow
1. A form message should be always followed by a `wait for response` node. As shown in the screenshot below.
<img width="323" height="442" alt="Screenshot 2026-02-24 at 4 46 46 PM" src="https://github.com/user-attachments/assets/1d3db195-b770-42d7-9780-0fbf941a0e74" />

2. The send message node 89e6 sends the HSM with form to the user,
3. Wait for response node ad02 with the result name `result_1` captures all the responses to the form questions by the user
4. The send message node 888f, is used to display back to the user one of the responses, by going into the responses and referring to the particular field name in this case - `preferred_mode_of_payment` by printing `@results.result_1.preferred_mode_of_payment`


#### What are Option Ids and how to use them 

The options listed under selection type of the content - dropdown or single choice or multiple choice show up in the form json. Each option has a `title` which is text that appears to the user in the whatsapp interface to select. There is also an `id`, this id is what gets returned as the response and remains invisible to the user.

<img width="609" height="406" alt="Screenshot 2026-02-24 at 4 49 39 PM" src="https://github.com/user-attachments/assets/e5bb5a8f-4584-4148-9086-d5e53a2d647b" />

- In the above screenshot, a short section of the form json can be seen corresponding to the question of preferred mode of payment, and the list of options. 

- The options show a distinct `title` which corresponds to what can be seen on the form page, and an `id`which is different from the title. 

- Renaming the `option id`  in the form json is an important step to ensure data captured is clean and as per the requirements of the program.
  
<img width="1242" height="833" alt="Screenshot 2026-02-24 at 4 51 15 PM" src="https://github.com/user-attachments/assets/650469e6-9068-4434-9ecf-149df19d11ca" />

**Implications of the id**
- This can help with multi-lingual forms by having the titles in local language, while the response getting captured and stored to be in english to help with collecting clean data. 
- This can help with usecases where title and responses need to be abstracted away. 

### Form creation checklist

Checklist to make sure the form is completed
1. There is a google sheet attached to the form for ease of collecting responses. While the responses to the form are synced to your bigquery by default, having a google sheet attached will help you to see responses quickly and easily.
2. The `field names` under which the responses will be captured is appropriate
3. The `option ids` for fields with options are renamed in the form JSON to reflect the values that need to be collected.
4. The form is `submitted to Meta`.

### How to Send WhatsApp Forms to users on WhatsApp

WhatsApp forms can be sent to users when the forms are attached to HSM messages. 

Steps: 
1. Ensure that the form is `submitted to meta`
2. Navigate to `Quick Tools` -> `HSM Templates` -> `Create`
3. Follow the steps to create the HSM template, by giving it a `title`, `element name`, `body` of the message, 
4. Click on `Add buttons` and select `WhatsApp Forms`
5. Select the form you wish to attach to the message 
6. Select the name of the screen that should open on clicking the form 
7. Give the title to the button
8. Fill out the rest of the fields and apply for HSM
9. Use this HSM message inside the Glific flow.
10. Like any other HSM or send message node, ensure that this HSM follows a `wait for response` node. This node will help to record the response to the form fields.


### How the WhatsApp Form results can be used in the Glific flow

The responses to the form can be captured, and used in the Glific for taking actions such as write to google sheet or can be used  in split by logic to create separate branches in the glific flow based on the responses received to any particular fields on the form. 

To use this 
1. The field names for each field in the form come up on the “field names” screen of the form
3. Take a note of all the these form field names 
4. In the flow, use `wait for response` node after the `send contact a message` node which is sending the form HSM message


### How WhatsApp Form Results Come to BigQuery
1. Ensure your Glific account is connected to BigQuery instance
2. There are two new tables `whatsapp_forms` and `whatsapp_forms_responses`
3. `whatsapp_forms` stores the forms and their statuses
4. ‘whatsapp_forms_responses`	stores the responses recorded on each user
5. Each row in `whatsapp_forms_responses` is a new entry recorded from a user from whatsapp
6. In `whatsapp_forms_responses`, there is a `raw_response` field which stores all the responses from a user.
7. To get a SQL snippet to help you extract the form responses to a Google Sheet, refer to the next section

<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1_kfarzbI5AqINbGn0Xhlob7kOxJG8DLV/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

```sql
WITH form_responses AS (
  SELECT
    wf.id AS form_id,
    wf.name AS form_name,
    wfr.raw_response,
    wfr.submitted_at,
    wfr.contact_name,
    wfr.contact_phone,
    wfr.contact_id
  FROM
    `your-project-name.your-dateset-name.whatsapp_forms` AS wf
  JOIN
    `your-project-name.your-dateset-name.whatsapp_forms_responses` AS wfr
  ON
    wf.id = CAST(wfr.whatsapp_form_id AS STRING)  
  WHERE
    wf.name = 'you_form_name'
)

SELECT
  form_id,
  form_name,
  submitted_at,
  contact_name,
  contact_phone,
  contact_id,

  -- Individual answers (use JSON_VALUE so you get scalar text, not JSON)
  JSON_VALUE(raw_response, '$.screen_0_session_usefulness_0') AS session_usefulness,
  JSON_VALUE(raw_response, '$.screen_0_Click_here_1')        AS qual_feedback,
  JSON_VALUE(raw_response, '$.screen_1_Call_back_required_0') AS call_back

FROM
  form_responses
ORDER BY
  submitted_at DESC;

```

In the above SQL snippet change the following
1. Change the form name in the line `wf.name = form_name`
2. Replace `your-project-name.your-dataset-name` with your actual project name and the data set name everywhere this is mentioned
3. Replace or add the variable names from your actual form under the `SELECT ...` statement for extracting the `JSON_VALUES` from the `raw_responses`

### Things to note: 
1. Saving the form does not publish the form; it must be `published` to be used in HSMs.
2. Once the form is published, it cannot be edited.
3. Only after publishing the form, it can be used via WhatsApp. 
4. One form can be linked to multiple HSM messages.
5. Once the form is deactivated, the form cannot be used in new HSMs as long as the form stays in deactivated state
6. Once a form is linked with an HSM message, even after it is deactivated, the HSM remains valid for users.
7. Once a form is filled by a user in response to a message, it cannot be filled again on the same message
8. It is possible to change the form variables names, by altering the fields in the form json
9. It is possible to change the screen names by altering the screen id in the form json 
10. For multi-lingual use cases, separate forms must be created for each language.
11. Each language variation must be attached to a language-specific HSM. Follow this [documentation on multi-lingual HSMs](https://glific.github.io/docs/docs/Product%20Features/HSM%20Templates/#approve-multi-lingual-hsm-templates) to learn more.
### FAQs



1. What is the draft state of the form

Draft state of the form is when the form entity is created in Glific and it can be edited to improve the UI, but the form is not yet published with Meta, therefore it cannot be used in HSMs and it is not yet available to use via WhatsApp 

3. What is the published state 

Published state is when the form is published with Meta and can be used to create a WhatsApp form-linked HSM message that can be sent to users via WhatsApp.

4. What is the deactivated state

Deactivated state of the form is when the form can no longer be used for future HSMs. In this state, the HSMs which have the form linked already will remain operational.

5. Why are there numbers at the beginning of the responses? 

The responses captured from whatsapp forms are returned along with the index of the option chosen by the user, the numbers represent the index of choice.

6. How much does it cost to send the form

Using the form in Business Initiated Message scenarios incurs the cost of category of the HSM message the form is attached to. Using the form under service message type scenarios is free of charge. Service messages means when a user initiates the conversation by entering a keyword or clicking on the WhatsApp keyword-encoded link and starting the conversation with the chatbot of your organization.





