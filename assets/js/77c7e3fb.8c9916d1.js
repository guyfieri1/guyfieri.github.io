"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6353],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,g=u["".concat(p,".").concat(h)]||u[h]||d[h]||n;return a?o.createElement(g,i(i({ref:t},l),{},{components:a})):o.createElement(g,i({ref:t},l))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7262:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={title:"How do I get started with Backstage?",description:"Need help getting Backstage up and running?\ud83d\udc4b We got you.",author:"Austin Lamon, Spotify",publishedISODate:"2021-09-01",previewImage:"./preview.png"},i=void 0,s={permalink:"/blog/getting-started-with-backstage",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/getting-started-with-backstage/index.md",source:"@site/blog/getting-started-with-backstage/index.md",title:"How do I get started with Backstage?",description:"Need help getting Backstage up and running?\ud83d\udc4b We got you.",date:"2023-07-13T12:03:53.179Z",formattedDate:"July 13, 2023",tags:[],readingTime:2.23,hasTruncateMarker:!1,authors:[{name:"Austin Lamon, Spotify"}],frontMatter:{title:"How do I get started with Backstage?",description:"Need help getting Backstage up and running?\ud83d\udc4b We got you.",author:"Austin Lamon, Spotify",publishedISODate:"2021-09-01",previewImage:"./preview.png"},prevItem:{title:"How Backstage made our developers more effective \u2014 and how it can help yours, too",permalink:"/blog/how-backstage-made-our-developers-more-effective"},nextItem:{title:"Community Session: Splunk shares their Backstage developer portal",permalink:"/blog/community-session/splunk-pink-phonebook"}},p={authorsImageUrls:[void 0]},c=[{value:"Get help from our partners",id:"get-help-from-our-partners",level:2},{value:"Let\u2019s get started",id:"lets-get-started",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spotify can help you get Backstage up and running",src:a(401).Z,width:"960",height:"504"})),(0,r.kt)("p",null,"One of the best parts about working on Backstage is building connections with organizations of all shapes and sizes. At this point, we\u2019ve spoken with hundreds of companies at various stages in their Backstage journey. Those conversations run the gamut but most often the question we hear is, ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/blog/2021/05/20/adopting-backstage"},"\u201cHow do I get started with Backstage?\u201d")),(0,r.kt)("p",null,"If you\u2019ve been asking yourself the same thing, the good news is: you\u2019re not the first and you\u2019re not alone. Backstage is still new, but we\u2019ve now crossed over 18 months with the project in the wild. And we\u2019ve learned a ton: how unique each organization\u2019s needs are, when flexibility and customization can lead to paralysis, and where teams have found quick wins in building better developer experience."),(0,r.kt)("p",null,"So if you\u2019re curious about how to get started with Backstage, ",(0,r.kt)("a",{parentName:"p",href:"https://info.backstage.spotify.com/office-hours"},"give us a shout")," and book a one-to-one meeting. Given our 5+ years of experience as the original adopter, the Spotify team brings a lot of lessons learned and perspective on how to position the investment needed to bring a developer portal to life."),(0,r.kt)("p",null,"We\u2019re also happy to connect you with ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md"},"other adopters")," in the community. We\u2019ve found other organizations are eager to share knowledge, experience, and best practices around adoption.\nIn addition, our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/backstage/community/tree/main/backstage-community-sessions"},"monthly community sessions")," and ",(0,r.kt)("a",{parentName:"p",href:"https://info.backstage.spotify.com/newsletter_subscribe"},"newsletter"),", ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/channels/687207715902193673/687207715902193679"},"very active Discord channel")," and ",(0,r.kt)("a",{parentName:"p",href:"https://backstage.io/docs/overview/roadmap"},"quarterly roadmap")," are great ways to keep up with what\u2019s happening in Backstage."),(0,r.kt)("h2",{id:"get-help-from-our-partners"},"Get help from our partners"),(0,r.kt)("p",null,"We get it that at times your consulting needs will be more hands-on \u2014 from project scoping to activation to onboarding your dev teams. That\u2019s why we\u2019ve partnered with service providers who can help build out a fully customized Backstage solution tailored to your organization\u2019s needs."),(0,r.kt)("p",null,"How does our partner program work? We vet potential partners on whether they\u2019re equipped to provide a successful Backstage implementation (as well as their overall service delivery capabilities, reputation in the market, etc.), set up a referral agreement with contracted partners we trust, and send adopters their way when it's a best fit."),(0,r.kt)("p",null,"For instance, ",(0,r.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/about-us/news/2021/thoughtworks-is-collaborating-with-spotify-to-deliver-better-dev"},"we\u2019ve partnered with Thoughtworks"),", a leading global technology consultancy, for full-scale developer portal activations. Thoughtworks has been on the ground floor with customers like TELUS Digital (Canada\u2019s largest telecom) looking to support and streamline their developer experience using Backstage."),(0,r.kt)("h2",{id:"lets-get-started"},"Let\u2019s get started"),(0,r.kt)("p",null,"So whether you\u2019re just looking for tips and advice, or more hands-on help getting Backstage up and running, ",(0,r.kt)("a",{parentName:"p",href:"https://info.backstage.spotify.com/office-hours"},"contact us")," and we can connect you with a partner \u2014 or just share what we\u2019ve learned from other adopters. The Spotify team is available to meet and we\u2019re always happy to talk about a new Backstage experience."))}d.isMDXComponent=!0},401:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/backstage-getting-started-a01d3ddc0a42e94ebd830cb046ad3168.png"}}]);