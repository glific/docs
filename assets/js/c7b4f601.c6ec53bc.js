"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,r(r({ref:t},p),{},{components:n})):o.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=n(7462),i=(n(7294),n(3905));const a={},r=void 0,c={unversionedId:"Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",id:"Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",title:"How to integrate GCS in Glific to store media files received in chat flow",description:"Go to your Google Cloud storage GCS account (https://console.cloud.google.com/apis/credentials/serviceaccountkey) to generate project API keys.",source:"@site/docs/3. Flows/1. Flow Actions/04. How to integrate GCS in Glific to store media files received in chat flow.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",permalink:"/docs/docs/Flows/Flow Actions/How to integrate GCS in Glific to store media files received in chat flow",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/1. Flow Actions/04. How to integrate GCS in Glific to store media files received in chat flow.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Send media files in messages",permalink:"/docs/docs/Flows/Flow Actions/Send media files in messages"},next:{title:"How to use the Split by flow result question type",permalink:"/docs/docs/Flows/Flow Actions/How to use the Split by flow result question type"}},l={},s=[{value:"Save the JSON in Glific to integrate",id:"save-the-json-in-glific-to-integrate",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Go to your Google Cloud storage GCS account (",(0,i.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/serviceaccountkey"},"https://console.cloud.google.com/apis/credentials/serviceaccountkey"),") to generate project API keys."),(0,i.kt)("p",null,"If you don","'","t have an account in GCS please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/quickstart-console"},"Create an account in Google Cloud Storage (GCS)")," to set up a new account in Google Cloud storage GCS?."),(0,i.kt)("p",null,"Below screens may get change by Google. Refer below article from google for more details. ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys"},"https://cloud.google.com/iam/docs/creating-managing-service-account-keys")),(0,i.kt)("p",null,"1 . At top Bar enter Service account. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Service account")," from the drop down."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255188-c6dc7c0a-843f-4e8e-b9fd-443744bebf26.png",alt:"image"})),(0,i.kt)("p",null,"2 .  Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"+Create Service account")," link from top bar."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255191-f3b0c425-878b-4874-9447-776b61e23f76.png",alt:"image"})),(0,i.kt)("p",null,"3 . Enter the details."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"a) Serive account name\n\nb)Service account id auto filled.\n\nc) Description.\n")),(0,i.kt)("p",null,"4 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Done"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255192-70bec877-205c-4c32-a895-3dfdd35d85af.png",alt:"image"})),(0,i.kt)("p",null,"5 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Add Key")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255199-d4d1c0dd-5fb8-4617-a825-bd8dde5d167a.png",alt:"image"})),(0,i.kt)("p",null,"6 . Select ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," and click on ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255204-8598019b-23bf-4ebe-b895-94cfa2a45a9a.png",alt:"image"})),(0,i.kt)("h2",{id:"save-the-json-in-glific-to-integrate"},"Save the JSON in Glific to integrate"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Save the JSON file downloaded and copy its content."),(0,i.kt)("li",{parentName:"ol"},"Login to your Glific account. Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"setting")," option in Glific and click on ",(0,i.kt)("strong",{parentName:"li"},"Google Cloud Storage"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/32592458/218255212-9314fc26-9733-453d-9c8e-8d7a24ceeec0.png",alt:"image"}))),(0,i.kt)("p",null,"7 . Click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_active")," check."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255217-222dac72-13b4-48d1-9582-8feb25ff917b.png",alt:"image"})),(0,i.kt)("p",null,"8 . Fill in the details from the downloaded JSON file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Paste the copied JSON content inside Goth Credentials input.\n1. Project Email as `client_email` in the JSON file.\n1. **_&quot;client_email&quot;: &quot;xxx@xxx.iam.gserviceaccount.com&quot;,_**  \n1. Bucket as the **bucket name** of the newly created bucket in the GCS dashboard\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255222-24334f6f-d437-4705-97c6-707e25528446.png",alt:"image"})),(0,i.kt)("p",null,"9 . Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Save")," button"),(0,i.kt)("p",null,"10 . Once Credentials are set up, all media files will be synced in a bucket inside the uploads directory."),(0,i.kt)("p",null,"11 . Now all the media files you will receive from the beneficiary contact (Via WhatsApp), will save in the Google cloud bucket in ",(0,i.kt)("strong",{parentName:"p"},"uploads")," folder."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255243-9e5d9e3e-648e-43ac-8952-8b98d59339ce.png",alt:"image"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/218255247-f5887a21-328b-4217-ac62-2d37a61f8d5f.png",alt:"image"})))}u.isMDXComponent=!0}}]);