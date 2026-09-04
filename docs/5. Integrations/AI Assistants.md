<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: Sept 2026</b></td>
  </tr>
</table>
</h4>

# Overview
The AI Assistants page (`AI toolkit` → `AI Assistant`) is where you build, test, evaluate, and publish assistants that get used into Glific flows via their assistant ID (asst_…). Everything you need lives inside a single assistant — from editing the prompt to evaluating it against Golden Q&As and taking a version live. 


# Creating and editing an assistant
1. To create an assistant, go to `AI toolkit` → `AI Assistant`
2. Click `Create New Assistant` (top right).
3. This opens a blank “Untitled assistant”. Rename it with the pencil icon, then configure it using the tabs below.
<img width="" height="" alt="Screenshot 2026-09-03 at 7 55 03 AM" src="https://github.com/user-attachments/assets/40af2160-a06e-4532-8c0d-0b9c6970f042" />


# The assistant editor

When you edit or create an assistant you’ll see a header (assistant name with a pencil to rename, the copyable assistant ID, and the Go Live button), a version selector showing the current version and its LIVE status, and five tabs: Model & Prompt, Knowledge Base, Guardrails, Golden Q&A Evaluation, and Try It Out.

<img width="" height="" alt="Screenshot 2026-09-03 at 8 07 54 AM" src="https://github.com/user-attachments/assets/17615e3b-7ada-44aa-beae-f4687677f9c1" />



## Model & Prompt tab
This is the core configuration. Enter the assistant’s behaviour in the Instructions (Prompt) box (describe who it is, what it helps with, what it must never do, and what language to reply in). Optionally use Generate with AI (BETA) to draft a prompt. 

To learn more about how to build a good prompt go [here](https://glific.github.io/docs/docs/FAQ/AI%20Chatbot%20Implementation%20Guidelines/#2-prompt)

Below that, pick the Model from the dropdown (e.g. gpt-5.6-luna) and set the associated settings for the model.

Examples of settings associated with the model:
1. Reasoning effort: the effort spent by AI models to think and reason before answering the user query. Higher reasoning effort takes up more in time in generating the response. 
2. Temperature: Temperature in AI models is a setting that acts as a dial for creativity and randomness. Higher temperature leads to more creative responses, recommended to keep temperature close to 0 for most social impact use cases. 


<img width="1223" height="714" alt="Screenshot 2026-09-03 at 8 36 42 AM" src="https://github.com/user-attachments/assets/e51f86ce-4f52-48d4-ac04-197a11a55433" />

Available model settings vary by model. To learn more about the models, settings and which is suitable for your use case, go [here](https://developers.openai.com/api/docs/models/compare)

## Knowledge Base tab
1. Click `+ Add files` to attach documents the assistant can search when answering (supports PDF, DOC, DOCX, TXT, MD, HTML, and CSV, up to 20MB per file). A Knowledge Base ID is also shown here. Changes apply when you save a version.
2. Files can be removed individually or downloaded.

<img width="" height="" alt="Screenshot 2026-09-03 at 8 01 44 AM" src="https://github.com/user-attachments/assets/918f9631-11b9-4834-b8a2-653c9fd821ed" />


To learn more about how to structure the knowledge base go [here](https://glific.github.io/docs/docs/FAQ/AI%20Chatbot%20Implementation%20Guidelines#1-knowledge-base)
## Try It Out tab
A sandbox chat to test the currently selected version before going live with it to quickly test how the assistant answers are changing. It labels which version you’re testing and notes it’s sandbox-only, so real users are unaffected.
<img width="" height="" alt="Screenshot 2026-09-02 at 3 09 25 PM" src="https://github.com/user-attachments/assets/47a4e41b-0c15-42b9-9d45-5db971e5c4a7" />


# Key concept: versions, Save, and Go Live
Two actions drive the whole lifecycle. 

1. **Saving** any change creates a new minor version (for example 1.0 → 1.1 → 1.2). These saved versions are drafts you can test and evaluate freely without affecting real users. Any changes made need to be saved, so that the updates can be tried out and evaluated before making live in the flow for the actual users.

 <img width="" height="" alt="Screenshot 2026-09-03 at 7 50 10 AM" src="https://github.com/user-attachments/assets/9aede94b-98c0-4e98-bf0c-d79fb1d220e6" />

3. **Go Live (publishing)** promotes the current version to the next major version (for example 1.2 → 2.0) and marks it LIVE. The live version is the one actually used in your Glific flows wherever that assistant ID is referenced. Until you Go Live, real users stay on the previously published version.

<img width="" height="" alt="Screenshot 2026-09-03 at 7 52 16 AM" src="https://github.com/user-attachments/assets/07a0c44f-47f3-47a1-9ce9-9739e1eccc06" />

### Main points to note about assistant id and Go live action

1. Making edits to an assistant and saving a new version does not change its assistant ID.
2. Therefore, the assistant ID does not need to be updated in the flows each time a new version is saved or made live. 
3. You can choose which version of the assistant gets used in the flow by using the `Go Live` button on that particular assistant version. 
4. By default, new changes are not made live directly in the flow.
5. To use an assistant with the latest modifications, you must explicitly click `Go Live`.

## Recommended workflow
Edit or create new version of an assistant → Save (creates a new draft version of the assistant) → test in `Try It Out` → Run an evaluation → check `History` to compare scores with previous versions → only then Go Live.

### Why are versions created on modifications? and why do you need to "Go Live"
1. To provide flexibility to easily revert to previous versions when making new modifications to assistants.
2. Any new updates can be evaluated before deploying to flows which are in use.

### How to use the assistants in the Glific flow?
The workflow on using the assistants remains the same, can be seen in [Using the OpenAI assistant in the flow editor](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants/#using-the-openai-assistant-in-floweditor)
