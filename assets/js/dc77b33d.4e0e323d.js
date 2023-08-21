"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9215],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?o.createElement(g,i(i({ref:t},d),{},{components:a})):o.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6699:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={title:"How we\u2019re building for simplicity at TELUS",description:"TELUS is a world-leading communications technology. Read about lessons they learned about standing up Backstage as an early adopter.",author:"Steve Tannock, TELUS",publishedISODate:"2022-04-25",previewImage:"./preview.png"},i=void 0,s={permalink:"/blog/building-for-simplicity-TELUS",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/building-for-simplicity-TELUS/index.md",source:"@site/blog/building-for-simplicity-TELUS/index.md",title:"How we\u2019re building for simplicity at TELUS",description:"TELUS is a world-leading communications technology. Read about lessons they learned about standing up Backstage as an early adopter.",date:"2023-07-13T12:03:53.034Z",formattedDate:"July 13, 2023",tags:[],readingTime:3.99,hasTruncateMarker:!1,authors:[{name:"Steve Tannock, TELUS"}],frontMatter:{title:"How we\u2019re building for simplicity at TELUS",description:"TELUS is a world-leading communications technology. Read about lessons they learned about standing up Backstage as an early adopter.",author:"Steve Tannock, TELUS",publishedISODate:"2022-04-25",previewImage:"./preview.png"},prevItem:{title:"Calling all adopters: Welcome to backstage.spotify.com",permalink:"/blog/calling-all-adopters"},nextItem:{title:"ICYMI: BackstageCon & KubeCon NA 2022 Recap",permalink:"/blog/backstagecon-kubecon-2022"}},l={authorsImageUrls:[void 0]},c=[{value:"Breaking down monoliths",id:"breaking-down-monoliths",level:2},{value:"From Backstage to Simplify",id:"from-backstage-to-simplify",level:2},{value:"Lessons from a (very) early adopter",id:"lessons-from-a-very-early-adopter",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"TELUS blog post header image",src:a(4026).Z,width:"1200",height:"630"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.telus.com/en/"},"TELUS")," is a world-leading communications technology company focused on delivering positive outcomes with technology. As a software development team at TELUS, we support that mission by building hundreds of apps and services for our customers, partners and fellow team members which can mean a lot of change. Change is good and can be exciting, but personally, I think boring is better. "),(0,n.kt)("p",null,"As an early adopter, we\u2019ve learned a lot and wanted to share our story alongside some important lessons we think other adopters can benefit from as they begin their Backstage journey. "),(0,n.kt)("h2",{id:"breaking-down-monoliths"},"Breaking down monoliths"),(0,n.kt)("p",null,"Not only has our team of over 2,500 developers grown quickly over the past few years, we\u2019ve also been actively breaking down multiple software monoliths. As our team grew bigger, centralized locations for tools, information, and best practices quickly fell apart and became siloed. A few years ago, we found that our developer platform \u2014 originally built as a shadow IT project \u2014 had hit its ceiling. The world had shifted in terms of developer experience best practices and we needed something new. "),(0,n.kt)("p",null,"Our goal was to create a common touchpoint where we could evangelize better defaults so people chose our platform over one-off, siloed solutions. We wanted to enable faster builds at lower cost and create sustainable software groups through a single pane of glass that surfaced our \u201cclass A\u201d tools: something deeply standardized (aka boring) to help everyone do their best work more efficiently lower in the stack, and freeing them up to be more interesting and innovative where it counts."),(0,n.kt)("p",null,"With all this in mind, we started to build our own developer portal because we couldn\u2019t find anything that would do the job. Until we came across Backstage. "),(0,n.kt)("h2",{id:"from-backstage-to-simplify"},"From Backstage to Simplify"),(0,n.kt)("p",null,"With our partner, ",(0,n.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/"},"Thoughtworks"),", we started exploring Backstage early in 2021. After thorough evaluation, we decided to move forward with Backstage even though the project was in the early stages. It was clear what Spotify had built felt like a true values alignment with TELUS and our vision of democratizing development. "),(0,n.kt)("p",null,"We also really liked that Backstage was an open source project where we could pull in innovation from a growing community and contribute back in kind. It was way more appealing than paying for an off-the-shelf SaaS tool that we\u2019d have to end up heavily customizing anyway. Adopting Backstage has been a big turning point for our open source efforts more broadly at TELUS and we\u2019re now building an open source software contribution and consumption policy. "),(0,n.kt)("p",null,"We opted to call our developer portal \u201cSimplify\u201d because that\u2019s exactly what it needed to do for our developers. "),(0,n.kt)("h2",{id:"lessons-from-a-very-early-adopter"},"Lessons from a (very) early adopter"),(0,n.kt)("p",null,"We\u2019ve learned a lot along the way as we\u2019ve built out our first use case and put together the broader roadmap for Simplify. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Start narrow:")," You could say we took a slight deviation from the well-traveled starting point of ingesting all our components into the Software Catalog. One of our core problems was that,  in order to scale asynchronously, documentation had to be a core citizen in software. We had 80+ microsites of various quality housing technical documentations and it was very difficult to find things. Our primary audience was new joiners with metrics around making onboarding as self-serve as possible. Though we had to veer away from the TechDocs feature to get there, we\u2019ve seen big improvements in the time-to-10th commit metric in particular. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Keep your brand in mind:")," We struggled in that some of the design composability needs we had weren\u2019t well-built in open source yet. TELUS has a very strong brand and to get Simplify on-brand, we had to contort the Backstage UI to meet our brand standards. Generally, we believe branding your Backstage app is an adoption best practice and recommend bringing product design resources in from the beginning to ensure you\u2019re creating something that will build a sense of internal ownership and enthusiasm in your org. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Don\u2019t be afraid of plugins:")," Perhaps because we started working with Backstage ",(0,n.kt)("em",{parentName:"p"},"so early"),", we ended up building out some custom features that \u2014 as of the 1.0 version \u2014 are no longer needed. In early 2022, we actually hit the reset button and rebuilt our implementation from the ground up to take better advantage of the current options including many plugins that didn\u2019t exist when we started. What has been incredible is that we were able to do this reset very quickly, without losing any of the fantastic documentation we had. We are now better positioned to incorporate new plugins and even more easily contribute our plugins back to the community."))),(0,n.kt)("p",null,"There\u2019s still a lot of work ahead for Simplify and we\u2019re excited to share upcoming milestones and wins with the Backstage community."))}p.isMDXComponent=!0},4026:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/telus-c2273f4047a48d16f1661a4ecd482d87.png"}}]);