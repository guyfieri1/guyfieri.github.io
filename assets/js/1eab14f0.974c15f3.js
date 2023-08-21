"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[732],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?s.createElement(g,i(i({ref:t},u),{},{components:n})):s.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const o={title:"Setup & Installation",sidebar_position:2},i=void 0,r={unversionedId:"pulse/setup-and-installation",id:"pulse/setup-and-installation",title:"Setup & Installation",description:"Prerequisites",source:"@site/docs/pulse/setup-and-installation.mdx",sourceDirName:"pulse",slug:"/pulse/setup-and-installation",permalink:"/pulse/setup-and-installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/pulse/setup-and-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup & Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pulse",permalink:"/pulse/"},next:{title:"Tutorials",permalink:"/category/tutorials-4"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Complete Spotify plugin bundle setup",id:"1-complete-spotify-plugin-bundle-setup",level:3},{value:"2. Check your Backstage version",id:"2-check-your-backstage-version",level:3},{value:"Installation",id:"installation",level:2},{value:"1. Install the Pulse frontend and backend plugins",id:"1-install-the-pulse-frontend-and-backend-plugins",level:3},{value:"2. Integrate the plugin with your backstage app",id:"2-integrate-the-plugin-with-your-backstage-app",level:3},{value:"3. Configure access controls",id:"3-configure-access-controls",level:3},{value:"Option 1: Using the RBAC plugin (Recommended)",id:"option-1-using-the-rbac-plugin-recommended",level:4},{value:"Option 2: Using custom policy handlers",id:"option-2-using-custom-policy-handlers",level:4},{value:"Option 3: Using <code>app-config.yaml</code> (Not recommended)",id:"option-3-using-app-configyaml-not-recommended",level:4},{value:"4. Check everything is working",id:"4-check-everything-is-working",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"1-complete-spotify-plugin-bundle-setup"},"1. Complete Spotify plugin bundle setup"),(0,a.kt)("p",null,"This package is a Backstage plugin and is part of the \u201cSpotify Plugins for Backstage\u201d bundle. In order for you to use this plugin, you must purchase a license key at ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/"},"https://backstage.spotify.com/"),". After purchasing a license key, follow the instructions on ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/account"},"https://backstage.spotify.com/account")," before continuing."),(0,a.kt)("h3",{id:"2-check-your-backstage-version"},"2. Check your Backstage version"),(0,a.kt)("p",null,"Please ensure your Backstage version matches the supported version shown under the installation instructions on ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/account"},"https://backstage.spotify.com/account"),", and always check compatibility before updating Backstage."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"1-install-the-pulse-frontend-and-backend-plugins"},"1. Install the Pulse frontend and backend plugins"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn workspace app add @spotify/backstage-plugin-pulse\nyarn workspace backend add @spotify/backstage-plugin-pulse-backend\n")),(0,a.kt)("h3",{id:"2-integrate-the-plugin-with-your-backstage-app"},"2. Integrate the plugin with your backstage app"),(0,a.kt)("p",null,"Create a new file, ",(0,a.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/pulse.ts")," with the following content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { createRouter } from '@spotify/backstage-plugin-pulse-backend';\nimport { Router } from 'express';\nimport { PluginEnvironment } from '../types';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    ...env,\n  });\n}\n")),(0,a.kt)("p",null,"Set up the Pulse backend router in ",(0,a.kt)("inlineCode",{parentName:"p"},"/packages/backend/src/index.ts"),". You will need to import the\nmodule from the previous step, create a new plugin environment for Pulse and add the router to the\nexpress app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// packages/backend/src/index.ts\n\n  import proxy from './plugins/proxy';\n  import techdocs from './plugins/techdocs';\n  import search from './plugins/search';\n  import permission from './plugins/permission';\n+ import pulse from './plugins/pulse';\n\n  /* ... */\n\n  const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));\n  const searchEnv = useHotMemoize(module, () => createEnv('search'));\n  const appEnv = useHotMemoize(module, () => createEnv('app'));\n+ const pulseEnv = useHotMemoize(module, () => createEnv('pulse'));\n\n  /* ... */\n\n  apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n  apiRouter.use('/proxy', await proxy(proxyEnv));\n  apiRouter.use('/search', await search(searchEnv));\n+ apiRouter.use('/pulse', await pulse(pulseEnv));\n")),(0,a.kt)("p",null,"Add the Pulse page as a frontend route and an icon to your sidebar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// packages/app/src/App.tsx\n\nimport { PulsePage } from '@spotify/backstage-plugin-pulse';\n\n/* ... */\n\n<Route path=\"/pulse\" element={<PulsePage />} />;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// packages/app/src/components/Root/Root.tsx\n\nimport BallotIcon from \'@material-ui/icons/Ballot\';\n\n/* ... */\n\n<SidebarItem icon={BallotIcon} to="pulse" text="Pulse" />\n')),(0,a.kt)("p",null,"At this point, Pulse should be up and running. Navigating to the path you configured for Pulse\n(",(0,a.kt)("inlineCode",{parentName:"p"},"/pulse")," in the example) should present you with the Pulse UI. However, you will not be able to\ncreate surveys unless administrator access controls are set up."),(0,a.kt)("h3",{id:"3-configure-access-controls"},"3. Configure access controls"),(0,a.kt)("p",null,'You\'ll need to grant administrator privileges to at least one user to run surveys through Pulse.\nCurrently, this is a simple binary "isAdmin" permission, but support for fine-grained\npermissions is planned for the future.'),(0,a.kt)("p",null,"The recommended approaches to setting access controls for this plugin require the Backstage\npermissions framework. You may have set up this up already when configuring other plugins from the\nSpotify bundle, but if not, ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/overview"},"follow this guide to setting up the permissions framework"),"."),(0,a.kt)("h4",{id:"option-1-using-the-rbac-plugin-recommended"},"Option 1: Using the RBAC plugin (Recommended)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'"The ',(0,a.kt)("a",{parentName:"em",href:"https://backstage.spotify.com/plugins/rbac"},"RBAC plugin"),' is a no-code management UI for restricting access to plugins, routes, and data within Backstage. Admins can quickly define roles, assign users and groups, and configure permissions to encode authorization decisions according to your organization\u2019s evolving security and compliance needs."')),(0,a.kt)("p",null,"Using the ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/plugins/rbac"},"RBAC plugin"),", it's easy to define access controls for Pulse with the single ",(0,a.kt)("inlineCode",{parentName:"p"},"survey.instance.administer")," permission:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://spotify-plugins-for-backstage-readme-images.spotifycdn.com/pulse-rbac-setup.png",alt:"A Pulse Admin role set up via the RBAC plugin"})),(0,a.kt)("p",null,"For more information on how to make use of the RBAC plugin, ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/plugins/rbac"},"click here"),"."),(0,a.kt)("h4",{id:"option-2-using-custom-policy-handlers"},"Option 2: Using custom policy handlers"),(0,a.kt)("p",null,"It's also possible to define ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/writing-a-policy"},"custom handlers")," for policy queries made by Pulse."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// packages/backend/src/plugins/permissions.ts\n\nclass ExamplePolicy implements PermissionPolicy {\n  async handle(request: PolicyQuery): Promise<PolicyDecision> {\n    if (request.permission.name === 'survey.instance.administer') {\n      const isAllowed = await someEvaluationFunction();\n\n      if (isAllowed) {\n        return {\n          result: AuthorizeResult.ALLOW,\n        };\n      }\n    }\n\n    return { result: AuthorizeResult.DENY };\n  }\n}\n")),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/overview"},"Permissions")," documentation in Backstage."),(0,a.kt)("h4",{id:"option-3-using-app-configyaml-not-recommended"},"Option 3: Using ",(0,a.kt)("inlineCode",{parentName:"h4"},"app-config.yaml")," (Not recommended)"),(0,a.kt)("p",null,"It's possible to bypass the permissions framework entirely and set up Pulse administrators via ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/conf/"},"static config"),", but this approach is ",(0,a.kt)("strong",{parentName:"p"},"NOT recommended")," as it isn't possible to define fine-grained access controls this way. ",(0,a.kt)("strong",{parentName:"p"},"No future fine-grained access control via static config support is planned.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# app-config.yaml\n\npulse:\n  surveyAdministrators:\n    - user:default/testUser\n")),(0,a.kt)("h3",{id:"4-check-everything-is-working"},"4. Check everything is working"),(0,a.kt)("p",null,'Once access controls are set up correctly, users with administrator permissions should see an\n"Admin mode" badge at the top of the Pulse page. All other users should have access to Pulse\nbut will not see the badge or be able to create surveys.'))}d.isMDXComponent=!0}}]);