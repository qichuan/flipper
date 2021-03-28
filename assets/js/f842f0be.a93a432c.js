(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),i=(n(0),n(156)),o=n(157),c=n(159),l={id:"react-native-android",title:"Manually set up your React Native Android App",sidebar_label:"Manual Android Setup"},p={unversionedId:"getting-started/react-native-android",id:"getting-started/react-native-android",isDocsHomePage:!1,title:"Manually set up your React Native Android App",description:"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.",source:"@site/../docs/getting-started/react-native-android.mdx",slug:"/getting-started/react-native-android",permalink:"/docs/getting-started/react-native-android",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/react-native-android.mdx",version:"current",sidebar_label:"Manual Android Setup",sidebar:"setup",previous:{title:"Set up your React Native App",permalink:"/docs/getting-started/react-native"},next:{title:"Manually set up your React Native iOS App",permalink:"/docs/getting-started/react-native-ios"}},s=[{value:"Dependencies",id:"dependencies",children:[]},{value:"Application Setup",id:"application-setup",children:[]},{value:"Further Steps",id:"further-steps",children:[]}],u={toc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"These instructions are aimed at people manually adding Flipper to a React Native 0.62+ app.\nThis should only be necessary if you have an existing app that cannot be upgraded with the\n",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/upgrading"},"React Native Upgrade tool"),"."),Object(i.b)("h2",{id:"dependencies"},"Dependencies"),Object(i.b)("p",null,"Flipper is distributed via Maven Central. Add the dependencies to your ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle")," file.\nYou should also explicitly depend on ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/soloader"},Object(i.b)("inlineCode",{parentName:"a"},"soloader")),"\ninstead of relying on transitive dependency resolution which is getting deprecated\nwith Gradle 5."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n  mavenCentral()\n}\n\ndependencies {\n  debugImplementation('com.facebook.flipper:flipper:0.35.0') {\n    exclude group:'com.facebook.fbjni'\n  }\n\n  debugImplementation('com.facebook.flipper:flipper-network-plugin:0.35.0') {\n    exclude group:'com.facebook.flipper'\n  }\n}\n")),Object(i.b)("p",null,"These exclusions are currently necessary to avoid some clashes with FBJNI\nshared libraries."),Object(i.b)("h2",{id:"application-setup"},"Application Setup"),Object(i.b)("p",null,"For maximum flexibility, we recommend you move the Flipper initialization to a separate\nclass that lives in a ",Object(i.b)("inlineCode",{parentName:"p"},"debug/")," folder, so that Flipper code never gets referenced in a\nrelease build."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},"import android.content.Context;\nimport com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.android.utils.FlipperUtils;\nimport com.facebook.flipper.core.FlipperClient;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.react.ReactInstanceManager;\nimport okhttp3.OkHttpClient;\n\npublic class ReactNativeFlipper {\n  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {\n    if (FlipperUtils.shouldEnableFlipper(context)) {\n      final FlipperClient client = AndroidFlipperClient.getInstance(context);\n\n      client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));\n    }\n  }\n}\n")),Object(i.b)("p",null,"Note that this only enables the Layout Inspector plugin. Check out ",Object(i.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/blob/6f627f684bb6506a677c9632b2710e4a541690a9/template/android/app/src/debug/java/com/helloworld/ReactNativeFlipper.java"},"the React Native template")," for more plugins."),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"Application")," implementation, we then call the static method using\nreflection. This gives us a lot of flexibility, but can be quite noisy.\nAlternatively, recreate an empty ",Object(i.b)("inlineCode",{parentName:"p"},"ReactNativeFlipper")," class in a ",Object(i.b)("inlineCode",{parentName:"p"},"release/")," folder,\nso you can call into the method directly."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-java"},'public class MainApplication extends Application implements ReactApplication {\n  // ...\n\n  @Override\n  public void onCreate() {\n    super.onCreate();\n    SoLoader.init(this, /* native exopackage */ false);\n    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());\n  }\n\n  /**\n   * Loads Flipper in React Native templates. Call this in the onCreate method with something like\n   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());\n   *\n   * @param context\n   * @param reactInstanceManager\n   */\n  private static void initializeFlipper(\n      Context context, ReactInstanceManager reactInstanceManager) {\n    if (BuildConfig.DEBUG) {\n      try {\n        /*\n         We use reflection here to pick up the class that initializes\n         Flipper, since Flipper library is not available in release mode\n        */\n        Class<?> aClass = Class.forName("com.example.ReactNativeFlipper");\n        aClass\n            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)\n            .invoke(null, context, reactInstanceManager);\n      } catch (ClassNotFoundException e) {\n        e.printStackTrace();\n      } catch (NoSuchMethodException e) {\n        e.printStackTrace();\n      } catch (IllegalAccessException e) {\n        e.printStackTrace();\n      } catch (InvocationTargetException e) {\n        e.printStackTrace();\n      }\n    }\n  }\n}\n')),Object(i.b)("h2",{id:"further-steps"},"Further Steps"),Object(i.b)("p",null,"To create your own plugins and integrate with Flipper using JavaScript, check out our ",Object(i.b)(c.a,{to:Object(o.a)("/docs/tutorial/react-native"),mdxType:"Link"},"writing plugins for React Native")," tutorial!"))}d.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(f,c(c({ref:t},p),{},{components:n})):r.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(10),r=n(158);function i(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,l=i.absolute,p=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},158:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(11),o=n(158),c=n(8),l=Object(a.createContext)({collectLink:function(){}}),p=n(157),s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,b=e.to,f=e.href,m=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,O=void 0===h||h,y=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(p.b)().withBaseUrl,w=Object(a.useContext)(l),k=b||f,N=Object(o.a)(k),x=null==k?void 0:k.replace("pathname://",""),C=void 0!==x?(n=x,O&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,F=Object(a.useRef)(!1),R=d?i.e:i.c,I=c.default.canUseIntersectionObserver;Object(a.useEffect)((function(){return!I&&N&&window.docusaurus.prefetch(C),function(){I&&u&&u.disconnect()}}),[C,I,N]);var M=null!==(t=null==C?void 0:C.startsWith("#"))&&void 0!==t&&t,A=!C||!N||M;return C&&N&&!M&&!g&&w.collectLink(C),A?r.a.createElement("a",Object.assign({href:C},k&&!N&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(R,Object.assign({},y,{onMouseEnter:function(){F.current||(window.docusaurus.preload(C),F.current=!0)},innerRef:function(e){var t,n;I&&e&&N&&(t=e,n=function(){window.docusaurus.prefetch(C)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:C||""},d&&{isActive:v,activeClassName:m}))}}}]);