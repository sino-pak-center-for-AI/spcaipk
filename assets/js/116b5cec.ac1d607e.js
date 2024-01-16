"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[8221],{7143:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=n(5893),a=n(1151);const l={},t="Getting Standard",r={id:"jarvis/jarvis-cd/getting-started",title:"Getting Standard",description:"In this section, we will discuss the jarvis command line interface.",source:"@site/docs/05-jarvis/02-jarvis-cd/02-getting-started.md",sourceDirName:"05-jarvis/02-jarvis-cd",slug:"/jarvis/jarvis-cd/getting-started",permalink:"/docs/jarvis/jarvis-cd/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/jarvis/jarvis-cd/index"},next:{title:"Resource Graph",permalink:"/docs/jarvis/jarvis-cd/resource-graph"}},d={},o=[{value:"Setup",id:"setup",level:2},{value:"Define the Job Hostfile",id:"define-the-job-hostfile",level:2},{value:"Build Resource Graph",id:"build-resource-graph",level:2},{value:"Create an empty pipeline",id:"create-an-empty-pipeline",level:2},{value:"Build Environment",id:"build-environment",level:2},{value:"Add pkgs to the pipeline",id:"add-pkgs-to-the-pipeline",level:2},{value:"Start a pipeline",id:"start-a-pipeline",level:2},{value:"Get the status of the pipeline",id:"get-the-status-of-the-pipeline",level:2},{value:"Clean a pipeline",id:"clean-a-pipeline",level:2},{value:"Re-configuring a <code>pkg</code>",id:"re-configuring-a-pkg",level:2},{value:"Unlinking and removing <code>pkg</code>s",id:"unlinking-and-removing-pkgs",level:2},{value:"Changing to a different pipeline",id:"changing-to-a-different-pipeline",level:2},{value:"Destroying a pipeline",id:"destroying-a-pipeline",level:2},{value:"Listing Existing Pipelines",id:"listing-existing-pipelines",level:2},{value:"Viewing the pkgs in a Pipeline",id:"viewing-the-pkgs-in-a-pipeline",level:2},{value:"Viewing the contents of a Pipeline",id:"viewing-the-contents-of-a-pipeline",level:2},{value:"Viewing the contents of a Package",id:"viewing-the-contents-of-a-package",level:2},{value:"Resetting Jarvis",id:"resetting-jarvis",level:2},{value:"Other Examples",id:"other-examples",level:2}];function p(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"getting-standard",children:"Getting Standard"}),"\n",(0,s.jsx)(i.p,{children:"In this section, we will discuss the jarvis command line interface.\nWe will discuss the basic steps of how to create a deployment\npipeline. In this example, we will deploy only IOR, but more complex\npipelines with more applications deployed at once can be made."}),"\n",(0,s.jsx)(i.h2,{id:"setup",children:"Setup"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"spack install ior\n"})}),"\n",(0,s.jsx)(i.h2,{id:"define-the-job-hostfile",children:"Define the Job Hostfile"}),"\n",(0,s.jsx)(i.p,{children:"Before jarvis can be used to deploy, the hostfile must be provided."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis hostfile set [path-to-hostfile.txt]\n"})}),"\n",(0,s.jsx)(i.p,{children:"This hostfile is used by all jarvis deployments."}),"\n",(0,s.jsx)(i.p,{children:"NOTE: If changes to the hostfile are made, re-run the above command.\nThis is because jarvis needs to reconfigure all pipelines to adjust\nto the changes in the hostfile. Systems, such as OrangeFS, require\nthe exact set of hosts in order to be deployed properly."}),"\n",(0,s.jsx)(i.h2,{id:"build-resource-graph",children:"Build Resource Graph"}),"\n",(0,s.jsx)(i.p,{children:"NOTE: This step is not needed for machines which have pre-configured\nresource graphs. Skip this step when deploying in Ares. Do this step\nwhen deploying on your personal machine."}),"\n",(0,s.jsx)(i.p,{children:"First we have to collect information about the system. The resource-graph\nutility command depends on fi_info and lsblk. Make sure if these are not\nprovided by your machine, they are loaded."}),"\n",(0,s.jsx)(i.p,{children:"To begin polling the system, run:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis resource-graph build +walkthrough\n"})}),"\n",(0,s.jsxs)(i.p,{children:["This information will be stored under ",(0,s.jsx)(i.code,{children:"${JARVIS_ROOT}/config/resource_graph.yaml"}),". The command uses SSH to connect to all pkgs. It will use the hostfile from the previous command and scan those pkgs."]}),"\n",(0,s.jsx)(i.h2,{id:"create-an-empty-pipeline",children:"Create an empty pipeline"}),"\n",(0,s.jsx)(i.p,{children:'The following command will create an empty pipeline "my_pipeline":'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline create ior_test\n"})}),"\n",(0,s.jsx)(i.p,{children:"After creating a pipeline, jarvis will focus on that pipeline."}),"\n",(0,s.jsx)(i.h2,{id:"build-environment",children:"Build Environment"}),"\n",(0,s.jsx)(i.p,{children:"Next, we must make jarvis aware of all environment variables needed\nto execute applications in the pipeline."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline env build\n"})}),"\n",(0,s.jsx)(i.p,{children:"NOTE: this is machine-dependent. You would have to have these modules\ninstalled on your machine before-hand."}),"\n",(0,s.jsx)(i.p,{children:'NOTE: LD_PRELOAD should NOT be one of the environment variables set here.\nJarvis has specific "Interceptor" pkgs for handling LD_PRELOAD.'}),"\n",(0,s.jsx)(i.h2,{id:"add-pkgs-to-the-pipeline",children:"Add pkgs to the pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To add pkgs to the pipeline:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline append ior api=posix xfer=4k block=1m out=/tmp/ior.bin\n"})}),"\n",(0,s.jsx)(i.h2,{id:"start-a-pipeline",children:"Start a pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To start the service for the configured pipeline, do:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline run\n"})}),"\n",(0,s.jsx)(i.h2,{id:"get-the-status-of-the-pipeline",children:"Get the status of the pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To check whether the pipeline is functioning, do:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline status\n"})}),"\n",(0,s.jsx)(i.p,{children:"NOTE: This command is not always implemented"}),"\n",(0,s.jsx)(i.h2,{id:"clean-a-pipeline",children:"Clean a pipeline"}),"\n",(0,s.jsx)(i.p,{children:"Pipelines can create a bunch of data. For example, OrangeFS may contain\ndata leftover from a benchmark. To destroy this data, run:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline clean\n"})}),"\n",(0,s.jsxs)(i.h2,{id:"re-configuring-a-pkg",children:["Re-configuring a ",(0,s.jsx)(i.code,{children:"pkg"})]}),"\n",(0,s.jsx)(i.p,{children:"There may be cases where you need to reconfigure a pkg in the pipeline.\nTo do this, run configure:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pkg configure ior api=mpiio\n"})}),"\n",(0,s.jsxs)(i.h2,{id:"unlinking-and-removing-pkgs",children:["Unlinking and removing ",(0,s.jsx)(i.code,{children:"pkg"}),"s"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Unlinking a ",(0,s.jsx)(i.code,{children:"pkg"})," means Jarvis will remove the ",(0,s.jsx)(i.code,{children:"pkg"})," from the pipeline,\nwithout destroying the ",(0,s.jsx)(i.code,{children:"pkg"}),"'s metadata. This will allow it to be\nre-appended in the future."]}),"\n",(0,s.jsxs)(i.li,{children:["Removing a ",(0,s.jsx)(i.code,{children:"pkg"})," means Jarvis will remove the ",(0,s.jsx)(i.code,{children:"pkg"})," from the pipeline\nAND destroy its metadata."]}),"\n"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pkg unlink [pkg_id]\njarvis pkg remove [pkg_id]\n"})}),"\n",(0,s.jsx)(i.h2,{id:"changing-to-a-different-pipeline",children:"Changing to a different pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To make jarvis start, end, etc. apply to a different pipeline,\nuse jarvis cd"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis cd [pipeline_name]\n"})}),"\n",(0,s.jsx)(i.h2,{id:"destroying-a-pipeline",children:"Destroying a pipeline"}),"\n",(0,s.jsx)(i.p,{children:"To destroy a pipeline, its pkgs, and all metadata associated with it:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline destroy [pipeline_name (opt)]\n"})}),"\n",(0,s.jsx)(i.p,{children:"If no pipeline_name is provided, the current pipeline will be destroyed."}),"\n",(0,s.jsx)(i.h2,{id:"listing-existing-pipelines",children:"Listing Existing Pipelines"}),"\n",(0,s.jsx)(i.p,{children:"To list all existing pipelines, run:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline list\n"})}),"\n",(0,s.jsx)(i.h2,{id:"viewing-the-pkgs-in-a-pipeline",children:"Viewing the pkgs in a Pipeline"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis pipeline print\n"})}),"\n",(0,s.jsx)(i.h2,{id:"viewing-the-contents-of-a-pipeline",children:"Viewing the contents of a Pipeline"}),"\n",(0,s.jsx)(i.p,{children:"This will print the contents of the pipeline's root directory."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"ls `jarvis path`\n"})}),"\n",(0,s.jsx)(i.h2,{id:"viewing-the-contents-of-a-package",children:"Viewing the contents of a Package"}),"\n",(0,s.jsx)(i.p,{children:"This will view the contents of the hermes package in the current pipeline."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"ls `jarvis path`/hermes\n"})}),"\n",(0,s.jsx)(i.h2,{id:"resetting-jarvis",children:"Resetting Jarvis"}),"\n",(0,s.jsx)(i.p,{children:"The following command will destroy the metadata for all pipelines in Jarvis.\nIt will ask for confirmation to avoid accidents."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-bash",children:"jarvis reset\n"})}),"\n",(0,s.jsx)(i.h2,{id:"other-examples",children:"Other Examples"}),"\n",(0,s.jsxs)(i.p,{children:["Each Jarvis repo contains its own README, which goes every specific examples.\nFor example, ",(0,s.jsx)(i.a,{href:"https://github.com/scs-lab/jarvis-cd/blob/master/builtin/builtin/gray_scott/README.md",children:"gray_scott"}),"\nshows an example of deploying over Hermes."]})]})}function c(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>t});var s=n(7294);const a={},l=s.createContext(a);function t(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);