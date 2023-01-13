"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3769],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),l=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),d=r,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return o?n.createElement(m,p(p({ref:t},c),{},{components:o})):n.createElement(m,p({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,p=new Array(i);p[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[u]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<i;l++)p[l]=o[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6653:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(3905));const i={},p=void 0,s={unversionedId:"Flows/Flow Actions/Configure Optin & Optout preferences in Glific",id:"Flows/Flow Actions/Configure Optin & Optout preferences in Glific",title:"Configure Optin & Optout preferences in Glific",description:"When any new beneficiary sends a message the very first time,  the beneficiary can get an Optin message  to give their consent to receive the messages from the BOT.",source:"@site/docs/3. Flows/1. Flow Actions/11. Configure Optin & Optout preferences in Glific.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",permalink:"/docs/docs/Flows/Flow Actions/Configure Optin & Optout preferences in Glific",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/1. Flow Actions/11. Configure Optin & Optout preferences in Glific.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use HSM template messages in your flows",permalink:"/docs/docs/Flows/Flow Actions/How to use HSM template messages in your flows"},next:{title:"How to use the Interactive Message in Flow editor",permalink:"/docs/docs/Flows/Flow Actions/How to use the Interactive Message in Flow editor"}},a={},l=[{value:"Here&#39;s  how to configure Optin and Optout in flow.",id:"heres--how-to-configure-optin-and-optout-in-flow",level:2},{value:"Optin preferences update",id:"optin-preferences-update",level:2},{value:"Optout preferences update",id:"optout-preferences-update",level:2},{value:"Sample optin flow will  look like this",id:"sample-optin-flow-will--look-like-this",level:2},{value:"Video creating opt-in flow",id:"video-creating-opt-in-flow",level:2},{value:"Video: Optput flow",id:"video-optput-flow",level:2}],c={toc:l};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When any new beneficiary sends a message the very first time,  the beneficiary can get an Optin message  to give their consent to receive the messages from the BOT."),(0,r.kt)("p",null,"In Glific NGOs can configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"optin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"optout")," process in flows."),(0,r.kt)("p",null,"Glific uses ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," variable to update the beneficiary","'","s profile details in the system."),(0,r.kt)("h2",{id:"heres--how-to-configure-optin-and-optout-in-flow"},"Here","'","s  how to configure Optin and Optout in flow."),(0,r.kt)("p",null,"1 . Create new flow or use the existing flow in the system with name optin and optout."),(0,r.kt)("p",null,"2 . Craft a message to let the user respond to their optin preference."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/Hr-qZQcJwS7DV1ci44VUEgG4.png",alt:null})),(0,r.kt)("p",null,"3 . Get the response form the user."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/toIaTxpeCwELFmWbeBRUJgkf.png",alt:null})),(0,r.kt)("h2",{id:"optin-preferences-update"},"Optin preferences update"),(0,r.kt)("p",null,"4 . On confirmation update the opt-in preferences for the beneficiary."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/6D55XW6_fd91EDIQxXfz_MSm.png",alt:null})),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"optout-preferences-update"},"Optout preferences update"),(0,r.kt)("p",null,"5 .  Create a flow for opt-out or use the existing flow in the system. Keywords for Optout flow could be  ",(0,r.kt)("strong",{parentName:"p"},"optout"),", ",(0,r.kt)("strong",{parentName:"p"},"stop.")," ",(0,r.kt)("em",{parentName:"p"},"(You can recommend us if you have better suggestions for the keywords)")),(0,r.kt)("p",null,"6 .  When beneficiary sends    ",(0,r.kt)("strong",{parentName:"p"},"optout")," or ",(0,r.kt)("strong",{parentName:"p"},"stop"),"  keyword to BOT, Opt-out preferences will be set for the beneficiary."),(0,r.kt)("p",null,"7 . Yon need use ",(0,r.kt)("strong",{parentName:"p"},"optout")," value to update the ",(0,r.kt)("inlineCode",{parentName:"p"},"settings")," variable ."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/_fSBLxGI81Rs1Kl2ppBX1uCr.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," - Make sure to use optin as keyword of this flow. optin is a special keyword which will execute the flow to get contact","'","s optin even if they are optedout"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/B5YFIu0r3x-5MuUfax8BMfaC.png",alt:null})),(0,r.kt)("h2",{id:"sample-optin-flow-will--look-like-this"},"Sample optin flow will  look like this"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/MP0wcueid3b9duZagRc8451z.png",alt:null})),(0,r.kt)("p",null,"Refer WhatsApp page to know more about getting Optins"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/"},"https://developers.facebook.com/docs/whatsapp/overview/getting-opt-in/")),(0,r.kt)("h2",{id:"video-creating-opt-in-flow"},"Video creating opt-in flow"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/aVpAGV110D8?showinfo=0"},"https://www.youtube.com/embed/aVpAGV110D8?showinfo=0")),(0,r.kt)("h2",{id:"video-optput-flow"},"Video: Optput flow"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/GHz-GClqZyE?showinfo=0"},"https://www.youtube.com/embed/GHz-GClqZyE?showinfo=0")))}u.isMDXComponent=!0}}]);