"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6794],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||n;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8280:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={title:"New release: Backstage 1.0",description:"If you\u2019ve been waiting for Backstage to come out of beta, Backstage 1.0 is here! Learn more about what this release means.",author:"Francesco Corti, Spotify",publishedISODate:"2022-03-17",previewImage:"./preview.png"},s=void 0,i={permalink:"/blog/backstage-1.0",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/backstage-1.0/index.md",source:"@site/blog/backstage-1.0/index.md",title:"New release: Backstage 1.0",description:"If you\u2019ve been waiting for Backstage to come out of beta, Backstage 1.0 is here! Learn more about what this release means.",date:"2023-07-13T12:03:52.903Z",formattedDate:"July 13, 2023",tags:[],readingTime:3.245,hasTruncateMarker:!1,authors:[{name:"Francesco Corti, Spotify"}],frontMatter:{title:"New release: Backstage 1.0",description:"If you\u2019ve been waiting for Backstage to come out of beta, Backstage 1.0 is here! Learn more about what this release means.",author:"Francesco Corti, Spotify",publishedISODate:"2022-03-17",previewImage:"./preview.png"},prevItem:{title:"Say hi to Backstage homepage templates!",permalink:"/blog/backstage-homepage-templates"},nextItem:{title:"Avoid upgrade surprises with Backstage Upgrade Helper",permalink:"/blog/avoid-upgrade-surprises-with-backstage-upgrade-helper"}},l={authorsImageUrls:[void 0]},c=[{value:"So what is Backstage 1.0?",id:"so-what-is-backstage-10",level:2},{value:"The road ahead",id:"the-road-ahead",level:2},{value:"Some links to peruse",id:"some-links-to-peruse",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: This post was originally published on ",(0,o.kt)("a",{parentName:"em",href:"https://backstage.io/blog/2022/03/17/backstage-1.0"},"Backstage.io"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"backstage header",src:a(2298).Z,width:"1200",height:"603"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TL;DR:")," If you\u2019ve been waiting for Backstage to come out of beta, we\u2019re excited to announce that Backstage 1.0 is here!"),(0,o.kt)("p",null,"It\u2019s been two years since Spotify ",(0,o.kt)("a",{parentName:"p",href:"https://backstage.io/blog/2020/03/16/announcing-backstage"},"open sourced Backstage")," so companies of all shapes and sizes \u2014 and in every industry all over the world \u2014 could build highly extensible and customized developer portals to best suit their organization\u2019s needs and culture. Now hundreds of adopters are using Backstage as the single pane of glass for their core development, managing millions of components and technical documentation, and helping hundreds of thousands of developers be more productive and happy."),(0,o.kt)("p",null,"This milestone demonstrates Backstage\u2019s maturity and the incredible effort from the core maintainers, contributors, and adopters. In a short time, we\u2019ve seen a global community grow rapidly with people bringing their passion to this project and our goal of empowering developers. Because, yes, this is also your goal and your time to celebrate."),(0,o.kt)("h2",{id:"so-what-is-backstage-10"},"So what is Backstage 1.0?"),(0,o.kt)("p",null,"If you\u2019re thinking \u201cwhat is Backstage 1.0, and what does it include?\u201d You\u2019re not alone, so let\u2019s get into it."),(0,o.kt)("p",null,"To start, let\u2019s define Backstage: it\u2019s an open platform for building developer portals, mainly defined by a set of libraries together with plugins that can be added, removed, or customized so that the final behavior of the developer portal product is what an adopter wants. For the past two years, the open source platform has been in beta. With Backstage 1.0, we're coming out of beta and into production with regular versioning and release cycle commitments. So, if your company requires production-ready software, you can now use Backstage and join ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md"},"over 100 other public adopters"),"!"),(0,o.kt)("p",null,"Our definition of Backstage 1.0 includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Backstage Core 1.0 libraries as the set of libraries to make the platform work"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/software-catalog/software-catalog-overview"},"Backstage Software Catalog")," 1.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/software-templates/software-templates-index"},"Backstage Software Templates")," 1.0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/features/techdocs/techdocs-overview"},"Backstage TechDocs")," 1.0")),(0,o.kt)("p",null,"Coming soon: ",(0,o.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/search/search-overview"},"Backstage Search")," 1.0 will be included in the near future as part of the regular releases to the Backstage platform."),(0,o.kt)("p",null,"In terms of features, the maintainers will not be shipping new stuff as part of the major release but instead:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Refactoring the code packaging to better reflect the release numbering"),(0,o.kt)("li",{parentName:"ul"},"Removal of deprecated services to reduce the risk of introducing breaking changes"),(0,o.kt)("li",{parentName:"ul"},"Establishing clarity on the release lifecycle, numbering, and cadence as well as the support model"),(0,o.kt)("li",{parentName:"ul"},"Improvements to Backstage.io documentation")),(0,o.kt)("h2",{id:"the-road-ahead"},"The road ahead"),(0,o.kt)("p",null,"In terms of maturity and stability, the road ahead for Backstage is bright and busy. The goal is to bring Backstage to the next level of maturity and continue improving it, according to adopter growth, feature set, and identified use cases."),(0,o.kt)("p",null,"You can read more about Backstage\u2019s roadmap ",(0,o.kt)("a",{parentName:"p",href:"https://backstage.io/docs/overview/roadmap"},"here"),", but in terms of maturity and stability we would like to highlight the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CNCF incubation: The Backstage project ",(0,o.kt)("a",{parentName:"li",href:"https://www.cncf.io/blog/2022/03/15/backstage-project-joins-the-cncf-incubator/"},"recently moved from Sandbox to Incubation")," phase within the ",(0,o.kt)("a",{parentName:"li",href:"https://www.cncf.io/projects/#:~:text=Maturity%20levels,should%20be%20adopting%20different%20projects."},"CNCF maturity levels"),"."),(0,o.kt)("li",{parentName:"ul"},"Security auditing and strategy: With the CNCF\u2019s support, the project maintainers are working on a security audit initiative to make the platform more secure and will share more details soon. The audit is part of an overall security strategy being developed this quarter."),(0,o.kt)("li",{parentName:"ul"},"Paid plugins for advanced and enterprise use cases: Last year, ",(0,o.kt)("a",{parentName:"li",href:"https://backstage.spotify.com/blog/paid-plugins-announcement/"},"Spotify announced its work on paid plugins")," built on top of the Backstage open source platform. This is another example of the platform\u2019s maturity and Spotify\u2019s continued commitment to the project, with a focus on customers and use cases requiring enterprise-focused support and plugins developed and proven by Spotify.")),(0,o.kt)("h2",{id:"some-links-to-peruse"},"Some links to peruse"),(0,o.kt)("p",null,"If you want to know more about this first major release, check out the following links to learn more about this release effort and receive support."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/releases/v1.0.0"},"Release notes")," and ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/releases/tag/v1.0.0"},"Changelog"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://backstage.io/docs/"},"Backstage official documentation")," and ",(0,o.kt)("a",{parentName:"li",href:"https://backstage.spotify.com/"},"backstage.spotify.com"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://discord.gg/backstage-687207715902193673"},"Discord channel"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage"},"Backstage repository on GitHub"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/backstage/backstage/blob/master/ADOPTERS.md"},"List of public adopters"),".")))}d.isMDXComponent=!0},2298:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/release.1.0-1940dff917f34bba996af1a89e0549dc.gif"}}]);