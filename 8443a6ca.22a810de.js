(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),o=n(7),i=(n(0),n(142)),a=n(144),l=n(148),u={id:"intro",title:"Intro"},c={unversionedId:"tutorial/intro",id:"tutorial/intro",isDocsHomePage:!1,title:"Intro",description:"Flipper was designed with extensibility in mind from the start to enable engineers to quickly build quality, easy-to-use tools for their own needs and applications.",source:"@site/../docs/tutorial/intro.mdx",slug:"/tutorial/intro",permalink:"/docs/tutorial/intro",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/tutorial/intro.mdx",version:"current",sidebar:"extending",next:{title:"Building an iOS Plugin",permalink:"/docs/tutorial/ios"}},s=[{value:"Scaffolding a new plugin",id:"scaffolding-a-new-plugin",children:[{value:"Gatekeeper",id:"gatekeeper",children:[]},{value:"Let&#39;s see something on screen",id:"lets-see-something-on-screen",children:[]}]}],p={rightToc:s};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{alt:"Android App Tutorial",src:Object(a.a)("img/android-tutorial.png")}),Object(i.b)("p",null,"Flipper was designed with extensibility in mind from the start to enable engineers to quickly build quality, easy-to-use tools for their own needs and applications.\nIn addition to building plugins for the existing platforms, you can also extend the capabilities of Flipper to other platforms by conforming to the ",Object(i.b)("inlineCode",{parentName:"p"},"FlipperClient")," API. After this, you can make use of the existing desktop plugins by writing client plugins that conform to the same API."),Object(i.b)("p",null,"In this tutorial, we show you how how easy it is to build a Flipper plugin\nfor Android and iOS that extracts data from your native application and\ndisplays it in the desktop app."),Object(i.b)("p",null,"We then guide you through the process of converting a basic table plugin into\na full plugin with custom UI components."),Object(i.b)("p",null,"Before we get started, let's define two terms we will use frequently throughout\nthis tutorial:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Desktop app"),": This is the Electron-based application you run on your desktop."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Mobile client"),": This is the mobile app running most likely on a phone or other mobile device. It connects to the desktop app.")),Object(i.b)(l.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(i.b)("h2",{id:"scaffolding-a-new-plugin"},"Scaffolding a new plugin"),Object(i.b)("p",null,"To create your plugin and add it to Wilde / fb4a there are some steps to go through. That's why we made a simple scripts for it."),Object(i.b)("p",null,"Go to your terminal and simply run ",Object(i.b)("inlineCode",{parentName:"p"},"scarf flipper-plugin"),", this will setup all required files for you."),Object(i.b)("p",null,"On completion you'll have everything set up ready to start and running it on Flipper. Run ",Object(i.b)("inlineCode",{parentName:"p"},"hg diff")," to see the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Desktop plugin files"),": The UI code for your plugin. Everything starts in the ",Object(i.b)("inlineCode",{parentName:"li"},"index.js")," file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Native Flipper plugin files"),": The Android / iOS code for your plugin"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Integration with flagship apps"),": Your plugin has already been added into Wilde and/or fb4a!")),Object(i.b)("h3",{id:"gatekeeper"},"Gatekeeper"),Object(i.b)("p",null,"Depending on the scaffolding choices, we've gated your new plugin behind a GK, so you can go ahead and ship it without premature exposure. You will have to create the gatekeeper, and add yourself to it so you can see your plugin. The GK name is defined in your plugins ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(i.b)("h3",{id:"lets-see-something-on-screen"},"Let's see something on screen"),Object(i.b)("p",null,"Now that you have a good ground for your plugin there is nothing better than actually see something on screen. Make sure you build and run fb4a or wilde with your generated changes."),Object(i.b)("p",null,"You also need to compile and run the flipper desktop app, with your new plugin."),Object(i.b)("p",null,"To locally run Flipper just go to your terminal (please use non-atom terminal):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ cd ~/fbsource/xplat/sonar/desktop\n$ yarn install\n$ yarn start\n")),Object(i.b)("p",null,"This will kickoff a local build of Flipper that will spawn automatically for you once its ready. While you're working on your custom plugin you'll not be using the Flipper build pre-installed on your machine."),Object(i.b)("p",null,"As you keep tweaking and improving your desktop plugin, the only thing to do is to save your changes (on your ",Object(i.b)("inlineCode",{parentName:"p"},"index.tsx")," file) and it will automatically reload flipper with all changes applied for you. This makes it possible to see your changes automatically appear on screen without rebuilding Flipper every time."),Object(i.b)("p",null,"To start an IDE we recommend to run ",Object(i.b)("inlineCode",{parentName:"p"},"code-fb ~/fbsource/xplat/sonar/"))))}f.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,b=p["".concat(a,".").concat(d)]||p[d]||f[d]||i;return n?o.a.createElement(b,l(l({ref:t},c),{},{components:n})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},143:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(20);t.default=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},144:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(143),o=n(145);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,u=i.absolute,c=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},145:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},146:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return a}));var r=n(143);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},148:function(e,t,n){(function(t){const r=["internal","external"];let o;try{o=n(146).usePluginData}catch(u){o=null}function i(e){return function(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${r}. Instead got ${e}`);if(!Object.keys(e).find((e=>r.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${r}`);const t=Object.keys(e).filter((e=>!r.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${r}`)}(e),l()?"internal"in e?a(e.internal):[]:"external"in e?a(e.external):[]}function a(e){return"function"==typeof e?e():e}function l(){return t.env.FB_INTERNAL||o&&o("internaldocs-fb").FB_INTERNAL}e.exports={fbContent:i,fbInternalOnly:function(e){return i({internal:e})},isInternal:l,FbInternalOnly:function(e){return l()?e.children:null},OssOnly:function(e){return l()?null:e.children}}}).call(this,n(149))},149:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var u,c=[],s=!1,p=-1;function f(){s&&u&&(s=!1,u.length?c=u.concat(c):p=-1,c.length&&d())}function d(){if(!s){var e=l(f);s=!0;for(var t=c.length;t;){for(u=c,c=[];++p<t;)u&&u[p].run();p=-1,t=c.length}u=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new b(e,t)),1!==c.length||s||l(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}}]);