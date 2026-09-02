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
The AI Assistants page (`AI toolkit` → `AI Assistant`) is where you build, test, evaluate, and publish assistants that get wired into Glific flows via their assistant ID (asst_…). Everything you need lives inside a single assistant — from editing the prompt to running Golden Q&A evaluations and taking a version live. 


# Key concept: versions, Save, and Go Live
Two actions drive the whole lifecycle. 

1. **Saving** any change creates a new minor version (for example 1.0 → 1.1 → 1.2). These saved versions are drafts you can test and evaluate freely without affecting real users. As the version dropdown states: “Saving creates a minor version. Publishing promotes it to the next major and makes it live.”

2. **Go Live (publishing)** promotes the current version to the next major version (for example 1.2 → 2.0) and marks it LIVE. The live version is the one actually used in your Glific flows wherever that assistant ID is referenced. Until you Go Live, real users stay on the previously published version.

# The assistant editor

When you edit or create an assistant you’ll see a header (assistant name with a pencil to rename, the copyable assistant ID, and the Go Live button), a version selector showing the current version and its LIVE status, and five tabs: Model & Prompt, Knowledge Base, Guardrails, Golden Q&A Evaluation, and Try It Out.

<img width="" height="" alt="Screenshot 2026-09-02 at 2 56 54 PM" src="https://github.com/user-attachments/assets/27deb3b0-128a-4f26-9217-779572698c2f" />

# Creating and editing an assistant
1. To create an assistant, go to `AI toolkit` → `AI Assistant`
2. click `Create New Assistant` (top right).
3. This opens a blank “Untitled assistant”. Rename it with the pencil icon, then configure it using the tabs below.

## Model & Prompt tab
This is the core configuration. Enter the assistant’s behaviour in the Instructions (Prompt) box (describe who it is, what it helps with, what it must never do, and what language to reply in). Optionally use Generate with AI (BETA) to draft a prompt. 

Below that, pick the Model from the dropdown (e.g. gpt-5.6-luna) and set the Reasoning effort (None, Low, Medium, High, Xhigh, or Max — higher is better quality but slower).

<img width="" height="" alt="Screenshot 2026-09-02 at 2 58 32 PM" src="https://github.com/user-attachments/assets/d61073ff-5c28-4eac-9409-9dd647c5f24d" />

To learn more about the models and which is suitable for your use case, go [here](https://developers.openai.com/api/docs/models/compare)

## Knowledge Base tab
1. Click `+ Add files` to attach documents the assistant can search when answering (supports PDF, DOC, DOCX, TXT, MD, HTML, and CSV, up to 20MB per file). A Knowledge Base ID is also shown here. Changes apply when you save a version.
2. Files can be removed individually or downloaded.

<img width="" height="" alt="Screenshot 2026-09-02 at 3 00 47 PM" src="https://github.com/user-attachments/assets/85cf701e-7f1b-4eeb-b8db-292dd679e1f9" />

## Try It Out tab
A sandbox chat to test the currently selected version before going live with it to quickly test how the assistant answers are changing. It labels which version you’re testing and notes it’s sandbox-only, so real users are unaffected.

<img width="" height="" alt="Screenshot 2026-09-02 at 3 09 25 PM" src="https://github.com/user-attachments/assets/da61da9c-db0d-4ad7-b431-205d7edd056c" />

### Main points to note about assistant id and Go live action
1. The assistant id being used in the flow does not need to be modified, 
2. You can choose which version of the assistant gets used in the flow by using the "Go Live" button 
3. By default, new changes are not used directly in the flow.
4. To use an assistant with the latest modifications, you must explicitly click "Set as LIVE".

## Recommended workflow
Edit or create new version → Save (creates a new draft version) → test in Try It Out → Run an evaluation → check History to confirm it beat the previous version → only then Go Live.

### Why are versions created on modifications? and why do you need to "Go Live"
1. To provide flexibility to easily revert to previous versions when making new modifications to assistants.
2. Any new updates can be evaluated before deploying to flows which are in use.

### How to use the assistants in the Glific flow?
The workflow on using the assistants remains the same, can be seen in [Using the OpenAI assistant in the flow editor](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants/#using-the-openai-assistant-in-floweditor)
