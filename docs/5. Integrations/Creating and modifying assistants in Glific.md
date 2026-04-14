<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: April 2026</b></td>
  </tr>
</table>
</h4>

# Creating and modifying assistants in Glific 
This doc details how to create new assistants, modify the created assistants and how to use these in your Glific flows. 

##Creating a new assistant
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


<img width="1234" height="750" alt="Screenshot 2026-04-14 at 3 01 21 PM" src="https://github.com/user-attachments/assets/162ecd64-8e1e-4a8a-8eb0-cfaedd40e988" />

## Copying the assistants
1. In the assistants list page, there is an action to “copy” the assistants
<img width="1091" height="404" alt="Screenshot 2026-04-14 at 2 47 02 PM" src="https://github.com/user-attachments/assets/c45fc0a0-fb45-4929-9ba9-497ce1a9aab5" />

2. This creates a replica of the presently live version of the assistant, including the prompt, temperature and the knowledge base. 
3. This action is needed in order to modify knowledge bases associated with assistants created before 10th March 2026. 


### Main points to note
1. The assistant id being used in the flow does not need to be modified, 
2. You can choose which version of the assistant gets used in the flow by using the "Set as LIVE" button 
3. By default, new changes are not used directly in the flow. To use an assistant with the latest modifications, you must explicitly click "Set as LIVE".

### Why are versions created on modifications? and why do you need to "set as LIVE"
1. To provide flexibility to easily revert to previous versions when making new modifications.
2. Any new updates can be evaluated (evaluations feature coming soon in Glific) before deploying to live assistants.

### How to use the assistants in the Glific flow?
The workflow on using the assistants remains the same, can be seen [here](https://glific.github.io/docs/docs/Integrations/Filesearch%20Using%20OpenAI%20Assistants#using-the-openai-assistant-in-floweditor!)
