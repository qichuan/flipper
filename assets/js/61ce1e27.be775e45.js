(self.webpackChunk=self.webpackChunk||[]).push([[1699,428],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>u,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,m=d["".concat(o,".").concat(y)]||d[y]||s[y]||p;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,i=new Array(p);i[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1373:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>i,metadata:()=>l,toc:()=>o,default:()=>u});var r=t(4034),a=t(9973),p=(t(7294),t(3905)),i={},l={type:"mdx",permalink:"/docs/plugins/leak-canary/setup",source:"@site/src/embedded-pages/docs/plugins/leak-canary/setup.mdx"},o=[],c={toc:o};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Ensure that you already have an explicit dependency in your application's\n",(0,p.kt)("inlineCode",{parentName:"p"},"build.gradle")," including the plugin dependency, e.g."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-leakcanary2-plugin:0.97.0'\n  debugImplementation 'com.squareup.leakcanary:leakcanary-android:2.6'\n}\n")),(0,p.kt)("p",null,"Update your the ",(0,p.kt)("inlineCode",{parentName:"p"},"onCreate")," method in you ",(0,p.kt)("inlineCode",{parentName:"p"},"Application")," to add the LeakCanary2 plugin to Flipper and the Flipper listener to LeakCanary"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-kt"},"import com.facebook.flipper.plugins.leakcanary2.FlipperLeakListener\nimport com.facebook.flipper.plugins.leakcanary2.LeakCanary2FlipperPlugin\n\n...\n\n  override fun onCreate() {\n    super.onCreate()\n    setupFlipper()\n\n    /*\n    set the flipper listener in leak canary config\n    */\n    LeakCanary.config = LeakCanary.config.copy(\n        onHeapAnalyzedListener = FlipperLeakListener()\n    )\n\n    SoLoader.init(this, false)\n\n    if (BuildConfig.DEBUG && FlipperUtils.shouldEnableFlipper(this)) {\n      val client = AndroidFlipperClient.getInstance(this)\n      /*\n      add leak canary plugin to flipper\n      */\n      client.addPlugin(LeakCanary2FlipperPlugin())\n      client.start()\n    }\n  }\n")),(0,p.kt)("p",null,"That's it!"))}u.isMDXComponent=!0},5990:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,metadata:()=>o,toc:()=>c,default:()=>s});var r=t(4034),a=t(9973),p=(t(7294),t(3905)),i=t(1373),l={id:"leak-canary",title:"LeakCanary Plugin Setup",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/setup.mdx"},o={unversionedId:"setup/plugins/leak-canary",id:"setup/plugins/leak-canary",isDocsHomePage:!1,title:"LeakCanary Plugin Setup",description:"",source:"@site/../docs/setup/plugins/leak-canary.mdx",sourceDirName:"setup/plugins",slug:"/setup/plugins/leak-canary",permalink:"/docs/setup/plugins/leak-canary",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/setup.mdx",version:"current",sidebar_label:"LeakCanary",frontMatter:{id:"leak-canary",title:"LeakCanary Plugin Setup",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/leak_canary/docs/setup.mdx"},sidebar:"setup",previous:{title:"Layout Plugin Setup",permalink:"/docs/setup/plugins/inspector"},next:{title:"Navigation Plugin Setup",permalink:"/docs/setup/plugins/navigation"}},c=[],u={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)(i.default,{mdxType:"Article"}))}s.isMDXComponent=!0}}]);