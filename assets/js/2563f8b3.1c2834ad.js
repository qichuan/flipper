(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{156:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),a=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(r),y=t,b=s["".concat(p,".").concat(y)]||s[y]||d[y]||i;return r?a.a.createElement(b,o(o({ref:n},c),{},{components:r})):a.a.createElement(b,o({ref:n},c))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,p=new Array(i);p[0]=y;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,p[1]=o;for(var c=2;c<i;c++)p[c]=r[c];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},97:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return p})),r.d(n,"metadata",(function(){return o})),r.d(n,"toc",(function(){return l})),r.d(n,"default",(function(){return u}));var t=r(3),a=r(7),i=(r(0),r(156)),p={id:"leak-canary-2-plugin",title:"LeakCanary 2 Setup",sidebar_label:"LeakCanary 2"},o={unversionedId:"setup/leak-canary-2-plugin",id:"setup/leak-canary-2-plugin",isDocsHomePage:!1,title:"LeakCanary 2 Setup",description:"Ensure that you already have an explicit dependency in your application's",source:"@site/../docs/setup/leak-canary-2-plugin.mdx",slug:"/setup/leak-canary-2-plugin",permalink:"/docs/setup/leak-canary-2-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/leak-canary-2-plugin.mdx",version:"current",sidebar_label:"LeakCanary 2",sidebar:"setup",previous:{title:"LeakCanary Setup",permalink:"/docs/setup/leak-canary-plugin"},next:{title:"Crash Reporter Setup",permalink:"/docs/setup/crash-reporter-plugin"}},l=[],c={toc:l};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},c,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Ensure that you already have an explicit dependency in your application's\n",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-leakcanary2-plugin:0.82.1'\n  debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.6'\n}\n")),Object(i.b)("p",null,"Update your the ",Object(i.b)("inlineCode",{parentName:"p"},"onCreate")," method in you ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," to add the LeakCanary2 plugin to Flipper and the Flipper listener to LeakCanary"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kt"},"import com.facebook.flipper.plugins.leakcanary2.FlipperLeakListener\nimport com.facebook.flipper.plugins.leakcanary2.LeakCanary2FlipperPlugin\n\n...\n\n  override fun onCreate() {\n    super.onCreate()\n    setupFlipper()\n\n    /*\n    set the flipper listener in leak canary config\n    */\n    LeakCanary.config = LeakCanary.config.copy(\n        onHeapAnalyzedListener = FlipperLeakListener()\n    )\n\n    SoLoader.init(this, false)\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      val client = AndroidFlipperClient.getInstance(this)\n      /*\n      add leak canary plugin to flipper\n      */\n      client.addPlugin(LeakCanary2FlipperPlugin())\n      client.start()\n    }\n  }\n")),Object(i.b)("p",null,"That's it!"))}u.isMDXComponent=!0}}]);