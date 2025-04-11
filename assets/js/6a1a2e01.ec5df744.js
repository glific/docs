"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[840],{2698:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=s(4848),n=s(8453);const r={},o=void 0,i={id:"Use Cases/Use of Google Sheets To Update Contact Variables",title:"Use of Google Sheets To Update Contact Variables",description:"4 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Advanced",source:"@site/docs/Use Cases/Use of Google Sheets To Update Contact Variables.md",sourceDirName:"Use Cases",slug:"/Use Cases/Use of Google Sheets To Update Contact Variables",permalink:"/docs/docs/Use Cases/Use of Google Sheets To Update Contact Variables",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Use Cases/Use of Google Sheets To Update Contact Variables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clear Flows: Resetting Contact Variables for Testing",permalink:"/docs/docs/Use Cases/Clear Flows: Resetting Contact Variables for Testing"},next:{title:"Google Sheets Integration For WhatsApp Groups",permalink:"/docs/docs/WhatsApp Groups Automation/Google Sheets Integration For WhatsApp Groups"}},c={},h=[{value:"<strong>4 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Advanced</code></strong>",id:"4-minute-read-------------------------------------------------------------advanced",level:3},{value:"Summary",id:"summary",level:2},{value:"Overview",id:"overview",level:2},{value:"Google Sheets Integrations FTW",id:"google-sheets-integrations-ftw",level:2},{value:"Use case 1: Keywords and Meta Data with Google Sheets",id:"use-case-1-keywords-and-meta-data-with-google-sheets",level:3},{value:"Use case 2: Providing art class plans from a repository of PDFs.",id:"use-case-2-providing-art-class-plans-from-a-repository-of-pdfs",level:3},{value:"Use case 3: Fuzzy keyword matching to identify the closed actual keyword",id:"use-case-3-fuzzy-keyword-matching-to-identify-the-closed-actual-keyword",level:3},{value:"Use case 4: Storing the media submitted by teachers in structured folders in the google cloud storage bucket.",id:"use-case-4-storing-the-media-submitted-by-teachers-in-structured-folders-in-the-google-cloud-storage-bucket",level:3},{value:"Credits",id:"credits",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"4-minute-read-------------------------------------------------------------advanced",children:(0,a.jsxs)(t.strong,{children:["4 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,a.jsx)(t.code,{children:"Advanced"})]})}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"The blog details solutions implemented for Saturday Art Class using a combination of AI assistants, Google Sheets integration and a use of contact variables as flags and counters to route the teachers accessing the chatbot of Saturday Art Class. The main purpose of using the chatbot is to enable teachers to access art class plans which can be conducted for the grades she is teaching, and enable submission of pictures of art class conducted by the teachers in the simplest manner."}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(t.p,{children:"Problem statements that needed be solved"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Make the flows less complicated"}),": Specifically, reduce the steps and complexity involved to onboard new organization to start with the Art Programs, as well as make the flows customizable such that new partnerships can be done to serve a diverse set of requirements like reduce or increase the number of grades, or art class plans for grade or bypass submission of images for the teachers and so on."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"To solve the challenges faced in data analysis"}),": SArC team unable to find out how many art class are accessed by a particular teacher, which art class is the teacher doing at any given point in time and overall submission rates. Owing to the way"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Implement structured folders in Google Cloud Bucket"}),":  for storing the media shared by the teachers, such that all the media (pictures) from a partner org is stored in respective folders, and can be retrieved on a grade and art class number basis."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"google-sheets-integrations-ftw",children:"Google Sheets Integrations FTW"}),"\n",(0,a.jsx)(t.h3,{id:"use-case-1-keywords-and-meta-data-with-google-sheets",children:"Use case 1: Keywords and Meta Data with Google Sheets"}),"\n",(0,a.jsx)(t.p,{children:"Each partner org associated with the SArC, conducting SArC programs with their respective teachers is given a keyword. This keyword is used by the teacher throughout the journey of interacting with the chatbot over the course of the program. To come back week after week, access the art class plans, submit activities and get other support and resources."}),"\n",(0,a.jsx)("img",{width:"633",alt:"Screenshot 2025-04-10 at 4 21 07\u202fPM",src:"https://github.com/user-attachments/assets/1ab0bad0-1388-447b-bf51-297110049e6e"}),"\n",(0,a.jsx)(t.h3,{id:"use-case-2-providing-art-class-plans-from-a-repository-of-pdfs",children:"Use case 2: Providing art class plans from a repository of PDFs."}),"\n",(0,a.jsx)(t.p,{children:"With the following key considerations"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Provide a art class plan (PDF file) in the preferred language as well as a description of the art class plan being provided to the teacher."}),"\n",(0,a.jsx)(t.li,{children:"The teachers could be from Nursery to 8th grade, and could choose whichever grade she wants to teach in that week"}),"\n",(0,a.jsx)(t.li,{children:"Each grade has different art class plans."}),"\n",(0,a.jsx)(t.li,{children:"The art class plans should be shared to the teacher in sequential order, that is the teacher should not have to make decision on which plan number she has to get this week for any given class."}),"\n",(0,a.jsx)(t.li,{children:"A teacher should be able to access art class plans for more than one grade, but not multiple art class plans from the same grade. Owing to the fact that in a week  a teacher can go to multiple grades."}),"\n"]}),"\n",(0,a.jsx)("img",{width:"632",alt:"Screenshot 2025-04-10 at 4 21 31\u202fPM",src:"https://github.com/user-attachments/assets/ea2ed24d-fa2d-4503-8ebb-928f31d47ae9"}),"\n",(0,a.jsx)("img",{width:"632",alt:"Screenshot 2025-04-10 at 4 21 50\u202fPM",src:"https://github.com/user-attachments/assets/9ed6b381-8e4d-4e68-8033-7f80b67c550d"}),"\n",(0,a.jsx)(t.p,{children:"This required use of multiple contact variables as"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Counters of art class plan for each grade, so as to serve the next art class plan for that given grade whenever the teacher selects that particular grade. A counter for each grade starting from nursery to grade 8 was created to store this info and increment it logically so as to deliver the plans in a sequential manner."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Flags for art class plans for each grade, to ensure that a teacher is able to access only one art class plan at a time, and is redirected to submission of activity completion pictures if the same grade is chosen again. A flag variable for each grade starting from nursery to grade 8 was created to help direct the teacher into either delivery of art class plan or submission of art class plan based on journey of the teacher."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Contact variables to store the information of the grade and art class plan number being queried by the teacher at any given moment. This contact variable was created to deliver the art class plan after being pulled form the google sheet."}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Contact variable to store the information of grade and art class plan number being submitted in order to record the completion. This contact holds the information of the previous art class plan that the teacher needs to submit for any given grade."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"use-case-3-fuzzy-keyword-matching-to-identify-the-closed-actual-keyword",children:"Use case 3: Fuzzy keyword matching to identify the closed actual keyword"}),"\n",(0,a.jsx)(t.p,{children:"It happens that the teacher sometimes makes typos in entering the keyword ex: the expected keyword is cae, and the teacher by mistake enters cse or caw or something similar."}),"\n",(0,a.jsx)(t.p,{children:"A prototype solution to this problem is done with the help of AI assistants. The AI assistant is provided with the json file of all the possible keywords and which org do they represent as its knowledge base. The AI assistant is then prompted to find the nearest keyword considering the typo made by the teacher, and suggest the alternative keyword to try."}),"\n",(0,a.jsx)("img",{width:"626",alt:"Screenshot 2025-04-10 at 4 22 07\u202fPM",src:"https://github.com/user-attachments/assets/28604c49-fda4-431c-b59f-b063f31b686d"}),"\n",(0,a.jsx)(t.p,{children:"This AI flow is then made as a default flow. Default flows are triggered when a contact is not part of any flow, and sends keyword which is not linked to any active flow."}),"\n",(0,a.jsx)(t.h3,{id:"use-case-4-storing-the-media-submitted-by-teachers-in-structured-folders-in-the-google-cloud-storage-bucket",children:"Use case 4: Storing the media submitted by teachers in structured folders in the google cloud storage bucket."}),"\n",(0,a.jsx)(t.p,{children:"As SArC engages a numerous teachers, across numerous grades and has multiple partners (30+). It becomes important to be able to store the media such as pictures of art classes being completed by the teachers in a way that can be shared back to the partners and can be used in other communication material. And at another level this also helps to triangulate the progress made by the teachers from any particular org, in terms on actual engagement and completion of the program objectives."}),"\n",(0,a.jsx)(t.p,{children:"The requirement for incorporating such a structure is drafted here. In a gist, the media coming from a particular submission will be sorted into folders based on the values present in the contact variables as opposed to being dumped into the \u201cuploads\u201d folder of the google drive."}),"\n",(0,a.jsx)(t.p,{children:'An example folder structure. "Uploads -> TFI Mumbai -> Grade 1 ACP 1 -> http://\u2026..teacher-name.jpg"'}),"\n",(0,a.jsx)("img",{width:"632",alt:"Screenshot 2025-04-10 at 4 22 24\u202fPM",src:"https://github.com/user-attachments/assets/3fd684bc-53c5-4b7f-9568-321d3e4ecaeb"}),"\n",(0,a.jsx)(t.p,{children:"Similarly based on the contact variables of org names and present_grade_acp, the media being submitted by a teacher will be sorted from the get go into this folder structure."}),"\n",(0,a.jsx)(t.h2,{id:"credits",children:"Credits"}),"\n",(0,a.jsx)(t.p,{children:"Shoutout to Rukhmini Bhatia, Tanushree Patel and Surabhi Shinde from the Saturday Art Class team on holding their program deliverables and user experience to be created in the highest regard and pushing the Glific team to create the said experience with them. To Guatam Prakash, who laid a solid foundation through the previous iteration of implementing this program which ran successfully over the chatbot for a whole academic year."}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(t.p,{children:"This project involved implement a fairly complex logic that informs the user experience of the teachers participating in the SArC programs. And simplifying the experience of adding new partner orgs and customizing the experience for them by the SArC team through replicating the logic in a few steps instead of having to rewire the flows or create new flows from scratch."}),"\n",(0,a.jsx)(t.p,{children:"To understand more on the custom expressions used to make your chatbot flows more logic driven, refer this documentation."}),"\n",(0,a.jsxs)(t.p,{children:["Reach out to ",(0,a.jsx)(t.a,{href:"mailto:tejas@glific.org",children:"tejas@glific.org"})," to chat further on any details shared here."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var a=s(6540);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);