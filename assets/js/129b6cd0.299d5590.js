(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||d[b]||a;return n?i.a.createElement(f,c(c({ref:t},p),{},{components:n})):i.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(10),i=n(158);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,l=a.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},158:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},159:function(e,t,n){"use strict";var r=n(0),i=n.n(r),a=n(11),o=n(158),c=n(8),l=Object(r.createContext)({collectLink:function(){}}),p=n(157),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,s,d=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,j=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),y=Object(p.b)().withBaseUrl,w=Object(r.useContext)(l),N=b||f,k=Object(o.a)(N),C=null==N?void 0:N.replace("pathname://",""),x=void 0!==C?(n=C,O&&function(e){return e.startsWith("/")}(n)?y(n):n):void 0,P=Object(r.useRef)(!1),T=d?a.e:a.c,E=c.default.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&k&&window.docusaurus.prefetch(x),function(){E&&s&&s.disconnect()}}),[x,E,k]);var D=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,R=!x||!k||D;return x&&k&&!D&&!g&&w.collectLink(x),R?i.a.createElement("a",Object.assign({href:x},N&&!k&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(T,Object.assign({},j,{onMouseEnter:function(){P.current||(window.docusaurus.preload(x),P.current=!0)},innerRef:function(e){var t,n;E&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(x)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:x||""},d&&{isActive:v,activeClassName:m}))}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(156)),o=n(157),c=n(159),l={id:"react-native",title:"Building a React Native Plugin"},p={unversionedId:"tutorial/react-native",id:"tutorial/react-native",isDocsHomePage:!1,title:"Building a React Native Plugin",description:"This tutorial requires React Native 0.62 or higher.",source:"@site/../docs/tutorial/react-native.mdx",slug:"/tutorial/react-native",permalink:"/docs/tutorial/react-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/react-native.mdx",version:"current",sidebar:"extending",previous:{title:"Building an Android Plugin",permalink:"/docs/tutorial/android"},next:{title:"Building a Desktop Plugin",permalink:"/docs/tutorial/js-setup"}},u=[],s={toc:u};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{class:"warning"},Object(a.b)("p",null,"This tutorial requires React Native 0.62 or higher.")),Object(a.b)("p",null,"Once you have connected Flipper to a React Native application,\nwriting your own Flipper plugin can be done without reaching into the native world."),Object(a.b)("p",null,"To expose Flipper to the JavaScript world, the React Native Native Module ",Object(a.b)("inlineCode",{parentName:"p"},"react-native-flipper")," needs to be installed in the hosting application by running ",Object(a.b)("inlineCode",{parentName:"p"},"yarn add react-native-flipper")," and ",Object(a.b)("inlineCode",{parentName:"p"},"cd ios && pod install"),". If you are developing a plugin that is distributed as NPM package, make sure to add this to the installation instruction of your package as well!"),Object(a.b)("p",null,"Registering a new plugin is done by importing ",Object(a.b)("inlineCode",{parentName:"p"},"addPlugin")," from ",Object(a.b)("inlineCode",{parentName:"p"},'"react-native-flipper"')," and providing it an object that at least implements the method  ",Object(a.b)("inlineCode",{parentName:"p"},"getId")," (the plugin id that should be used in the desktop plugin as well to make the connection) and two event handlers for the ",Object(a.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(a.b)("inlineCode",{parentName:"p"},"onDisconnect")," events."),Object(a.b)("p",null,"These ",Object(a.b)("inlineCode",{parentName:"p"},"onConnect")," and ",Object(a.b)("inlineCode",{parentName:"p"},"onDisconnect")," events are triggered every time the plugin becomes (in)active in the Flipper desktop application.\nIf the plugin is a ",Object(a.b)(c.a,{to:Object(o.a)("/docs/extending/create-plugin#background-plugins"),mdxType:"Link"},"background plugin"),", these events are triggered typically only once (they might be triggered never, if the Desktop user didn't enable the plugin, or multiple times if they enabled or disabled the plugin a few times)."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"onConnect")," callback receive a ",Object(a.b)("inlineCode",{parentName:"p"},"connection")," which can be used to communicate with the backend:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-javascript"},"import {addPlugin} from \"react-native-flipper\"\n\naddPlugin({\n  getId() {\n    return 'ReactNativeExamplePlugin';\n  },\n  onConnect(connection) {\n    mammmals.forEach(({ title, pictureUrl }, index) => {\n      connection.send('newRow', {\n          id: index,\n          title,\n          url: pictureUrl\n      })\n    })\n  },\n  onDisconnect() {\n  }\n})\n")),Object(a.b)("p",null,"You might want to store the connection somewhere to be able to send more events as long as ",Object(a.b)("inlineCode",{parentName:"p"},"onDisconnect")," event hasn't been fired."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"connection")," object can also be used to listen to messages coming from the Desktop plugin. See ",Object(a.b)(c.a,{to:Object(o.a)("/docs/extending/create-plugin"),mdxType:"Link"},"Client Plugin API")," for details."),Object(a.b)("p",null,"An example plugin to play a little Tic-Tac-Toe between the Flipper Desktop and a React Native app can be found inside this repository as well (run ",Object(a.b)("inlineCode",{parentName:"p"},"yarn && yarn android")," in ",Object(a.b)("inlineCode",{parentName:"p"},"react-native/ReactNativeFlipperExample")," to start the test project):"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The React Native JavaScript based plugin implementation: ",Object(a.b)("a",{parentName:"li",href:"https://github.com/facebook/flipper/tree/master/react-native/ReactNativeFlipperExample/FlipperTicTacToe.js"},"FlipperTicTacToe.js")),Object(a.b)("li",{parentName:"ul"},"The Flipper Desktop plugin implementation: ",Object(a.b)("a",{parentName:"li",href:"https://github.com/facebook/flipper/blob/master/desktop/plugins/rn-tic-tac-toe/index.tsx"},"rn-tic-tac-toe/index.tsx"))))}d.isMDXComponent=!0}}]);