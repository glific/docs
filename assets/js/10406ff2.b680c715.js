"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2236],{9388:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=n(4848),o=n(8453);const i={},r=void 0,a={id:"WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups",title:"Google Sheets Integration For WhatsApp Groups",description:"5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Beginner",source:"@site/docs/WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups.md",sourceDirName:"WhatsApp Groups Automation",slug:"/WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups",permalink:"/docs/docs/WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Use of Google Sheets To Update Contact Variables",permalink:"/docs/docs/Use Cases/Use of Google Sheets To Update Contact Variables"},next:{title:"Onboarding for new NGOs",permalink:"/docs/docs/WhatsApp Groups Automation/Onboarding for new NGOs"}},h={},l=[{value:"<strong>5 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Beginner</code></strong>",id:"5-minute-read-------------------------------------------------------------beginner",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Things to keep in mind",id:"things-to-keep-in-mind",level:2},{value:"When to use the Google Sheets Integration",id:"when-to-use-the-google-sheets-integration",level:2},{value:"How to implement google sheets to read messages",id:"how-to-implement-google-sheets-to-read-messages",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"5-minute-read-------------------------------------------------------------beginner",children:(0,t.jsxs)(s.strong,{children:["5 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,t.jsx)(s.code,{children:"Beginner"})]})}),"\n",(0,t.jsx)(s.h1,{id:"whatsapp-groups-and-google-sheets",children:"WhatsApp Groups and Google Sheets"}),"\n",(0,t.jsx)(s.p,{children:"This integration is to enable sending content from google sheets to WhatsApp Groups using the Glific flows."}),"\n",(0,t.jsx)(s.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(s.p,{children:["Google cloud platform set up should be completed as per this ",(0,t.jsx)(s.a,{href:"https://glific.github.io/docs/docs/Onboarding/GCS%20Setup/Google%20Cloud%20Storage%20Setup",children:"document"})," to enable reading of google sheets"]}),"\n",(0,t.jsx)(s.h2,{id:"things-to-keep-in-mind",children:"Things to keep in mind"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"For flows which are being created to send messages to WhatsApp Groups,"}),"\n",(0,t.jsx)(s.li,{children:"Only the first send message node will work."}),"\n",(0,t.jsx)(s.li,{children:"Subsequent send message nodes or wait for response nodes in the flow have no effect."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"when-to-use-the-google-sheets-integration",children:"When to use the Google Sheets Integration"}),"\n",(0,t.jsx)(s.p,{children:"Some of the use cases where using google sheets integration to read the content from to send it to groups:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"When recurring triggers have to be scheduled for groups which send message based on logic such as date of the month, sequence of the message etc."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ex: two messages need to be sent per week in sequence of messages."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"When some part of the content needs to be altered based on the group names."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ex: the images being sent along with the messages to groups need to be varied based on the group name"}),"\n",(0,t.jsx)(s.li,{children:"Ex: some content of the message needs to be varied based on the group name."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"how-to-implement-google-sheets-to-read-messages",children:"How to implement google sheets to read messages"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Linking the readable google sheets"}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.code,{children:"google sheets"})," in the ",(0,t.jsx)(s.code,{children:"flows"})]}),"\n",(0,t.jsxs)(s.li,{children:["Create the ",(0,t.jsx)(s.code,{children:"Readable"})," google sheet by, adding the link, giving it an appropriate name, and selecting read option. Also select \u201cauto sync\u201d option"]}),"\n",(0,t.jsx)(s.li,{children:"Ensure the google sheet being linked as \u201canyone with link can read\u201d access."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"768",alt:"Screenshot 2024-12-17 at 6 28 51\u202fPM",src:"https://github.com/user-attachments/assets/ee668bef-d2bb-49ec-a5aa-95e3996e9774"}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsx)(s.li,{children:"Creating the google sheet with \u201cKey\u201d and the custom content that needs to be sent"}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Following values can be used as keys"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Group names: Can be got by taking an export of field called ",(0,t.jsx)(s.code,{children:"label"})," from the table named ",(0,t.jsx)(s.code,{children:"wa_groups"})," from BigQuery tables. Use ",(0,t.jsx)(s.code,{children:"group.label"})," as the parameter to be passed to the google sheet in the ",(0,t.jsx)(s.code,{children:"Link google sheet"})," node"]}),"\n",(0,t.jsx)(s.li,{children:"Custom created group fields: Read the next section to know how to create and update group fields."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"The first columns of the google sheet has to have the header \u201cKey\u201d"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Provide the \u201ccontent\u201d to be sent in the subsequent columns"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"501",alt:"Screenshot 2024-12-17 at 6 29 23\u202fPM",src:"https://github.com/user-attachments/assets/42d454d8-adfc-4378-a6b9-dd0b3329f36d"}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsx)(s.li,{children:"Creating and updating the group fields based on which the custom content can be sent."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Make sure the value of the group variable is initiated (using background flows) and is being updated at an appropriate point in the flow (if needed)"}),"\n"]}),"\n",(0,t.jsx)("img",{width:"700",alt:"Screenshot 2024-12-17 at 6 32 48\u202fPM",src:"https://github.com/user-attachments/assets/ec98f8e5-04ca-4168-b18d-3c3bc64805de"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To check if the group fields are created and initialized. Go to ",(0,t.jsx)(s.code,{children:"Group Chats"}),", and go to find the ",(0,t.jsx)(s.code,{children:"View Group Details"})]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["**",(0,t.jsx)("img",{width:"1296",alt:"Screenshot 2024-12-17 at 7 00 07\u202fPM",src:"https://github.com/user-attachments/assets/d559be9f-4904-4326-b216-93432a1e9b70"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Click on ",(0,t.jsx)(s.code,{children:"Details"})," to see the values of the group fields created and assiciated with the given group."]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"965",alt:"Screenshot 2024-12-17 at 6 59 21\u202fPM",src:"https://github.com/user-attachments/assets/94264381-10f4-4f97-9e23-d4f18634301f"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Use the \u201cLink Google Sheet\u201d node and use the following options"}),"\n"]}),"\n",(0,t.jsx)("img",{width:"679",alt:"Screenshot 2024-12-17 at 6 30 12\u202fPM",src:"https://github.com/user-attachments/assets/ca05b879-d210-4218-92da-d680ec505e2a"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Provide the parameter / group variable based on which the custom content should be sent to the group."}),"\n"]}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsx)(s.li,{children:"Using the combination of \u201clink google sheet\u201d node as well as \u201cupdate the group field\u201d node in the flow editor to implement the desired logic."}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Below is an example of how group fields can be used to send messages based on a counter group variable."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"831",alt:"Screenshot 2024-12-17 at 6 44 44\u202fPM",src:"https://github.com/user-attachments/assets/fa8c3a34-c9b7-47f3-96b4-22528f617a75"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"In the given example, same flow can be used to send sequential messages to the WhatsApp groups as the counter keeps on incrementing after each time the flow has been broadcast to the group."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"686",alt:"Screenshot 2024-12-17 at 6 40 47\u202fPM",src:"https://github.com/user-attachments/assets/86677ac0-6c0e-4037-846e-496145405be7"}),"\n",(0,t.jsx)(s.p,{children:"Please reach out to Glific team over discord in case of queries or further guidance on how google sheets integration can be used to simplify and automate scheduling messages to groups."})]})}function c(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>a});var t=n(6540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);