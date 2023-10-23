"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[5498],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),k=p(t),u=l,h=k["".concat(o,".").concat(u)]||k[u]||d[u]||i;return t?n.createElement(h,s(s({ref:a},c),{},{components:t})):n.createElement(h,s({ref:a},c))}));function h(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=t.length,s=new Array(i);s[0]=u;var r={};for(var o in a)hasOwnProperty.call(a,o)&&(r[o]=a[o]);r.originalType=e,r[k]="string"==typeof e?e:l,s[1]=r;for(var p=2;p<i;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8354:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=t(7462),l=(t(7294),t(3905));const i={},s="Building With Spack",r={unversionedId:"installing-hpc-software/building-with-spack",id:"installing-hpc-software/building-with-spack",title:"Building With Spack",description:"Spack is a system for installing packages for HPC centers. Spack",source:"@site/docs/02-installing-hpc-software/01-building-with-spack.md",sourceDirName:"02-installing-hpc-software",slug:"/installing-hpc-software/building-with-spack",permalink:"/website/docs/installing-hpc-software/building-with-spack",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing HPC Software",permalink:"/website/docs/category/installing-hpc-software"},next:{title:"Building From Scratch",permalink:"/website/docs/installing-hpc-software/building-from-scratch"}},o={},p=[{value:"Installing <code>spack</code>",id:"installing-spack",level:2},{value:"Uninstalling <code>spack</code>",id:"uninstalling-spack",level:2},{value:"List packages provided by <code>spack</code>",id:"list-packages-provided-by-spack",level:2},{value:"Install packages",id:"install-packages",level:2},{value:"List installed packages",id:"list-installed-packages",level:2},{value:"All installed packages",id:"all-installed-packages",level:3},{value:"Particular package",id:"particular-package",level:3},{value:"Particular package with verbosity",id:"particular-package-with-verbosity",level:3},{value:"Load packages",id:"load-packages",level:2},{value:"Unload packages",id:"unload-packages",level:2},{value:"Uninstall packages",id:"uninstall-packages",level:2},{value:"What happens if <code>spack</code> fails?",id:"what-happens-if-spack-fails",level:2}],c={toc:p},k="wrapper";function d(e){let{components:a,...t}=e;return(0,l.kt)(k,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"building-with-spack"},"Building With Spack"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/spack/spack.git"},"Spack")," is a system for installing packages for HPC centers. Spack\ncan be easily installed on supercomputers since it does not require root privileges. Spack works by\nbuilding code from source."),(0,l.kt)("p",null,"This section provides an overview of installing software with spack and some of the complexities of spack.\nThis is not a full documentation of spack, it just contains the things we see come up often. Read through\ntheir ",(0,l.kt)("a",{parentName:"p",href:"https://spack.readthedocs.io/en/latest/"},"documentation")," to understand better how to use spack."),(0,l.kt)("p",null,"Spack is by no means perfect. It has plenty of bugs and nuances."),(0,l.kt)("h2",{id:"installing-spack"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h2"},"spack")),(0,l.kt)("p",null,"The official install guide for ",(0,l.kt)("inlineCode",{parentName:"p"},"spack")," is ",(0,l.kt)("a",{parentName:"p",href:"https://spack-tutorial.readthedocs.io/en/latest/tutorial_basics.html"},"here"),".\nSince the install is fairly simple, we'll just repeat here:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Clone spack into your current directory\n# This will clone spack v0.20\ngit clone --depth=100 --branch=releases/v0.20 https://github.com/spack/spack.git\n# Setup the spack environment for this shell\n# This will modify environment variables\ncd spack\n. share/spack/setup-env.sh\n# Ensure that spack is loaded every time you reboot or start a new shell\n# ~/.bashrc is called every time you login\necho ". ${PWD}/share/spack/setup-env.sh" >> ~/.bashrc\n')),(0,l.kt)("p",null,"NOTE: ",(0,l.kt)("inlineCode",{parentName:"p"},"spack")," creates a folder in your ",(0,l.kt)("inlineCode",{parentName:"p"},"HOME")," directory for storing caches. The folder is located at ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.spack"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls ~/.spack\n")),(0,l.kt)("h2",{id:"uninstalling-spack"},"Uninstalling ",(0,l.kt)("inlineCode",{parentName:"h2"},"spack")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# All packages will be installed under your cloned spack directory\nrm -rf /path/to/spack\n# Spack automatically creates ~/.spack for holding caches\nrm -rf ~/.spack\n# Remove ". ${PWD}/share/spack/setup-env.sh" from ~/.bashrc\n')),(0,l.kt)("h2",{id:"list-packages-provided-by-spack"},"List packages provided by ",(0,l.kt)("inlineCode",{parentName:"h2"},"spack")),(0,l.kt)("p",null,"To identify the set of packages that spack can install, use ",(0,l.kt)("inlineCode",{parentName:"p"},"spack list"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# List every package spack has\nspack list\n# Will list all packages which have the word zlib\nspack list zlib\n")),(0,l.kt)("p",null,"Spack packages also have various properties:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Version: the available versions of a package"),(0,l.kt)("li",{parentName:"ol"},"Variants: add, remove, or modify features of the package. For example, zlib provides a variants for enabling/disabling compiler optimization."),(0,l.kt)("li",{parentName:"ol"},"Dependencies: the software this package depends on.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Will list the details of a package (versions, description, etc.)\nspack info zlib\n")),(0,l.kt)("p",null,"In our case, the output is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"Package:   zlib\n\nDescription:\n    A free, general-purpose, legally unencumbered lossless data-compression\n    library.\n\nHomepage: https://zlib.net\n\nPreferred version:\n    1.2.12    https://zlib.net/fossils/zlib-1.2.12.tar.gz\n\nSafe versions:\n    1.2.12    https://zlib.net/fossils/zlib-1.2.12.tar.gz\n\nDeprecated versions:\n    1.2.11    https://zlib.net/fossils/zlib-1.2.11.tar.gz\n    1.2.8     https://zlib.net/fossils/zlib-1.2.8.tar.gz\n    1.2.3     https://zlib.net/fossils/zlib-1.2.3.tar.gz\n\nVariants:\n    Name [Default]    When    Allowed values    Description\n    ==============    ====    ==============    ===================================================\n\n    optimize [on]     --      on, off           Enable -O2 for a more optimized lib\n    pic [on]          --      on, off           Produce position-independent code (for shared libs)\n    shared [on]       --      on, off           Enables the build of shared libraries.\n\nBuild Dependencies:\n    None\n\nLink Dependencies:\n    None\n\nRun Dependencies:\n    None\n")),(0,l.kt)("p",null,"This output may change with different versions of ",(0,l.kt)("inlineCode",{parentName:"p"},"spack"),"."),(0,l.kt)("h2",{id:"install-packages"},"Install packages"),(0,l.kt)("p",null,"There are many parameters that can be set when installing a package. However, the installation methods that come up most often are below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# This will install the default tar package\nspack install zlib\n# This will install zlib version 1.2.12\n# This should say zlib 1.2.12 is already installed\nspack install zlib@1.2.12\n# This will install zlib 1.2.11 without optimization\n# The "-" in -optimize means subtract\nspack install zlib@1.2.12 -optimize\n# This will install zlib 1.2.11 with optimization\n# The "+" in +optimize means add\n# This will say that zlib is already installed,\n# since +optimize is enabled by default\nspack install zlib@1.2.12 +optimize\n')),(0,l.kt)("h2",{id:"list-installed-packages"},"List installed packages"),(0,l.kt)("h3",{id:"all-installed-packages"},"All installed packages"),(0,l.kt)("p",null,"To find all installed packages, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"spack find\n")),(0,l.kt)("h3",{id:"particular-package"},"Particular package"),(0,l.kt)("p",null,"To find a particluar package, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"spack find zlib\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"==> 2 installed packages\n-- linux-linuxmint20-zen2 / gcc@9.3.0 ---------------------------\nzlib@1.2.12  zlib@1.2.12\n")),(0,l.kt)("p",null,"This output is unhelpful since there are two different versions of ",(0,l.kt)("inlineCode",{parentName:"p"},"zlib")," installed."),(0,l.kt)("h3",{id:"particular-package-with-verbosity"},"Particular package with verbosity"),(0,l.kt)("p",null,"To get a more verbose output to identify differences between packages, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"spack find -f -v zlib\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"==> 2 installed packages\n-- linux-linuxmint20-zen2 / gcc@9.3.0 ---------------------------\nzlib@1.2.12%gcc ~optimize+pic+shared patches=0d38234  zlib@1.2.12%gcc +optimize+pic+shared patches=0d38234\n")),(0,l.kt)("h2",{id:"load-packages"},"Load packages"),(0,l.kt)("p",null,"In order to make use of a spack package, the package must be loaded. Spack primarily works by setting environment\nvariables, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"PATH")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH"),"."),(0,l.kt)("p",null,"To load the environment variables, do:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Load the version of zlib with optimization\nspack load zlib +optimize\n")),(0,l.kt)("p",null,"Spack load must be executed every time you open a new shell or reboot your computer. You can add the spack load to your\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," to avoid having to do this."),(0,l.kt)("p",null,"There are various caveats to know about spack load:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Spack packages for C++ libraries may use the ",(0,l.kt)("inlineCode",{parentName:"li"},"CMAKE_PREFIX_PATH")," variable and not set any other environment variable.\nThis means you really do need to use CMake when building C++ projects and using spack for installing things. CMake is\ndiscussed later, just be warned that some spack packages do this and building using methods alternative to CMake\n(e.g., building manually) will likely fail."),(0,l.kt)("li",{parentName:"ol"},"Sometimes calling spack load can cause conflict with system packages. Unless otherwise specified, spack will install\neverything -- even things which your system already has installed. This can cause programs to break. I notice that ",(0,l.kt)("inlineCode",{parentName:"li"},"vim"),"\nand ",(0,l.kt)("inlineCode",{parentName:"li"},"nano")," sometimes segfault after spack load because it installs custom versions of software that vim and nano were not\ncompiled with."),(0,l.kt)("li",{parentName:"ol"},"You should not run spack load for two different versions of the same package. This will almost definitely lead to correctness\nproblems.")),(0,l.kt)("h2",{id:"unload-packages"},"Unload packages"),(0,l.kt)("p",null,"To unload a package's changes to the current environment, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Unloads every spack package\nspack unload\n# Unload the zlib package specifically\nspack unload zlib\n")),(0,l.kt)("h2",{id:"uninstall-packages"},"Uninstall packages"),(0,l.kt)("p",null,"To uninstall packages, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Uninstall a specific package\n# Will fail if more than one package matches query\nspack uninstall zlib +optimize\n# Uninstall all packages matching query\nspack uninstall --all zlib\n")),(0,l.kt)("h2",{id:"what-happens-if-spack-fails"},"What happens if ",(0,l.kt)("inlineCode",{parentName:"h2"},"spack")," fails?"),(0,l.kt)("p",null,"Sometimes, you may find that a package fails to compile for some reason. These are the general steps to take when something goes wrong:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Check if the software version you're installing is compatible with your machine. If it's not easy to discover with Google or\nAI, then move on to step 2. It's likely a bug in the spack package"),(0,l.kt)("li",{parentName:"ol"},"Try checking if there is a new stable release of spack. If so, try upgrading by switching to that version. You should be able to do\nthis without destroying all of your packages by using ",(0,l.kt)("inlineCode",{parentName:"li"},"git checkout")),(0,l.kt)("li",{parentName:"ol"},"Try deleting your spack cache directory. ",(0,l.kt)("inlineCode",{parentName:"li"},"rm -rf ~/.spack")," And then try reinstalling the package."),(0,l.kt)("li",{parentName:"ol"},"Try reinstalling spack by following 2.1.2 and 2.1.1 instructions"),(0,l.kt)("li",{parentName:"ol"},"Submit an issue to the spack team. They aren't a very large team, so it may take time to address. You'll have to either find another\npackage or install from scratch")),(0,l.kt)("p",null,"Sometimes, spack may successfully install the package, but you may still find that your program doesn't compile or execute. If this is\nthe case, you'll have to do some research (Google, ChatGPT, etc.) to identify why this is happening. You may also find it helpful\nto check exactly what spack installed. You can find where spack installed your package as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# Find where the "zlib" package is installed\nspack find --paths zlib\n')))}d.isMDXComponent=!0}}]);