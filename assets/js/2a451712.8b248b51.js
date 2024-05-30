"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7768],{5456:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=n(4848),t=n(8453);const a={},o=void 0,r={id:"FAQ/Check WhatsApp Quality Rating and Messaging Limits",title:"Check WhatsApp Quality Rating and Messaging Limits",description:"Check Whatsapp Messaging limits",source:"@site/docs/6. FAQ/19. Check WhatsApp Quality Rating and Messaging Limits.md",sourceDirName:"6. FAQ",slug:"/FAQ/Check WhatsApp Quality Rating and Messaging Limits",permalink:"/docs/docs/FAQ/Check WhatsApp Quality Rating and Messaging Limits",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/6. FAQ/19. Check WhatsApp Quality Rating and Messaging Limits.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a flow to capture multiple answers for a single question",permalink:"/docs/docs/FAQ/Create a flow to capture multiple answers for a single question"},next:{title:"Read Receipts",permalink:"/docs/docs/FAQ/Read Receipts"}},c={},l=[{value:"Check Whatsapp Messaging limits",id:"check-whatsapp-messaging-limits",level:2},{value:"Quality Rating",id:"quality-rating",level:2},{value:"How to check how many HSM template messages are sent from BOT.",id:"how-to-check-how-many-hsm-template-messages-are-sent-from-bot",level:2}];function d(e){const s={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"check-whatsapp-messaging-limits",children:"Check Whatsapp Messaging limits"}),"\n",(0,i.jsx)(s.p,{children:"Messaging limits determine the maximum number of business-initiated conversations you can initiate using each of your phone numbers in a rolling 24-hour period. A business-initiated conversation begins when the first template message is delivered to a customer and ends 24 hours later."}),"\n",(0,i.jsx)(s.p,{children:"The phone number tier of your WhatsApp API account will determine your messaging limit - the number of Contacts an account can message."}),"\n",(0,i.jsx)(s.p,{children:"There are five tiers a phone number inside a WABA can reach, including:"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Unverified Trial Tier"})}),": Send messages to 50 unique Contacts in a rolling 24-hour period."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Tier 1"})}),": Send template messages to 1K Contacts in a rolling 24-hour period."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Tier 2"})}),": Send template messages to 10K unique Contacts in a rolling 24-hour period"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Tier 3"})}),": Send template messages to 100K Contacts in a rolling 24-hour period"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.em,{children:(0,i.jsx)(s.strong,{children:"Tier 4"})}),": Send template messages to unlimited unique Contacts in a rolling 24-hour period"]}),"\n",(0,i.jsx)(s.p,{children:"If a sender has initiated X or more conversations with unique customers(where X is your current messaging limit divided by 2) in the last 7days, then the tier will be up by 1 level. For example- If you are in tier 1 and send 500 business conversations to unique users in 7days,  you would be moved from Tier1 to Tier2."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example 1"}),": A WhatsApp Sender begins by being able to initiate business conversations to 1000 unique customers per day. On day 1, the Sender starts 500 business conversations to unique customers by 3pm. The message limit for the Sender is raised to 10,000 unique customers by day 2 at 3pm."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Example 2"}),": A WhatsApp Sender begins by being able to initiate business conversations to 1000 unique customers per day. On day 1, the Sender starts 100 business conversations to unique customers. On day 2, the Sender starts another 300 business conversations to unique customers. On day 3, the Sender starts another 100 business conversations to unique customers by 3pm. This brings the total number of unique business conversations in the last 7 days to 500. The message limit for the Sender is raised to 10,000 unique customers by day 4 at 3pm."]}),"\n",(0,i.jsx)(s.h2,{id:"quality-rating",children:"Quality Rating"}),"\n",(0,i.jsx)(s.p,{children:"Your quality rating is based on how messages have been received by recipients over the past seven days and is weighted by recency. It is determined by a combination of quality signals from conversations between businesses and users. Examples include user feedback signals like blocks, reports and the reasons users provide when they block a business."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Maintaining High Quality"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Make sure messages follow the Whatsapp Businnes Policy (",(0,i.jsx)(s.a,{href:"https://www.whatsapp.com/legal/business-policy/",children:"https://www.whatsapp.com/legal/business-policy/"}),") and Commerce Policy ( ",(0,i.jsx)(s.a,{href:"https://www.whatsapp.com/legal/commerce-policy/",children:"https://www.whatsapp.com/legal/commerce-policy/"}),")."]}),"\n",(0,i.jsx)(s.li,{children:"Only send messages to users who have opted into receiving messages from your business."}),"\n",(0,i.jsx)(s.li,{children:"Make the messages highly personalized and useful to users. Avoid sending open-ended welcome or introductory messages."}),"\n",(0,i.jsx)(s.li,{children:"Be mindful of messaging frequency; avoid sending customers too many messages a day. Be thoughtful of informational messages, optimizing for content and length."}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Please refer the following link for more information :"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://developers.facebook.com/docs/whatsapp/messaging-limits/",children:"https://developers.facebook.com/docs/whatsapp/messaging-limits/"})}),"\n",(0,i.jsx)(s.h2,{id:"how-to-check-how-many-hsm-template-messages-are-sent-from-bot",children:"How to check how many HSM template messages are sent from BOT."}),"\n",(0,i.jsxs)(s.p,{children:["1 . Login to Gupshup ",(0,i.jsx)(s.a,{href:"https://www.gupshup.io/developer/home",children:"https://www.gupshup.io"})]}),"\n",(0,i.jsxs)(s.p,{children:["2 . From the ",(0,i.jsx)(s.code,{children:"Dashboard"})," dropdown click on the ",(0,i.jsx)(s.code,{children:"My Wallet"})," link"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/220826444-e851183c-a8b2-45bd-b4e8-caade39dbafd.png",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["3 . Click on ",(0,i.jsx)(s.code,{children:"View Usage"})," button"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/220826458-3d403b42-70d8-4be8-a486-debd18b4a869.png",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["4 . Under the ",(0,i.jsx)(s.code,{children:"Messages breakup"})," section, check the ",(0,i.jsx)(s.code,{children:"Template Sent"}),"and ",(0,i.jsx)(s.code,{children:"Template Media"})," details."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/220826470-3977e185-1866-4544-a4a8-499bc6751e8b.png",alt:"image"})}),"\n",(0,i.jsxs)(s.p,{children:["5 .  To filter the results use ",(0,i.jsx)(s.code,{children:"Filter by App"})," and ",(0,i.jsx)(s.code,{children:"month"})," dropdown. You can also download the report from ",(0,i.jsx)(s.code,{children:"Download report"})," the button."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{src:"https://user-images.githubusercontent.com/32592458/220826480-d91d47f8-5021-49c6-95cc-de25c425821d.png",alt:"image"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var i=n(6540);const t={},a=i.createContext(t);function o(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);