> ###**3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Advanced`**

## Using ChatGPT within Glific using the OpenAI APIs

_**Leverage the capabilities of GPT models developed by OpenAI by using OpenAI APIs.**_

## Pre-requisites 
1. Should have acquired OpenAI (platform)[https://openai.com/product] 
2. Should have created API keys
3. Shuold have enough balance in the OpenAI account
   
<img width="1060" alt="Screenshot 2024-02-07 at 10 50 58 AM" src="https://github.com/glific/docs/assets/141305477/d3c22780-a4ae-4aaa-b196-1d079fce7eb5">

_Above is a representative image from the OpenAI platform account_

## How it will work 

<img width="1069" alt="Screenshot 2024-02-07 at 9 59 24 AM" src="https://github.com/glific/docs/assets/141305477/babb9e27-fce5-4b2b-81d9-58017fd1a079">

_Representative image of a very simple flow for question answering using OpenAI API_

1. Question is asked by the user after the flow is initiated
2. OpenAI API call is made using webhooks within the flow
3. The response to the question is then sent to the user

## Steps to follow 
1. Go to `Settings`, find `OpenAI (ChatGPT) (Beta)`
2. Click on “is active” and paste the OpenAI API key from your OpenAI platform account

<img width="591" alt="Screenshot 2024-02-07 at 10 48 51 AM" src="https://github.com/glific/docs/assets/141305477/87adef8e-1858-4aa6-8b46-7f976cfbb9fb">
<img width="709" alt="Screenshot 2024-02-07 at 10 53 07 AM" src="https://github.com/glific/docs/assets/141305477/c9da66dd-f1b6-49b5-b1c9-ad4c68820ccb">

(Sample flow)[https://drive.google.com/file/d/1jl0NWn73YlK1qMRedaPnGCQwDKHfG_7j/view?usp=sharing]


3. Get the user question 
4. In `call a webhook` node, select `function` and paste function name as `parse_via_chat_gpt`
   
  <img width="684" alt="Screenshot 2024-02-07 at 10 52 49 AM" src="https://github.com/glific/docs/assets/141305477/f1165b6b-483c-43b4-9e8d-7bb6044d6e24">

5. Share the following function body 
 ` {
  "contact": "@contact",
  "results": "@results",
  "question_text": "@results.question" 
  }`

<img width="711" alt="Screenshot 2024-02-07 at 10 53 21 AM" src="https://github.com/glific/docs/assets/141305477/65622c0e-2dfb-41fb-8f6d-a836e8a0f81d">
  
6. The response from GPT is shown as `@results.webhookresultname.parsed_msg`, in the given example `gpt_response` is the webhook result name. 


## Limitations 
1. At present, this is simple question answer with the GPT model 
2. Selection of GPT model being used is hardcoded 
3. Additional system prompt cannot be done 

Reach out to the Glific team to flag any further customizations to this functionality
