"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,c={unversionedId:"Integrations/BigQuery data updates not working - Troubleshoot checklist.",id:"Integrations/BigQuery data updates not working - Troubleshoot checklist.",title:"BigQuery data updates not working - Troubleshoot checklist.",description:"1. Check notification - Check system logs to see if there is any error.",source:"@site/docs/4. Integrations/09. BigQuery data updates not working - Troubleshoot checklist..md",sourceDirName:"4. Integrations",slug:"/Integrations/BigQuery data updates not working - Troubleshoot checklist.",permalink:"/docs/docs/Integrations/BigQuery data updates not working - Troubleshoot checklist.",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/09. BigQuery data updates not working - Troubleshoot checklist..md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started with Dialog Flow for NLP",permalink:"/docs/docs/Integrations/Getting started with Dialog Flow for NLP"},next:{title:"Reporting and Analytics",permalink:"/docs/docs/category/reporting-and-analytics"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Check notification")," - Check system logs to see if there is any error.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click on Notification tab from left pane."),(0,r.kt)("li",{parentName:"ol"},"Check if there is any errors or warning related to your google account.")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663198-9f7a9d70-c91c-4d2d-b05a-127374fee4a3.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample error message.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663219-77f39c00-a32f-4c9d-8e06-566a52f63786.png",alt:"image"})),(0,r.kt)("p",null,"2 . Check the ",(0,r.kt)("strong",{parentName:"p"},"BQ account is active"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663245-3629cf0b-279d-4da7-b9ae-fcafd6e27b58.png",alt:"image"})),(0,r.kt)("p",null,"3 . Check if there is any ",(0,r.kt)("strong",{parentName:"p"},"billing issue at the GCS end"),"."),(0,r.kt)("p",null,"a. Go to ",(0,r.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/billing/01340A-5AF039-6A970E?project=tides-saas-309509&organizationId=960057738174"},"https://console.cloud.google.com/")),(0,r.kt)("p",null,"b. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"billings")," from left pane."),(0,r.kt)("p",null,"c. Check to see if you have any billing related notification from Google."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/212663277-277eb68b-1f7d-4965-b225-fcc095fab706.png",alt:"image"})),(0,r.kt)("p",null,"4 . If not able to save credentials and it is showing ",(0,r.kt)("strong",{parentName:"p"},"Account does not have sufficient permissions to insert data to BigQuery")," as shown in the image"),(0,r.kt)("p",null,"a. Click on three bars on the left hand side and go to ",(0,r.kt)("inlineCode",{parentName:"p"},"IAM & Admin")," and choose ",(0,r.kt)("inlineCode",{parentName:"p"},"Service Accounts"),".\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218684103-c2dfa7ce-5de8-4bdb-bf8e-24f82601f88f.png",alt:"image"})),(0,r.kt)("p",null,"b. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE SERVICE ACCOUNT")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218684457-fcc494af-a3e2-4d81-8ae6-eb4f2fc71d2c.jpeg",alt:"image"})),(0,r.kt)("p",null,"c. Enter Service account name e.g. Glific and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE AND CONTINUE"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218684667-d107860d-ecea-4f9b-bde0-9ff1e53a45ec.jpeg",alt:"image"})),(0,r.kt)("p",null,"d. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"Select a role"),", type ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),", choose ",(0,r.kt)("inlineCode",{parentName:"p"},"OWNER")," from the list and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"DONE"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218684890-a86e9c60-0e45-4ebe-955a-ad0b4034118e.jpeg",alt:"image"})),(0,r.kt)("p",null,"e. Again click on ",(0,r.kt)("inlineCode",{parentName:"p"},"DONE"),". This will create a new service account."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218684989-15074eca-7368-48d2-8c06-fef2cba7e3a7.png",alt:"image"})),(0,r.kt)("p",null,"f. Choose the service account created from list of service accounts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218685139-b6c64c20-617b-451b-bcee-e359bd9a7296.png",alt:"image"})),(0,r.kt)("p",null,"g. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"KEYS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ADD KEYS")," and then ",(0,r.kt)("inlineCode",{parentName:"p"},"Create new key"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218685537-5ef755a3-76f1-4b6b-b08b-f59538706c49.png",alt:"image"})),(0,r.kt)("p",null,"h. Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," as key type and click on ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/40158831/218685556-7991f175-97c7-43c9-896d-8b60bc00744a.png",alt:"image"})),(0,r.kt)("p",null,"i. Use the downloaded key and add that as credentials in Bigquery."))}u.isMDXComponent=!0}}]);