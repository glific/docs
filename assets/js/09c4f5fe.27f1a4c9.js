"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3548],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,b=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"Integrations/Setting up Exotel",id:"Integrations/Setting up Exotel",title:"Setting up Exotel",description:"### 3 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intermediate",source:"@site/docs/4. Integrations/Setting up Exotel.md",sourceDirName:"4. Integrations",slug:"/Integrations/Setting up Exotel",permalink:"/docs/docs/Integrations/Setting up Exotel",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/Setting up Exotel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GPT integration for image recognition",permalink:"/docs/docs/Integrations/GPT integration for image recognition"},next:{title:"FAQ",permalink:"/docs/docs/category/faq"}},l={},p=[{value:"Setting up on Exotel",id:"setting-up-on-exotel",level:2},{value:"Integrating Exotel in Glific",id:"integrating-exotel-in-glific",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Reference Article",id:"reference-article",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h3",{parentName:"blockquote",id:"3-minutes-read-------------------------------------------------------------intermediate"},(0,o.kt)("strong",{parentName:"h3"},"3 minutes read ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ",(0,o.kt)("inlineCode",{parentName:"strong"},"Intermediate"))),(0,o.kt)("hr",{parentName:"blockquote"})),(0,o.kt)("p",null,"This is for you if: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You are struggling to acquire users for your chatbot due to challenges with users clicking the link or users not typing the keyword and want to ease the friction of them starting chatbot flows easily.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"You are operating your WhatsApp chatbot on Glific and have an Exotel number."))),(0,o.kt)("h2",{id:"setting-up-on-exotel"},"Setting up on Exotel"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After logging in, make sure you have a number for the state where you expect most calls from.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to address book and create 2 lists \u2013 success and failure (success is for those whose missed call returned a response from Glific server successfully and failure for where it fails)"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516283-d1cbf291-febf-45fd-bee9-233401097dc9.png",alt:"1"})),(0,o.kt)("br",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to App Bazaar in the menu and create a new app\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516373-660c9733-0850-491d-b526-024d483308e5.png",alt:"2"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Proceed to Edit the app and select and drop into the selection box the component called \u201cPassthrough\u201d\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516442-16892ecd-a3ea-46a5-a761-078a36c7073e.png",alt:"3"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When you drop it in place, you will see a new box opening up like below. Paste the link in this format \u2013 ",(0,o.kt)("a",{parentName:"p",href:"https://api.xxx.glific.com/webhook/exotel/optin"},"https://api.xxx.glific.com/webhook/exotel/optin")," where xxx is your org\u2019s name. For example: ",(0,o.kt)("a",{parentName:"p",href:"https://api.staging.glific.com/webhook/exotel/optin"},"https://api.staging.glific.com/webhook/exotel/optin")),(0,o.kt)("img",{width:"859",alt:"Screenshot 2024-03-07 at 4 22 00\u202fPM",src:"https://github.com/glific/docs/assets/141305477/f119c347-9bc7-462b-836d-2f67ceae135b"}))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"In the \u201cIn response\u201d section, drag list manager in both boxes. Click on the list manager for \u201cOnce URL returns OK\u201d and in the box which opens next, select the list for successful calls and in the section called \u201cnext\u201d below, drag and drop Hangup.")),(0,o.kt)("img",{width:"982",alt:"Screenshot 2024-03-07 at 4 23 44\u202fPM",src:"https://github.com/glific/docs/assets/141305477/fe945eda-f7d9-4476-b7f8-c92bc31bcdaf"}),(0,o.kt)("br",null),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"In the previous card, click on the list manager under the head \u201cIf the URL returns anything else\u201d and in the box which opens, select the list for all failed calls. In the Next header, drag and drop Hangup.")),(0,o.kt)("img",{width:"969",alt:"Screenshot 2024-03-07 at 4 25 00\u202fPM",src:"https://github.com/glific/docs/assets/141305477/9d2ad00d-e1e9-4bd5-b299-c76bfe633738"}),(0,o.kt)("br",null),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Select save. This completes the setup on Exotel side.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"integrating-exotel-in-glific"},"Integrating Exotel in Glific"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You need to be an admin to get this access.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Login and go to flows and identify the flow your Exotel missed call should start. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Edit")," to open the next screen"))),(0,o.kt)("img",{width:"1197",alt:"Screenshot 2024-03-07 at 4 26 48\u202fPM",src:"https://github.com/glific/docs/assets/141305477/79857ce2-20ff-4b4f-9ffd-90cb0a16005e"}),(0,o.kt)("br",null),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"In the URL, note down the Flow ID as highlighted. Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"CONFIGURE")," to make sure you have done the next 2 steps.")),(0,o.kt)("img",{width:"767",alt:"Screenshot 2024-03-07 at 4 32 47\u202fPM",src:"https://github.com/glific/docs/assets/141305477/8ef47980-f1d6-4612-84af-378815b81daa"}),(0,o.kt)("br",null),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the flow with the Card for ",(0,o.kt)("inlineCode",{parentName:"p"},"Update Contact.")," See next step to configure it.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516813-3f0b39fd-c9e3-4b2e-bbd5-301d72920032.png",alt:"9"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the drop down ",(0,o.kt)("inlineCode",{parentName:"p"},"Select what to update"),", Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," and in the box below type \u201coptin\u201d. This will set the opt-in flag to true in WhatsApp. This is essential for the next step. Without this, no HSM template can be sent.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516873-e3f22408-68a7-416f-b329-2331b9f90ffe.png",alt:"10"})),(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Via Gupshup create a marketing template with a button. FaceBook seems to only approve marketing messages as of now \u2013 maybe it is due to the increased revenue this type of message offers. This button can be anything. The button will send a message from the user\u2019s side after the flow has been started, so that the bot can actually send messages to the user."))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Map this message like this after the Optin message as shown in Steps 5 and 6 above. To create this \u2013 Select \u201csend a message\u201d in the dropdown, and then click on WhatsApp tab in the top right of the card and configure as show in the second image in this step \u2013 you have to select the template you just got approved in Gupshup.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245516966-fcdf34ca-4e9d-4074-874f-1cf5b98a5cbf.png",alt:"12"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/132430123/245517020-c5509dc1-1cf2-49af-8ce1-23dfcf42b9c9.png",alt:"13"})),(0,o.kt)("br",null),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"Save the flow and go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," screen. Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Exotel"),"from the options. Remember, only admins can do this.",(0,o.kt)("br",null))),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"is Active")," to true. Enter the Glific Flow ID you noted in Step 3 above. Set direction of call to ",(0,o.kt)("inlineCode",{parentName:"li"},"Inbound")," and write your Exotel number in the last box and save.",(0,o.kt)("img",{width:"1061",alt:"Screenshot 2024-03-07 at 4 35 35\u202fPM",src:"https://github.com/glific/docs/assets/141305477/9a74544a-73eb-4863-b179-6bb0b8cd8ce2"}))),(0,o.kt)("br",null),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"This completes your Exotel setup and linkage of Exotel to the bot.")),(0,o.kt)("p",null,"A trick with your mobile number"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"On the mobile with your Chatbot number, activate unconditional call forwarding to the Exotel number. This way, your user can call the chatbot number and they will see their chatbot responding to them on WhatsApp.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"best-practices"},"Best Practices"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Test the missed call function thoroughly. Best way to do this is to use mobiles from different carriers, and prepaid and postpaid services."),(0,o.kt)("li",{parentName:"ol"},"Monitor the \u201cfailed calls\u201d list weekly and contact those whose missed call failed."),(0,o.kt)("li",{parentName:"ol"},"If you have a prepaid number for the chatbot, set a calendar reminder to recharge 2 days in advance. If the balance expires, and then you recharge, the call forwarding is broken. In this case, you need to disable call forwarding on your mobile to Exotel and then re-enable after 5 minutes. All missed calls in this downtime are lost.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Typical Costs")," (this can change and is provided as an estimate for you to budget and plan expenses):\nExotel charges Missed call at Rs 0.3\nWhatsApp sends marketing template messages at Rs 0.7"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"reference-article"},"Reference Article"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reap Benefit has experimented with Exotel for their onboarding. ",(0,o.kt)("a",{parentName:"li",href:"https://glific.org/missed-call-feature-solving-the-design-flaw-for-easy-onboarding-and-continuous-re-engagement-of-your-beneficiaries-into-your-glific-chatbot/"},"Click Here")," to read more.")))}u.isMDXComponent=!0}}]);