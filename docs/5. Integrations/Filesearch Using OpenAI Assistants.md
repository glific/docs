
<h3>
  <table>
    <tr>
      <td><b>6 minutes read</b></td>
      <td style={{ paddingLeft: 40 }}><b> Level: Advanced</b></td>
      <td style={{ paddingLeft: 40 }}><b>Last Updated: August 2025</b></td>
    </tr>
  </table>
</h3>

# File Search Using OpenAI Assistants

Glific’s File Search using OpenAI Assistant enables users to upload documents and get AI-generated answers to user questions. The system uses a method called **Retrieval Augmented Generation (RAG)**, where the assistant searches through your files to give accurate, helpful responses, including answers to follow-up questions.

---

### Use this when:
- Users want to ask questions based on your PDFs, reports, or manuals.
- There is a need to build an automated knowledge assistant for your organisation.
- Help users get instant responses.

### This document guides you through three main parts:
- Creating an OpenAI Assistant  
- Using the Assistant in your Flows (including handling follow-up questions)  
- Handling Voice Inputs and Responses  

---

## How to Create an OpenAI Assistant in Glific

#### Step 1: Create a new AI Assistant
Click on `AI Assistant` from the left sidebar, then select `Create Assistant` to generate a blank assistant.

<img width="633" height="367" alt="Screenshot 2025-08-09 at 12 35 30 AM" src="https://github.com/user-attachments/assets/6f33287c-1dd1-45af-8e57-f58c36b81cff" />


#### Step 2: Fill in the Assistant Details

Define the following parameters:

