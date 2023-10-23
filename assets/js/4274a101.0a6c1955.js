"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[5299],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const s={},a="SSH",i={unversionedId:"linux-introduction/ssh",id:"linux-introduction/ssh",title:"SSH",description:"SSH is a secure way of connecting to a remote machine. SSH relies on public-private key cryptography to secure",source:"@site/docs/01-linux-introduction/03-ssh.md",sourceDirName:"01-linux-introduction",slug:"/linux-introduction/ssh",permalink:"/website/docs/linux-introduction/ssh",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics of using a Terminal",permalink:"/website/docs/linux-introduction/using-a-terminal"},next:{title:"Installing HPC Software",permalink:"/website/docs/category/installing-hpc-software"}},l={},c=[{value:"Creating the keys",id:"creating-the-keys",level:2},{value:"Ensuring permissions",id:"ensuring-permissions",level:2},{value:"How does <code>chmod</code> work?",id:"how-does-chmod-work",level:3},{value:"Key registration",id:"key-registration",level:2},{value:"Connecting to a machine",id:"connecting-to-a-machine",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh"},"SSH"),(0,o.kt)("p",null,"SSH is a secure way of connecting to a remote machine. SSH relies on public-private key cryptography to secure\nthe connection. The private key is a secret that only you should know. The public key should be given to other\npeople. Generally, RSA is used as the algorithm for generating keys. SSH is the backbone of most HPC machines.\nYou cannot access these machines without knowing how SSH works, so we introduce it here."),(0,o.kt)("p",null,"The following guide will demonstrate how to setup SSH for connecting to an SSH server. This guide does NOT\ndiscuss how to spawn an SSH server."),(0,o.kt)("h2",{id:"creating-the-keys"},"Creating the keys"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSH keys can be given passwords, but we recommend against."),' We consider the SSH key itself to be secret enough\nthat a password is completely unnecessary. This is referred to as "passwordless-ssh". Passwordless-ssh is required\nfor many HPC programs.'),(0,o.kt)("p",null,"To create a public/private key pair, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),(0,o.kt)("p",null,"The default names for the keys are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'The private key is "',(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa"),'"'),(0,o.kt)("li",{parentName:"ol"},'The public key is "',(0,o.kt)("inlineCode",{parentName:"li"},"~/.ssh/id_rsa.pub"),'"')),(0,o.kt)("p",null,"You can use other names (it doesn't have to be id_rsa), but we recommend against this in general. Many SSH-based\ntools become cumbersome with keys which are non-default."),(0,o.kt)("h2",{id:"ensuring-permissions"},"Ensuring permissions"),(0,o.kt)("p",null,"SSH is very particular about the permissions of the ~/.ssh directory and the files in that directory. Below describes\nthe permissions that need to be set to make SSH behave."),(0,o.kt)("p",null,'For convenience, feel free to copy-paste this. A detailed description of what these do is under "How does chmod work?"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod 700 ${HOME}/.ssh\nsudo chmod 644 ${HOME}/.ssh/id_rsa.pub\nsudo chmod 600 ${HOME}/.ssh/id_rsa\nsudo chmod 600 ${HOME}/.ssh/authorized_keys\nsudo chmod 600 ${HOME}/.ssh/config\n")),(0,o.kt)("h3",{id:"how-does-chmod-work"},"How does ",(0,o.kt)("inlineCode",{parentName:"h3"},"chmod")," work?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"chmod"),' stands for "change mode". It has the following syntax:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod [mode] [path]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"mode" is a 3-digit code.'),(0,o.kt)("li",{parentName:"ul"},"Each digit is between 0 and 7"),(0,o.kt)("li",{parentName:"ul"},"The digits have the following meaning: ","[owner][group]"," ","[user]"),(0,o.kt)("li",{parentName:"ul"},"owner: typically you"),(0,o.kt)("li",{parentName:"ul"},"group: files can be apart of a group. Only one group per file or directory."),(0,o.kt)("li",{parentName:"ul"},"user: typically anyone other than you")),(0,o.kt)("p",null,"A single digit can have the following values:"),(0,o.kt)("ol",{start:0},(0,o.kt)("li",{parentName:"ol"},"No permissions"),(0,o.kt)("li",{parentName:"ol"},"Execute only"),(0,o.kt)("li",{parentName:"ol"},"Write only"),(0,o.kt)("li",{parentName:"ol"},"Write and execute (2 + 1 = 3)"),(0,o.kt)("li",{parentName:"ol"},"Read only"),(0,o.kt)("li",{parentName:"ol"},"Read and execute (4 + 1 = 5)"),(0,o.kt)("li",{parentName:"ol"},"Read and write (4 + 2 = 6)"),(0,o.kt)("li",{parentName:"ol"},"Read, write, and execute (4 + 2 + 1 = 7)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# The SSH directory\n# Owner has read, write, execute permissions.\n# No one else can touch this directory.\nsudo chmod 700 ${HOME}/.ssh\n\n# The public key\n# Owner has read + write permissions.\n# Other users can read this file\nsudo chmod 644 ${HOME}/.ssh/id_rsa.pub\n\n# The private key\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/id_rsa\n\n# Authorized keys\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/authorized_keys\n\n# User Config\n# Owner has read + write permissions\n# Nobody else has permissions\nsudo chmod 600 ${HOME}/.ssh/config\n")),(0,o.kt)("h2",{id:"key-registration"},"Key registration"),(0,o.kt)("p",null,"Your key will then have to be registered with the SSH server. This is typically done using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh-copy-id"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id -f -i ~/.ssh/id_rsa [USERNAME]@[IP]\n")),(0,o.kt)("p",null,"If the machine has a custom port number, the command's syntax is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id -f -i ~/.ssh/id_rsa -p [PORT] [USERNAME]@[IP]\n")),(0,o.kt)("h2",{id:"connecting-to-a-machine"},"Connecting to a machine"),(0,o.kt)("p",null,'To connect to a machine, use the "',(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),'" command. The command roughly has the following syntax:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -p [PORT] -i [PRIVATE_KEY] [USERNAME]@[IP]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[PORT]",": Default is 22."),(0,o.kt)("li",{parentName:"ul"},"[PRIVATE_KEY]",": Default is ~/id_rsa"),(0,o.kt)("li",{parentName:"ul"},"[USERNAME]",": Default is the current user"),(0,o.kt)("li",{parentName:"ul"},"[IP]",": The IP address or host name of the machine")),(0,o.kt)("p",null,"Generally, if everything is default (SSH key, port number), the command would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ssh [USERNAME]@[IP]\n")))}d.isMDXComponent=!0}}]);