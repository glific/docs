"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?o.createElement(d,l(l({ref:t},p),{},{components:r})):o.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={},l=void 0,i={unversionedId:"FAQ/Get a data of a particular flow from BigQuery",id:"FAQ/Get a data of a particular flow from BigQuery",title:"Get a data of a particular flow from BigQuery",description:"- Login to your Google account https://console.cloud.google.com/",source:"@site/docs/6. FAQ/24. Get a data of a particular flow from BigQuery.md",sourceDirName:"6. FAQ",slug:"/FAQ/Get a data of a particular flow from BigQuery",permalink:"/docs/docs/FAQ/Get a data of a particular flow from BigQuery",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/6. FAQ/24. Get a data of a particular flow from BigQuery.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Update collection with bulk contacts or contact fields",permalink:"/docs/docs/FAQ/Update collection with bulk contacts or contact fields"},next:{title:"Get WABA ID",permalink:"/docs/docs/FAQ/Get WABA ID"}},c={},u=[],p={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Login to your Google account ",(0,n.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/"},"https://console.cloud.google.com/")),(0,n.kt)("li",{parentName:"ul"},"Click on Big Query Tab "),(0,n.kt)("li",{parentName:"ul"},"Click on small trangle next to your project ID"),(0,n.kt)("li",{parentName:"ul"},"Click on small trangle next to the your BOT number"),(0,n.kt)("li",{parentName:"ul"},"Click on any of the table."),(0,n.kt)("li",{parentName:"ul"},"In the right pane clikc on Query Tab in the Split tab"),(0,n.kt)("li",{parentName:"ul"},"Write the below query to get the results of a single flow"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SELECT * FROM ",(0,n.kt)("inlineCode",{parentName:"strong"},"your_dataset.messages")," where flow_name = ",(0,n.kt)("inlineCode",{parentName:"strong"},"flow_name")," order by inserted_at DESC"))))}s.isMDXComponent=!0}}]);