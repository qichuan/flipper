(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(7),r=(n(0),n(156)),a=n(165),p=n(166),l={id:"layout-plugin",title:"Layout Inspector Setup",sidebar_label:"Layout Inspector"},c={unversionedId:"setup/layout-plugin",id:"setup/layout-plugin",isDocsHomePage:!1,title:"Layout Inspector Setup",description:"To use the layout inspector plugin, you need to add the plugin to your Flipper client instance.",source:"@site/../docs/setup/layout-plugin.mdx",slug:"/setup/layout-plugin",permalink:"/docs/setup/layout-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/layout-plugin.mdx",version:"current",sidebar_label:"Layout Inspector",sidebar:"setup",previous:{title:"Implementing Layout Inspection",permalink:"/docs/extending/supporting-layout"},next:{title:"Navigation Plugin Setup",permalink:"/docs/setup/navigation-plugin"}},u=[{value:"Android",id:"android",children:[{value:"Standard Android View Only",id:"standard-android-view-only",children:[]},{value:"With Litho Support",id:"with-litho-support",children:[]},{value:"Blocking fullscreen views (Android only)",id:"blocking-fullscreen-views-android-only",children:[]},{value:"Blocking empty view groups (Android only)",id:"blocking-empty-view-groups-android-only",children:[]}]},{value:"iOS",id:"ios",children:[{value:"Standard UIView Only",id:"standard-uiview-only",children:[]},{value:"With ComponentKit Support",id:"with-componentkit-support",children:[]}]}],s={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"To use the layout inspector plugin, you need to add the plugin to your Flipper client instance."),Object(r.b)("h2",{id:"android"},"Android"),Object(r.b)("h3",{id:"standard-android-view-only"},"Standard Android View Only"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),Object(r.b)("h3",{id:"with-litho-support"},"With Litho Support"),Object(r.b)("p",null,"Litho support is provided via an optional plugin."),Object(r.b)("p",null,"You also need to compile in the ",Object(r.b)("inlineCode",{parentName:"p"},"litho-annotations")," package, as Flipper reflects\non them at runtime. So ensure to not just include them as ",Object(r.b)("inlineCode",{parentName:"p"},"compileOnly")," in your\ngradle configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  debugImplementation 'com.facebook.flipper:flipper-litho-plugin:0.82.1'\n  debugImplementation 'com.facebook.litho:litho-annotations:0.19.0'\n  // ...\n}\n")),Object(r.b)("p",null,"If you want to enable Litho support in the layout inspector, you need to augment\nthe descriptor with Litho-specific settings and add some addition dependencies."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"import com.facebook.litho.config.ComponentsConfiguration;\nimport com.facebook.flipper.plugins.inspector.DescriptorMapping;\nimport com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;\nimport com.facebook.flipper.plugins.litho.LithoFlipperDescriptors;\n\n// Instead of hard-coding this setting, it's a good practice to tie\n// this to a BuildConfig flag, that you only enable for debug builds\n// of your application.\nComponentsConfiguration.isDebugModeEnabled = true;\n\nfinal DescriptorMapping descriptorMapping = DescriptorMapping.withDefaults();\n// This adds Litho capabilities to the layout inspector.\nLithoFlipperDescriptors.add(descriptorMapping);\n\nclient.addPlugin(new InspectorFlipperPlugin(mApplicationContext, descriptorMapping));\n")),Object(r.b)("h3",{id:"blocking-fullscreen-views-android-only"},"Blocking fullscreen views (Android only)"),Object(r.b)("p",null,"The issue is that if you have some view that occupies big part of the screen but draws nothing and its Z-position is higher than your main content, then selecting view/component through Layout Inspector doesn't work as you intended, as it will always hit that transparent view and you need to manually navigate to the view you need which is time-consuming and should not be necessary."),Object(r.b)("p",null,"Add the following tag to your view to skip it from Flipper's view picker. The view will still be shown in the layout hierarchy, but it will not be selected while using the view picker."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"view.setTag(R.id.flipper_skip_view_traversal, true);\n")),Object(r.b)("h3",{id:"blocking-empty-view-groups-android-only"},"Blocking empty view groups (Android only)"),Object(r.b)("p",null,"If you have a ViewGroup that only occasionally has visible children, you may find it helpful to block its traversal when it is empty or has no visible children. For example, you might have a FragmentContainerView that currently has no visible fragment."),Object(r.b)("p",null,"Add the following tag to your view group to skip it from Flipper's view picker only when it has zero children, or none of its children are currently visible. The views will still be shown in the layout hierarchy, but they will not be selected while using the view picker."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"viewGroup.setTag(R.id.flipper_skip_empty_view_group_traversal, true);\n")),Object(r.b)("h2",{id:"ios"},"iOS"),Object(r.b)("h3",{id:"standard-uiview-only"},"Standard UIView Only"),Object(r.b)("p",null,"To debug layout using Flipper, add the following pod:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipperkit_version\n")),Object(r.b)("p",null,"Once you have added the pod, initialise the plugin and add it to the ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperClient")," as follows."),Object(r.b)(a.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objective-c"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n\nSKDescriptorMapper *mapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:context.application withDescriptorMapper:mapper]];\n"))),Object(r.b)(p.a,{value:"swift",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))),Object(r.b)("h3",{id:"with-componentkit-support"},"With ComponentKit Support"),Object(r.b)("p",null,"If you want to enable ",Object(r.b)("a",{parentName:"p",href:"https://github.com/facebook/componentkit"},"ComponentKit support")," in the layout inspector, you need to add ",Object(r.b)("inlineCode",{parentName:"p"},"FlipperKit/FlipperKitLayoutComponentKitSupport")," to your Podfile."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-ruby"},"pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version\n")),Object(r.b)("p",null,"Once you have added the pod you will then need to augment the descriptor with Componentkit-specific settings as shown below."),Object(r.b)(a.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},Object(r.b)(p.a,{value:"ios",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-objective-c"},"#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n\nSKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n[FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n[client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                           withDescriptorMapper: layoutDescriptorMapper]];\n"))),Object(r.b)(p.a,{value:"swift",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"import FlipperKit\n\nlet layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\nFlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n\nclient?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n")))))}d.isMDXComponent=!0},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=i,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||r;return n?o.a.createElement(m,p(p({ref:t},c),{},{components:n})):o.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<r;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},160:function(e,t,n){"use strict";function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}},162:function(e,t,n){"use strict";var i=n(0),o=n(163);t.a=function(){var e=Object(i.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},163:function(e,t,n){"use strict";var i=n(0),o=Object(i.createContext)(void 0);t.a=o},165:function(e,t,n){"use strict";var i=n(0),o=n.n(i),r=n(162),a=n(160),p=n(66),l=n.n(p);var c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,s=e.values,d=e.groupId,b=e.className,m=Object(r.a)(),h=m.tabGroupChoices,g=m.setTabGroupChoices,f=Object(i.useState)(p),y=f[0],v=f[1],w=i.Children.toArray(e.children),O=[];if(null!=d){var j=h[d];null!=j&&j!==y&&s.some((function(e){return e.value===j}))&&v(j)}var k=function(e){var t=e.target,n=O.indexOf(t),i=w[n].props.value;v(i),null!=d&&(g(d,i),setTimeout((function(){var e,n,i,o,r,a,p,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,o=e.bottom,r=e.right,a=window,p=a.innerHeight,c=a.innerWidth,n>=0&&r<=c&&o<=p&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case u:var i=O.indexOf(e.target)+1;n=O[i]||O[0];break;case c:var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null===(t=n)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},b)},s.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(a.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:k,onClick:k},n)}))),t?Object(i.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},166:function(e,t,n){"use strict";var i=n(0),o=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}}}]);