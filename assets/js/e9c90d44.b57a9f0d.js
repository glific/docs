"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"Reporting and Analytics/Connection to V5 Data Studio Report",id:"Reporting and Analytics/Connection to V5 Data Studio Report",title:"Connection to V5 Data Studio Report",description:"Before you start, ensure that you have set up and connected your BigQuery Account",source:"@site/docs/5. Reporting and Analytics/06. Connection to V5 Data Studio Report.md",sourceDirName:"5. Reporting and Analytics",slug:"/Reporting and Analytics/Connection to V5 Data Studio Report",permalink:"/docs/docs/Reporting and Analytics/Connection to V5 Data Studio Report",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/5. Reporting and Analytics/06. Connection to V5 Data Studio Report.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Understanding Data Studio Reports",permalink:"/docs/docs/Reporting and Analytics/Understanding Data Studio Reports"},next:{title:"Understanding V5 Data Studio Reports",permalink:"/docs/docs/Reporting and Analytics/Understanding V5 Data Studio Reports"}},l={},c=[{value:"Make a copy of Glific report template v5.0",id:"make-a-copy-of-glific-report-template-v50",level:2},{value:"Connect data sources to your BigQuery Account",id:"connect-data-sources-to-your-bigquery-account",level:2},{value:"Connect <code>contacts</code>, <code>messages</code>, and <code>message conversations</code> through &#39;My Projects&#39;",id:"connect-contacts-messages-and-message-conversations-through-my-projects",level:3},{value:"Connect <code>flat fields</code>, <code>monthly active users</code>, <code>Contact collections</code>, <code>success messages</code> and <code>flow context</code> by replacing your Dataset ID into the preset &#39;Custom Query&#39;.",id:"connect-flat-fields-monthly-active-users-contact-collections-success-messages-and-flow-context-by-replacing-your-dataset-id-into-the-preset-custom-query",level:3},{value:"Connect <code>flow Results</code> and <code>Contact Collection</code> by running a query in BigQuery before connecting the data sources.",id:"connect-flow-results-and-contact-collection-by-running-a-query-in-bigquery-before-connecting-the-data-sources",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before you start"),", ensure that you have ",(0,o.kt)("a",{parentName:"p",href:"https://glific.github.io/docs/docs/Integrations/BigQuery%20Setup%20and%20link%20with%20Glific"},"set up and connected your BigQuery Account")),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"overview"},(0,o.kt)("strong",{parentName:"h1"},"Overview")),(0,o.kt)("p",null,"A . Make a copy of ",(0,o.kt)("a",{parentName:"p",href:"https://lookerstudio.google.com/reporting/e790512e-01d4-4f55-a514-dc5dbf4b6c51"},"Glific report template v5.0")),(0,o.kt)("p",null,"B . Connect 10 data sources to your BigQuery Account"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect ",(0,o.kt)("inlineCode",{parentName:"li"},"contacts"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"messages"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"message conversations")," through 'My Projects'"),(0,o.kt)("li",{parentName:"ol"},"Connect ",(0,o.kt)("inlineCode",{parentName:"li"},"flat fields"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"monthly active users"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact collections"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"success messages")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"flow context")," by replacing your Dataset ID into the preset 'Custom Query'."),(0,o.kt)("li",{parentName:"ol"},"Connect ",(0,o.kt)("inlineCode",{parentName:"li"},"flow Results")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"Contact Collection")," by running a query for each in BigQuery before connecting the data sources.")),(0,o.kt)("p",null,"3 . Your reports will be ready."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implementation Time"),": 60 minutes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Below are the detailed steps with screenshots to integrate Data studio.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," ",(0,o.kt)("em",{parentName:"p"},"The screenshots may be different, as google may update the screens with their updates. ",(0,o.kt)("a",{parentName:"em",href:"https://discord.com/channels/717975833226248303/717975833679233077"},"Message us on Discord")," to let us know.")," "),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"detailed-steps"},"Detailed Steps:"),(0,o.kt)("h2",{id:"make-a-copy-of-glific-report-template-v50"},"Make a copy of Glific report template v5.0"),(0,o.kt)("p",null,"1 . Click on the link of the reports template (shared publicly with view access). Use the latest ",(0,o.kt)("strong",{parentName:"p"},"version 5.0")," for your reports."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Template v5.0: ",(0,o.kt)("a",{parentName:"li",href:"https://lookerstudio.google.com/reporting/e790512e-01d4-4f55-a514-dc5dbf4b6c51"},"https://lookerstudio.google.com/reporting/e790512e-01d4-4f55-a514-dc5dbf4b6c51"))),(0,o.kt)("p",null,"2 . Hover your cursor near the top of the report, then click on the 3 dots in the top right corner, then click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Make a copy")," icon. Refer to the image below:"),(0,o.kt)("img",{width:"1468",alt:"Image1",src:"https://user-images.githubusercontent.com/119285990/217206154-8d95e47e-aad5-42df-ae7a-36718a2ca7fc.png"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," ",(0,o.kt)("em",{parentName:"p"},"If you have never used Data Studio before then you will be prompted to provide some basic information and agree to their terms and conditins. Do so and then repeat step 2.")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"3 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy Report"),". Refer to the image below:"),(0,o.kt)("img",{width:"704",alt:"Image2",src:"https://user-images.githubusercontent.com/119285990/217206648-fc1d55bc-f874-4152-a35d-be0ecd7930e3.png"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:"))," ",(0,o.kt)("em",{parentName:"p"},"Do not click on any of the drop downs for ",(0,o.kt)("strong",{parentName:"em"},"New Data Source"),". Directly click on")," 'Copy Report'"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"connect-data-sources-to-your-bigquery-account"},"Connect data sources to your BigQuery Account"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"4 . A new tab will open with the copy of the report and some visuals not functioning, select  ",(0,o.kt)("inlineCode",{parentName:"p"},"Manage added data sources"),"from the Resources Menu. Refer to the image below:"),(0,o.kt)("img",{width:"1466",alt:"Image3",src:"https://user-images.githubusercontent.com/119285990/217206723-83e76394-9dfd-46d7-95b0-804b29822475.png"}),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connect-contacts-messages-and-message-conversations-through-my-projects"},"Connect ",(0,o.kt)("inlineCode",{parentName:"h3"},"contacts"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"messages"),", and ",(0,o.kt)("inlineCode",{parentName:"h3"},"message conversations")," through 'My Projects'"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"5 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"edit")," one by one for each data source. Start with ",(0,o.kt)("strong",{parentName:"p"},"contacts")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663748-52bb6637-8dc2-4186-8847-1bdcdd87cb67.png",alt:"image"})),(0,o.kt)("p",null,"6 . Connect to the BigQuery data source:"),(0,o.kt)("p",null,"a. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"MY PROJECTS")," from the menu on the far left."),(0,o.kt)("p",null,"b. Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," (",(0,o.kt)("em",{parentName:"p"},"If the project is not listed you might need to enter the")," ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Dataset ID"))," ",(0,o.kt)("em",{parentName:"p"},"manually"),". ",(0,o.kt)("em",{parentName:"p"},"Refer to the note after step 8"),")"),(0,o.kt)("p",null,"c. Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dataset"),", this is your WA bot number"),(0,o.kt)("p",null,"d. Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"Table")," with the matching name. Click on the blue ",(0,o.kt)("inlineCode",{parentName:"p"},"Reconnect")," button at the top right corner."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663799-cd8bb1bd-975c-4002-af79-f1840d55a7cd.png",alt:"image"})),(0,o.kt)("p",null,"e . You might get a warning ",'"',(0,o.kt)("inlineCode",{parentName:"p"},"Configuration has changed. Do you want to apply the changes?"),"\u201d.  That\u2019s okay, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"APPLY")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663828-8000aace-580e-4c42-9248-d3a1c4baab5a.png",alt:"image"})),(0,o.kt)("p",null,"f . The fields listing page will open up. Verify that the fields are set to the correct type. Most will be correct by default."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What to check for:")," "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"All fields with 'id' in their name should be of the type 'text'"),(0,o.kt)("li",{parentName:"ol"},"'phone' should be of the type 'text'"),(0,o.kt)("li",{parentName:"ol"},"'language' should be of the type 'text'"),(0,o.kt)("li",{parentName:"ol"},"All fields with 'at'/'time' in their name should be of the type 'Date and Time'"),(0,o.kt)("li",{parentName:"ol"},"Latitude/Longitude should be of the type latitude, longitude.")),(0,o.kt)("p",null,"g. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"DONE")," in fields listing page"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663847-338d5a56-2374-46b6-860f-b7bac3f6a3b3.png",alt:"image"})),(0,o.kt)("p",null,"7 . ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Repeat steps 5 and 6 for the following data sources; Messages, Message Conversations"))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note: To get the Dataset ID click on the phone number on BigQuery."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663868-0de922cd-7b17-47fc-ad1a-d4c00bc128b8.png",alt:"image"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connect-flat-fields-monthly-active-users-contact-collections-success-messages-and-flow-context-by-replacing-your-dataset-id-into-the-preset-custom-query"},"Connect ",(0,o.kt)("inlineCode",{parentName:"h3"},"flat fields"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"monthly active users"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact collections"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"success messages")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"flow context")," by replacing your Dataset ID into the preset 'Custom Query'."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"8 .  For the Flat Fields data source, select Edit and then update the custom query with ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")," (from the Glific settings interface for big query as shown in the note above). Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"tides-saas-309509.917302307943")," with your ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")," (Refer to the image below) "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Ensure that you only replace the ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID"),', that is, ".contacts" should not be deleted. This applies for all steps where you replace the ',(0,o.kt)("strong",{parentName:"p"},"Dataset ID"),", ensure you do not select and paste over the remaining text."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663893-3fd0358b-066f-4bcf-a3ea-34647d1aa725.png",alt:"image"})),(0,o.kt)("p",null,"9 . Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Reconnect")," to update."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663917-aa382287-5c61-4826-8fb8-df22c764480c.png",alt:"image"})),(0,o.kt)("p",null,"10 . Verify the field types. (Refer Step 6.f.) And then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")),(0,o.kt)("p",null,"11 . Follow steps 8 to 10 as above for; ",(0,o.kt)("inlineCode",{parentName:"p"},"Monthly active users"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact Collections")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Success Messages"),",  Replace the ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")," as per your setup."),(0,o.kt)("p",null,"12 . For Flow context data source update the custom query with ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")," (from the Glific settings interface for big query). There will be four places where you need to update the ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663940-cb623c04-38a4-47ce-9a9c-37803e252315.png",alt:"image"})),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"connect-flow-results-and-contact-collection-by-running-a-query-in-bigquery-before-connecting-the-data-sources"},"Connect ",(0,o.kt)("inlineCode",{parentName:"h3"},"flow Results")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"Contact Collection")," by running a query in BigQuery before connecting the data sources."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"13 . For Flow results. First go to your BigQuery account. Open a new tab and run below query. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"tides-saas-309509.917302307943")," with your ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663971-569e3848-7a8a-44ff-813a-f044962c3397.png",alt:"image"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'CREATE OR REPLACE FUNCTION `tides-saas-309509.917302307943.jsonObjectKeys`(input STRING) RETURNS ARRAY<STRING> LANGUAGE js AS R"""\nconst inputJson=JSON.parse(input)\n return Object.keys(inputJson).map((key) => {\n return (JSON.stringify([key, inputJson[key].input]));\n});\n""";\n')),(0,o.kt)("p",null,"14 .  Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," button. After successful execution a new Routine will be created with name ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonObjectKeys")," (refer image below)"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212664014-f6f114ce-6677-4b86-a360-bf801280985d.png",alt:"image"})),(0,o.kt)("p",null,"15 . Go back to DataStudio and follow the same steps as we did for Flat fields (9 to 11) above for ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow Results"),"  data source. (Replace the ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")," as per your setup in 2 lines.)"),(0,o.kt)("p",null,"16 . For Contact Collection. Again go to your BigQuery account. Open a new tab and run below query. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"tides-saas-309509.917302307943")," with your ",(0,o.kt)("strong",{parentName:"p"},"Dataset ID")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663971-569e3848-7a8a-44ff-813a-f044962c3397.png",alt:"image"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BEGIN\nCREATE OR REPLACE VIEW\n  `tides-saas-309509.917302307943.contact_collection` AS (\n  SELECT\n    name,\n    phone,\n    group_name\n  FROM\n    `tides-saas-309509.917302307943.contacts`,\n    UNNEST(SPLIT(group_labels, ',')) group_name);\nEND\n")),(0,o.kt)("p",null,"17 .  Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," button. After successful execution a new Routine will be created with name ",(0,o.kt)("inlineCode",{parentName:"p"},"contact_collection")," (refer image below)"),(0,o.kt)("img",{width:"1470",alt:"Image 4",src:"https://user-images.githubusercontent.com/119285990/217206706-0a8d37e6-ef58-46d5-b4e1-0a4ba458bcff.png"}),(0,o.kt)("p",null,"18 . Go back to DataStudio and follow the same steps as we did for ",(0,o.kt)("inlineCode",{parentName:"p"},"contacts")," (6 and 7) above to connect the ",(0,o.kt)("inlineCode",{parentName:"p"},"Contact Collection")," data source."),(0,o.kt)("p",null,"19 .  Click  ",(0,o.kt)("inlineCode",{parentName:"p"},"CLOSE")," on the top right, and your reports will be ready"),(0,o.kt)("img",{width:"1468",alt:"Image 5",src:"https://user-images.githubusercontent.com/119285990/217206715-0c5bec40-8b91-437d-9155-5a001eb6c536.png"}),(0,o.kt)("p",null,"20 .  Your reports are ready for use."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note: To create your own custom reports follow the steps in the below document ."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/datastudio/answer/6292570?hl=en"},"https://support.google.com/datastudio/answer/6292570?hl=en")),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);