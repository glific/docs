"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3783],{1083:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var t=s(4848),o=s(8453);const i={},l=void 0,r={id:"WhatsApp Groups Automation/Sending Polls To WhatsApp Groups",title:"Sending Polls To WhatsApp Groups",description:"5 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Beginner",source:"@site/docs/WhatsApp Groups Automation/Sending Polls To WhatsApp Groups.md",sourceDirName:"WhatsApp Groups Automation",slug:"/WhatsApp Groups Automation/Sending Polls To WhatsApp Groups",permalink:"/docs/docs/WhatsApp Groups Automation/Sending Polls To WhatsApp Groups",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/WhatsApp Groups Automation/Sending Polls To WhatsApp Groups.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Onboarding for new NGOs",permalink:"/docs/docs/WhatsApp Groups Automation/Onboarding for new NGOs"},next:{title:"Setting up WhatsApp Groups Automation for existing NGOs",permalink:"/docs/docs/WhatsApp Groups Automation/Setting up WhatsApp Groups Automation for existing NGOs"}},a={},p=[{value:"<strong>5 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Beginner</code></strong>",id:"5-minute-read-------------------------------------------------------------beginner",level:3},{value:"Sending Polls to WhatsApp Group Collections.",id:"sending-polls-to-whatsapp-group-collections",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Create the poll in Glific platform",id:"create-the-poll-in-glific-platform",level:3},{value:"Create a flow to send the poll",id:"create-a-flow-to-send-the-poll",level:3},{value:"Sending the poll to required WhatsApp Group or Collection.",id:"sending-the-poll-to-required-whatsapp-group-or-collection",level:3},{value:"Polls can also be used from Google sheet, to send different polls based on the date or any other incremental counter logic.",id:"polls-can-also-be-used-from-google-sheet-to-send-different-polls-based-on-the-date-or-any-other-incremental-counter-logic",level:3},{value:"Getting the data of responses",id:"getting-the-data-of-responses",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"5-minute-read-------------------------------------------------------------beginner",children:(0,t.jsxs)(n.strong,{children:["5 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,t.jsx)(n.code,{children:"Beginner"})]})}),"\n",(0,t.jsx)(n.h2,{id:"sending-polls-to-whatsapp-group-collections",children:"Sending Polls to WhatsApp Group Collections."}),"\n",(0,t.jsx)(n.p,{children:"Glific platform can be used to create polls. Send or scheudule the polls in advance to multiple groups."}),"\n",(0,t.jsx)(n.h3,{id:"pre-requisites",children:"Pre-requisites"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["WhatsApp Groups Integration should be enabled. ",(0,t.jsx)(n.a,{href:"https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/Setting%20up%20WhatsApp%20Groups%20Automation%20for%20existing%20NGOs",children:"Read here"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-the-poll-in-glific-platform",children:"Create the poll in Glific platform"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"WhatsApp Polls"})," under the ",(0,t.jsx)(n.code,{children:"WhatsApp Groups"})," section"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Click on ",(0,t.jsx)(n.code,{children:"Create"})," and provide the title, the question of the poll in content and the options. Ensure you make the right choice for allowing multiple responses."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Poll questions are limited to 255 characters."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Under Options enter up to 12 poll options."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Poll options are limited to 100 characters."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To allow users voting for more than one option, turn on ",(0,t.jsx)(n.code,{children:"Allow multiple answers"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"1410",alt:"Screenshot 2025-02-14 at 2 51 54\u202fPM",src:"https://github.com/user-attachments/assets/0aba91ac-7871-4a30-badf-8d075aa57458"}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsxs)(n.li,{children:["Click on ",(0,t.jsx)(n.code,{children:"Save"}),". This creates the poll."]}),"\n",(0,t.jsx)(n.li,{children:"Copy the UUID"}),"\n"]}),"\n",(0,t.jsx)("img",{width:"1404",alt:"Screenshot 2025-02-14 at 2 51 07\u202fPM",src:"https://github.com/user-attachments/assets/5c3a4768-9211-46ed-8089-68f9f78485a2"}),"\n",(0,t.jsx)(n.h3,{id:"create-a-flow-to-send-the-poll",children:"Create a flow to send the poll"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new flow"}),"\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"Call a webhook"})," node. Select ",(0,t.jsx)(n.code,{children:"Function"})," from the dropdown and type the following function name to send the poll ",(0,t.jsx)(n.code,{children:"send_wa_group_poll"})]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"711",alt:"Screenshot 2025-02-14 at 2 49 58\u202fPM",src:"https://github.com/user-attachments/assets/67334573-d4b4-456d-8f27-50249e6126a0"}),"\n",(0,t.jsxs)(n.p,{children:["Go to Function ",(0,t.jsx)(n.code,{children:"FUNCTION body"})," and pass the following parameters\n",(0,t.jsx)(n.code,{children:'{   "wa_group": "@wa_group",  "poll_uuid": "" }'})]}),"\n",(0,t.jsx)("img",{width:"703",alt:"Screenshot 2025-02-14 at 2 50 43\u202fPM",src:"https://github.com/user-attachments/assets/1972b5da-1e94-489d-af94-d3d53e2b0b02"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:['\u201cpoll_uuid\u201d: "" from the polls list paging by selecting on ',(0,t.jsx)(n.code,{children:"Copy UUID"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"\u201cwa_group\u201d: \u201c@wa_group\u201d will remain as is."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"This completes the flow"}),"\n"]}),"\n",(0,t.jsx)("img",{width:"850",alt:"Screenshot 2025-02-14 at 4 08 36\u202fPM",src:"https://github.com/user-attachments/assets/717abce9-faf1-496e-b051-d2831fd4fa7f"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["4. Please note: No further ",(0,t.jsx)(n.code,{children:"send message node"})," is needed to send the poll to WhatsApp group. The webhook success response sends the poll with the given poll uuid to the groups."]})}),"\n",(0,t.jsxs)(n.p,{children:["Here is a ",(0,t.jsx)(n.a,{href:"https://drive.google.com/file/d/13CyRD8Gmq0J1J_lICrwIq55TBbwHND90/view?usp=sharing",children:"SAMPLE FLOW"}),". To use this flow, go to the link, download the csv, and upload this flow using ",(0,t.jsx)(n.code,{children:"import a flow"})," in your Glific instance. Change the ",(0,t.jsx)(n.code,{children:"poll_uuid"})," in the webhook function body to match the ",(0,t.jsx)(n.code,{children:"poll_uuid"})," of the poll you have created in your Glific instace."]}),"\n",(0,t.jsx)(n.h3,{id:"sending-the-poll-to-required-whatsapp-group-or-collection",children:"Sending the poll to required WhatsApp Group or Collection."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["This can be done by setting a ",(0,t.jsx)(n.a,{href:"https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/WhatsApp%20Groups%20Automation%20Features#scheduling-messages-and-media",children:"trigger to a WhatsApp Group Collection"})]}),"\n",(0,t.jsx)(n.li,{children:"Or the particular flow can be started for the WhatsApp Group by starting a flow for the group like shown below."}),"\n"]}),"\n",(0,t.jsx)("img",{width:"1410",alt:"Screenshot 2025-02-14 at 4 15 51\u202fPM",src:"https://github.com/user-attachments/assets/25c9cd63-3b5a-409d-99f7-1ee274d4a89c"}),"\n",(0,t.jsx)(n.h3,{id:"polls-can-also-be-used-from-google-sheet-to-send-different-polls-based-on-the-date-or-any-other-incremental-counter-logic",children:"Polls can also be used from Google sheet, to send different polls based on the date or any other incremental counter logic."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://glific.github.io/docs/docs/WhatsApp%20Groups%20Automation/WhatsApp%20Groups%20Automation%20Features#scheduling-messages-and-media",children:"Link a readable Google Sheet"})," in the Glific, which has the Key and poll uuids"]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"505",alt:"Screenshot 2025-02-14 at 4 17 07\u202fPM",src:"https://github.com/user-attachments/assets/529ad253-ef1a-4deb-9e8c-b295792aa0fd"}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Use Link a google sheet node to read the poll uuid from the sheet based on your choice of variables (could be date wise etc). Please note that above is just one example of how it can be used."}),"\n",(0,t.jsxs)(n.li,{children:["Call the webhook function ",(0,t.jsx)(n.code,{children:"send_wa_group_poll"})," and use the sheet result to populate the ",(0,t.jsx)(n.code,{children:"poll_uuid"})," in the function body of the webhook call."]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"932",alt:"Screenshot 2025-02-14 at 4 17 46\u202fPM",src:"https://github.com/user-attachments/assets/7c6aa69a-e6b2-4cba-a86d-58315c6bc078"}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"This flow picture is only to illustrate how google sheet can be used to send polls."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"getting-the-data-of-responses",children:"Getting the data of responses"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Responses to the polls are stored in the ",(0,t.jsx)(n.code,{children:"wa_messages"})," tables"]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"type"})," field stores the type of message being sent or received. Filtering for ",(0,t.jsx)(n.code,{children:"poll"})," under this field gives all the poll type text messages sent from the number to the groups"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"poll_content"})," field contains the json structure for the poll. This contains the entire poll body, options and the vote count."]}),"\n",(0,t.jsx)(n.li,{children:"At present it is possible to get only the no of responses to a particular option, and not which phone number has responded what."}),"\n",(0,t.jsx)(n.li,{children:"Following query creates a view to get the aggregated output of all the polls and its responses.  This can be further manipulated to get the responses for a particular poll across the various groups or drill down to responses from a particular group. (replace the xxxxxxxxxx with the table dataset from your chatbot. It is usually the phone number of your chatbot)"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"   WITH distinct_data AS (\n    SELECT \n      id,\n      wa_group_id,\n      wa_group_name,\n      MAX(body) AS body,\n      MAX(poll_content) AS poll_content,\n      MAX(inserted_at) as inserted_at\n    FROM \n      `tides-saas-309509.917834811114.wa_messages`\n    GROUP BY id, wa_group_id, wa_group_name\n  ),\n  parsed_data AS (\n    SELECT\n      id,\n      body,\n      wa_group_id,\n      wa_group_name,\n      JSON_EXTRACT_ARRAY(poll_content, '$.options') AS options,\n      inserted_at\n    FROM\n      distinct_data\n  )\n\n  SELECT \n    wa_group_id,\n    wa_group_name,\n    body,\n    JSON_EXTRACT_SCALAR(option, '$.name') AS option_name,\n    SUM(CAST(JSON_EXTRACT_SCALAR(option, '$.votes') AS INT64)) AS votes,\n    MAX(inserted_at) as inserted_at\n  FROM \n    parsed_data,\n    UNNEST(options) AS option\n  GROUP BY body, option_name, wa_group_id, wa_group_name\n"})}),"\n",(0,t.jsx)(n.p,{children:"**Points to note: **"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"While creating the poll, please populate the options you want to them to appear in when being read on WhatsApp"}),"\n",(0,t.jsx)(n.li,{children:"Poll once created cannot be edited, please review and test thoroughly before using it in actual groups."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>r});var t=s(6540);const o={},i=t.createContext(o);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);