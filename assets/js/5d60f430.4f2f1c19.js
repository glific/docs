"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3297],{5207:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(4848),i=n(8453);const o={},r=void 0,l={id:"Product Features/Flows/Flow Variables/Flow variables vs Contact variables",title:"Flow variables vs Contact variables",description:"### 2 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Intermediate",source:"@site/docs/3. Product Features/03. Flows/3. Flow Variables/02. Flow variables vs Contact variables.md",sourceDirName:"3. Product Features/03. Flows/3. Flow Variables",slug:"/Product Features/Flows/Flow Variables/Flow variables vs Contact variables",permalink:"/docs/docs/Product Features/Flows/Flow Variables/Flow variables vs Contact variables",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Product Features/03. Flows/3. Flow Variables/02. Flow variables vs Contact variables.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Predefined Contact Variables in Glific",permalink:"/docs/docs/Product Features/Flows/Flow Variables/Predefined Contact Variables in Glific"},next:{title:"List of Custom Contact Variables created in Flows",permalink:"/docs/docs/Product Features/Flows/Flow Variables/List of Custom Contact Variables created in Flows"}},a={},c=[{value:"<strong>2 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0<code>Intermediate</code></strong>",id:"2-minute-read--------------------------------------------------------intermediate",level:3},{value:"Registration Flow",id:"registration-flow",level:2},{value:"Survey Flow",id:"survey-flow",level:2}];function d(e){const s={blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.h3,{id:"2-minute-read--------------------------------------------------------intermediate",children:(0,t.jsxs)(s.strong,{children:["2 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",(0,t.jsx)(s.code,{children:"Intermediate"})]})}),"\n"]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"There are two types of variable substitution you can use in flow editors :"})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Flow level (",(0,t.jsx)(s.code,{children:"@results"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:["Contact level (",(0,t.jsx)(s.code,{children:"@contact"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Going by the basic definition",(0,t.jsx)(s.code,{children:"@results"}),"can be used only on a particular flow and",(0,t.jsx)(s.code,{children:"@contact"}),"variables can be used in any flow. Let\u2019s see some use cases."]}),"\n",(0,t.jsxs)(s.p,{children:["You may want to store the value/input received from contacts and then use it as a variable especially when sending a message/flow to a large scale of users ex. Hi ",(0,t.jsx)(s.code,{children:"@contact.name"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"These variables can be used on a flow"}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:"can be fetched and used in another workflow."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["To use the variable value in the ",(0,t.jsx)(s.strong,{children:"same workflow"})," use ",(0,t.jsx)(s.em,{children:"@results.field.input"})," in ",(0,t.jsx)(s.code,{children:"Results"})," field in ",(0,t.jsx)(s.code,{children:"Wait for response"})," node or use it in ",(0,t.jsx)(s.code,{children:"send message"})," node to view the value in the chat flow."]}),"\n",(0,t.jsxs)(s.li,{children:["To use the variable value in ",(0,t.jsx)(s.strong,{children:"another workflow"})," use ",(0,t.jsx)(s.em,{children:"@contact.field.fieldname"})," in any other work flow in ",(0,t.jsx)(s.code,{children:"send message"})," node to view the value in the that chat flow."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Example use case: Suppose in the Registration workflow where you get a contact to register with your NGO, you ask for basic contact details for registration."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/219549246-2b433c68-3785-406f-8db7-d5b7faac5fe5.png",alt:"image"})}),"\n",(0,t.jsx)(s.h2,{id:"registration-flow",children:"Registration Flow"}),"\n",(0,t.jsx)(s.p,{children:"Sample workflow to get graduate students to register for advanced classes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/219549260-7fd2c7e9-1a79-4e99-a820-4bbfa593e5f2.png",alt:"image"})}),"\n",(0,t.jsx)(s.p,{children:"In this example, the contact information has been captured in the below variables (note the \u2018wait for response\u2019 blocks). This will show the value of the variables entered by contact in the flow."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.contact_name.input"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.contact_email.input"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.college_name.input"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.college_year.input"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If you want to show the category of the variable, then you can use ",(0,t.jsx)(s.code,{children:"category"})," in place of ",(0,t.jsx)(s.code,{children:"input"})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.contact_name.category"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.contact_email.category"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.college_name.category"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@results.college_year.category"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/219549272-4dc805c2-06ea-4a68-915d-621b148cf15c.png",alt:"image"})}),"\n",(0,t.jsx)(s.h2,{id:"survey-flow",children:"Survey Flow"}),"\n",(0,t.jsx)(s.p,{children:"The second workflow has been created to get the feedback of the students who have attended the classes."}),"\n",(0,t.jsx)(s.p,{children:"In this workflow, the feedback and sending the responses back to the user who has participated in the survey has been captured. The contact information which was saved in the Registration workflow can also be fetched here and used in the responses."}),"\n",(0,t.jsx)(s.p,{children:"Contact information is fetched with the below syntax for required variables,"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@contact.fields.contactname"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@contact.fields.email"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@contact.fields.collegename"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"@contact.fields.collegeyear"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/219549290-fdc21f0b-1fc7-4df8-92d0-3d998fdbae32.png",alt:"image"})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var t=n(6540);const i={},o=t.createContext(i);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);