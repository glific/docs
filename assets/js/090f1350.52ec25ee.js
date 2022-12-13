"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8449],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var o=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=o.createContext({}),s=function(t){var e=o.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=s(n),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?o.createElement(g,r(r({ref:e},c),{},{components:n})):o.createElement(g,r({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,r=new Array(l);r[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:a,r[1]=i;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2211:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=n(7462),a=(n(7294),n(3905));const l={},r=void 0,i={unversionedId:"Glific Documentation/Integrations/Create an account in Google Cloud Storage (GCS).",id:"Glific Documentation/Integrations/Create an account in Google Cloud Storage (GCS).",title:"Create an account in Google Cloud Storage (GCS).",description:"Create your Google Cloud Storage account.",source:"@site/docs/Glific Documentation/4. Integrations/03. Create an account in Google Cloud Storage (GCS)..md",sourceDirName:"Glific Documentation/4. Integrations",slug:"/Glific Documentation/Integrations/Create an account in Google Cloud Storage (GCS).",permalink:"/docs/docs/Glific Documentation/Integrations/Create an account in Google Cloud Storage (GCS).",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/Glific Documentation/4. Integrations/03. Create an account in Google Cloud Storage (GCS)..md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BigQuery Setup and link with Glific",permalink:"/docs/docs/Glific Documentation/Integrations/BigQuery Setup and link with Glific"},next:{title:"How to upload files on GCS",permalink:"/docs/docs/Glific Documentation/Integrations/How to upload files on GCS"}},p={},s=[{value:"Create your Google Cloud Storage account.",id:"create-your-google-cloud-storage-account",level:2},{value:"Making bucket Public",id:"making-bucket-public",level:2}],c={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"create-your-google-cloud-storage-account"},"Create your Google Cloud Storage account."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com"},"https://console.cloud.google.com")," and sign in with your Gsuite account."),(0,a.kt)("li",{parentName:"ol"})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/H57vx4eTfczsRzDRhdLtYXtl.png",alt:null})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"After signing in you will be redirected to the Google Cloud console. Use link if not redirected: ",(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/getting-started"},"https://console.cloud.google.com/getting-started"))),(0,a.kt)("p",null,"3 .  Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"TRY FOR FREE")," and fill in Billing details."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/SZeE_NapFcS_1C8DJKRS12fg.png",alt:null})),(0,a.kt)("p",null,"4 . Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Country")," and check to agree to terms and conditions."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/sLtB52TtjaZztId8IJfTgltG.png",alt:null})),(0,a.kt)("p",null,"5 . Now fill in the rest of the details to verify."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/DJWrXFY_DgfY1M2pQxinFL7xo7i9WtVRnrwBZIKIJmjNrpAnVh-gtvRF3smzFbOEKVpB52qVcSp1MRsAHn-pFRnGrciR72Ake3OwHUNDkQNTzKstyBSl-ZUYH0ISutFO8QUbP0U7",alt:null})),(0,a.kt)("p",null,"6 . On the same page, fill in ",(0,a.kt)("inlineCode",{parentName:"p"},"Primary contact details")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"payment method details"),"and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"start my free trial.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/rpdvP0EYNU1jaWfGdDO_iFWy.png",alt:null})),(0,a.kt)("p",null,"7 . Now if it does not redirect you go to the google cloud console dashboard you can also use this link. ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/home"},"https://console.cloud.google.com/home")),(0,a.kt)("p",null,"8 . Click ",(0,a.kt)("inlineCode",{parentName:"p"},"My Project")," in the top bar to create a new project."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/Exr1sQ0qokT5dNNljJTnVKSq.png",alt:null})),(0,a.kt)("p",null,"9 . Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"New Project")," at the top right corner."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/xBrLD7NT_45hI95wTXIjbrX8.png",alt:null})),(0,a.kt)("p",null,"10 . Fill in your project details and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/05S95KMndcYXs6dTtSq08f_n.png",alt:null})),(0,a.kt)("p",null,"11 . Select ",(0,a.kt)("inlineCode",{parentName:"p"},"ColudStorage")," from the side panel of Google Cloud Console Dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/j0zMAZGkBF2-zkkaZSkZAuT1.png",alt:null})),(0,a.kt)("p",null,"12 . Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," button to create a bucket to store data"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/JU8Nuugtfsfqrow5TLan1-In.png",alt:null})),(0,a.kt)("p",null,"13 . Enter the name of the bucket to be created and the preferred data location where data will be stored"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://slabstatic.com/prod/uploads/8k89m6if/posts/images/aKg7zwFQpqE3ERbuZCiIb5WX.png",alt:null})),(0,a.kt)("p",null,"14 . Choose the preferred plan for storage and access control type and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/oHF-tPUlf3fDPeZicf9OAOL6.png",alt:null})),(0,a.kt)("p",null,"15 . A new bucket is created."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/xCI5Kec-ZJ7eCjvN-EIQj_Xh.png",alt:null})),(0,a.kt)("h2",{id:"making-bucket-public"},"Making bucket Public"),(0,a.kt)("p",null,"1 . Once Bucket is created, Open the bucket and click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Permissions"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/WDCUeODBPIJUOG0p4eedTl1N.png",alt:null})),(0,a.kt)("p",null,"2 .  Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," button next to Permissions."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/bXpARliL6sgANTP5acANqGr4.png",alt:null})),(0,a.kt)("p",null,"3 . Under the new members, tab choose ",(0,a.kt)("inlineCode",{parentName:"p"},"allusers")," **** and choose a role as Storage Admin."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/t0FyeM4VWnPTwIkFMsv53Zc8.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/fRrRYkZSIEmztqHe1t6OoJlQ.png",alt:null})),(0,a.kt)("p",null,"4 . Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"save")," open and a pop-up will come for confirmation of making the bucket publicly accessible."),(0,a.kt)("p",null,"5 . Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"ALLOW PUBLIC ACCESS")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/wE5ABxRytYBP1ugYR-r9LMtP.png",alt:null})))}u.isMDXComponent=!0}}]);