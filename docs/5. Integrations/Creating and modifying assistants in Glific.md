<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: July 2026</b></td>
  </tr>
</table>
</h4>

# Creating and modifying AI assistants in Glific 
This doc details how to create new assistants, modify the created assistants and how to use these in your Glific flows. 

## Creating a new assistant
1. From the assistant list page, click on “Create new assistant”. This opens a blank creation form - no assistant is created yet at this point.
<img width="1406" height="765" alt="Screenshot 2026-04-14 at 2 46 48 PM" src="https://github.com/user-attachments/assets/3ac96677-8fe2-46b3-bff6-b5c26e1ccfb6" />

2. Fill out the details needed,
- Name of the assistant 
- Select a model
- Add your prompt 
- Add files to create a knowledge base 
- Set the temperature

Note: The model dropdown shows a fixed list of supported models (currently `gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`), rather than fetching every model available on the provider's account. If you need a model that isn't listed, reach out to the Glific team.
<img width="711" height="835" alt="Screenshot 2026-04-14 at 2 58 36 PM" src="https://github.com/user-attachments/assets/5e2c0741-28ce-4e63-b545-0de08ba866cf" />

3. Click on save. This is the point the assistant is actually created - nothing is saved to Glific until you click save here.
4. This navigates to the assistant versions listing page. 
<img width="1233" height="750" alt="Screenshot 2026-04-14 at 2 59 16 PM" src="https://github.com/user-attachments/assets/9078b2a2-24d4-4621-895b-c3f84f257caf" />

5. From here, copy the assistant id and use it in the flow.

## Assistant status
Each assistant in the list page shows a status chip, so you can tell at a glance whether it's ready to use:
- Ready - the assistant is live and usable in flows.
- In Progress - a new version is being prepared (for example, right after you save changes or add files). Wait for this to finish before using the assistant.
- Failed - the last update didn't complete successfully. The assistant continues to run on its previous live version; check the assistant for details and try saving your changes again.

## Modifying an assistant 
1. From the assistant list page, click on “edit” the assistant action.
<img width="1098" height="367" alt="Screenshot 2026-04-14 at 2 46 55 PM" src="https://github.com/user-attachments/assets/d08527ee-29d3-44bf-9a3d-ce15a45bea8c" />

2. This takes to the assistant version listing page 
3. Make the required changes to the assistant 
4. Changing the model, changing the prompt, adding or removing files from the knowledge base, or changing the temperature of the assistant leads to showing “unsaved changes” 

### Uploading files to the knowledge base
When you add files to an assistant's knowledge base:
- Each file uploads on its own and shows its own progress - a clock icon while it's queued, a spinner while uploading, a green check once attached, or an error icon if it failed.
- Hovering over a failed file's error icon shows the reason it failed.
- Failed files can be retried individually, using the retry button next to that file, without having to re-select and re-upload every other file.
- You can't save your changes while any file is still in a failed state - remove it or retry it first.
- Files larger than 20 MB are rejected with a warning. If you select multiple files at once and any of them is over the limit, none of them are uploaded - remove the oversized file(s) and try again.

<img width="1233" height="730" alt="Screenshot 2026-04-14 at 3 00 53 PM" src="https://github.com/user-attachments/assets/af8f42d4-9072-4722-af80-eb0874b301d5" />

5. Click on “save” to save the modifications done.
6. This creates a new version of the assistant. 
<img width="1234" height="750" alt="Screenshot 2026-04-14 at 3 01 21 PM" src="https://github.com/user-attachments/assets/ba4bdd4a-96b0-4365-8726-28149edc6d67" />

7. To use the version with the latest modifications in the flow, simply click on “set as LIVE” to make sure that the given version is getting used in the flow.

<img width="1228" height="718" alt="Screenshot 2026-04-14 at 3 04 25 PM" src="https://github.com/user-attachments/assets/ba351b06-8b51-4094-8556-cb603cf71263" />


## Cloning an assistant
A `Clone Assistant` button is available when editing an assistant, but only for legacy assistants with a knowledge base created before February 10, 2026. If you don't see the button, your assistant either isn't eligible or has already been cloned.

1. Open the assistant you want to clone (from the assistant list page, click "edit" on its action).
2. Click `Clone Assistant`.
3. A confirmation dialog, "Cloning May Affect Responses," explains that a cloned assistant may behave differently from the original, and recommends reviewing responses or running evaluations after cloning. Click `Proceed` to continue, or cancel to back out.
4. While cloning runs, the button shows `Cloning` with a spinner. This can take a little while, since the assistant's files are downloaded from OpenAI and re-uploaded to the new assistant.
5. Once done, you'll see a success notification and the button becomes disabled with an "Already cloned" tooltip - each eligible assistant can only be cloned once.
6. If cloning fails, the button changes to `Retry cloning` so you can try again without repeating the earlier steps.

Cloning creates a replica of the assistant's presently live version, including the prompt, temperature, and knowledge base, so you can modify the knowledge base on the new copy - something that isn't possible directly on these older, legacy assistants.


### Main points to note about assistant id and set as live action
1. The assistant id being used in the flow does not need to be modified, 
2. You can choose which version of the assistant gets used in the flow by using the "Set as LIVE" button 
3. By default, new changes are not used directly in the flow. To use an assistant with the latest modifications, you must explicitly click "Set as LIVE".

### Why are versions created on modifications? and why do you need to "set as LIVE"
1. To provide flexibility to easily revert to previous versions when making new modifications.
2. Any new updates can be evaluated (evaluations feature coming soon in Glific) before deploying to live assistants.

### How to use the assistants in the Glific flow?
The workflow on using the assistants remains the same, can be seen in [Using the OpenAI assistant in the flow editor](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants/#using-the-openai-assistant-in-floweditor)
