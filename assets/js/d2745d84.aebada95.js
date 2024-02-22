"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[856],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Integrations/Setting up Exotel",id:"version-1.0.0/Integrations/Setting up Exotel",title:"Setting up Exotel",description:"### 3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intermediate",source:"@site/versioned_docs/version-1.0.0/4. Integrations/Setting up Exotel.md",sourceDirName:"4. Integrations",slug:"/Integrations/Setting up Exotel",permalink:"/docs/docs/Integrations/Setting up Exotel",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/versioned_docs/version-1.0.0/4. Integrations/Setting up Exotel.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dialogflow for Natural Language Processing",permalink:"/docs/docs/Integrations/Dialogflow for Natural Language Processing"},next:{title:"FAQ",permalink:"/docs/docs/category/faq"}},l={},p=[{value:"Setting up on Exotel",id:"setting-up-on-exotel",level:2},{value:"Integrating Exotel in Glific",id:"integrating-exotel-in-glific",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Reference Article",id:"reference-article",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("h3",{parentName:"blockquote",id:"3-minute-read---------------------------------------------------------intermediate"},(0,r.kt)("strong",{parentName:"h3"},"3 minute read ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ",(0,r.kt)("inlineCode",{parentName:"strong"},"Intermediate"))),(0,r.kt)("hr",{parentName:"blockquote"})),(0,r.kt)("p",null,"This is for you if: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"You are struggling to acquire users for your chatbot due to challenges with users clicking the link or users not typing the keyword and want to ease the friction of them starting chatbot flows easily.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"You are operating your WhatsApp chatbot on Glific and have an Exotel number."))),(0,r.kt)("h2",{id:"setting-up-on-exotel"},"Setting up on Exotel"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After logging in, make sure you have a number for the state where you expect most calls from.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to address book and create 2 lists \u2013 success and failure (success is for those whose missed call returned a response from Glific server successfully and failure for where it fails)"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516283-d1cbf291-febf-45fd-bee9-233401097dc9.png",alt:"1"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to App Bazaar in the menu and create a new app\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516373-660c9733-0850-491d-b526-024d483308e5.png",alt:"2"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Proceed to Edit the app and select and drop into the selection box the component called \u201cPassthrough\u201d\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516442-16892ecd-a3ea-46a5-a761-078a36c7073e.png",alt:"3"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When you drop it in place, you will see a new box opening up like below. Paste the link in this format \u2013 ",(0,r.kt)("a",{parentName:"p",href:"https://api.xxx.tides.coloredcow.com/webhook/exotel/optin"},"https://api.xxx.tides.coloredcow.com/webhook/exotel/optin")," where xxx is your org\u2019s name. For example: ",(0,r.kt)("a",{parentName:"p",href:"https://api.staging.tides.coloredcow.com/webhook/exotel/optin"},"https://api.staging.tides.coloredcow.com/webhook/exotel/optin"),"\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516521-b40138a9-7fa4-4288-bfa3-dc7ea7b5acc0.png",alt:"4"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the \u201cIn response\u201d section, drag list manager in both boxes. Click on the list manager for \u201cOnce URL returns OK\u201d and in the box which opens next, select the list for successful calls and in the section called \u201cnext\u201d below, drag and drop Hangup.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516586-25b97585-1682-451a-b9ca-db18e0a1a2b5.png",alt:"5"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the previous card, click on the list manager under the head \u201cIf the URL returns anything else\u201d and in the box which opens, select the list for all failed calls. In the Next header, drag and drop Hangup.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516641-6d06323a-d8fc-4d62-9cd1-c4cb0b721a01.png",alt:"6"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select save. This completes the setup on Exotel side."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"integrating-exotel-in-glific"},"Integrating Exotel in Glific"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You need to be an admin to get this access.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login and go to flows and identify the flow your Exotel missed call should start. Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Edit")," to open the next screen\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516685-6e2aea22-2b6e-4acf-917b-f6e36f8e9d22.png",alt:"7"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the URL, note down the Flow ID as highlighted. Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIGURE")," to make sure you have done the next 2 steps.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516740-49938862-da43-4d61-b6a9-edec8241ea6d.png",alt:"8"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the flow with the Card for ",(0,r.kt)("inlineCode",{parentName:"p"},"Update Contact.")," See next step to configure it.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516813-3f0b39fd-c9e3-4b2e-bbd5-301d72920032.png",alt:"9"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the drop down ",(0,r.kt)("inlineCode",{parentName:"p"},"Select what to update"),", Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," and in the box below type \u201coptin\u201d. This will set the opt-in flag to true in WhatsApp. This is essential for the next step. Without this, no HSM template can be sent.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516873-e3f22408-68a7-416f-b329-2331b9f90ffe.png",alt:"10"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Via Gupshup create a marketing template with a button. FaceBook seems to only approve marketing messages as of now \u2013 maybe it is due to the increased revenue this type of message offers. This button can be anything. The button will send a message from the user\u2019s side after the flow has been started, so that the bot can actually send messages to the user.\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516912-389df91c-9104-4179-ae1e-e9a54f49aa22.png",alt:"11"})),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Map this message like this after the Optin message as shown in Steps 5 and 6 above. To create this \u2013 Select \u201csend a message\u201d in the dropdown, and then click on WhatsApp tab in the top right of the card and configure as show in the second image in this step \u2013 you have to select the template you just got approved in Gupshup."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516966-fcdf34ca-4e9d-4074-874f-1cf5b98a5cbf.png",alt:"12"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245517020-c5509dc1-1cf2-49af-8ce1-23dfcf42b9c9.png",alt:"13"})),(0,r.kt)("br",null),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Save the flow and go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," screen. Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit")," in the Exotel box as shown in the screen below. Remember, only admins can do this.\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/132430123/245517103-e21f26c9-8576-4f64-9437-a9f1856e8434.png",alt:"14"}),(0,r.kt)("br",null))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"is Active")," to true. Enter the Glific Flow ID you noted in Step 3 above. Set direction of call to ",(0,r.kt)("inlineCode",{parentName:"li"},"Inbound")," and write your Exotel number in the last box and save.\n",(0,r.kt)("img",{parentName:"li",src:"https://user-images.githubusercontent.com/132430123/245517175-d87d0e4f-fb78-44a0-87ad-5e79717709c0.png",alt:"15"}),(0,r.kt)("br",null))),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"This completes your Exotel setup and linkage of Exotel to the bot.")),(0,r.kt)("p",null,"A trick with your mobile number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"On the mobile with your Chatbot number, activate unconditional call forwarding to the Exotel number. This way, your user can call the chatbot number and they will see their chatbot responding to them on WhatsApp.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"best-practices"},"Best Practices"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Test the missed call function thoroughly. Best way to do this is to use mobiles from different carriers, and prepaid and postpaid services."),(0,r.kt)("li",{parentName:"ol"},"Monitor the \u201cfailed calls\u201d list weekly and contact those whose missed call failed."),(0,r.kt)("li",{parentName:"ol"},"If you have a prepaid number for the chatbot, set a calendar reminder to recharge 2 days in advance. If the balance expires, and then you recharge, the call forwarding is broken. In this case, you need to disable call forwarding on your mobile to Exotel and then re-enable after 5 minutes. All missed calls in this downtime are lost.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Typical Costs")," (this can change and is provided as an estimate for you to budget and plan expenses):\nExotel charges Missed call at Rs 0.3\nWhatsApp sends marketing template messages at Rs 0.7"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reference-article"},"Reference Article"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reap Benefit has experimented with Exotel for their onboarding. ",(0,r.kt)("a",{parentName:"li",href:"https://glific.org/missed-call-feature-solving-the-design-flaw-for-easy-onboarding-and-continuous-re-engagement-of-your-beneficiaries-into-your-glific-chatbot/"},"Click Here")," to read more.")))}u.isMDXComponent=!0}}]);