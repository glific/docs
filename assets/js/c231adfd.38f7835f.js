"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,m=u["".concat(p,".").concat(f)]||u[f]||h[f]||r;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"FAQ/Send a link of a specific flow to new contacts to join the BOT",id:"version-1.0.0/FAQ/Send a link of a specific flow to new contacts to join the BOT",title:"Send a link of a specific flow to new contacts to join the BOT",description:"You can configure a link like below and send to the contacts through SMS or emails.",source:"@site/versioned_docs/version-1.0.0/6. FAQ/13. Send a link of a specific flow to new contacts to join the BOT.md",sourceDirName:"6. FAQ",slug:"/FAQ/Send a link of a specific flow to new contacts to join the BOT",permalink:"/docs/docs/FAQ/Send a link of a specific flow to new contacts to join the BOT",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/versioned_docs/version-1.0.0/6. FAQ/13. Send a link of a specific flow to new contacts to join the BOT.md",tags:[],version:"1.0.0",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Format the text in messages.",permalink:"/docs/docs/FAQ/Format the text in messages."},next:{title:"Get upload attachment option in Send message",permalink:"/docs/docs/FAQ/Get upload attachment option in Send message"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can configure a link like below and send to the contacts through SMS or emails."),(0,a.kt)("p",null,"Once they will click on the link, it will redirect them to a WhatsApp with the message, which they can send to start the conversation."),(0,a.kt)("p",null,"Method 1 : Commonly used to onboard existing  users to chatbot."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wa.me/+917772309999?text=Hi"},"https://wa.me/+91","<","10 digit bot phone number",">","?text="),"<","text you want user to send",">"),(0,a.kt)("p",null,"Eg: A URL like the one below  can be used to trigger your new contact flow with optin. ",(0,a.kt)("a",{parentName:"p",href:"https://wa.me/+917772309999?text=Hi"},"https://wa.me/+91","<","your bot phone number",">","?text=Hi")),(0,a.kt)("p",null,"Whatsapp documentation for the same : ",(0,a.kt)("a",{parentName:"p",href:"https://faq.whatsapp.com/452366545421244/?helpref=uf_share"},"https://faq.whatsapp.com/452366545421244/?helpref=uf_share")),(0,a.kt)("p",null,"Method 2:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.whatsapp.com/send?phone=**BOTNumber**&text=**Message"},"https://api.whatsapp.com/send?phone=**BOTNumber**","&","text=**Message"),"**"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://api.whatsapp.com/send?phone="},"https://api.whatsapp.com/send?phone="))," - link prefix"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Your BOT Number")," - Ex. 917302307943"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"text=")," - fixed content of the link "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Message")," - This will be message which will be posted on the WhatsApp.  Ex. Hi")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://api.whatsapp.com/send?phone=917302307943&text=Hi%20Glific%20team"},"https://api.whatsapp.com/send?phone=917302307943","&","text=Hi%20Glific%20team")),(0,a.kt)("p",null,"Message will look as given below for contacts in WhatsApp"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/32592458/220826084-fe5c3a72-dcd0-4cf1-bfc6-d4a626246b67.png",alt:"image"})))}u.isMDXComponent=!0}}]);