"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4510],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||a;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},i=void 0,l={unversionedId:"Integrations/BigQuery Setup and link with Glific",id:"Integrations/BigQuery Setup and link with Glific",title:"BigQuery Setup and link with Glific",description:"Before you get started",source:"@site/docs/4. Integrations/02. BigQuery Setup and link with Glific.md",sourceDirName:"4. Integrations",slug:"/Integrations/BigQuery Setup and link with Glific",permalink:"/docs/docs/Integrations/BigQuery Setup and link with Glific",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/02. BigQuery Setup and link with Glific.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting up GCS in Glific",permalink:"/docs/docs/Integrations/Setting up GCS in Glific"},next:{title:"Create an account in Google Cloud Storage GCS",permalink:"/docs/docs/Integrations/Create an account in Google Cloud Storage GCS"}},c={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Before you get started")),(0,r.kt)("p",null,"Many NGOs are concerned about the cost of setting up BigQuery. They are worried about running up a bill. In reality BigQuery provides a very generous ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/pricing#free-tier"},"free tier")," that you will find will suffice for several months. You need not worry till your storage exceeds 10GB and queries 1TB / month !"),(0,r.kt)("p",null,"Google also sends notifications before billing you and provides you mechanisms like quotas to help control price. Learn more about these here :"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/billing/docs/how-to/reports"},"View your billing reports and cost trends"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/estimate-costs"},"https://cloud.google.com/bigquery/docs/estimate-costs")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/custom-quotas"},"https://cloud.google.com/bigquery/docs/custom-quotas")),(0,r.kt)("p",null,"Now that we have that out of the way, let","'","s help you set up your account !"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Creating your BigQuery Account")),(0,r.kt)("p",null,"The following steps needs to follow for creating your BigQuery account."),(0,r.kt)("p",null,"1 . Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com")," and sign in with your Gsuite account."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212645739-c8066127-1244-423e-b7d7-83c22ea42035.png",alt:"image"})),(0,r.kt)("p",null,"2 . After signing in you will be redirected to Google Cloud console. Use link if not redirected: ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/getting-started"},"https://console.cloud.google.com/getting-started")),(0,r.kt)("p",null,"3 . Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"TRY FOR FREE")," and fill in Billing details."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212645852-a5f67668-c06a-4915-9293-412827e239fc.png",alt:"image"})),(0,r.kt)("p",null,"4 . Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Country")," and check to agree to terms and conditions."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212645890-bdfe8a13-0312-41ee-bdc7-4f5744a79656.png",alt:"image"})),(0,r.kt)("p",null,"5 .  Fill in the rest of the details to verify."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646133-26b1f214-6ea7-4d38-8ee3-03f2d6b70808.png",alt:"image"})),(0,r.kt)("p",null,"6 . On the same page, fill in Primary contact details and payment method details and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"start my free trial"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646166-a5574d75-a9c4-4d4f-9a84-8e05e7a31a17.png",alt:"image"})),(0,r.kt)("p",null,"7 .  If it does not redirect you go to the google cloud console dashboard you can also use this link. ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home"},"https://console.cloud.google.com/home")),(0,r.kt)("p",null,"8 .  Click ",(0,r.kt)("inlineCode",{parentName:"p"},"My Project")," in the blue bar to create a new project."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646214-074d405b-480e-44ac-8bd5-59f4472296e7.png",alt:"image"})),(0,r.kt)("p",null,"9 . Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"New Project")," at top right corner."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646268-480b74a9-ddb4-44e1-aa73-3f74aa09de99.png",alt:"image"})),(0,r.kt)("p",null,"10 . Fill in your project details and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646316-e5d1f4ba-ab49-49fb-93a9-788c8e67c4c1.png",alt:"image"})),(0,r.kt)("p",null,"11 . Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Bigquery")," from the side panel of Google Cloud Console Dashboard or use link to reach Bigquery Dashboard, ",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646365-997ebff1-50c8-4241-99fe-53a01e81dfb4.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/CKdB9etaSvrFd4t6BSyp3eJK.png",alt:null})),(0,r.kt)("p",null,"12 . Now Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/serviceaccountkey"},"https://console.cloud.google.com/apis/credentials/serviceaccountkey")," to generate project ",(0,r.kt)("strong",{parentName:"p"},"API keys")),(0,r.kt)("p",null,"13 . From the drop select your project. Next, select a ",(0,r.kt)("inlineCode",{parentName:"p"},"new service account")," and choose Role as ",(0,r.kt)("inlineCode",{parentName:"p"},"Project -> Owner"),". And Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," button below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646406-667e0c07-7c4f-45bf-82ce-c11fd45792da.png",alt:"image"})),(0,r.kt)("p",null,"14 . Save the JSON file downloaded and copy its content."),(0,r.kt)("p",null,"15 . To integrate BigQuery in Glific. Click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," button(bottom left corner) in Glific homepage.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646449-2b7c513a-32f7-4e5f-9136-afb4baa50263.png",alt:"image"})),(0,r.kt)("p",null,"16 . Click on  ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," button in BigQuery tab.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646479-b00023cf-d00b-4965-9225-fd8980dad4f5.png",alt:"image"})),(0,r.kt)("p",null,"17 . Paste the copied JSON content inside ",(0,r.kt)("inlineCode",{parentName:"p"},"Goth Credentials")," input"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646514-4650a879-eefc-46a6-bf78-f39105261c3a.png",alt:"image"})),(0,r.kt)("p",null,"18 . Click on is ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," checkmark and click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE")," button. Then send a message to the bot. BigQuery sync starts when a message is sent from or to the bot after adding credentials."),(0,r.kt)("p",null,"19 . Go to BigQuery console or use link ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/bigquery"},"https://console.cloud.google.com/bigquery")),(0,r.kt)("p",null,"20 . You can see a new Dataset with two tables is automatically created. ",(0,r.kt)("strong",{parentName:"p"},"Contacts")," and ",(0,r.kt)("strong",{parentName:"p"},"messages")," will be populating automatically."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/119290547/212646563-427f1f25-c46b-43df-802e-fab94b51ca8e.png",alt:"image"})),(0,r.kt)("p",null,"You can refer to this small ",(0,r.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1uvDHhf5Gop2zRe1nDTy-836bLuTHK2OR/view?usp=sharing"},"video"),"  to know how to setup BigQuery for your organisation"),(0,r.kt)("p",null,"Big Query Schema - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/glific/glific/blob/master/lib/glific/third_party/bigquery/bigquery_schema.ex"},"https://github.com/glific/glific/blob/master/lib/glific/third_party/bigquery/bigquery_schema.ex")))}u.isMDXComponent=!0}}]);