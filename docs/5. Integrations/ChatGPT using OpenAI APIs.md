
## Using ChatGPT within Glific using the OpenAI APIs

_**Leverage the capabilities of GPT models developed by OpenAI by using OpenAI APIs.**_

<h4>
 <table>
  <tr>
    <td><b>3 minutes read</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Level: Advanced</b></td>
    <td style={{ paddingLeft: '40px' }}><b>Last Updated: December 2025</b></td>
  </tr>
</table>
</h4>


## How it will work 

1. Question is asked by the user after the flow is initiated
2. OpenAI API call is made using webhooks within the flow
3. Question, prompt to the model, and the type of model being called to answer the question or perform the task is provided inside the webhook params
4. The response is returned from the GPT models which can be sent to the user directly or used as desired in the flow.
   

## Using the webhook for OpenAI API call in a Glific flow

<img width="930" alt="Screenshot 2024-09-25 at 11 10 13 AM" src="https://github.com/user-attachments/assets/3307ead2-1dc1-4459-a31b-ec11579b475d"/>

_Representative image to explain the steps in OpenAI API calls in a simple flow_

[Sample flow](https://drive.google.com/file/d/1r2dKE1i95lKrz6V1BiEyvZTXgxXgX87N/view?usp=sharing)

1. Get the user question 
2. Add a `call a webhook` node.
   
- By default, `FUNCTION` would be selected. Leave this as it is.

<img width="444" height="368" alt="Screenshot 2025-12-03 at 11 13 18 AM" src="https://github.com/user-attachments/assets/5d5ba026-f515-4d3a-93c8-8108e68b4094" />

 - In the `FUNCTION` field, select the pre-defined function `parse_via_chat_gpt` from the dropdown.

<img width="475" height="399" alt="Screenshot 2025-12-03 at 11 14 05 AM" src="https://github.com/user-attachments/assets/6cb069f4-45ce-4ed7-8614-fb6b49a2e594" />

- Give the webhook result name - you can use any name. In the screenshot example, it’s named `gpt_response`.
  
<img width="564" height="464" alt="Screenshot 2025-12-03 at 11 14 44 AM" src="https://github.com/user-attachments/assets/85241beb-c873-414b-b8ab-edb3eabd68eb" />

3. Add the parameters in the `FUNCTION Body`.

- Click on `Function Body` on the top right corner. You would see the following.

<img width="631" height="440" alt="Screenshot 2025-12-03 at 11 16 57 AM" src="https://github.com/user-attachments/assets/ac874d38-7fed-49a1-8b67-dfd8df439d4c" />

- Pass the following parameters as mentioned below. 

 `{
  "question_text": "@results.question_1",
   "gpt_model":"gpt-4o",
   "prompt":"Answer in less than 5 sentences."
  }`

here `question_text` is the parameter name corresponding to user question. 

`gpt_model` is the parameter to help you select the best model for performing the given task. The model name must correspond to the text models given in the OpenAI API documentation. See [OpenAI models documentation](https://platform.openai.com/docs/models)

<img width="590" height="408" alt="Screenshot 2025-12-03 at 11 25 27 AM" src="https://github.com/user-attachments/assets/90ba56c3-1565-46bb-b3f0-180172a35bc6" />


4. The response from GPT is shown as `@results.webhookresultname.parsed_msg`, in the given example `gpt_response` is the webhook result name. (see the first image)

_Reach out to the Glific team to flag any further customizations within this functionality_
