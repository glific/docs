 <table>
    <tr>
      <td><b>3 minute read</b></td>
          <td style={{ paddingLeft: 40 }}><b>Level: Intermediate</b></td>
          <td style={{ paddingLeft: 40 }}><b>Last updated: December 2025</b></td>
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
2. Click `Create Form`
3. Go to WhatsApp Flows Playground to get a friendly interface to create your form
4. Choose field types and design your form (text input, radio, multi-select, etc.)
5. Click on `copy flow JSON` after completing the form design
6. Paste the Flow JSON into the `form JSON` input field
7. Give your form an appropriate `title`, `description` and `category`
8. Click on `Save`
9. This creates a draft of the form
10. On the `WhatsApp Forms` Listing page, click on the publish icon to publish the form.

<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1PxitFQIRKBrpvmOzbM4ZSd4WIUFCCoK9/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

### How to Send WhatsApp Forms to users on WhatsApp

WhatsApp forms can be sent as HSM messages. 
<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1YZGHR0ulaDnUcIBXKn3aj4HpMQS9jLww/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

Steps: 
1. Ensure that the form is in `published`
2. Navigate to `Quick Tools` -> `HSM Templates` -> `Create`
3. Follow the steps to create the HSM template, by giving it a `title`, `element name`, `body` of the message, 
4. Click on `Add buttons` and select `WhatsApp Forms`
5. Select the form you wish to attach to the message 
6. Select the name of the screen that should open on clicking the form 
7. Give the title to the button
8. Fill out the rest of the fields and apply for HSM
9. Use this HSM message inside the Glific flow.
10. Like any other HSM or send message node, ensure that this HSM follows a `wait for response` node. This node will help to record the response to the form fields.

<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1B4EnVGJ9cqinMw73kXudzYcm2bcEAiEJ/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

### How the WhatsApp Form results can be used in the Glific flow

The responses to the form can be captured, and used in the Glific for taking actions such as write to google sheet or can be used  in split by logic to create separate branches in the glific flow based on the responses received to any particular fields on the form. 

To use this 
1. The variable names for each field in the form come up on the “view” screen of the form
2. These variable names follow the pattern of `screen_number_label”
3. Take a note of all the these form variable names from the form view page
4. In the flow, use `wait for response` node after the `send contact a message` node which is sending the form HSM message
5. Now to reference each of the variable in from the form response use the following syntax `@results.form.screen_0..`


<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1Uedfm3JDLnkhSHjVcUrLZolUixo4RUkX/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

### How WhatsApp Form Results Come to BigQuery
1. Ensure your Glific account is connected to BigQuery instance
2. There are two new tables `whatsapp_forms` and `whatsapp_forms_responses`
3. `whatsapp_forms` stores the forms and their statuses
4. ‘whatsapp_forms_responses`	stores the responses recorded on each user
5. Each row in `whatsapp_forms_responses` is a new entry recorded from a user from whatsapp
6. In `whatsapp_forms_responses`, there is a `raw_response` field which stores all the responses from a user.
7. To get a SQL snippet to help you extract the form responses to a google sheet, refer the next section

<iframe
  width="560"
  height="315"
  src="https://drive.google.com/file/d/1_kfarzbI5AqINbGn0Xhlob7kOxJG8DLV/preview"
  frameborder="0"
  allow="autoplay"
  allowfullscreen>
</iframe>

```
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
    wf.name = form_name
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

1. Why do I need to use the Meta’s Playground to create the forms?

Glific currently uses the Meta WhatsApp Flows Playground to
- Get a cleaner UI to create the form
- Preview the form structure
- Validate form structure
- Test multi-screen navigation
- Get the final JSON code required for Glific

2. What is the draft state of the form

Draft state of the form is when the form entity is created in Glific and it can be edited to improve the UI, but the form is not yet published with Meta, therefore it cannot be used in HSMs and it is not yet available to use via WhatsApp 

3. What is the published state 

Published state is when the form is published with Meta and can be used to create a WhatsApp form-linked HSM message that can be sent to users via WhatsApp.

4. What is the deactivated state

Deactivated state of the form is when the form can no-longer be used for future HSMs. In this state the HSMs which have the form linked already will continue to remain operational.

5. Why are there numbers at the beginning of the responses? 

The responses captured from whatsapp forms are returned along with the index of the option chosen by the user, the numbers represent the index of choice.

6. How much does it cost to send the form

Using the form in Business Initiated Message scenarios incurs the cost of category of the HSM message the form is attached to. Using the form under service message type scenarios is free of charge. Service messages means when a user initiates the conversation by entering a keyword or clicking on the whatsapp keyword encoded link and starting the conversation with the chatbot of your organization. 

7. Why can I not see WhatsApp forms option under Quick Tools?

WhatsApp forms is a trial feature released to beta-tester organizations. If you'd like to try it out, please reach out to [tejas@glific.org](mailto:tejas@glific.org).




