"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7863],{6539:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=n(4848),o=n(8453);const r={},i=void 0,l={id:"Integrations/Google Maps API for reverse geo location",title:"Google Maps API for reverse geo location",description:"3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Intermediate",source:"@site/docs/4. Integrations/Google Maps API for reverse geo location.md",sourceDirName:"4. Integrations",slug:"/Integrations/Google Maps API for reverse geo location",permalink:"/docs/docs/Integrations/Google Maps API for reverse geo location",draft:!1,unlisted:!1,editUrl:"https://github.com/glific/docs/tree/main/docs/4. Integrations/Google Maps API for reverse geo location.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GPT integration for image recognition",permalink:"/docs/docs/Integrations/GPT integration for image recognition"},next:{title:"RAG using OpenAI file search assistant",permalink:"/docs/docs/Integrations/RAG using OpenAI file search assistant"}},c={},a=[{value:"<strong>3 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 <code>Intermediate</code></strong>",id:"3-minute-read-------------------------------------------------------------intermediate",level:3},{value:"How to use reverse geo location",id:"how-to-use-reverse-geo-location",level:2},{value:"How it works",id:"how-it-works",level:3},{value:"How to use in the flow",id:"how-to-use-in-the-flow",level:3},{value:"Webhook response vs the google maps api",id:"webhook-response-vs-the-google-maps-api",level:3}];function d(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h3,{id:"3-minute-read-------------------------------------------------------------intermediate",children:(0,t.jsxs)(s.strong,{children:["3 minute read \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 ",(0,t.jsx)(s.code,{children:"Intermediate"})]})}),"\n",(0,t.jsx)(s.h2,{id:"how-to-use-reverse-geo-location",children:"How to use reverse geo location"}),"\n",(0,t.jsx)(s.p,{children:"Use this integration to simplify getting the geographic information of users"}),"\n",(0,t.jsx)(s.h3,{id:"how-it-works",children:"How it works"}),"\n",(0,t.jsx)(s.p,{children:"Users have to share the location pin. The location pin provides latitude and longitude information of the user. This can be used to get the following information from Google Maps API."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Country"}),"\n",(0,t.jsx)(s.li,{children:"State"}),"\n",(0,t.jsx)(s.li,{children:"District or City or Village"}),"\n",(0,t.jsx)(s.li,{children:"Ward name (if present)"}),"\n",(0,t.jsx)(s.li,{children:"Pincode"}),"\n",(0,t.jsx)(s.li,{children:"Address"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Once the information is returned from the api response, it can be added to the contact field of the user."}),"\n",(0,t.jsx)(s.h3,{id:"how-to-use-in-the-flow",children:"How to use in the flow"}),"\n",(0,t.jsxs)(s.ol,{start:"0",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Sample flow to try out the feature."}),"\n",(0,t.jsx)("img",{width:"735",alt:"Screenshot 2024-08-29 at 3 40 10\u202fPM",src:"https://github.com/user-attachments/assets/dbf359a6-b163-4496-b801-afb0641f6f48"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Use the ",(0,t.jsx)(s.a,{href:"https://glific.github.io/docs/docs/Product%20Features/Interactive%20Messages/#create-interactive-messages",children:"location interactive message"})," to get the location of the user"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["In call a webhook node, select ",(0,t.jsx)(s.code,{children:"function"})," and enter ",(0,t.jsx)(s.code,{children:"geolocation"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)("img",{width:"550",alt:"Screenshot 2024-08-29 at 3 39 50\u202fPM",src:"https://github.com/user-attachments/assets/346eaadf-9f19-4938-93d4-02fb081dcf1d"}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["Go to ",(0,t.jsx)(s.code,{children:"Function body"})," and pass the following parameters"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:'{  "lat": "@results.result_1.latitude",  "long": "@results.result_1.longitude" }'}),"\nHere the ",(0,t.jsx)(s.code,{children:"result_1"})," is the result storing the location pin shared by the user"]}),"\n",(0,t.jsx)("img",{width:"1030",alt:"Screenshot 2024-08-29 at 3 46 00\u202fPM",src:"https://github.com/user-attachments/assets/44c0e6ad-5282-486f-90ad-86fd6e073543"}),"\n",(0,t.jsxs)(s.ol,{start:"5",children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Following parameters are the response\n",(0,t.jsx)(s.code,{children:'{   "ward": "",   "success": true,   "state": "",   "postal_code": "",   "district": "",   "country": "",   "city": "",   "address": "" }'})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Use the following @results format to access the response of the api"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"to access country - @results.loc.country"}),"\n",(0,t.jsx)(s.li,{children:"to access state - @results.loc.state"}),"\n",(0,t.jsx)(s.li,{children:"to access ward - @results.loc.ward"}),"\n",(0,t.jsx)(s.li,{children:"to access district - @results.loc.district"}),"\n",(0,t.jsx)(s.li,{children:"to access city/village/locality - @results.loc.city"}),"\n",(0,t.jsx)(s.li,{children:"to access postal code - @results.loc.postal_code"}),"\n",(0,t.jsx)(s.li,{children:"to access the address - @results.loc.address"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Here ",(0,t.jsx)(s.code,{children:"loc"})," is the variable name which is the storing the result of webhook call."]}),"\n",(0,t.jsxs)(s.ol,{start:"6",children:["\n",(0,t.jsxs)(s.li,{children:["Any one or multiple of these parameters can be used to confirm the actual location of the user. The geographical information returned is as per the ",(0,t.jsx)(s.a,{href:"https://developers.google.com/maps/documentation/geocoding/requests-reverse-geocoding",children:"Google Maps Reverse Geo Locate API"}),". The levels correspond to the the administrative_area_levels available in Google Maps."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"webhook-response-vs-the-google-maps-api",children:"Webhook response vs the google maps api"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Country corresponds to address_components[\u201ccountry\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"State corresponds to address_components[\u201cadministrative_area_level_1\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"District corresponds to address_components[\u201cadministrative_area_level_2\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"City corresponds to address_components[\u201clocality\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"Ward corresponds to address_components[\u201cadministrative_area_level_3\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"Postal_code corresponds to address_components[\u201cpostal_code\u201d]"}),"\n",(0,t.jsx)(s.li,{children:"Address corresponds to formatted_address"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"As subsequent steps, organization can get the user to confirm if the location picked up is correct\nIf the information is correct, the contact variables can be updated and/or users can be clubbed into geographical collections for targeting at a later point."})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(6540);const o={},r=t.createContext(o);function i(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);