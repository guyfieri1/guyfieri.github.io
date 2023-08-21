"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6554],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,g=u["".concat(p,".").concat(d)]||u[d]||h[d]||n;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4557:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={title:"Avoid upgrade surprises with Backstage Upgrade Helper",description:"Learn about Backstage Upgrade Helper and how it can help you keep your application up-to-date in a simple way.",author:"Vincenzo Scamporlino, Spotify",publishedISODate:"2022-03-04T01:00:00",previewImage:"./preview.png"},i=void 0,s={permalink:"/blog/avoid-upgrade-surprises-with-backstage-upgrade-helper",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/avoid-upgrade-surprises-with-backstage-upgrade-helper/index.md",source:"@site/blog/avoid-upgrade-surprises-with-backstage-upgrade-helper/index.md",title:"Avoid upgrade surprises with Backstage Upgrade Helper",description:"Learn about Backstage Upgrade Helper and how it can help you keep your application up-to-date in a simple way.",date:"2023-07-13T12:03:52.889Z",formattedDate:"July 13, 2023",tags:[],readingTime:3.935,hasTruncateMarker:!1,authors:[{name:"Vincenzo Scamporlino, Spotify"}],frontMatter:{title:"Avoid upgrade surprises with Backstage Upgrade Helper",description:"Learn about Backstage Upgrade Helper and how it can help you keep your application up-to-date in a simple way.",author:"Vincenzo Scamporlino, Spotify",publishedISODate:"2022-03-04T01:00:00",previewImage:"./preview.png"},prevItem:{title:"New release: Backstage 1.0",permalink:"/blog/backstage-1.0"},nextItem:{title:"What\u2019s happening with Backstage permissions and authorization",permalink:"/blog/authorization-framework-rfc"}},p={authorsImageUrls:[void 0]},l=[{value:"Upgrading Backstage was a common pain point",id:"upgrading-backstage-was-a-common-pain-point",level:2},{value:"So what is Backstage Upgrade Helper?",id:"so-what-is-backstage-upgrade-helper",level:2},{value:"To use the Upgrade Helper, follow these simple steps",id:"to-use-the-upgrade-helper-follow-these-simple-steps",level:3},{value:"Open source inspires",id:"open-source-inspires",level:2}],c={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: This post was originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://backstage.io/blog/2022/03/04/backstage-upgrade-helper"},"Backstage.io"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Backstage header",src:a(4527).Z,width:"1201",height:"631"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TLDR;")," The Spotify team recently announced ",(0,o.kt)("a",{parentName:"p",href:"https://backstage.github.io/upgrade-helper"},"Backstage Upgrade Helper"),": a tool that helps adopters keep their Backstage application up-to-date. ",(0,o.kt)("strong",{parentName:"p"},"Spoiler alert"),": this is also a hidden and heartwarming tale about the beauty of open source innovation."),(0,o.kt)("h2",{id:"upgrading-backstage-was-a-common-pain-point"},"Upgrading Backstage was a common pain point"),(0,o.kt)("p",null,"Without a doubt, one of the most exciting things about Backstage is our community. Step into our daily ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/backstage-687207715902193673"},"Discord conversations")," and the monthly ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=0QMQYSTKAx0"},"Community Sessions")," and you\u2019ll find a ton of great ideas, problem-solving, and support for one another."),(0,o.kt)("p",null,"During one of these discussions, we realized we all shared the same pain point \u2014 upgrading a Backstage application."),(0,o.kt)("p",null,"The Backstage open source project is in hyper-growth mode, where dozens of pull requests are merged each day. This means adopters need to go through the upgrade process more often in order to get the latest and greatest features. The Spotify team heard a lot of feedback about how painful and manual this process was \u2014 so we decided to tackle this problem during one of our internal Hack Days."),(0,o.kt)("p",null,"At Spotify, we run Hack Days every month and a lot of ideas come from those sessions (in fact, the idea to open source Backstage itself ",(0,o.kt)("a",{parentName:"p",href:"https://open.spotify.com/episode/332yTwGiILGKTS7dsHCj2P"},"was born on a Hack Day"),"!). During a brainstorming session, we noticed that another open source community faced a similar upgrading problem years back and came up with a really good solution."),(0,o.kt)("p",null,"If you have ever worked on a React Native project, you might immediately recognize what we are referring to: The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/upgrade-helper"},"React Native Upgrade Helper")," \u2014 a web tool to support React Native developers in upgrading their apps \u2014 might have saved hours of your time. It certainly saved us hours of ours. So we looked into the project details and discovered it could fulfill our Backstage needs."),(0,o.kt)("p",null,"We started by creating a fork from React Native\u2019s open source project, applying a few changes on top of it to introduce Backstage support, and \u2014 ",(0,o.kt)("em",{parentName:"p"},"ecco")," \u2014 we had a new Backstage Upgrade Helper! In just a few days with pretty minimal effort, we created a product that would save a lot of time for the entire Backstage community. And we had fun at the same time (happy developers make happy code \ud83d\ude01 )."),(0,o.kt)("h2",{id:"so-what-is-backstage-upgrade-helper"},"So what is Backstage Upgrade Helper?"),(0,o.kt)("p",null,"The Backstage Upgrade Helper tool enables adopters to easily upgrade their Backstage app by using the power of git to create a diff between different versions."),(0,o.kt)("p",null,"Whenever a new version of Backstage is released, the Helper scaffolds a new dummy Backstage app using the ",(0,o.kt)("inlineCode",{parentName:"p"},"backstage-create-app")," cli utility and checks all the generated files in a specific git branch. After the branch is generated, it gets compared with all the existing ones, which results in generating specific git patches stored in specific files. By selecting the version of the current Backstage release together with the version you want to upgrade to, the UI knows which patch file needs to be picked up."),(0,o.kt)("p",null,"So, now you can update your Backstage application in three steps rather than manually reading the changelogs of all the Backstage modules in reverse order."),(0,o.kt)("h3",{id:"to-use-the-upgrade-helper-follow-these-simple-steps"},"To use the Upgrade Helper, follow these simple steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://backstage.github.io/upgrade-helper"},"Backstage Upgrade Helper")," and enter your current release and the release you would like to upgrade to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("strong",{parentName:"p"},"Show me how to upgrade!")," After that, the feature spits out the changes between the two Backstage versions in a split-screen view for easy comparison."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Backstage Upgrade Helper in action",src:a(555).Z,width:"1200",height:"794"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Apply the suggested changes to your source code to correctly upgrade your app to the selected Backstage version. This will let you directly migrate from the version you\u2019re currently using to the target version and skip all the intermediate steps you would have otherwise gone through manually reading all the changelogs."))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/nYjI2j-lWEM?t=410"},"Watch the Upgrade Helper demo"),"."),(0,o.kt)("h2",{id:"open-source-inspires"},"Open source inspires"),(0,o.kt)("p",null,"Thus far, the Backstage Upgrade Helper has gotten a lot of good feedback from the community and we\u2019re sure to see awesome contributions in the future. But all the credit behind this idea goes to the React Native community."),(0,o.kt)("p",null,"With React Native\u2019s open source contributions, we were able to quickly solve a tough problem for the entire Backstage community. Not only did React Native\u2019s project save us time creating a new product, but it has also saved our adopters time upgrading Backstage."),(0,o.kt)("p",null,"This is why we love working in open source. The hard work done for one community has the power to influence and inspire another community. We hope Backstage can do the same and pay it forward to other open source projects."),(0,o.kt)("p",null,"For more Backstage Upgrade Helper resources, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/upgrade-helper"},"UI code")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/upgrade-helper-diff"},"git patches"),"."))}h.isMDXComponent=!0},4527:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/backstage-upgrade-helper-header-7644246a66a82cdaa842cecaa203d64e.png"},555:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/backstage-upgrade-helper-ee80827e66fe95f734561313920d2c35.gif"}}]);