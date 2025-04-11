"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6480],{8972:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=s(4848),a=s(8453);const o={},i=void 0,c={id:"Use Cases/Clear Flows: Resetting Contact Variables for Testing",title:"Clear Flows: Resetting Contact Variables for Testing",description:"### 4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Advanced",source:"@site/docs/Use Cases/Clear Flows: Resetting Contact Variables for Testing.md",sourceDirName:"Use Cases",slug:"/Use Cases/Clear Flows: Resetting Contact Variables for Testing",permalink:"/docs/docs/Use Cases/Clear Flows: Resetting Contact Variables for Testing",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Use Cases/Clear Flows: Resetting Contact Variables for Testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AI Assistants To Send Files As Attachments",permalink:"/docs/docs/Use Cases/AI Assistants To Send Files As Attachments"},next:{title:"Use of Google Sheets To Update Contact Variables",permalink:"/docs/docs/Use Cases/Use of Google Sheets To Update Contact Variables"}},r={},l=[{value:"<strong>4 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Advanced</code></strong>",id:"4-minute-read-------------------------------------------------------------advanced",level:3},{value:"Clear Flows",id:"clear-flows",level:2},{value:"Summary",id:"summary",level:3},{value:"Premise",id:"premise",level:3},{value:"Example Use Case",id:"example-use-case",level:3},{value:"Creating a clear flow",id:"creating-a-clear-flow",level:3},{value:"How to run this flow",id:"how-to-run-this-flow",level:3},{value:"To check if the flow has worked properly",id:"to-check-if-the-flow-has-worked-properly",level:3},{value:"Where else can these be used",id:"where-else-can-these-be-used",level:3}];function h(e){const t={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.h3,{id:"4-minute-read-------------------------------------------------------------advanced",children:(0,n.jsxs)(t.strong,{children:["4 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,n.jsx)(t.code,{children:"Advanced"})]})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"clear-flows",children:"Clear Flows"}),"\n",(0,n.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,n.jsx)(t.p,{children:"Flows used to clear or reset the values updated in contact variables. This is a useful tool for testing purposes. By implementing this logic, testers can simulate conditions like onboarding the contact for the first time, and any other logic that is implemented with the use of different contact variables and \u201csplit by\u201d conditions in the flow"}),"\n",(0,n.jsx)(t.h3,{id:"premise",children:"Premise"}),"\n",(0,n.jsx)(t.p,{children:"There are flows created which use contact variables as flags or counters, and a contact going through the flows experiences the conversation based on the state of the contact variables."}),"\n",(0,n.jsx)(t.h3,{id:"example-use-case",children:"Example Use Case"}),"\n",(0,n.jsx)(t.p,{children:"Clearing the status of registration, in order to test the onboarding flow which implements the logic that prevents the pre-registered contacts from going through the flow."}),"\n",(0,n.jsx)("img",{width:"765",alt:"Screenshot 2025-03-07 at 3 25 22\u202fPM",src:"https://github.com/user-attachments/assets/725dc6c2-c136-41c4-a69f-dac39a5bdfba"}),"\n",(0,n.jsx)(t.p,{children:"The screenshot shows implementation of the \u201cspliy by a contact field\u201d condition, which checks if the contact variable called \u201cregistered\u201d has a value of \u201cy\u201d. And if this condition is met then the contact can bypass the flow."}),"\n",(0,n.jsx)(t.p,{children:"For this logic to work, for the contacts who do not meet this condition, the contact variable called \u201cregistered\u201d is updated using \u201cupdate the contact\u201d node. And the value of the contact variable is set to \u201cy\u201d"}),"\n",(0,n.jsx)("img",{width:"378",alt:"Screenshot 2025-03-07 at 3 26 07\u202fPM",src:"https://github.com/user-attachments/assets/9371d5f7-f50f-45ff-b00d-6f2790a270a3"}),"\n",(0,n.jsx)(t.p,{children:"This ensures that any contact who has gone through this part of the flow will not have to repeat the flow again."}),"\n",(0,n.jsx)(t.p,{children:"This makes it so that any testers who have tested the flow once, cannot then test the flow again, after having made some changes. This is where a \u201cClear\u201d flow can come in handy."}),"\n",(0,n.jsx)(t.h3,{id:"creating-a-clear-flow",children:"Creating a clear flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"This is a simple flow, which serves to clear/ reset the value of any contact variable."}),"\n",(0,n.jsx)(t.li,{children:"This flow need not have any \u201csend message\u201d or \u201cwait for response\u201d nodes."}),"\n",(0,n.jsx)(t.li,{children:"It should contact \u201cupdate the contact\u201d nodes, with the required contact variables selected and the field for value to be updated can be kept empty."}),"\n",(0,n.jsx)(t.li,{children:"Conversely the value field in the \u201cupdate the contact\u201d node can contain any other static value needed for testing purposes."}),"\n"]}),"\n",(0,n.jsx)("img",{width:"1036",alt:"Screenshot 2025-03-07 at 3 26 50\u202fPM",src:"https://github.com/user-attachments/assets/1fd2a58d-cd44-4f0b-ba11-3302beb2ce9b"}),"\n",(0,n.jsx)(t.h3,{id:"how-to-run-this-flow",children:"How to run this flow"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"As a tester, one can either self initiate the flow by entering the keyword"}),"\n",(0,n.jsxs)(t.li,{children:["One can other wise start the flow, by navigating to ",(0,n.jsx)(t.code,{children:"chats"}),", finding the ",(0,n.jsx)(t.code,{children:"contact"})," among the chats, and manually ",(0,n.jsx)(t.code,{children:"starting the flow"})," by accessing the actions from the the drop down next to the name of the contact."]}),"\n"]}),"\n",(0,n.jsx)("img",{width:"1028",alt:"Screenshot 2025-03-07 at 3 27 22\u202fPM",src:"https://github.com/user-attachments/assets/5201900c-b772-4660-8eaf-2a282d221c21"}),"\n",(0,n.jsx)(t.h3,{id:"to-check-if-the-flow-has-worked-properly",children:"To check if the flow has worked properly"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Go to the drop down menu next to the name"}),"\n",(0,n.jsxs)(t.li,{children:["Go to the ",(0,n.jsx)(t.code,{children:"View contact profile"})]}),"\n",(0,n.jsxs)(t.li,{children:["Go to ",(0,n.jsx)(t.code,{children:"Details"}),". This section lists all the contact variables and their present state for the given contact."]}),"\n",(0,n.jsx)(t.li,{children:"To check if the clear flow has worked, navigate to find the contact variables the flow was designed to reset. And see that the value of the contact variable is updated as per the clear flow."}),"\n"]}),"\n",(0,n.jsx)("img",{width:"1002",alt:"Screenshot 2025-03-07 at 3 28 02\u202fPM",src:"https://github.com/user-attachments/assets/ac0fb649-bd00-4888-abbe-9adb23d12d7f"}),"\n",(0,n.jsx)(t.h3,{id:"where-else-can-these-be-used",children:"Where else can these be used"}),"\n",(0,n.jsx)(t.p,{children:"This principle can be used to manually reset or hard code certain values to the contact variables or any other variables being used in the flows as logic gates or as way to control the user experience."})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>c});var n=s(6540);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);