(self.webpackChunk=self.webpackChunk||[]).push([[7941],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,r(r({ref:t},s),{},{components:n})):a.createElement(g,r({ref:t},s))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5151:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,metadata:()=>o,toc:()=>p,default:()=>c});var a=n(4034),i=n(9973),l=(n(7294),n(3905)),r={id:"sandy-migration",title:"Migrating a plugin to Sandy"},o={unversionedId:"extending/sandy-migration",id:"extending/sandy-migration",isDocsHomePage:!1,title:"Migrating a plugin to Sandy",description:"Migrating a plugin to the new Sandy plugin architecture consists of 3 steps:",source:"@site/../docs/extending/sandy-migration.mdx",sourceDirName:"extending",slug:"/extending/sandy-migration",permalink:"/docs/extending/sandy-migration",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/sandy-migration.mdx",version:"current",frontMatter:{id:"sandy-migration",title:"Migrating a plugin to Sandy"},sidebar:"extending",previous:{title:"Plugin Distribution",permalink:"/docs/extending/plugin-distribution"},next:{title:"Desktop Plugin API",permalink:"/docs/extending/flipper-plugin"}},p=[{value:"Opting in to Sandy",id:"opting-in-to-sandy",children:[]},{value:"Using Sandy for state and connection management",id:"using-sandy-for-state-and-connection-management",children:[{value:"Tips:",id:"tips",children:[]},{value:"Migration table",id:"migration-table",children:[]}]},{value:"Using Sandy / Ant.design to organise the plugin UI",id:"using-sandy--antdesign-to-organise-the-plugin-ui",children:[{value:"Design resources",id:"design-resources",children:[]},{value:"Old and new components",id:"old-and-new-components",children:[]},{value:"Theming &amp; custom styled components",id:"theming--custom-styled-components",children:[]},{value:"Wrapping up",id:"wrapping-up",children:[]}]}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}},s=d("OssOnly"),m=d("FbInternalOnly"),u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Migrating a plugin to the new Sandy plugin architecture consists of 3 steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Enabling Sandy for a plugin."),(0,l.kt)("li",{parentName:"ol"},"Update state and connection management to use the Sandy APIs. "),(0,l.kt)("li",{parentName:"ol"},"Update the UI to use Sandy / Antd components only.")),(0,l.kt)("h2",{id:"opting-in-to-sandy"},"Opting in to Sandy"),(0,l.kt)("p",null,"Converting a Flipper plugin to use Sandy can best be done by running Flipper from source."),(0,l.kt)(s,{mdxType:"OssOnly"},(0,l.kt)("p",null,"For open source users: clone this repository and run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn install")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"desktop")," folder.")),(0,l.kt)(m,{mdxType:"FbInternalOnly"},(0,l.kt)("p",null,"For Facebook employees, pull the latest ",(0,l.kt)("inlineCode",{parentName:"p"},"fbsource"),", and run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn install")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop"))),(0,l.kt)("p",null,"Enabling Sandy for a plugin requires two steps. First of all, ",(0,l.kt)("inlineCode",{parentName:"p"},"flipper-plugin")," should be added as peer dependency to the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," of the plugin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"peerDependencies": {\n  "flipper-plugin": "*"\n},\n')),(0,l.kt)("p",null,"Next, make sure to run ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn install")," again in the ",(0,l.kt)("inlineCode",{parentName:"p"},"desktop/")," folder.\nSandy is now enabled for this plugin, and the plugin has to be restructured to the new architecture which we will do in the next step."),(0,l.kt)("h2",{id:"using-sandy-for-state-and-connection-management"},"Using Sandy for state and connection management"),(0,l.kt)("p",null,"The goal of this step is to use the leave the plugin UI largely as is but convert state and connection management to use the new Sandy APIs as exposed through the ",(0,l.kt)("inlineCode",{parentName:"p"},"flipper-plugin")," package."),(0,l.kt)(m,{mdxType:"FbInternalOnly"},(0,l.kt)("p",null,"For every plugin, we generated a task on our ",(0,l.kt)("a",{parentName:"p",href:"https://www.internalfb.com/tasks?folder_filters&q=1341478626215302&group_by_type=MANUAL"},"Sandy Plugin Migration")," dashboard. Completing this step corresponds to completing the ",(0,l.kt)("inlineCode",{parentName:"p"},"[flipper][sandy] convert plugin 'xxxx' to use Sandy APIs")," task.\nIf you start this task, please assign yourself as owner and link it in the diff. ")),(0,l.kt)("p",null,"Comparing to 'classic' plugins, there are a few fundamental differences when it comes to the plugin structure of Sandy plugins.\nA class extending from ",(0,l.kt)("inlineCode",{parentName:"p"},"FlipperPlugin")," which is exported as ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," is ",(0,l.kt)("em",{parentName:"p"},"no longer")," used to define a plugin.\nInstead, a plugin definition consists of two parts:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"A definition of the state and logic of our plugin that is exported under the name ",(0,l.kt)("inlineCode",{parentName:"li"},"plugin"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"export function plugin(client: PluginClient<Events, Methods>) { ... }"),". Most of the state and all connection logic will move here."),(0,l.kt)("li",{parentName:"ol"},"A definition of the root of the UI is exported under the name ",(0,l.kt)("inlineCode",{parentName:"li"},"Component"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"export function Component() { ... }"))),(0,l.kt)("p",null,"There are a few conceptual changes that are important to understand, as they are different compared to classic plugins:"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," function is called exactly once when a plugin is set up for an application. This means that all state that is created inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," definition will be kept as long as the app is connected,\neven when the user is navigating away.\nIt used to be necessary to use ",(0,l.kt)("inlineCode",{parentName:"p"},"persistedState")," for this kind of state, but that is no longer the case."),(0,l.kt)("p",null,"In contrast, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Component")," component is mounted whenever the user ",(0,l.kt)("em",{parentName:"p"},"opens")," the plugin, so any state stored locally in that React component will be lost if the user navigates away.\nWe recommend avoiding that, and store state, including selection, in the ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," definition instead, using the ",(0,l.kt)("inlineCode",{parentName:"p"},"createState")," abstraction."),(0,l.kt)("p",null,"The relation between ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin"),", its parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"client"),", and how to use it in your ",(0,l.kt)("inlineCode",{parentName:"p"},"Component")," definition is documented in detail in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/js-custom#the-plugin-declaration"},"Plugin Declaration section"),".\nPlease read it before continuing as it will explain how to manage state, handle receiving and sending data and testing in detail."),(0,l.kt)("p",null,"The full set of available APIs on ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," is documented on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#pluginclient"},"Desktop Plugin API")," page."),(0,l.kt)("p",null,"This step is completed if the plugin follows the next ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"component")," structure and is working again. Make sure to test extensively!"),(0,l.kt)("h3",{id:"tips"},"Tips:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To quickly verify the plugin compiles, the simplest way is to keep ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn tsc -w")," running in the ",(0,l.kt)("inlineCode",{parentName:"li"},"desktop")," folder. "),(0,l.kt)("li",{parentName:"ul"},"Similarly ",(0,l.kt)("inlineCode",{parentName:"li"},"yarn watch")," can be used to run the unit tests in watch mode. Use the ",(0,l.kt)("inlineCode",{parentName:"li"},"p")," key to filter for your specific plugin if ",(0,l.kt)("inlineCode",{parentName:"li"},"jest")," doesn't do so automatically."),(0,l.kt)("li",{parentName:"ul"},"Example of migrating the network plugin to use Sandy APIs. D24108772 / ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/flipper/commit/fdde2761ef054e44f399c846a2eae6baba03861e"},"Github commit")),(0,l.kt)("li",{parentName:"ul"},"Example of migrating the example plugin to use Sandy APIs. D22308265 / ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/facebook/flipper/commit/babc88e472612c66901d21d289bd217ef28ee385#diff-a145be72bb13a4675dcc8cbac5e55abcd9a542cc92f5c781bd7d3749f13676fc"},"Github commit")),(0,l.kt)("li",{parentName:"ul"},"Other plugins that can be check for inspiration are the Logs and Network plugins."),(0,l.kt)("li",{parentName:"ul"},"These steps typically does not involve change much the UI or touch other files than ",(0,l.kt)("inlineCode",{parentName:"li"},"index.tsx"),". Typically, the root component needs to be changed, but most other components can remain as is. However, if a ManagedTable is used (see the next section), it might be easier to already convert the table in this step."),(0,l.kt)("li",{parentName:"ul"},"Sandy has first class support for unit testing your plugin and mocking device interactions. Please do set up unit tests per documentation linked above!"),(0,l.kt)("li",{parentName:"ul"},"If the original plugin definition contained ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", it is recommended to create one new state atoms (",(0,l.kt)("inlineCode",{parentName:"li"},"createState"),") per field in the original ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", rather than having one big atom."),(0,l.kt)("li",{parentName:"ul"},"If the original plugin definition contained ",(0,l.kt)("inlineCode",{parentName:"li"},"persistedState"),", it is recommended to create one new state atoms (",(0,l.kt)("inlineCode",{parentName:"li"},"createState"),") per field in the original ",(0,l.kt)("inlineCode",{parentName:"li"},"state"),", rather than having one big atom. By setting the ",(0,l.kt)("inlineCode",{parentName:"li"},"persist")," ",(0,l.kt)("a",{parentName:"li",href:"/docs/extending/flipper-plugin#options"},"option")," of the state, you can make sure this piece of state becomes part of the import / export functionality of Flipper. Which is important if the data stored here is relevant for bug reports. "),(0,l.kt)("li",{parentName:"ul"},"For deeply nested state updates, using ",(0,l.kt)("inlineCode",{parentName:"li"},"state.update")," is often simpler than using ",(0,l.kt)("inlineCode",{parentName:"li"},"state.set"),", as it uses ",(0,l.kt)("a",{parentName:"li",href:"https://immerjs.github.io/immer/"},"immer")," under the hood to make immutable state updates straight forward."),(0,l.kt)("li",{parentName:"ul"},"For the same reason, you don't need to shallowly clone your state anymore, as long as ",(0,l.kt)("inlineCode",{parentName:"li"},"state.update")," is used for state updates."),(0,l.kt)("li",{parentName:"ul"},"When dealing a lot with promises, using ",(0,l.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await"},(0,l.kt)("inlineCode",{parentName:"a"},"async")," / ",(0,l.kt)("inlineCode",{parentName:"a"},"await"))," is usually simpler.")),(0,l.kt)("h3",{id:"migration-table"},"Migration table"),(0,l.kt)("p",null,"Some abstractions that used to be (for example) static methods on ",(0,l.kt)("inlineCode",{parentName:"p"},"FlipperPlugin")," are now exposed from the ",(0,l.kt)("inlineCode",{parentName:"p"},"client")," object:"),(0,l.kt)("p",null,"| Old | New |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"persistedState")," | Use ",(0,l.kt)("inlineCode",{parentName:"p"},"createState")," and set the ",(0,l.kt)("inlineCode",{parentName:"p"},"persist")," option |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"persistedStateReducer")," | Create message handlers and update the state objects directly |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"exportPersistedState")," | Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"client.onExport")," hook |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"getActiveNotifications")," | Use ",(0,l.kt)("inlineCode",{parentName:"p"},"client.showNotification")," for persistent notifications, or ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"notification")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"antd")," for one-off notifications.\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"createTablePlugin")," | TBD, so these conversions can be skipped for now |\n| ",(0,l.kt)("inlineCode",{parentName:"p"},"init")," | ",(0,l.kt)("inlineCode",{parentName:"p"},"client.onReady")," |"),(0,l.kt)("h2",{id:"using-sandy--antdesign-to-organise-the-plugin-ui"},"Using Sandy / Ant.design to organise the plugin UI"),(0,l.kt)(m,{mdxType:"FbInternalOnly"},(0,l.kt)("p",null,"For every plugin, we generated a tasks on our ",(0,l.kt)("a",{parentName:"p",href:"https://www.internalfb.com/tasks?folder_filters&q=1341478626215302&group_by_type=MANUAL"},"Sandy Plugin Migration")," dashboard. Completing this step corresponds to completing the ",(0,l.kt)("inlineCode",{parentName:"p"},"[flipper][sandy] convert plugin 'xxxx's UI to use ant.design")," task.\nIf you start this task, please assign yourself as owner and link it in the diff. ")),(0,l.kt)("p",null,"The goal of this step is to update the UI of the plugin to use Sandy / Ant.design components.\nThese will provide a more consistent user experience, usually provide better UX and they support dark mode!\nRoughly speaking this typically involves replacing all imported components with their modern counterpart."),(0,l.kt)("p",null,"For Sandy plugins, components can be found here:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interactive data displaying components are exposed from ",(0,l.kt)("inlineCode",{parentName:"li"},"flipper-plugin"),": ",(0,l.kt)("inlineCode",{parentName:"li"},"DataTable")," (for tables), ",(0,l.kt)("inlineCode",{parentName:"li"},"DataInspector")," (for JSON trees) and ",(0,l.kt)("inlineCode",{parentName:"li"},"ElementInspector")," (for element trees). "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"flipper-plugin")," also provides the primitives to organise the ",(0,l.kt)("inlineCode",{parentName:"li"},"Layout")," of the plugin."),(0,l.kt)("li",{parentName:"ul"},"Practically all other, more generic components are provided by ",(0,l.kt)("a",{parentName:"li",href:"https://ant.design/components/overview/"},"ant.design"),", a proven mature open source component library, which is much richer than the components that are offered from ",(0,l.kt)("inlineCode",{parentName:"li"},"flipper"),".")),(0,l.kt)("p",null,"In Sandy, the layout is typically build by using a combination of ",(0,l.kt)("inlineCode",{parentName:"p"},"Layout.Top")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},".Right"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".Left"),", ",(0,l.kt)("inlineCode",{parentName:"p"},".Bottom"),"), which divides all available space in a fixed and dynamic section, ",(0,l.kt)("inlineCode",{parentName:"p"},"Layout.Scrollable"),", which takes all available space and provides scrollbars if its content is still greater, and ",(0,l.kt)("inlineCode",{parentName:"p"},"Layout.Container")," which organizes paddings, borders and spacing between elements etc."),(0,l.kt)("p",null,"We generally recommend against using ",(0,l.kt)("inlineCode",{parentName:"p"},"margins"),"; use padding and ",(0,l.kt)("inlineCode",{parentName:"p"},"gap")," instead.\nIdeally, use ",(0,l.kt)("inlineCode",{parentName:"p"},"theme.spacing")," to get standard numbers for margins and paddings instead of hard-coded numbers.\nThis will help with achieving consistency in look and feel."),(0,l.kt)("h3",{id:"design-resources"},"Design resources"),(0,l.kt)("p",null,"There are three important resources to check for documentation on the components available:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If you start Flipper, and go to ",(0,l.kt)("inlineCode",{parentName:"li"},"View > Flipper style guide"),", you will see a general overview of the Flipper design system. It will demonstrate colors, typography and creating layouts including some examples. "),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("a",{parentName:"li",href:"https://ant.design/components/overview/"},"ant.design component overview")),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/extending/flipper-plugin#ui-components"},"API reference")," documentation for the components provided by ",(0,l.kt)("inlineCode",{parentName:"li"},"flipper-plugin"))),(0,l.kt)("h3",{id:"old-and-new-components"},"Old and new components"),(0,l.kt)("p",null,"For conversion, the following table maps the old components to the new ones:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Old ",(0,l.kt)("inlineCode",{parentName:"th"},"flipper")," component"),(0,l.kt)("th",{parentName:"tr",align:null},"New component"),(0,l.kt)("th",{parentName:"tr",align:null},"Providing package"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DetailsSidebar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DetailsSidebar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"as-is")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Sidebar")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Layout.Top")," (or ",(0,l.kt)("inlineCode",{parentName:"td"},".Right"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".Left"),", ",(0,l.kt)("inlineCode",{parentName:"td"},".Bottom"),")"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Set the ",(0,l.kt)("inlineCode",{parentName:"td"},"resizable")," flag to allow the user to resize the pane.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FlexColumn")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"Pane")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"View")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Layout.Container")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"gap")," property to provide some spacing between the children!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FlexRow")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Layout.Horizontal")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Use the ",(0,l.kt)("inlineCode",{parentName:"td"},"gap")," property to provide some spacing between the children!")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Scrollable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Layout.ScrollContainer")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Link")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Typography.Link")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"antd")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Text")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"Heading")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Typography.Text")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"Typography.Title")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"antd")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Button")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Button")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"antd")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Glyph")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Icon")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"antd")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ManagedDataTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DataTable")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null},"Requires state to be provided by a ",(0,l.kt)("a",{parentName:"td",href:"/docs/extending/flipper-plugin#createdatasource"},(0,l.kt)("inlineCode",{parentName:"a"},"createDataSource")))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ManagedDataInspector")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"DataInspector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DataInspector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ManagedElementInspector")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"ElementInspector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ElementInspector")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Panel")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"flipper-plugin")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tabs")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tabs")," / ",(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"`flipper-plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"Note that ",(0,l.kt)("inlineCode",{parentName:"td"},"Tab"),"'s ",(0,l.kt)("inlineCode",{parentName:"td"},"title")," property is now called ",(0,l.kt)("inlineCode",{parentName:"td"},"tab"),".")))),(0,l.kt)("p",null,"Most other components, like ",(0,l.kt)("inlineCode",{parentName:"p"},"select")," elements, tabs, date-pickers, etc etc can all be found in the Ant documentaiton."),(0,l.kt)("h3",{id:"theming--custom-styled-components"},"Theming & custom styled components"),(0,l.kt)("p",null,"Creating your own components / styling using ",(0,l.kt)("inlineCode",{parentName:"p"},"styled")," is still supported.\nBut ideally, you should need custom styled components a lot less!"),(0,l.kt)("p",null,"Since Sandy plugins are expected to support dark mode, (use the settings pane to quickly toggle), we recommend to not use hard-coded colors, but instead use one of the semantic colors that are provided through the ",(0,l.kt)("inlineCode",{parentName:"p"},"theme")," object that can be imported from ",(0,l.kt)("inlineCode",{parentName:"p"},"flipper-plugin"),"."),(0,l.kt)("p",null,"Ideally there should be no hard-coded colors anymore either, and little need to use ",(0,l.kt)("inlineCode",{parentName:"p"},"width: 100%")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"height: 100%")," anywhere, as needing those typically signals a layout issue."),(0,l.kt)("p",null,"Tip: it is recommended to keep components as much as possible outside the entry file, as components defined outside the index.tsx file will benefit from fast refresh."),(0,l.kt)("h3",{id:"wrapping-up"},"Wrapping up"),(0,l.kt)("p",null,"This step of the process is completed as soon as there are no imports from the ",(0,l.kt)("inlineCode",{parentName:"p"},"flipper")," package anymore.\nDon't forget to remove ",(0,l.kt)("inlineCode",{parentName:"p"},"flipper")," from the ",(0,l.kt)("inlineCode",{parentName:"p"},"peerDependencies")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," section if present."),(0,l.kt)("p",null,"Feel free to reach out to the Flipper team for any questions!"))}c.isMDXComponent=!0}}]);