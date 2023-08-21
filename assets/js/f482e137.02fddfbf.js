"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1831],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),g=i,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=g;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const s={title:"Setup & Installation",sidebar_position:2},o="Setup & Installation",r={unversionedId:"insights/setup-and-installation",id:"insights/setup-and-installation",title:"Setup & Installation",description:"Prerequisites",source:"@site/docs/insights/setup-and-installation.mdx",sourceDirName:"insights",slug:"/insights/setup-and-installation",permalink:"/insights/setup-and-installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/insights/setup-and-installation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Setup & Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Insights",permalink:"/insights/"},next:{title:"Core Concepts",permalink:"/insights/core-concepts"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Complete Spotify plugin bundle setup",id:"1-complete-spotify-plugin-bundle-setup",level:3},{value:"2. Check your Backstage version",id:"2-check-your-backstage-version",level:3},{value:"3. Ensure the sign-in resolver provides the user entity associated with the current identity",id:"3-ensure-the-sign-in-resolver-provides-the-user-entity-associated-with-the-current-identity",level:3},{value:"1. Backend Installation",id:"1-backend-installation",level:2},{value:"1. Getting the plugin",id:"1-getting-the-plugin",level:3},{value:"2. Integrate the plugin with your backend app",id:"2-integrate-the-plugin-with-your-backend-app",level:3},{value:"3. Create an API token for your organization",id:"3-create-an-api-token-for-your-organization",level:3},{value:"4. Configure the Spotify Backstage API token",id:"4-configure-the-spotify-backstage-api-token",level:3},{value:"Additional configuration",id:"additional-configuration",level:2},{value:"Extra entity metadata capture",id:"extra-entity-metadata-capture",level:3},{value:"Total users count filter",id:"total-users-count-filter",level:3},{value:"2. Frontend Installation",id:"2-frontend-installation",level:2},{value:"1. Getting the plugin",id:"1-getting-the-plugin-1",level:3},{value:"2. Configure access controls",id:"2-configure-access-controls",level:3},{value:"Option 1: Using the RBAC plugin (Recommended)",id:"option-1-using-the-rbac-plugin-recommended",level:4},{value:"Option 2: Using custom policy handlers",id:"option-2-using-custom-policy-handlers",level:4},{value:"3. Integrate the plugin with your frontend app",id:"3-integrate-the-plugin-with-your-frontend-app",level:3},{value:"4. Check everything is working",id:"4-check-everything-is-working",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup--installation"},"Setup & Installation"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"1-complete-spotify-plugin-bundle-setup"},"1. Complete Spotify plugin bundle setup"),(0,i.kt)("p",null,'This package is a Backstage plugin and is part of the "Spotify Plugins for\nBackstage" bundle. For you to use this plugin, you must purchase a license key\nat ',(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/"},"https://backstage.spotify.com/"),". After purchasing a license key, follow the\ninstructions on ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/account"},"https://backstage.spotify.com/account")," before continuing."),(0,i.kt)("h3",{id:"2-check-your-backstage-version"},"2. Check your Backstage version"),(0,i.kt)("p",null,"Please ensure your Backstage version matches the supported version shown under\nthe installation instructions on ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/account"},"https://backstage.spotify.com/account"),", and\nalways check compatibility before updating Backstage."),(0,i.kt)("h3",{id:"3-ensure-the-sign-in-resolver-provides-the-user-entity-associated-with-the-current-identity"},"3. Ensure the sign-in resolver provides the user entity associated with the current identity"),(0,i.kt)("p",null,"In order for Insights to properly identify the user entity associated with the\ncurrently signed-in user, the ",(0,i.kt)("strong",{parentName:"p"},"SignInResolver")," must issue an identity token\nwith a ",(0,i.kt)("strong",{parentName:"p"},"sub")," (subject) claim that is an entity ref to the user entity in the\ncatalog corresponding to the signed-in user. Many authentication providers\nalready provide this behavior, but if using a custom provider, you may need to\nadd this behavior yourself. For examples, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/src/providers/google/provider.ts"},"Google auth sign-in resolver")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/auth-backend/src/providers/github/provider.ts"},"GitHub auth sign-in resolver"),".\nFor information on configuring a sign-in resolver, see the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/auth/identity-resolver"},"identity resolver docs on backstage.io"),"."),(0,i.kt)("h2",{id:"1-backend-installation"},"1. Backend Installation"),(0,i.kt)("h3",{id:"1-getting-the-plugin"},"1. Getting the plugin"),(0,i.kt)("p",null,"Add the Insights backend as dependency to your Backstage backend app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace backend add @spotify/backstage-plugin-insights-backend\n")),(0,i.kt)("h3",{id:"2-integrate-the-plugin-with-your-backend-app"},"2. Integrate the plugin with your backend app"),(0,i.kt)("p",null,"Create a new file, ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/backend/src/plugins/backstageInsights.ts")," with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router } from 'express';\nimport { PluginEnvironment } from '../types';\nimport { createRouter } from '@spotify/backstage-plugin-insights-backend';\n\nexport default async function createPlugin(\n  env: PluginEnvironment,\n): Promise<Router> {\n  return await createRouter({\n    ...env,\n  });\n}\n")),(0,i.kt)("p",null,"Wire up the Insights backend in ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/backend/src/index.ts"),". You'll need to import the module from the previous step, create a plugin environment, and add the router to the express app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"}," // packages/backend/src/index.ts\n\n import proxy from './plugins/proxy';\n import techdocs from './plugins/techdocs';\n import search from './plugins/search';\n import permission from './plugins/permission';\n+ import backstageInsights from './plugins/backstageInsights';\n\n /* ... */\n\n const techdocsEnv = useHotMemoize(module, () => createEnv('techdocs'));\n const searchEnv = useHotMemoize(module, () => createEnv('search'));\n const appEnv = useHotMemoize(module, () => createEnv('app'));\n const permissionEnv = useHotMemoize(module, () => createEnv('permission'));\n+ const backstageInsightsEnv = useHotMemoize(module, () => createEnv('backstage-insights'));\n\n /* ... */\n\n apiRouter.use('/techdocs', await techdocs(techdocsEnv));\n apiRouter.use('/proxy', await proxy(proxyEnv));\n apiRouter.use('/search', await search(searchEnv));\n apiRouter.use('/permission', await permission(permissionEnv));\n+ apiRouter.use('/backstage-insights', await backstageInsights(backstageInsightsEnv));\n")),(0,i.kt)("h3",{id:"3-create-an-api-token-for-your-organization"},"3. Create an API token for your organization"),(0,i.kt)("p",null,"Backstage Insights is a hosted service where data collection, hosting, and\naggregation are handled on your behalf by Spotify. In order to protect your\ndata, an API token is required to securely communicate between your Backstage\nbackend and Spotify's servers."),(0,i.kt)("p",null,"To create a token, navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/account/tokens/"},"backstage.spotify.com/account/tokens"),",\nsigning in as necessary. There, create a token using a name that clearly\nindicates its purpose and use, like ",(0,i.kt)("inlineCode",{parentName:"p"},"backstage-insights-production-token"),"."),(0,i.kt)("p",null,"Upon creation, you'll be shown the token value only once. Make note of this\nvalue, as you'll need it in the next step."),(0,i.kt)("h3",{id:"4-configure-the-spotify-backstage-api-token"},"4. Configure the Spotify Backstage API token"),(0,i.kt)("p",null,"Add the following entry in your ",(0,i.kt)("inlineCode",{parentName:"p"},"app-config.yaml"),", which will enable\ncommunication with Spotify's servers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"spotify:\n  apiToken: ${SPOTIFY_BACKSTAGE_API_TOKEN}\n")),(0,i.kt)("p",null,"Using whatever means you normally use to set environment variables in your\nBackstage backend process, you'll need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"SPOTIFY_BACKSTAGE_API_TOKEN")," to\nthe API token you created above. This value should be treated as a secret, so\ndon't check it in!"),(0,i.kt)("h2",{id:"additional-configuration"},"Additional configuration"),(0,i.kt)("h3",{id:"extra-entity-metadata-capture"},"Extra entity metadata capture"),(0,i.kt)("p",null,"The Insights backend integrates with the Software Catalog in order to hydrate\nanalytics events with extra entity metadata associated with the event. This\nmakes it possible, for example, to filter or group data based not only on\nentity identifiers, but also on data like the entity's ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"."),(0,i.kt)("p",null,"By default, the following fields are captured on analytics events associated\nwith catalog entities: ",(0,i.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.type"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"spec.lifecycle"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"spec.owner"),"."),(0,i.kt)("p",null,"If you wish to capture extra fields, you can provide extra fields via config.\nCommon fields can be found on the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/features/software-catalog/descriptor-format"},"Catalog's YAML File Format docs"),",\nthough you can also reference any custom metadata you store on entities too."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"backstageInsights:\n  captureEntityFields:\n    - spec.someCustomField\n")),(0,i.kt)("p",null,"Similarly, the following fields are captured on all analytics events in\nrelation to the signed-in user who performed the action: ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.namespace"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"spec.memberOf"),". Extra metadata about the signed-in user can similarly be\nconfigured for capture via config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"backstageInsights:\n  captureIdentityFields:\n    - spec.profile.someCustomField\n")),(0,i.kt)("p",null,"Note: in order to avoid collecting personal data, the Insights backend applies\nredaction logic to hydrated metadata, however the logic is not perfect. It's\nyour responsibility to understand what types of data would be collected by\nconfiguring these additional fields."),(0,i.kt)("h3",{id:"total-users-count-filter"},"Total users count filter"),(0,i.kt)("p",null,"The Insights frontend will use the Software Catalog to determine the total\nnumber of users who can access Backstage. This number is used in combination\nwith usage data in a variety of dashboards and views to give a sense of overall\nadoption within your organization."),(0,i.kt)("p",null,"If this number is incorrect (for example, because you retain deactivated users,\nbecause your Catalog contains non-technical staff, or because you're rolling\nout Backstage to parts of your organization gradually in stages), you can\nsupply additional filters to correct the number. These filters take the form of\nan ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/catalog-client.entityfilterquery"},"EntityFilterQuery")," and can be supplied on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"backstageInsights.totalUsersEntityQueryFilter")," configuration key."),(0,i.kt)("p",null,"Some examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only count members of the ",(0,i.kt)("inlineCode",{parentName:"p"},"rnd")," group:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"backstageInsights:\n  totalUsersEntityQueryFilter:\n    'relations.memberOf': 'group:default/rnd'\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only count users under the ",(0,i.kt)("inlineCode",{parentName:"p"},"corporate")," namespace:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"backstageInsights:\n  totalUsersEntityQueryFilter:\n    'metadata.namespace': corporate\n")))),(0,i.kt)("p",null,"For more details, see the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/reference/catalog-client.entityfilterquery"},"EntityFilterQuery")," documentation on\nbackstage.io."),(0,i.kt)("h2",{id:"2-frontend-installation"},"2. Frontend Installation"),(0,i.kt)("h3",{id:"1-getting-the-plugin-1"},"1. Getting the plugin"),(0,i.kt)("p",null,"Add the Insights frontend as dependency to your Backstage frontend app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace app add @spotify/backstage-plugin-insights\n")),(0,i.kt)("h3",{id:"2-configure-access-controls"},"2. Configure access controls"),(0,i.kt)("p",null,"If you currently permission access to catalog resources, you'll likey want to configure who can access Insights as it could potentially expose information from the catalog that users might not normally have permissions to see."),(0,i.kt)("p",null,"The recommended approaches to setting access controls for this plugin require the Backstage\npermissions framework. You may have set up this up already when configuring other plugins from the\nSpotify bundle, but if not, ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/overview"},"follow this guide to setting up the permissions framework"),"."),(0,i.kt)("h4",{id:"option-1-using-the-rbac-plugin-recommended"},"Option 1: Using the RBAC plugin (Recommended)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"The ',(0,i.kt)("a",{parentName:"em",href:"https://backstage.spotify.com/plugins/rbac"},"RBAC plugin"),' is a no-code management UI for restricting access to plugins, routes, and data within Backstage. Admins can quickly define roles, assign users and groups, and configure permissions to encode authorization decisions according to your organization\u2019s evolving security and compliance needs."')),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/plugins/rbac"},"RBAC plugin"),", it's easy to define access controls for Insights with the single ",(0,i.kt)("inlineCode",{parentName:"p"},"insights.read")," permission:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://spotify-plugins-for-backstage-readme-images.spotifycdn.com/insights-rbac-setup.png",alt:"An Insights Admin role set up via the RBAC plugin"})),(0,i.kt)("p",null,"For more information on how to make use of the RBAC plugin, ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/plugins/rbac"},"click here"),"."),(0,i.kt)("h4",{id:"option-2-using-custom-policy-handlers"},"Option 2: Using custom policy handlers"),(0,i.kt)("p",null,"If you don't use the ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/plugins/rbac"},"RBAC plugin"),", it's also possible to define ",(0,i.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/writing-a-policy"},"custom handlers")," for permission framework policies."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// packages/backend/src/plugins/permissions.ts\n\nclass ExamplePolicy implements PermissionPolicy {\n  async handle(request: PolicyQuery): Promise<PolicyDecision> {\n    if (request.permission.name === 'insights.read') {\n      const isAllowed = await someEvaluationFunction();\n\n      if (isAllowed) {\n        return {\n          result: AuthorizeResult.ALLOW,\n        };\n      }\n    }\n\n    return { result: AuthorizeResult.DENY };\n  }\n}\n")),(0,i.kt)("h3",{id:"3-integrate-the-plugin-with-your-frontend-app"},"3. Integrate the plugin with your frontend app"),(0,i.kt)("p",null,"First install the Insights routes in the app within the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages/app/src/App.tsx"),". This will provide the UI for insights under the ",(0,i.kt)("inlineCode",{parentName:"p"},"/insights")," route."),(0,i.kt)("p",null,"Insights links out to the Search plugin, so it also needs configuring to know the Search plugin has been routed under."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"  // packages/app/src/App.tsx\n\n+ import {\n+   InsightsPage,\n+   insightsPlugin,\n+ } from '@spotify/backstage-plugin-insights';\n\n    ...\n\n// Configure the route location for the Search plugin inside bindRoutes\n+ bindRoutes({ bind }) {\n+   bind(insightsPlugin.externalRoutes, {\n+     searchPageRouteRef: searchPlugin.routes.root,\n+   });\n+ }\n\n    ...\n\n  const routes = (\n    <FlatRoutes>\n      /* ... */\n+     <Route path=\"/insights\" element={<InsightsPage />} />\n    </FlatRoutes>\n  );\n")),(0,i.kt)("p",null,"Insights also provides a sidebar item that will only be visible to users who have been given permissions to Insights (setup in the previous section). This is an optional step, but it provides an easy way for Insights authorized users to access the plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'  // packages/app/src/components/Root.tsx\n\n+ import { InsightsSidebarItem } from \'@spotify/backstage-plugin-insights\';\n\nexport const Root = ({ children }: PropsWithChildren<{}>) => (\n  <SidebarPage>\n    <Sidebar>\n      <SidebarLogo />\n\n      /* ... */\n\n      <SidebarScrollWrapper>\n        <SidebarItem icon={MapIcon} to="tech-radar" text="Tech Radar" />\n        <SidebarItem\n          icon={SkillExchangeIcon}\n          to="skill-exchange"\n          text="Skill Exchange"\n        />\n        <SidebarItem icon={PulseIcon} to="pulse" text="Pulse" />\n        <SidebarItem icon={SoundcheckIcon} to="soundcheck" text="Soundcheck" />\n        <RBACSidebarItem />\n+       <InsightsSidebarItem />\n      </SidebarScrollWrapper>\n    </Sidebar>\n  </SidebarPage>\n);\n')),(0,i.kt)("h3",{id:"4-check-everything-is-working"},"4. Check everything is working"),(0,i.kt)("p",null,"Once access controls are set up correctly, users with the insights read permission should see a Insights sidebar menu item. Providing the Backend plugin has been setup and data has been collected for at least 48 hours, you should see data appear in the dashboards."))}d.isMDXComponent=!0}}]);