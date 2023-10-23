"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[9864],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8407:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var n=r(7462),a=r(7294),i=r(3905),o=r(6385);function s(e){let{data:t}=e;return a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},t.map((e=>a.createElement(o.Z,{key:e.id,project:e})))))}var c=r(866);const l={title:"Projects",hide_table_of_contents:!0},d="Projects",p={type:"mdx",permalink:"/research/projects/",source:"@site/src/pages/research/projects/index.mdx",title:"Projects",frontMatter:{title:"Projects",hide_table_of_contents:!0}},u=[],m={toc:u},g="wrapper";function f(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"projects"},"Projects"),(0,i.kt)(s,{data:c.Z,mdxType:"ProjectList"}))}f.isMDXComponent=!0},3161:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(866);function i(e){let{projectId:t}=e;const{isCollaborative:r=!1,isFeatured:i=!1,isFunded:o=!1,isOpenSource:s=!1,isOurs:c=!1}=(0,a.R)(t);return r||i||o||s||c?n.createElement("div",{className:"project-badges"},c&&n.createElement("span",{className:"badge badge--primary margin-horiz--xs"},"GRC-LED"),o&&n.createElement("span",{className:"badge badge--warning margin-horiz--xs"},"FUNDED"),s&&n.createElement("span",{className:"badge badge--secondary margin-horiz--xs"},"OPEN SOURCE")):null}},6385:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(9960),a=r(7294),i=r(3161);function o(e){let{project:t}=e;const{id:r,title:o,shortDescription:s,link:c}=t;return a.createElement("div",{className:"col col--4 margin-bottom--lg"},a.createElement("div",{className:"card text--center"},a.createElement("div",{className:"card__header"},a.createElement("h3",null,o),a.createElement(i.Z,{projectId:r})),a.createElement("div",{className:"card__body"},a.createElement("p",null,s)),a.createElement("div",{className:"card__footer"},a.createElement(n.Z,{className:"button button--primary button--block",href:c},"Learn more"))))}},866:(e,t,r)=>{r.d(t,{R:()=>i,Z:()=>a});const n=[{id:"chronolog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isFunded:!0,isOurs:!0},{id:"coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0},{id:"hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isFunded:!0,isOpenSource:!0,isOurs:!0},{id:"iris",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1}],a=n;function i(e){return n.find((t=>t.id===e))}}}]);