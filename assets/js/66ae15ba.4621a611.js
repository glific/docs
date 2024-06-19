"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8560],{9248:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const o={},a=void 0,l={id:"Integrations/RAG using OpenAI file search assistant",title:"RAG using OpenAI file search assistant",description:"3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Advanced",source:"@site/docs/4. Integrations/RAG using OpenAI file search assistant.md",sourceDirName:"4. Integrations",slug:"/Integrations/RAG using OpenAI file search assistant",permalink:"/docs/docs/Integrations/RAG using OpenAI file search assistant",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/RAG using OpenAI file search assistant.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GPT integration for image recognition",permalink:"/docs/docs/Integrations/GPT integration for image recognition"},next:{title:"Setting up Exotel",permalink:"/docs/docs/Integrations/Setting up Exotel"}},r={},c=[{value:"Question answer (in text) over custom knowledge base using OpenAI&#39;s assistant APIs",id:"question-answer-in-text-over-custom-knowledge-base-using-openais-assistant-apis",level:2},{value:"How to get started",id:"how-to-get-started",level:2},{value:"Pricing",id:"pricing",level:2},{value:"How it will work",id:"how-it-will-work",level:2},{value:"Using the webhook for OpenAI Assistants call in a Glific flow",id:"using-the-webhook-for-openai-assistants-call-in-a-glific-flow",level:2},{value:"Limitations",id:"limitations",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["###",(0,t.jsxs)(s.strong,{children:["3 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,t.jsx)(s.code,{children:"Advanced"})]})]}),"\n",(0,t.jsx)(s.h2,{id:"question-answer-in-text-over-custom-knowledge-base-using-openais-assistant-apis",children:"Question answer (in text) over custom knowledge base using OpenAI's assistant APIs"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Provide your documents, and system prompt, get GPT model to answer questions of your users over WhatsApp from the provided documents, with the ability to handle the follow up questions asked by the users"})})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"This is the implementation of RAG system provided by OpenAI in Glific"})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-get-started",children:"How to get started"}),"\n",(0,t.jsx)(s.p,{children:"In this implementation, NGOs must provide the following to Glific team"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The files being used as knowledge base"}),"\n",(0,t.jsx)(s.li,{children:"A system prompt (Glific team can help in this based on use case)"}),"\n",(0,t.jsx)(s.li,{children:"Glific team will create the assistant in Glific's OpenAI account"}),"\n",(0,t.jsxs)(s.li,{children:["Glific team will provide the ",(0,t.jsx)(s.code,{children:"assistant_id"})," to reference in the webhook calls"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"As per the publication of this document, the organization does not need to have a OpenAI API account. Glific's account will be used."}),"\n",(0,t.jsx)("img",{width:"485",alt:"Screenshot 2024-06-05 at 12 48 03\u202fPM",src:"https://github.com/glific/docs/assets/141305477/bba000f8-4066-4eaf-b865-c47413e024e8"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"Above is the representative image of the assistant which will be created in OpenAI's playground by Glific team on NGO's behalf"})}),"\n",(0,t.jsx)(s.h2,{id:"pricing",children:"Pricing"}),"\n",(0,t.jsx)(s.p,{children:"NGOs can use this feature for free by following this document"}),"\n",(0,t.jsx)(s.h2,{id:"how-it-will-work",children:"How it will work"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Once the flow is initiated, the user is prompted to ask their question"}),"\n",(0,t.jsx)(s.li,{children:"Webhook nodes have to be used with relevant parameters to generate get the responses"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"using-the-webhook-for-openai-assistants-call-in-a-glific-flow",children:"Using the webhook for OpenAI Assistants call in a Glific flow"}),"\n",(0,t.jsx)("img",{width:"867",alt:"Screenshot 2024-06-05 at 12 22 00\u202fPM",src:"https://github.com/glific/docs/assets/141305477/5021fa87-80ee-4e54-9d23-e9f17ba17358"}),"\n",(0,t.jsxs)(s.ol,{start:"0",children:["\n",(0,t.jsxs)(s.li,{children:["Get the sample flow here ",(0,t.jsx)(s.a,{href:"https://drive.google.com/file/d/1PBcaLT3paJ8gKAeJEdLUuSPf-nxpHYKe/view?usp=sharing",children:"Sample flow\n"})]}),"\n",(0,t.jsx)(s.li,{children:"Get the user question"}),"\n",(0,t.jsxs)(s.li,{children:["In call a webhook node, select function and paste function name as ",(0,t.jsx)(s.code,{children:"filesearch-gpt"})]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"541",alt:"Screenshot 2024-06-05 at 12 25 17\u202fPM",src:"https://github.com/glific/docs/assets/141305477/93b24d77-84c4-4981-8ae7-15f07f0dde02"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.code,{children:"function body"})," and pass the following parameter\n",(0,t.jsx)(s.code,{children:'{   "question": "@results.flowresult",   "assistant_id": "asst_xxxxx" }'})]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["in ",(0,t.jsx)(s.code,{children:"question"})," parameter pass the flow variable containing the question asked by the user"]}),"\n",(0,t.jsxs)(s.li,{children:["in ",(0,t.jsx)(s.code,{children:"assistant_id"}),' pass the assistant id obtained from Glific team in step 4 of "how to get started"']}),"\n"]}),"\n",(0,t.jsx)("img",{width:"546",alt:"Screenshot 2024-06-05 at 12 26 46\u202fPM",src:"https://github.com/glific/docs/assets/141305477/2f4ce500-3720-4534-a45d-4074bc7f8aab"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The response generated will be printed as @results.webhookresultname.message, in the given example filesearch is the webhook result name. (see the first image)"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["To answer the subsequent questions based on the context of the previous conversation, the subsequent webhook pass the additional parameter called ",(0,t.jsx)(s.code,{children:"thread_id"}),". This parameter has to have the value of ",(0,t.jsx)(s.code,{children:"@results.previouswebhookname.thread_id"}),'. In the example shown, the previous webhook result name is "filesearch"']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"538",alt:"Screenshot 2024-06-05 at 12 32 19\u202fPM",src:"https://github.com/glific/docs/assets/141305477/30267540-a1ff-4c6d-a866-11d037195d2f"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:"this is the function body passed in the subsequent webhooks to answer follow up questions"})}),"\n",(0,t.jsx)(s.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"The changes in the knowledge base, or the prompt have to be routed through the glific team"}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);