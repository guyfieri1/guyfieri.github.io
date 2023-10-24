"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[354],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(i),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return i?n.createElement(m,l(l({ref:t},p),{},{components:i})):n.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},5285:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const o={title:"Core Concepts",sidebar_position:3},l=void 0,r={unversionedId:"rbac/core-concepts",id:"rbac/core-concepts",title:"Core Concepts",description:"Publishing Lifecycle",source:"@site/docs/rbac/core-concepts.mdx",sourceDirName:"rbac",slug:"/rbac/core-concepts",permalink:"/rbac/core-concepts",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/rbac/core-concepts.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Core Concepts",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Setup & Installation",permalink:"/rbac/setup-and-installation"},next:{title:"Skill Exchange",permalink:"/skill-exchange/"}},s={},c=[{value:"Publishing Lifecycle",id:"publishing-lifecycle",level:2},{value:"Policy Overview",id:"policy-overview",level:2},{value:"Matching permissions",id:"matching-permissions",level:2},{value:"Specifying decisions",id:"specifying-decisions",level:2},{value:"Additonal features",id:"additonal-features",level:2},{value:"Import / Export",id:"import--export",level:3},{value:"Default policy",id:"default-policy",level:3},{value:"Fallback policy",id:"fallback-policy",level:3},{value:"Decision resolution strategy",id:"decision-resolution-strategy",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"publishing-lifecycle"},"Publishing Lifecycle"),(0,a.kt)("p",null,"The RBAC UI facilitates the creation and management of RBAC policies. Policies go through a publishing lifecycle that includes the following stages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Draft"),": Newly created policies are in draft state and do not affect Backstage behavior. You can save draft policies while working on them and return to them later."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Published"),": Draft policies can be published, replacing the existing policy and becoming active. Only one published policy exists at a time in Backstage."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Inactive"),": When a new policy is published, the previously active policy becomes inactive."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Republish"),": Inactive policies can be republished at any time to become active again.")),(0,a.kt)("h2",{id:"policy-overview"},"Policy Overview"),(0,a.kt)("p",null,"The RBAC policy is configured by defining one or more ",(0,a.kt)("strong",{parentName:"p"},"roles"),", to which you can add users/groups as members. Each role can have multiple ",(0,a.kt)("strong",{parentName:"p"},"permission decisions")," configured, which match one or more ",(0,a.kt)("strong",{parentName:"p"},"permissions"),", and specify the authorization ",(0,a.kt)("strong",{parentName:"p"},"decision")," that should be made for those permissions."),(0,a.kt)("p",null,"Users can be a member of multiple roles, and roles can overlap in the permissions they match. When a given permission matches multiple times, the ",(0,a.kt)("strong",{parentName:"p"},"first match")," will be the one used to determine the decision returned."),(0,a.kt)("h2",{id:"matching-permissions"},"Matching permissions"),(0,a.kt)("p",null,"Permissions are a core concept in the Backstage permission framework. Each plugin can define a set of permissions that control what users can see and do within that plugin. Each ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/backstage/backstage/blob/master/plugins/permission-common/src/types/permission.ts#L39"},"permission")," is an object with the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": a string which uniquely identifies the permission, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"catalog.entity.read")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"attributes"),": an object containing attributes which describe the characteristics of the permission, to allow matching multiple permissions when making a policy decision. We expect the number of supported attributes to increase over time, but for now, the only attribute is ",(0,a.kt)("inlineCode",{parentName:"li"},"action"),", which can be set to ",(0,a.kt)("inlineCode",{parentName:"li"},'"create"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"read"'),", ",(0,a.kt)("inlineCode",{parentName:"li"},'"update"'),", or ",(0,a.kt)("inlineCode",{parentName:"li"},'"delete"'),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"resourceType"),": the type of resource expected to be supplied when authorizing this permission, if applicable (for example ",(0,a.kt)("inlineCode",{parentName:"li"},"catalog-entity"),").")),(0,a.kt)("p",null,"In the RBAC UI, it's possible to match a single specific permission by name, or to match using a combination of resourceType and actions in order to match multiple permissions with a single entry in the list. It's also possible to match all permissions with a single entry - this is mostly useful for defining a fallback at the end of your policy, in case no other permission decision in the policy matched a request."),(0,a.kt)("h2",{id:"specifying-decisions"},"Specifying decisions"),(0,a.kt)("p",null,"The RBAC UI supports definitive ",(0,a.kt)("inlineCode",{parentName:"p"},"allow")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"deny")," decisions, as well as ",(0,a.kt)("a",{parentName:"p",href:"https://backstage.io/docs/permissions/writing-a-policy#conditional-decisions"},"conditional decisions"),' whose result can vary based on characteristics of the resource being authorized. Conditional decisions can only be returned for permissions with a resourceType - the RBAC UI handles enabling and disabling the "conditional" option as needed.'),(0,a.kt)("p",null,"Conditional decisions contain one or more ",(0,a.kt)("strong",{parentName:"p"},"conditions"),", which are exported by permissioned plugins and tied to a resourceType. The condition ",(0,a.kt)("inlineCode",{parentName:"p"},"HAS_ANNOTATION"),", for example, is tied to the ",(0,a.kt)("inlineCode",{parentName:"p"},"catalog-entity"),' resourceType, and checks whether a catalog entity has a certain annotation. Multiple conditions can be combined using "any of" (return ',(0,a.kt)("inlineCode",{parentName:"p"},"allow"),' when any one of these conditions is true), or "all of" (only return ',(0,a.kt)("inlineCode",{parentName:"p"},"allow"),' when all of these conditions is true). It\'s also possible to negate conditions using "not", and combinations of conditions and logical operators can be deeply nested if needed.'),(0,a.kt)("h2",{id:"additonal-features"},"Additonal features"),(0,a.kt)("h3",{id:"import--export"},"Import / Export"),(0,a.kt)("p",null,"The RBAC plugin allows users to export existing policies, a feature which can be found within the policy page. You can import the resulting yaml file back into RBAC, which will result in a draft policy identical to the exported policy. This can be useful when working with multiple Backstage instances with similar configurations."),(0,a.kt)("h3",{id:"default-policy"},"Default policy"),(0,a.kt)("p",null,"The RBAC plugin allows Backstage administrators to configure a default policy for deployment. Setting a default policy allows RBAC to enforce an active policy from the start, before any administrator has interacted with the RBAC UI. You can set a default policy by:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a draft policy in the RBAC UI that represents the policy that you would like to become the default policy."),(0,a.kt)("li",{parentName:"ol"},'Go to the draft policy page, and download the policy by clicking "Export." Alternatively, you can export any previous version or the active policy from the respective policy pages.'),(0,a.kt)("li",{parentName:"ol"},"Add a ",(0,a.kt)("inlineCode",{parentName:"li"},"defaultPolicy")," field under the ",(0,a.kt)("inlineCode",{parentName:"li"},"rbac")," field in your ",(0,a.kt)("inlineCode",{parentName:"li"},"app-config.yaml"),", and point it to the file you saved from the previous step:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"permission:\n  rbac:\n    defaultPolicy:\n      $include: ./default-rbac-policy.yaml\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You should now see that your Backstage instance behaves as configured in your default policy, even though you have not yet authored any other policies using the RBAC UI.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," The default policy will be active if and only if no other active policies already exist."),(0,a.kt)("h3",{id:"fallback-policy"},"Fallback policy"),(0,a.kt)("p",null,"By default, when a request to the RBAC backend fails, RBAC will automatically switch to denying all permissions. You can configure this behavior by specifying a fallback policy in your ",(0,a.kt)("inlineCode",{parentName:"p"},"app-config.yaml")," in the exact same way as the default policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"permission:\n  rbac:\n    fallbackPolicy:\n      $include: ./fallback-rbac-policy.yaml\n")),(0,a.kt)("h3",{id:"decision-resolution-strategy"},"Decision resolution strategy"),(0,a.kt)("p",null,"Multiple decisions from multiple roles could be applicable to a single user when authorizing a permission request. By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"any-allow")," strategy will be selected for a new policy."),(0,a.kt)("p",null,"You can change the decision resolution strategy for a policy and read more about the options by following the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the draft policy page and click the ",(0,a.kt)("inlineCode",{parentName:"li"},"more options")," icon on the top right."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"Options"),"."),(0,a.kt)("li",{parentName:"ol"},"Select which resolution strategy makes sense for your policy."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Back to Policy")," when you are done. Your policy will be automatically updated with your selection, and it will be saved and/or published when save and publish your policy.")))}d.isMDXComponent=!0}}]);