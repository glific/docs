"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7423],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,g=h["".concat(s,".").concat(m)]||h[m]||d[m]||l;return a?o.createElement(g,i(i({ref:t},p),{},{components:a})):o.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[h]="string"==typeof e?e:n,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const l={},i=void 0,r={unversionedId:"Flows/Flow Features/Integrate Google sheets in Flows",id:"Flows/Flow Features/Integrate Google sheets in Flows",title:"Integrate Google sheets in Flows",description:"Below are the steps to Integrate Google sheets in Flows.",source:"@site/docs/3. Flows/3. Flow Features/05. Integrate Google sheets in Flows.md",sourceDirName:"3. Flows/3. Flow Features",slug:"/Flows/Flow Features/Integrate Google sheets in Flows",permalink:"/docs/docs/Flows/Flow Features/Integrate Google sheets in Flows",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/3. Flow Features/05. Integrate Google sheets in Flows.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ImportExport Flows",permalink:"/docs/docs/Flows/Flow Features/ImportExport Flows"},next:{title:"Multiple Contactsprofiles with one phone number",permalink:"/docs/docs/Flows/Flow Features/Multiple Contactsprofiles with one phone number"}},s={},c=[{value:"Add Readable Google Sheet",id:"add-readable-google-sheet",level:2},{value:"Configuring Readable Google Sheet in the Flow",id:"configuring-readable-google-sheet-in-the-flow",level:3},{value:"Add Writable Google Sheet",id:"add-writable-google-sheet",level:2},{value:"Enable Google Sheet APIs and Add Credentials",id:"enable-google-sheet-apis-and-add-credentials",level:3},{value:"Link Writable Google Sheet in Glific",id:"link-writable-google-sheet-in-glific",level:3},{value:"Configuring Writable Google Sheet in the Flow",id:"configuring-writable-google-sheet-in-the-flow",level:3}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Below are the steps to Integrate Google sheets in Flows."),(0,n.kt)("h2",{id:"add-readable-google-sheet"},"Add Readable Google Sheet"),(0,n.kt)("p",null,"1 . Log in to your Glific account."),(0,n.kt)("p",null,"2 . Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Flows")," from the left panel"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550636-0748c911-8170-4cca-b4ba-f960ab51ec97.png",alt:"image"})),(0,n.kt)("p",null,"3 . From the bottom of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Flow")," page. Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Google Sheet")," link."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550651-2b7ea8e7-cfa5-4353-bbce-bf95858dcf82.png",alt:"image"})),(0,n.kt)("p",null,"4 . Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"Add Sheet")," button"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550669-89eb822d-8da1-4201-b3f6-bf8332e41f31.png",alt:"image"})),(0,n.kt)("p",null,"5 . Add the ",(0,n.kt)("inlineCode",{parentName:"p"},"Sheet URL")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Name")," of the sheet which you want to integrate. Check the ",(0,n.kt)("inlineCode",{parentName:"p"},"Read")," checkbox and Click on the",(0,n.kt)("inlineCode",{parentName:"p"},"Save")," button. See ",(0,n.kt)("strong",{parentName:"p"},"6")," below for how to get the URL"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550682-60dff177-319e-4024-a330-834b350fed7f.png",alt:"image"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Open the Google sheet and click on share button on the right hand side to update the sheet permission to at least ",(0,n.kt)("inlineCode",{parentName:"li"},"Anyone with the link")," can ",(0,n.kt)("inlineCode",{parentName:"li"},"View"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550695-58224a6f-4312-4981-b518-1dd6de639e3a.png",alt:"image"})),(0,n.kt)("p",null,"6 . Copy the URL"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550711-8471dcf3-974c-459d-a486-b77b841742d0.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample file")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://slabstatic.com/prod/uploads/8k89m6if/posts/attachments/WeGHho64-fOYi438oxhwhZFl.xlsx"},"Sample_file_Gsheet_Integration.xlsx")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Paste the copied URL in the Google Sheet Integration screen in Glific and click on ",(0,n.kt)("inlineCode",{parentName:"li"},"SAVE")," button")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550739-65492d06-4c38-4d31-95e7-cec5f6b5004f.png",alt:"image"})),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"You can click on the link button to open the added sheet")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550770-2842aca1-6ee7-4c5d-affa-2e1fd3fdacc7.png",alt:"image"})),(0,n.kt)("h3",{id:"configuring-readable-google-sheet-in-the-flow"},"Configuring Readable Google Sheet in the Flow"),(0,n.kt)("p",null,"9 . Create a new flow and open it for editing"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550788-7e8aa739-174e-44eb-845a-95f096e3fc3e.png",alt:"image"})),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"link Google sheet")," node")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550800-b41f6599-467c-4033-be8c-e5b3c62918d6.png",alt:"image"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550813-c43ee789-af23-48fd-8d4f-cbd59cc90f52.png",alt:"image"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Link google Sheet"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the second drop-down select the sheet")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In ",(0,n.kt)("strong",{parentName:"p"},"Select row")," add ",(0,n.kt)("inlineCode",{parentName:"p"},"@calendar.current_date")," or any variable that uniquely defines the ",(0,n.kt)("inlineCode",{parentName:"p"},"Key")," column of Google sheet"))),(0,n.kt)("p",null,"Click on ",(0,n.kt)("inlineCode",{parentName:"p"},"OK")," and use the column name like below and access the value of cell values."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@results.sheet.message_1")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550825-82831f46-a239-4600-b95e-bf0533f0565b.png",alt:"image"})),(0,n.kt)("h2",{id:"add-writable-google-sheet"},"Add Writable Google Sheet"),(0,n.kt)("h3",{id:"enable-google-sheet-apis-and-add-credentials"},"Enable Google Sheet APIs and Add Credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://console.developers.google.com/start/api?id=sheets.googleapis.com"},"this")," wizard to create or select a project in the Google Developers Console. This will automatically turn on the API. Click Continue, then Go to credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add credentials to your project")," page, create a ",(0,n.kt)("strong",{parentName:"p"},"Service account key"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select your project name as the service account and choose JSON as the key format. Download the generated JSON file containing the credentials.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to your Glific account, navigate to Settings, and select Google Sheet. Paste the service account credentials in the provided field, and click on the ",(0,n.kt)("strong",{parentName:"p"},"Save")," button."))),(0,n.kt)("h3",{id:"link-writable-google-sheet-in-glific"},"Link Writable Google Sheet in Glific"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Go to the Google Sheet screen as mentioned in the above steps.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550651-2b7ea8e7-cfa5-4353-bbce-bf95858dcf82.png",alt:"image"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Click on the Add Sheet button.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/219550669-89eb822d-8da1-4201-b3f6-bf8332e41f31.png",alt:"image"})),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"Add the Sheet URL and Name of the sheet you want to integrate. Check the ",(0,n.kt)("inlineCode",{parentName:"li"},"Write")," checkbox and click on the Save button. Refer to ",(0,n.kt)("em",{parentName:"li"},"Step 8")," below for instructions on how to get the URL.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 17 01 PM",src:"https://github.com/glific/docs/assets/40158831/12a44f29-410e-479b-abbc-e5cbe879d8b9"}),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"Open the Google Sheet you want to write data on and click on the share button on the right-hand side. Update the sheet permissions and add the Service Account Identifier (The client email on the service account) as a user invited in the spreadsheet's Collaboration Settings with ",(0,n.kt)("inlineCode",{parentName:"li"},"Editor")," permission.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 23 49 PM",src:"https://github.com/glific/docs/assets/40158831/feb09bd0-1d91-43ac-a289-ac813c2a2d4a"}),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"Copy the URL.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 22 26 PM",src:"https://github.com/glific/docs/assets/40158831/2518951e-9fb1-4740-9dbb-8a4766c3bf55"}),(0,n.kt)("ol",{start:10},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the copied URL in the Google Sheet Integration screen in Glific and click on the ",(0,n.kt)("inlineCode",{parentName:"p"},"SAVE")," button."),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 27 28 PM",src:"https://github.com/glific/docs/assets/40158831/111242c8-07e7-4cb8-acfc-b1345a8c4bec"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can click on the link button to open the added sheet."))),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 40 48 PM",src:"https://github.com/glific/docs/assets/40158831/703f83bd-f7e6-462c-acee-3af13defab3e"}),(0,n.kt)("h3",{id:"configuring-writable-google-sheet-in-the-flow"},"Configuring Writable Google Sheet in the Flow"),(0,n.kt)("ol",{start:12},(0,n.kt)("li",{parentName:"ol"},"Import the below sample flow  from the Flow screen and click on ",(0,n.kt)("inlineCode",{parentName:"li"},"setting")," icon to configure it.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sample Flow")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/glific/docs/3.%20Flows/3.%20Flow%20Features/write_to_sheet.json"},"Write to Google Sheet.json")),(0,n.kt)("ol",{start:13},(0,n.kt)("li",{parentName:"ol"},"Here's how the imported flow would look like")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 43 21 PM",src:"https://github.com/glific/docs/assets/40158831/80bc24ea-0934-4933-9f9f-9324b67f2975"}),(0,n.kt)("ol",{start:14},(0,n.kt)("li",{parentName:"ol"},"The first node is the ",(0,n.kt)("inlineCode",{parentName:"li"},"Send Message")," node, which asks the contact for input to be added to the sheet.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 45 13 PM",src:"https://github.com/glific/docs/assets/40158831/03d7f825-ca8d-4705-b095-b8a30a8175fc"}),(0,n.kt)("ol",{start:15},(0,n.kt)("li",{parentName:"ol"},"The second node is the ",(0,n.kt)("inlineCode",{parentName:"li"},"Wait for Response")," node with the result name sheet_input. The response from the contact will be saved in this result and can be referenced as @results.sheet_input.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 45 36 PM",src:"https://github.com/glific/docs/assets/40158831/cb958774-3395-4080-8a18-ab47beac7594"}),(0,n.kt)("ol",{start:16},(0,n.kt)("li",{parentName:"ol"},"The third node is the ",(0,n.kt)("inlineCode",{parentName:"li"},"Link Google sheet")," node, used to add the user-entered text into the Google sheet. Click on this node to configure it.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 51 07 PM",src:"https://github.com/glific/docs/assets/40158831/883b878d-a37a-4352-a73c-b424e7436a7d"}),(0,n.kt)("ol",{start:17},(0,n.kt)("li",{parentName:"ol"},"Under Action, select ",(0,n.kt)("strong",{parentName:"li"},"Write")," from the dropdown menu.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/glific/docs/assets/130072273/9a29141e-8a68-49f1-91d2-ae5a19e895f5",alt:"Screenshot6"})),(0,n.kt)("ol",{start:18},(0,n.kt)("li",{parentName:"ol"},"Select the sheet from the dropdown that was added in ",(0,n.kt)("em",{parentName:"li"},"Step 7")," above i.e. Sample Sheet")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 51 58 PM",src:"https://github.com/glific/docs/assets/40158831/8e2ebbca-92ce-410c-b54d-673df200c811"}),(0,n.kt)("ol",{start:19},(0,n.kt)("li",{parentName:"ol"},"Specify the Sheet range from which you would like to enter the data in the Google sheet. For example, Sheet1!A10:D will add data from row 10 of column A in subsheet Sheet1 up to column D. This means that four data values will be added in 20.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/glific/docs/assets/130072273/9964a3cb-969a-4807-ac70-ea3d94a1a50e",alt:"Screenshot8"})),(0,n.kt)("ol",{start:20},(0,n.kt)("li",{parentName:"ol"},"Enter the data to be written in the Google sheet under Input data to update in sheet. You can use values like @results.sheet_input, @contact.name, @contact.fields.age, etc.")),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 54 24 PM",src:"https://github.com/glific/docs/assets/40158831/979f7029-320d-45e1-a081-c33fcff1d68d"}),(0,n.kt)("ol",{start:21},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After configuring the flow, click on the Preview button located on the bottom right side of the screen to run the flow in the simulator."),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 59 10 PM",src:"https://github.com/glific/docs/assets/40158831/46fa4b4c-208e-468f-8529-d731bc342f98"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the simulator, you will see the first message from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Send Message")," node, which prompts you to enter text.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Type the desired text that you want to see in the sheet, and then press Enter."),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 56 48 PM",src:"https://github.com/glific/docs/assets/40158831/f8c3f0f7-ea42-4906-802f-9c2c4811568d"})),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"This will move the flow forward, and the data will be written to the Google Sheet.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Google Sheet to check the newly inserted data."),(0,n.kt)("img",{width:"1200",alt:"Screenshot 2023-05-18 at 11 58 31 PM",src:"https://github.com/glific/docs/assets/40158831/bfa12d80-9038-4c2a-919a-ce425bd2ffee"}))))}h.isMDXComponent=!0}}]);