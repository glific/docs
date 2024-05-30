"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1038],{1889:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var o=n(4848),i=n(8453);const c={},t=void 0,r={id:"Product Features/Flows/Flow Actions/Call a webhook",title:"Call a webhook",description:"### 3 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Advanced",source:"@site/docs/3. Product Features/03. Flows/2. Flow Actions/11. Call a webhook.md",sourceDirName:"3. Product Features/03. Flows/2. Flow Actions",slug:"/Product Features/Flows/Flow Actions/Call a webhook",permalink:"/docs/docs/Product Features/Flows/Flow Actions/Call a webhook",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Product Features/03. Flows/2. Flow Actions/11. Call a webhook.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Save a result for this flow",permalink:"/docs/docs/Product Features/Flows/Flow Actions/Save a result for this flow"},next:{title:"Link Google Sheets",permalink:"/docs/docs/Product Features/Flows/Flow Actions/Link Google Sheets"}},l={},h=[{value:"<strong>3 minutes read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Advanced</code></strong>",id:"3-minutes-read-------------------------------------------------------------advanced",level:3},{value:"Using Webhooks in Glific",id:"using-webhooks-in-glific",level:2},{value:"Checking Webhook Logs",id:"checking-webhook-logs",level:2},{value:"Reference Article",id:"reference-article",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.h3,{id:"3-minutes-read-------------------------------------------------------------advanced",children:(0,o.jsxs)(s.strong,{children:["3 minutes read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,o.jsx)(s.code,{children:"Advanced"})]})}),"\n"]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Webhook calls are used to communicate with third-party applications within flows. They allow NGOs to receive and handle incoming messages, delivery receipts and other events from WhatsApp in a seamless and automated manner."})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"using-webhooks-in-glific",children:"Using Webhooks in Glific"}),"\n",(0,o.jsx)(s.p,{children:"Please have a look at the steps to call Webhooks in Glific."}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Receive the response from a contact in a variable."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661318-ed2b2fa8-2f4a-4b6b-a2f3-7c00b8aa36d2.png",alt:"image"})}),"\n",(0,o.jsxs)(s.ol,{start:"2",children:["\n",(0,o.jsxs)(s.li,{children:["Call Webhook in a node.","\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Choose to ",(0,o.jsx)(s.code,{children:"Call a webhook"})," in the dropdown in node action."]}),"\n",(0,o.jsxs)(s.li,{children:["Choose ",(0,o.jsx)(s.code,{children:"POST"})," in response type."]}),"\n",(0,o.jsxs)(s.li,{children:["Enter the ",(0,o.jsx)(s.code,{children:"URL"})," where you want a Webhook connection."]}),"\n",(0,o.jsxs)(s.li,{children:["Click on the ",(0,o.jsx)(s.code,{children:"Post Body"})," tab."]}),"\n",(0,o.jsx)(s.li,{children:"Enter the variables which you want to pass through the webhook."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{\n  "contact": "@contact",\n  "results": "@results",\n  "Emp_name": "Mohit"\n  "Emp_age": "@results.age.input"\n}\n'})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661350-bf2ce325-4fbf-4882-b947-10f7eb660f3f.png",alt:"image"})}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661387-ebb6e6c4-b675-4a26-ada3-d816f39c1f70.png",alt:"image"})}),"\n",(0,o.jsxs)(s.ol,{start:"3",children:["\n",(0,o.jsxs)(s.li,{children:["Click ",(0,o.jsx)(s.code,{children:"OK"})," to save the changes"]}),"\n"]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h1,{id:"use-webhook-response-in-the-flows",children:"Use webhook response in the flows"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"Let's say you make a webhook call (by using the above steps) and you want to use the response variable in the flow."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661423-cdbd967e-d435-48b3-982f-fe59cf08f51a.png",alt:"image"})}),"\n",(0,o.jsx)(s.p,{children:"For example, if you send a response like a below object"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:'{\n"success_message" : "You are onboarded.",\n"status_code": 200\n}\n'})}),"\n",(0,o.jsxs)(s.blockquote,{children:["\n",(0,o.jsx)(s.p,{children:"Please note that your webhook should always return a JSON object (not an array)."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Then you can use that response as ",(0,o.jsx)(s.strong,{children:"@results.mywebhook.success_message"})," Or if you want to use any other variable then it will be *",(0,o.jsxs)(s.em,{children:["@results.mywebhook.",(0,o.jsx)(s.em,{children:"YOUR_RESPONSE_OBJECT_KEY"})]})]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661557-e5e73775-1c71-4ea9-b2f2-81cf809db3ba.png",alt:"image"})}),"\n",(0,o.jsxs)(s.p,{children:["Here my webhook is a custom name you defined on your webhook node and ",(0,o.jsx)(s.strong,{children:"success_message"}),"  is the key of the response object you send back in a webhook call."]}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"checking-webhook-logs",children:"Checking Webhook Logs"}),"\n",(0,o.jsx)(s.p,{children:"Once the webhook setup is complete. You can test it by executing the flow in Glific. There may a case, the webhook is not set up correctly and there are some errors in Webhook calls."}),"\n",(0,o.jsxs)(s.p,{children:["Glific has ",(0,o.jsx)(s.strong,{children:"Webhook Logs"})," from where you can check the status of a Webhook call and see if it returned some errors."]}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Access ",(0,o.jsx)(s.code,{children:"Webhook logs"})," under the ",(0,o.jsx)(s.code,{children:"Flows"})," option from left panel."]}),"\n"]}),"\n",(0,o.jsx)("img",{width:"221",alt:"Screenshot 2024-03-06 at 3 13 42\u202fPM",src:"https://github.com/glific/docs/assets/141305477/179b8f35-1f72-499b-8271-9488d0eedbac"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Webhook logs page will show the results of your webhook calls with the below details","\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Time"}),"  - Time of the webhook call."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"URL"})," - The URL which is used in webhook call."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Status"})," - Success / Error"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Status Code"}),"- Status code returned from the webhook call."]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Error"})," - Error is an error returned. NULL in the case of success"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Method"})," - GET / POST"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Request Header"})," - Request header of the webhook call"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Request JSON"})," - JSON of the webhook call"]}),"\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"Response JSON"})," - JSON response received from the webhook call."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)("img",{width:"1451",alt:"Screenshot 2024-03-06 at 3 12 51\u202fPM",src:"https://github.com/glific/docs/assets/141305477/d7f9dffe-2294-42e3-9b93-8bc3bfa38c38"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsx)(s.li,{children:"You can click on the data received in the logs to copy or view the full response."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661790-0d79be95-c208-4e49-9f4c-5ff56c1b1a65.png",alt:"image"})}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.code,{children:"View"})," will open up the response received in a pop-up window. You can check or copy the text to know more details of the response."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/212661806-2bdf38df-5791-492e-9c4f-a6c3fc7e919b.png",alt:"image"})}),"\n",(0,o.jsx)(s.hr,{}),"\n",(0,o.jsx)(s.h2,{id:"reference-article",children:"Reference Article"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://glific.github.io/slate/#webhooks",children:"Glific Webhooks"})}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.a,{href:"https://github.com/glific/recipes",children:"Code examples to use Webhooks in Glific"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var o=n(6540);const i={},c=o.createContext(i);function t(e){const s=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(c.Provider,{value:s},e.children)}}}]);