- Choose the most relevant model from the first drop down.
- Provide a name to the assistant.
- Provide a system prompt in the `Instructions` field.  
  *[Click Here](https://glific.org/a-simple-guide-to-using-large-language-models/#prompt) to read more on prompt engineering.*
- Files (PDF, DOCX, etc.) can be uploaded by clicking on `Manage Files`. These files will be utilized by the assistant to generate responses.  
  *[Click Here](https://platform.openai.com/docs/assistants/tools/file-search/supported-files#supported-files) to know the supported file formats by the OpenAI APIs.*
- Set the `Temperature` (between 0 to 2). A higher value increases creativity/randomness.  
  *Recommended: keep temperature at 0.*

 **Note:** The quality of the bot’s response depends on the prompt. Give appropriate prompts based on your use case.


#### Step 3: Save Your Assistant
Once the files are added, click on `Add`. This completes the Assistant setup.  
Click on the `Save` button after making any changes.
<img width="656" height="405" alt="Screenshot 2025-08-09 at 12 43 48 AM" src="https://github.com/user-attachments/assets/f3e31a36-1c8e-4c2f-91d5-954c22fcb7d9" />


#### Step 4: Copy the Assistant ID
Once created, copy the `Assistant ID` shown below the assistant name.  
This ID will be used in the webhook nodes in the flow editor.

<img width="357" height="408" alt="Screenshot 2025-08-09 at 12 46 25 AM" src="https://github.com/user-attachments/assets/8d7556f0-827a-44ea-a2e5-881f2b61c2e1" />


## Using the OpenAI Assistant in Floweditor
The following sections explain how to use an assistant to answer questions or create conversations.


## Handling text inputs and outputs

This section explains how to:
- Use the `filesearch-gpt` webhook function to pass a user’s question to the OpenAI Assistant.
- Receive the assistant’s response.
- Handle follow-up questions using conversational memory.


#### Step 1: Get User Question

- Create a flow where the user sends a question as text input.
- Add `Send Message` node and receive user question as text.
- This question will be passed to the assistant for a response.
- Provide a `Result Name` for the `Wait for Response node.
-  In the example below, the result name is set as `question`.

_Screenshot of example flow set up is given below_

<img width="633" height="501" alt="Screenshot 2025-08-09 at 12 51 47 AM" src="https://github.com/user-attachments/assets/6cb60c7a-6b75-4c96-8b78-88fa3318a8c2" />


#### Step 2: Add a  Call Webhook node. This is where we integrate the OpenAI Assistant.

- By default,  `Function`  would be selected. Leave this as it is.

<img width="473" height="394" alt="Screenshot 2025-12-02 at 6 07 25 PM" src="https://github.com/user-attachments/assets/e9f685cb-910d-40ff-93a0-2f4688092ae2" />

- In the `Function` field, select the pre-defined function name  `filesearch-gpt`, from the dropdown.

<img width="452" height="377" alt="Screenshot 2025-12-02 at 6 08 30 PM" src="https://github.com/user-attachments/assets/3b03c3bf-ca5c-423b-b231-12849e147909" />

- Give the webhook `Result Name` - you can use any name. In the screenshot example, it’s named as `gptresponse`.

<img width="478" height="405" alt="Screenshot 2025-12-02 at 6 08 59 PM" src="https://github.com/user-attachments/assets/3aa57481-5aac-4106-980b-089c46e89744" />



#### Step 3: Click on Function Body (top right corner). You would see the following.

<img width="628" height="435" alt="Screenshot 2025-12-02 at 6 10 59 PM" src="https://github.com/user-attachments/assets/aff3ba8d-e5d0-4958-b10c-2bfa481d2128" />

- In `question` parameter enter the flow variable containing the question asked by the user. In the given example `question` is the `result name`, hence provided `@result.question` in the question parameter.
- In `assistant_id` enter the assistant id obtained in step 4 of "How to Create an OpenAI Assistant in Glific"

  <img width="623" height="438" alt="Screenshot 2025-12-02 at 9 18 23 AM" src="https://github.com/user-attachments/assets/880a4181-bd79-4d04-92aa-c0d502456bd5" />

#### Step 4:  Display the Assistant's response
- Once the Webhook is updated, add a `Send Message` node and enter `@results.gptresponse.message` variable to receive the AI response.
- In the given example `gptresponse` is the `result name` (refer to Step 2). If `ai_response` was the result name, the variable would be `@results.ai_response.message`.

  <img width="643" height="498" alt="Screenshot 2025-08-09 at 1 28 11 AM" src="https://github.com/user-attachments/assets/6c4d143e-a1b9-4523-a684-8eae3e0e0e97" />

  [Sample Flow](https://drive.google.com/file/d/10wGUil1l2SGfOZdWQQOO935OK-6BdZV1/view?usp=sharing) Click on the Sample Flow link to import it and explore how it works.

### Conversational Memory
When a user asks a follow-up question, the assistant uses thread ID to remember the earlier conversation. This helps it give better answers by understanding the context of what was already asked.

#### Step 5: Add `thread_id` in the next Webhook call
- To answer the subsequent questions based on the context of a question already asked, in the next webhook call, an additional parameter called `thread_id` needs to be passed.
- This parameter should be set to the value `@results.previouswebhookname.thread_id`.
- In the example shown, the previous webhook result name is gptresponse. So the thread ID should be referenced as - `@results.gptresponse.thread_id`.

<img width="612" height="433" alt="Screenshot 2025-12-02 at 9 20 12 AM" src="https://github.com/user-attachments/assets/d9c58bdf-e2c3-4a72-b1a3-22b278e9d57e" />

- In question parameter enter the flow variable containing the follow up question asked by the user. In the given example `result_5` is the result name, hence provided `@results.result_5` in the question parameter.

<img width="624" height="489" alt="Screenshot 2025-08-09 at 1 34 26 AM" src="https://github.com/user-attachments/assets/bd95bbfb-18e1-46d0-915a-fad38782b5d4" />

---


## Handling Voice Inputs and Responses
Some beneficiaries may find it easier to talk instead of typing. This is helpful for people who are not comfortable reading or writing. With voice input, beneficiaries can send voice notes to ask questions and get answers as both text and voice.
This section explains how to use the `voice-filesearch-gpt` webhook function in Glific flows to take a user’s voice note as input and return both text and voice note responses in the desired language.


#### Step 1: Capture end user’s voice input
- Create a `Send Message` node directing users to send their responses as audio messages, based on their preference.
- In the `Wait for Response` node, select has audio as the message response type. Also, give a result name. In the screenshot below, `audio_query` is used as the result name.

<img width="606" height="463" alt="Screenshot 2025-08-09 at 1 38 18 AM" src="https://github.com/user-attachments/assets/5805f7fd-f13f-4298-b9e3-bf63f235574c" />


#### Step 2: Create Call a Webhook node
- By default,`Function` would be selected. Leave this as it is.

<img width="472" height="392" alt="Screenshot 2025-12-02 at 6 32 29 PM" src="https://github.com/user-attachments/assets/5203d925-ae4b-4397-8479-f774304e6454" />
 
- In the `Function` field, select the pre-defined function name `voice-filesearch-gpt` , from the dropdown.

<img width="523" height="431" alt="Screenshot 2025-12-02 at 6 33 32 PM" src="https://github.com/user-attachments/assets/fcf90118-6691-43f1-9f85-63a9ed3217c8" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `gpt_voice`.

<img width="499" height="420" alt="Screenshot 2025-12-02 at 6 33 52 PM" src="https://github.com/user-attachments/assets/eb62c32e-393b-433b-b971-27eeefcfaec4" />

<img width="625" height="528" alt="Screenshot 2025-08-09 at 1 40 28 AM" src="https://github.com/user-attachments/assets/3ccb9af7-1a01-4fbb-9358-7a842c8c7960" />

#### Step 3: Click on Function Body (top right corner). You would see the following.

<img width="486" height="344" alt="Screenshot 2025-12-02 at 6 39 47 PM" src="https://github.com/user-attachments/assets/3434febe-4df9-4d5d-9a4e-4fab424610cf" />

Pass the following paramters in the function body.

<img width="536" height="375" alt="Screenshot 2025-12-02 at 7 20 46 PM" src="https://github.com/user-attachments/assets/f107f0e2-3632-4b3c-8c1b-43224ab39c43" />

- For `contact ` keep this value as `@contact` as mentioned in the screenshot.
- `speech` is the result name which is storing the voice note sent by the user.
- `assistant_id` is the assistant id obtained in step 4 of "How to Create an OpenAI Assistant in Glific.
- `source_langauge` is the expected language of the user.
- `target_language` is the language that the response voice note needs to be in.

#### Step 4: Display the text response
- Create a `Send Message node`.
- Use `@results.webhook_result-name.translated_text` to show the text response.
- In the given example `gpt_voice` is the webhook result name.

<img width="622" height="473" alt="Screenshot 2025-08-09 at 1 45 38 AM" src="https://github.com/user-attachments/assets/bd42793c-f4a4-4326-814b-aea9ac7e7924" />


#### Step 5: Send the voice note response
- In a new `Send Message` node, go to `Attachments`.
- Choose `Expression` from the dropdown.
- Use  `@results.gpt_voice.media_url` (gpt_voice is the result name of webhook node)


<img width="617" height="252" alt="Screenshot 2025-08-09 at 1 46 58 AM" src="https://github.com/user-attachments/assets/547eed06-5697-4379-95d2-0221dc6093e6" />


[Sample Flow](https://drive.google.com/file/d/1EOXFnUqUPQz51xf3pYzhikkf_2VqXL4Z/view?usp=sharing) Click on the Sample Flow link to import it and explore how it works.

---

## Pricing
NGOs can use AI features in Glific without any additional cost for inferencing. Glific is supported by OpenAI to help more NGOs experiment, pilot, and run programs using large language models (LLMs), enabling them to scale their impact without being limited by cost. Additionally NGOs can use up to $100 worth of credits until August 2026.

---

## Video of Showcase
[Video Link](https://www.youtube.com/watch?v=J_sFgOUFFOA)


