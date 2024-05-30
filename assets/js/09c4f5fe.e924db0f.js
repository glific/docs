"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8235],{4616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(4848),i=t(8453);const o={},r=void 0,a={id:"Integrations/Setting up Exotel",title:"Setting up Exotel",description:"### 3 minutes read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intermediate",source:"@site/docs/4. Integrations/Setting up Exotel.md",sourceDirName:"4. Integrations",slug:"/Integrations/Setting up Exotel",permalink:"/docs/docs/Integrations/Setting up Exotel",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/Setting up Exotel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GPT integration for image recognition",permalink:"/docs/docs/Integrations/GPT integration for image recognition"},next:{title:"FAQ",permalink:"/docs/docs/category/faq"}},l={},c=[{value:"<strong>3 minutes read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Intermediate</code></strong>",id:"3-minutes-read-------------------------------------------------------------intermediate",level:3},{value:"Setting up on Exotel",id:"setting-up-on-exotel",level:2},{value:"Integrating Exotel in Glific",id:"integrating-exotel-in-glific",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Reference Article",id:"reference-article",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h3,{id:"3-minutes-read-------------------------------------------------------------intermediate",children:(0,s.jsxs)(n.strong,{children:["3 minutes read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,s.jsx)(n.code,{children:"Intermediate"})]})}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"This is for you if:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"You are struggling to acquire users for your chatbot due to challenges with users clicking the link or users not typing the keyword and want to ease the friction of them starting chatbot flows easily."})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"You are operating your WhatsApp chatbot on Glific and have an Exotel number."})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-on-exotel",children:"Setting up on Exotel"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"After logging in, make sure you have a number for the state where you expect most calls from."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Go to address book and create 2 lists \u2013 success and failure (success is for those whose missed call returned a response from Glific server successfully and failure for where it fails)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516283-d1cbf291-febf-45fd-bee9-233401097dc9.png",alt:"1"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Go to App Bazaar in the menu and create a new app\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516373-660c9733-0850-491d-b526-024d483308e5.png",alt:"2"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Proceed to Edit the app and select and drop into the selection box the component called \u201cPassthrough\u201d\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516442-16892ecd-a3ea-46a5-a761-078a36c7073e.png",alt:"3"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["When you drop it in place, you will see a new box opening up like below. Paste the link in this format \u2013 ",(0,s.jsx)(n.a,{href:"https://api.xxx.glific.com/webhook/exotel/optin",children:"https://api.xxx.glific.com/webhook/exotel/optin"})," where xxx is your org\u2019s name. For example: ",(0,s.jsx)(n.a,{href:"https://api.staging.glific.com/webhook/exotel/optin",children:"https://api.staging.glific.com/webhook/exotel/optin"})]}),"\n"]}),"\n",(0,s.jsx)("img",{width:"859",alt:"Screenshot 2024-03-07 at 4 22 00\u202fPM",src:"https://github.com/glific/docs/assets/141305477/f119c347-9bc7-462b-836d-2f67ceae135b"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"In the \u201cIn response\u201d section, drag list manager in both boxes. Click on the list manager for \u201cOnce URL returns OK\u201d and in the box which opens next, select the list for successful calls and in the section called \u201cnext\u201d below, drag and drop Hangup."}),"\n"]}),"\n",(0,s.jsx)("img",{width:"982",alt:"Screenshot 2024-03-07 at 4 23 44\u202fPM",src:"https://github.com/glific/docs/assets/141305477/fe945eda-f7d9-4476-b7f8-c92bc31bcdaf"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"7",children:["\n",(0,s.jsx)(n.li,{children:"In the previous card, click on the list manager under the head \u201cIf the URL returns anything else\u201d and in the box which opens, select the list for all failed calls. In the Next header, drag and drop Hangup."}),"\n"]}),"\n",(0,s.jsx)("img",{width:"969",alt:"Screenshot 2024-03-07 at 4 25 00\u202fPM",src:"https://github.com/glific/docs/assets/141305477/9d2ad00d-e1e9-4bd5-b299-c76bfe633738"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"Select save. This completes the setup on Exotel side."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"integrating-exotel-in-glific",children:"Integrating Exotel in Glific"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"You need to be an admin to get this access."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Login and go to flows and identify the flow your Exotel missed call should start. Select ",(0,s.jsx)(n.code,{children:"Edit"})," to open the next screen"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("img",{width:"1197",alt:"Screenshot 2024-03-07 at 4 26 48\u202fPM",src:"https://github.com/glific/docs/assets/141305477/79857ce2-20ff-4b4f-9ffd-90cb0a16005e"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["In the URL, note down the Flow ID as highlighted. Click on ",(0,s.jsx)(n.code,{children:"CONFIGURE"})," to make sure you have done the next 2 steps."]}),"\n"]}),"\n",(0,s.jsx)("img",{width:"767",alt:"Screenshot 2024-03-07 at 4 32 47\u202fPM",src:"https://github.com/glific/docs/assets/141305477/8ef47980-f1d6-4612-84af-378815b81daa"}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Start the flow with the Card for ",(0,s.jsx)(n.code,{children:"Update Contact."})," See next step to configure it.\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516813-3f0b39fd-c9e3-4b2e-bbd5-301d72920032.png",alt:"9"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["In the drop down ",(0,s.jsx)(n.code,{children:"Select what to update"}),", Select ",(0,s.jsx)(n.code,{children:"Settings"})," and in the box below type \u201coptin\u201d. This will set the opt-in flag to true in WhatsApp. This is essential for the next step. Without this, no HSM template can be sent.\n",(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516873-e3f22408-68a7-416f-b329-2331b9f90ffe.png",alt:"10"})]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Via Gupshup create a marketing template with a button. FaceBook seems to only approve marketing messages as of now \u2013 maybe it is due to the increased revenue this type of message offers. This button can be anything. The button will send a message from the user\u2019s side after the flow has been started, so that the bot can actually send messages to the user."}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsx)(n.li,{children:"Map this message like this after the Optin message as shown in Steps 5 and 6 above. To create this \u2013 Select \u201csend a message\u201d in the dropdown, and then click on WhatsApp tab in the top right of the card and configure as show in the second image in this step \u2013 you have to select the template you just got approved in Gupshup."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245516966-fcdf34ca-4e9d-4074-874f-1cf5b98a5cbf.png",alt:"12"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/132430123/245517020-c5509dc1-1cf2-49af-8ce1-23dfcf42b9c9.png",alt:"13"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"8",children:["\n",(0,s.jsxs)(n.li,{children:["Save the flow and go to ",(0,s.jsx)(n.code,{children:"Settings"})," screen. Select ",(0,s.jsx)(n.code,{children:"Exotel"}),"from the options. Remember, only admins can do this."]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"9",children:["\n",(0,s.jsxs)(n.li,{children:["Set ",(0,s.jsx)(n.code,{children:"is Active"})," to true. Enter the Glific Flow ID you noted in Step 3 above. Set direction of call to ",(0,s.jsx)(n.code,{children:"Inbound"})," and write your Exotel number in the last box and save.","\n",(0,s.jsx)("img",{width:"1061",alt:"Screenshot 2024-03-07 at 4 35 35\u202fPM",src:"https://github.com/glific/docs/assets/141305477/9a74544a-73eb-4863-b179-6bb0b8cd8ce2"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"This completes your Exotel setup and linkage of Exotel to the bot."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"A trick with your mobile number"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"On the mobile with your Chatbot number, activate unconditional call forwarding to the Exotel number. This way, your user can call the chatbot number and they will see their chatbot responding to them on WhatsApp."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Test the missed call function thoroughly. Best way to do this is to use mobiles from different carriers, and prepaid and postpaid services."}),"\n",(0,s.jsx)(n.li,{children:"Monitor the \u201cfailed calls\u201d list weekly and contact those whose missed call failed."}),"\n",(0,s.jsx)(n.li,{children:"If you have a prepaid number for the chatbot, set a calendar reminder to recharge 2 days in advance. If the balance expires, and then you recharge, the call forwarding is broken. In this case, you need to disable call forwarding on your mobile to Exotel and then re-enable after 5 minutes. All missed calls in this downtime are lost."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Typical Costs"})," (this can change and is provided as an estimate for you to budget and plan expenses):\nExotel charges Missed call at Rs 0.3\nWhatsApp sends marketing template messages at Rs 0.7"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"reference-article",children:"Reference Article"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Reap Benefit has experimented with Exotel for their onboarding. ",(0,s.jsx)(n.a,{href:"https://glific.org/missed-call-feature-solving-the-design-flaw-for-easy-onboarding-and-continuous-re-engagement-of-your-beneficiaries-into-your-glific-chatbot/",children:"Click Here"})," to read more."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);