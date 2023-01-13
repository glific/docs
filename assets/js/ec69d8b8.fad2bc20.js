"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2800],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||a;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9466:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"Integrations/BigQuery data updates not working - Troubleshoot checklist.",id:"Integrations/BigQuery data updates not working - Troubleshoot checklist.",title:"BigQuery data updates not working - Troubleshoot checklist.",description:"1. Check notification - Check system logs to see if there is any error.",source:"@site/docs/4. Integrations/09. BigQuery data updates not working - Troubleshoot checklist..md",sourceDirName:"4. Integrations",slug:"/Integrations/BigQuery data updates not working - Troubleshoot checklist.",permalink:"/docs/docs/Integrations/BigQuery data updates not working - Troubleshoot checklist.",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/09. BigQuery data updates not working - Troubleshoot checklist..md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started with Dialog Flow for NLP",permalink:"/docs/docs/Integrations/Getting started with Dialog Flow for NLP"},next:{title:"Reporting and Analytics",permalink:"/docs/docs/category/reporting-and-analytics"}},s={},c=[],p={toc:c};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Check notification")," - Check system logs to see if there is any error.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Click on Notification tab from left pane."),(0,o.kt)("li",{parentName:"ol"},"Check if there is any errors or warning related to your google account."),(0,o.kt)("li",{parentName:"ol"})))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/tWUdTA1LRNIzuZ-Cu-OP1nnN.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sample error message.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/bpVxRekXURG9BdXmGvFiCUo5.png",alt:null})),(0,o.kt)("p",null,"2 . Check the ",(0,o.kt)("strong",{parentName:"p"},"BQ account is active"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/KTGIYlUcQf8IarO_tmFUA9-r.png",alt:null})),(0,o.kt)("p",null,"3 . Check if there is any ",(0,o.kt)("strong",{parentName:"p"},"billing issue at the GCS end"),"."),(0,o.kt)("p",null,"a. Go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/billing/01340A-5AF039-6A970E?project=tides-saas-309509&organizationId=960057738174"},"https://console.cloud.google.com/")),(0,o.kt)("p",null,"b. Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"billings")," from left pane."),(0,o.kt)("p",null,"c. Check to see if you have any billing related notification from Google."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.slab.com/prod/uploads/8k89m6if/posts/images/58aomUc78oIYNmh8la_fXar4.png",alt:null})))}u.isMDXComponent=!0}}]);