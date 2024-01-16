"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[5592],{9599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var n=r(5893),i=r(1151);const a={},o="Prefetcher",s={id:"hermes/components/prefetcher",title:"Prefetcher",description:"The objective of the Prefetcher is to promote and demote content which is",source:"@site/docs/03-hermes/06-components/09-prefetcher.md",sourceDirName:"03-hermes/06-components",slug:"/hermes/components/prefetcher",permalink:"/docs/hermes/components/prefetcher",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Distributed Metadata",permalink:"/docs/hermes/components/distributed-metadata"},next:{title:"Examples",permalink:"/docs/hermes/components/examples"}},c={},h=[{value:"Usage (Configuration)",id:"usage-configuration",level:2},{value:"Usage (C++)",id:"usage-c",level:2},{value:"Application Tracing",id:"application-tracing",level:2},{value:"Apriori Prefetcher",id:"apriori-prefetcher",level:2},{value:"Future Work",id:"future-work",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"prefetcher",children:"Prefetcher"}),"\n",(0,n.jsxs)(t.p,{children:["The objective of the ",(0,n.jsx)(t.strong,{children:"Prefetcher"})," is to promote and demote content which is\nexpected to be used in the near future or frequently. The prefetcher only\napplies to data which is already staged within Hermes. In order to activate\nprefetching, a Prefetcher Trait can be attached to a Tag (or Bucket)\nto indicate that prefetching should be enabled and which kind of prefetching\nshould be applied."]}),"\n",(0,n.jsx)(t.h2,{id:"usage-configuration",children:"Usage (Configuration)"}),"\n",(0,n.jsx)(t.p,{children:"To enable prefetching with configuration."}),"\n",(0,n.jsx)(t.h2,{id:"usage-c",children:"Usage (C++)"}),"\n",(0,n.jsx)(t.p,{children:"To enable prefetching, attach the Prefetcher trait to a tag (e.g., Bucket).\nIn this example, we attach the PrefetcherTrait with the kApriori prefetcher\nconstant to the SimulationBucket, which represents the data for\nthe simulation workload."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cpp",children:'auto bkt = HERMES->GetBucket("SimulationBucket");\nTagId bkt_id = bkt.GetId();\nhermes::TraitId apriori_trait =\n    HERMES->RegisterTrait<hermes::PrefetcherTrait>(\n      "apriori", hermes::PrefetcherType::kApriori);\nTraitId trait_id = HERMES->GetTraitId("apriori");\nbkt.AttachTrait(apriori_trait);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"application-tracing",children:"Application Tracing"}),"\n",(0,n.jsx)(t.p,{children:"In order to support prefetching, we implement a tracing system within Hermes.\nThe tracer is called for every Put and Get operation within Hermes. It stores\nthe information called for the Put or Get internally within a multiple-producer\nsingle-consumer (MPSC) shared-memory queue, which is asynchronously digested\nby the prefetcher."}),"\n",(0,n.jsx)(t.p,{children:"The tracer collects the following information:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Operation (Put or Get)"}),"\n",(0,n.jsx)(t.li,{children:"Blob Id"}),"\n",(0,n.jsx)(t.li,{children:"Bucket Id"}),"\n",(0,n.jsx)(t.li,{children:"Blob Size"}),"\n",(0,n.jsx)(t.li,{children:"Timestamp (from program start)"}),"\n",(0,n.jsx)(t.li,{children:"Rank (if MPI)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the binary file, we store the following information:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Operation (Put or Get)"}),"\n",(0,n.jsx)(t.li,{children:"Blob Name (64-bit Hash)"}),"\n",(0,n.jsx)(t.li,{children:"Bucket Name (64-bit Hash)"}),"\n",(0,n.jsx)(t.li,{children:"Blob Size (64-bit)"}),"\n",(0,n.jsx)(t.li,{children:"Timestamp (from program start)"}),"\n",(0,n.jsx)(t.li,{children:"Rank (if MPI)"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The trace can be analyzed live within the prefetcher or be stored in a\nbinary log (created using Cereal) and analyzed offline."}),"\n",(0,n.jsx)(t.h2,{id:"apriori-prefetcher",children:"Apriori Prefetcher"}),"\n",(0,n.jsx)(t.p,{children:"Currently, we implement the apriori prefetcher. Many applications exhibit\ncompletely deterministic I/O patterns. Deep Learning applications for example\nwill have the same I/O pattern when the randomness seed is fixed and all other\nparamters remain the same. Many HPC workloads are executed repeatedly with the\nsame parameters for reasons such as reproducability. This prefetcher assumes\nthat the user will supply a schema with the exact momements of when to\npromote and demote content."}),"\n",(0,n.jsx)(t.h2,{id:"future-work",children:"Future Work"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Live Prefetcher: Use some sort of short-term memory models to analyze I/O\nstatistics generated live."}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);