"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[1282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="CMAKE_MODULE_PATH",p={unversionedId:"important-environment-variables/cmake-module-path",id:"important-environment-variables/cmake-module-path",title:"CMAKE_MODULE_PATH",description:"CMAKEMODULEPATH is used by CMake to identify the location of CMake modules.",source:"@site/docs/03-important-environment-variables/cmake-module-path.md",sourceDirName:"03-important-environment-variables",slug:"/important-environment-variables/cmake-module-path",permalink:"/docs/important-environment-variables/cmake-module-path",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Important Environment Variables",permalink:"/docs/category/important-environment-variables"},next:{title:"CMAKE_PREFIX_PATH",permalink:"/docs/important-environment-variables/cmake-prefix-path"}},l={},c=[],s={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cmake_module_path"},(0,a.kt)("inlineCode",{parentName:"h1"},"CMAKE_MODULE_PATH")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CMAKE_MODULE_PATH")," is used by CMake to identify the location of CMake modules.\nIt has a similar purpose to ",(0,a.kt)("inlineCode",{parentName:"p"},"LIBRARY_PATH")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"CPATH"),". It is used to locate packages\nand headers at compile time."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CMAKE_MODULE_PATH")," is organized as a colon-separated list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export CMAKE_MODULE_PATH="/path1:/path2:/path3"\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CMAKE_MODULE_PATH")," contains three paths in this example."))}u.isMDXComponent=!0}}]);