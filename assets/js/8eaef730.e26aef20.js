"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>m});var n=o(7294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function l(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?l(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,n,i=function(t,e){if(null==t)return{};var o,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)o=l[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var c=n.createContext({}),a=function(t){var e=n.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):r(r({},e),t)),o},p=function(t){var e=a(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var o=t.components,i=t.mdxType,l=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=a(o),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||l;return o?n.createElement(m,r(r({ref:e},p),{},{components:o})):n.createElement(m,r({ref:e},p))}));function m(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=o.length,r=new Array(l);r[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[u]="string"==typeof t?t:i,r[1]=s;for(var a=2;a<l;a++)r[a]=o[a];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}f.displayName="MDXCreateElement"},7476:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>a});var n=o(7462),i=(o(7294),o(3905));const l={},r=void 0,s={unversionedId:"Glific Documentation/Flows/Flow Actions/How to use Split By Collection in Flow editor",id:"Glific Documentation/Flows/Flow Actions/How to use Split By Collection in Flow editor",title:"How to use Split By Collection in Flow editor",description:"Split By Collection is used in flows, if there is a need to take a decision on the basis of which collection a contact belongs to.",source:"@site/docs/Glific Documentation/3. Flows/1. Flow Actions/13 . How to use Split By Collection in Flow editor.md",sourceDirName:"Glific Documentation/3. Flows/1. Flow Actions",slug:"/Glific Documentation/Flows/Flow Actions/How to use Split By Collection in Flow editor",permalink:"/docs/docs/Glific Documentation/Flows/Flow Actions/How to use Split By Collection in Flow editor",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/Glific%20Documentation/docs/Glific Documentation/3. Flows/1. Flow Actions/13 . How to use Split By Collection in Flow editor.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use the Interactive Message in Flow editor",permalink:"/docs/docs/Glific Documentation/Flows/Flow Actions/How to use the Interactive Message in Flow editor"},next:{title:"Background Flows",permalink:"/docs/docs/Glific Documentation/Flows/Flow Actions/Background Flows"}},c={},a=[],p={toc:a};function u(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Split By Collection")," is used in flows, if there is a need to take a decision on the basis of which collection a contact belongs to."),(0,i.kt)("p",null,"In the below example, we are taking decision in the flow on the basis of which language use has  preferred to use in Glifc."),(0,i.kt)("p",null,"Let","'","s say there are two languages to select for contacts (English and Hindi)."),(0,i.kt)("p",null,"1 .   Create a flow"),(0,i.kt)("p",null,"2 .  Ask for the language preferences."),(0,i.kt)("p",null,"3 . Add contact to the language specific collection."),(0,i.kt)("p",null,"4 . Do different actions on the basis of which collection a contact belongs to."),(0,i.kt)("p",null,"i) Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Split by Collection Membership"),"  question type."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/dv_ULEllxzb2CzyEre9WhyVi.png",alt:null})),(0,i.kt)("p",null,"ii) Select the collections you want to split on"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/ShoQ1lcnLdEX3a_h26GsrnBR.png",alt:null})),(0,i.kt)("p",null,"iii) Node will look like this."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/O2HqWwhNXwNUk8ptVTqnQnqe.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample Flow")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/UsZG-IXLbFVfsDVgAWJTkrui.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Execution Results")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/wYPRVjAQvPXp_6Zuz8d9jZ_B.jpg",alt:null})))}u.isMDXComponent=!0}}]);