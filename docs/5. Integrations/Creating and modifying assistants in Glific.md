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
1. From the assistant list page, click on “Create new assistant”
<img width="1406" height="765" alt="Screenshot 2026-04-14 at 2 46 48 PM" src="https://github.com/user-attachments/assets/3ac96677-8fe2-46b3-bff6-b5c26e1ccfb6" />

2. Fill out the details needed,
- Name of the assistant 
- Select a model
- Add your prompt 
- Add files to create a knowledge base 
- Set the temperature 
<img width="711" height="835" alt="Screenshot 2026-04-14 at 2 58 36 PM" src="https://github.com/user-attachments/assets/5e2c0741-28ce-4e63-b545-0de08ba866cf" />

3. Click on save to create the assistant. 
4. This navigates to the assistant versions listing page. 
<img width="1233" height="750" alt="Screenshot 2026-04-14 at 2 59 16 PM" src="https://github.com/user-attachments/assets/9078b2a2-24d4-4621-895b-c3f84f257caf" />

5. From here, copy the assistant id and use it in the flow.

## Writing effective instructions

The `Instructions` field you fill in when creating or editing an assistant is its system prompt - it tells the assistant how to behave, what it knows, and what to do when it doesn't know something. A clear, specific prompt makes a real difference in the quality of your assistant's answers.

A good prompt usually covers:

- Role and audience - who the assistant is for and what it should help with.
- Source of truth - tell it to answer only using the uploaded knowledge base, rather than general knowledge, if that's what you want.
- Tone and format - how formal or casual, how long the answers should be, and any language requirements.
- What to do when it doesn't know - a clear fallback instruction (for example, ask it to say so honestly instead of guessing). This also makes it possible to detect and route unanswered questions to a human agent - see [Open a ticket with a human agent](https://glific.github.io/docs/docs/Product%20Features/Flows/Flow%20Actions/Open%20a%20ticket%20with%20a%20human%20agent/).

### Example template

```
You are a helpful assistant for [organization name]. You help [describe your users, e.g. "farmers enrolled in our program"] with questions about [topic].

Answer only using the information in your knowledge base. Do not guess or make up information.

If you don't know the answer, reply exactly with: "[fallback phrase]"

Keep answers under [N] sentences unless the user asks for more detail. Respond in [language(s)].
```

### Example filled in

```
You are a helpful assistant for Kaivalya Education. You help Panchayati Raj Institution (PRI) members with questions about local governance and Viksit Panchayat guidelines.

Answer only using the information in your knowledge base. Do not guess or make up information.

If you don't know the answer, reply exactly with: "I'm not able to help with that yet."

Keep answers under 3 sentences unless the user asks for more detail. Respond in Hindi.
```

### Tips for improving your prompt over time

- Add a couple of example question-and-answer pairs directly in the prompt if the assistant's responses don't match the format you want.
- Use [AI Evaluations](https://glific.github.io/docs/docs/Integrations/AI%20Evaluations%20in%20Glific/) to test your prompt against a Golden Set of questions, and refine it based on where it scores poorly.
- Keep the fallback phrase consistent - it's easier to track and route unanswered questions if the assistant always says the same thing when it doesn't know.

## Modifying an assistant 
1. From the assistant list page, click on “edit” the assistant action.
<img width="1098" height="367" alt="Screenshot 2026-04-14 at 2 46 55 PM" src="https://github.com/user-attachments/assets/d08527ee-29d3-44bf-9a3d-ce15a45bea8c" />

2. This takes to the assistant version listing page 
3. Make the required changes to the assistant 
4. Changing the model, changing the prompt, adding or removing files from the knowledge base, or changing the temperature of the assistant leads to showing “unsaved changes” 
<img width="1233" height="730" alt="Screenshot 2026-04-14 at 3 00 53 PM" src="https://github.com/user-attachments/assets/af8f42d4-9072-4722-af80-eb0874b301d5" />

5. Click on “save” to save the modifications done.
6. This creates a new version of the assistant. 
<img width="1234" height="750" alt="Screenshot 2026-04-14 at 3 01 21 PM" src="https://github.com/user-attachments/assets/ba4bdd4a-96b0-4365-8726-28149edc6d67" />

7. To use the version with the latest modifications in the flow, simply click on “set as LIVE” to make sure that the given version is getting used in the flow.

<img width="1228" height="718" alt="Screenshot 2026-04-14 at 3 04 25 PM" src="https://github.com/user-attachments/assets/ba351b06-8b51-4094-8556-cb603cf71263" />


## Copying the assistants
1. In the assistants list page, there is an action to “copy” the assistants
<img width="1091" height="404" alt="Screenshot 2026-04-14 at 2 47 02 PM" src="https://github.com/user-attachments/assets/c45fc0a0-fb45-4929-9ba9-497ce1a9aab5" />

2. This creates a replica of the presently live version of the assistant, including the prompt, temperature and the knowledge base. 
3. This action is needed in order to modify knowledge bases associated with assistants created before 10th March 2026. 


### Main points to note about assistant id and set as live action
1. The assistant id being used in the flow does not need to be modified, 
2. You can choose which version of the assistant gets used in the flow by using the "Set as LIVE" button 
3. By default, new changes are not used directly in the flow. To use an assistant with the latest modifications, you must explicitly click "Set as LIVE".

### Why are versions created on modifications? and why do you need to "set as LIVE"
1. To provide flexibility to easily revert to previous versions when making new modifications.
2. Any new updates can be evaluated (evaluations feature coming soon in Glific) before deploying to live assistants.

### How to use the assistants in the Glific flow?
The workflow on using the assistants remains the same, can be seen in [Using the OpenAI assistant in the flow editor](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants/#using-the-openai-assistant-in-floweditor)
