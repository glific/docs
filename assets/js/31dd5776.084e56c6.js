"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,f=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return n?i.createElement(f,s(s({ref:t},c),{},{components:n})):i.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:a,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},6876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var i=n(7462),a=(n(7294),n(3905));const o={},s=void 0,r={unversionedId:"Integrations/ChatGPT using OpenAI APIs",id:"version-1.0.0/Integrations/ChatGPT using OpenAI APIs",title:"ChatGPT using OpenAI APIs",description:"###3 minute read &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Advanced",source:"@site/versioned_docs/version-1.0.0/4. Integrations/ChatGPT using OpenAI APIs.md",sourceDirName:"4. Integrations",slug:"/Integrations/ChatGPT using OpenAI APIs",permalink:"/docs/docs/Integrations/ChatGPT using OpenAI APIs",draft:!1,editUrl:"https://github.com/glific/docs/tree/main/versioned_docs/version-1.0.0/4. Integrations/ChatGPT using OpenAI APIs.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ChatGPT Integration via Jugalbandi",permalink:"/docs/docs/Integrations/ChatGPT Integration via Jugalbandi"},next:{title:"Conversing in voice notes over custom knowledge base",permalink:"/docs/docs/Integrations/Conversing in voice notes over custom knowledge base"}},l={},p=[{value:"Using ChatGPT within Glific using the OpenAI APIs",id:"using-chatgpt-within-glific-using-the-openai-apis",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How it will work",id:"how-it-will-work",level:2},{value:"Steps to follow to set up OpenAI API in Glific platform",id:"steps-to-follow-to-set-up-openai-api-in-glific-platform",level:2},{value:"Using the webhook for OpenAI API call in a Glific flow",id:"using-the-webhook-for-openai-api-call-in-a-glific-flow",level:2},{value:"Limitations",id:"limitations",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"###",(0,a.kt)("strong",{parentName:"p"},"3 minute read ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ","\xa0"," ",(0,a.kt)("inlineCode",{parentName:"strong"},"Advanced")))),(0,a.kt)("h2",{id:"using-chatgpt-within-glific-using-the-openai-apis"},"Using ChatGPT within Glific using the OpenAI APIs"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Leverage the capabilities of GPT models developed by OpenAI by using OpenAI APIs."))),(0,a.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an account in OpenAI platform ",(0,a.kt)("a",{parentName:"li",href:"https://openai.com/product"},"platform")," "),(0,a.kt)("li",{parentName:"ol"},"Create new API keys"),(0,a.kt)("li",{parentName:"ol"},"Make sure there is enough credit in OpenAI account to allow usage."),(0,a.kt)("li",{parentName:"ol"},"Pricing for API calls is as per OpenAI platform ",(0,a.kt)("a",{parentName:"li",href:"https://openai.com/pricing"},"pricing"))),(0,a.kt)("img",{width:"1060",alt:"Screenshot 2024-02-07 at 10 50 58\u202fAM",src:"https://github.com/glific/docs/assets/141305477/d3c22780-a4ae-4aaa-b196-1d079fce7eb5"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Above is a representative image from the OpenAI platform account")),(0,a.kt)("h2",{id:"how-it-will-work"},"How it will work"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Question is asked by the user after the flow is initiated"),(0,a.kt)("li",{parentName:"ol"},"OpenAI API call is made using webhooks within the flow"),(0,a.kt)("li",{parentName:"ol"},"Model being called to generate responses is ",(0,a.kt)("inlineCode",{parentName:"li"},"gpt-3.5-turbo-16k")),(0,a.kt)("li",{parentName:"ol"},"The response to the question is then sent to the user")),(0,a.kt)("h2",{id:"steps-to-follow-to-set-up-openai-api-in-glific-platform"},"Steps to follow to set up OpenAI API in Glific platform"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings"),", find ",(0,a.kt)("inlineCode",{parentName:"li"},"OpenAI (ChatGPT) (Beta)")),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"is active")," and paste the OpenAI API key from your OpenAI platform account")),(0,a.kt)("img",{width:"591",alt:"Screenshot 2024-02-07 at 10 48 51\u202fAM",src:"https://github.com/glific/docs/assets/141305477/87adef8e-1858-4aa6-8b46-7f976cfbb9fb"}),(0,a.kt)("h2",{id:"using-the-webhook-for-openai-api-call-in-a-glific-flow"},"Using the webhook for OpenAI API call in a Glific flow"),(0,a.kt)("img",{width:"1069",alt:"Screenshot 2024-02-07 at 9 59 24\u202fAM",src:"https://github.com/glific/docs/assets/141305477/babb9e27-fce5-4b2b-81d9-58017fd1a079"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Representative image to explain the steps in OpenAI API calls in a simple flow")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1jl0NWn73YlK1qMRedaPnGCQwDKHfG_7j/view?usp=drive_link"},"Sample flow")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Get the user question ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"call a webhook")," node, select ",(0,a.kt)("inlineCode",{parentName:"p"},"function")," and paste function name as ",(0,a.kt)("inlineCode",{parentName:"p"},"parse_via_chat_gpt")),(0,a.kt)("img",{width:"684",alt:"Screenshot 2024-02-07 at 10 52 49\u202fAM",src:"https://github.com/glific/docs/assets/141305477/f1165b6b-483c-43b4-9e8d-7bb6044d6e24"})),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Share the following function body\n",(0,a.kt)("inlineCode",{parentName:"p"},' {\n "contact": "@contact",\n "results": "@results",\n "question_text": "@results.question" \n }')))),(0,a.kt)("p",null,"here ",(0,a.kt)("inlineCode",{parentName:"p"},"question_text")," is the parameter name corresponding to user question. "),(0,a.kt)("img",{width:"711",alt:"Screenshot 2024-02-07 at 10 53 21\u202fAM",src:"https://github.com/glific/docs/assets/141305477/65622c0e-2dfb-41fb-8f6d-a836e8a0f81d"}),"4. The response from GPT is shown as `@results.webhookresultname.parsed_msg`, in the given example `gpt_response` is the webhook result name.",(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"At present, this is simple question answer with the GPT model ",(0,a.kt)("inlineCode",{parentName:"li"},"gpt-3.5-turbo-16k")),(0,a.kt)("li",{parentName:"ol"},"Selection of GPT model is not yet customizable from org Glific instances"),(0,a.kt)("li",{parentName:"ol"},"Additional system prompt is not yet customizable from org Glific instances"),(0,a.kt)("li",{parentName:"ol"},"Parameters like temperature, top P etc are not yet customizable from org Glific instances")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Reach out to the Glific team to flag any further customizations within this functionality")))}u.isMDXComponent=!0}}]);