"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,h=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s=void 0,i={unversionedId:"Flows/Flow Features/Multiple Contactsprofiles with one phone number",id:"Flows/Flow Features/Multiple Contactsprofiles with one phone number",title:"Multiple Contactsprofiles with one phone number",description:"It has been observed in some cases, beneficiaries have one phone number and there is more than one person who needs to have their profile created to access the Chat.",source:"@site/docs/3. Flows/3. Flow Features/05. Multiple Contactsprofiles with one phone number.md",sourceDirName:"3. Flows/3. Flow Features",slug:"/Flows/Flow Features/Multiple Contactsprofiles with one phone number",permalink:"/docs/docs/Flows/Flow Features/Multiple Contactsprofiles with one phone number",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/3. Flows/3. Flow Features/05. Multiple Contactsprofiles with one phone number.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrate Google sheets in Flows",permalink:"/docs/docs/Flows/Flow Features/Integrate Google sheets in Flows"},next:{title:"Flow Troubleshooting",permalink:"/docs/docs/category/flow-troubleshooting"}},l={},p=[{value:"Create New Profile",id:"create-new-profile",level:2},{value:"Access Old profile",id:"access-old-profile",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It has been observed in some cases, beneficiaries have one phone number and there is more than one person who needs to have their profile created to access the Chat."),(0,o.kt)("p",null,"In Glific we have introduced a multiple profile feature, which will help more than one person to create their profiles and use the chatbot to access the information with one phone number."),(0,o.kt)("p",null,"Below are the steps on how to implement multiple profile features in your flow."),(0,o.kt)("h2",{id:"create-new-profile"},"Create New Profile"),(0,o.kt)("p",null,"1 . Create a new flow and ask a question, the contact if he/she wants to create a new profile."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193585-825ae6f6-066e-4c14-854f-20feedeb4afd.png",alt:"image"})),(0,o.kt)("p",null,"2 .  If contact press 1.  As contact to provide their profile attributes like name and role"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193608-cc8c2688-cdd0-4df0-aeaf-e7ac90af598a.png",alt:"image"})),(0,o.kt)("p",null,"3 .  Once the contact share the details use the node with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"manage profile")," and add the details to the profile."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193626-2bfdb53a-1407-4a39-ab72-401d784169f2.png",alt:"image"})),(0,o.kt)("p",null,"4 .  It will return success or failure. If it returns success add the values. in the contact variables."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193656-e1b997a2-353d-4ea7-85e7-2e873a5fc9c3.png",alt:"image"})),(0,o.kt)("p",null,"Output after executing the flow (",(0,o.kt)("strong",{parentName:"p"},"Create User"),")"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193678-064ed93b-298c-48dc-ae62-62744412cf6f.png",alt:"image"})),(0,o.kt)("h2",{id:"access-old-profile"},"Access Old profile"),(0,o.kt)("p",null,"To access the old profile or the profile just create."),(0,o.kt)("p",null,"1 .  Enter option 2  (Switch to the existing user) in the first node created"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193760-002443f0-67e3-4743-843d-3ec96dcb045c.png",alt:"image"})),(0,o.kt)("p",null,"2 .  Use ",(0,o.kt)("inlineCode",{parentName:"p"},"@contact.list_profiles")," to show all profiles that exist for this phone number."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193776-bf597e31-0bb7-4e04-979c-86ef162806f8.png",alt:"image"})),(0,o.kt)("p",null,"3 . Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"manage profile")," node to switch the user profile"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193803-b0a99b43-a458-496d-924d-8b87e52a71f0.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193835-0643affb-3b19-4699-ac8e-ef0b50957b37.png",alt:"image"})),(0,o.kt)("p",null,"4 .  ",(0,o.kt)("strong",{parentName:"p"},"On success"),", access the profile contact variables with ",(0,o.kt)("inlineCode",{parentName:"p"},"@contact.fields.name")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On Failure")," ask the contact to choose the option again."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193860-872565dc-cd27-41b8-9a48-b77ae813c543.png",alt:"image"})),(0,o.kt)("p",null,"Output after executing the flow (",(0,o.kt)("strong",{parentName:"p"},"Switch User"),")"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User profile 1.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193883-6ffdfa66-30f7-4fdd-a012-82a954fe6cf5.png",alt:"image"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"User profile 2")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/221193915-a4cc4645-2e2e-4763-b2fd-f4ab857cc485.png",alt:"image"})))}u.isMDXComponent=!0}}]);