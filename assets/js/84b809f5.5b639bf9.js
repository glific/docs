"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4272],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var a=n.createContext({}),s=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return o?n.createElement(m,l(l({ref:t},p),{},{components:o})):n.createElement(m,l({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=o[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},8575:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=o(7462),r=(o(7294),o(3905));const i={},l=void 0,c={unversionedId:"Flows/Flow Actions/How to use Split By Collection in Flow editor",id:"Flows/Flow Actions/How to use Split By Collection in Flow editor",title:"How to use Split By Collection in Flow editor",description:"Split By Collection is used in flows, if there is a need to take a decision on the basis of which collection a contact belongs to.",source:"@site/docs/3. Flows/1. Flow Actions/13 . How to use Split By Collection in Flow editor.md",sourceDirName:"3. Flows/1. Flow Actions",slug:"/Flows/Flow Actions/How to use Split By Collection in Flow editor",permalink:"/docs/docs/Flows/Flow Actions/How to use Split By Collection in Flow editor",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/1. Flow Actions/13 . How to use Split By Collection in Flow editor.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use the Interactive Message in Flow editor",permalink:"/docs/docs/Flows/Flow Actions/How to use the Interactive Message in Flow editor"},next:{title:"Background Flows",permalink:"/docs/docs/Flows/Flow Actions/Background Flows"}},a={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Split By Collection")," is used in flows, if there is a need to take a decision on the basis of which collection a contact belongs to."),(0,r.kt)("p",null,"In the below example, we are taking decision in the flow on the basis of which language use has  preferred to use in Glifc."),(0,r.kt)("p",null,"Let","'","s say there are two languages to select for contacts (English and Hindi)."),(0,r.kt)("p",null,"1 .   Create a flow"),(0,r.kt)("p",null,"2 .  Ask for the language preferences."),(0,r.kt)("p",null,"3 . Add contact to the language specific collection."),(0,r.kt)("p",null,"4 . Do different actions on the basis of which collection a contact belongs to."),(0,r.kt)("p",null,"i) Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Split by Collection Membership"),"  question type."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220824217-321c5f5b-ac4b-4c64-91af-9f02250d0e42.png",alt:"image"})),(0,r.kt)("p",null,"ii) Select the collections you want to split on"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220824230-cdc3288a-bd38-41d5-a4c8-b8cd153ea856.png",alt:"image"})),(0,r.kt)("p",null,"iii) Node will look like this."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220824238-2993cc5f-41b7-4488-83b5-aa7ad135d408.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample Flow")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220824248-f5042d1e-5dd6-4502-93cc-36a74e50c220.png",alt:"image"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Execution Results")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220824277-7901972c-ddc7-486c-89c2-176b0b9210d6.png",alt:"image"})))}u.isMDXComponent=!0}}]);