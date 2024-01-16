"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4407],{3271:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var a=s(5893),r=s(1151);const i={},t="Argument Parsing",l={id:"jarvis/jarvis-util/argument-parsing",title:"Argument Parsing",description:"We provide a custom argument parsing implementation. The main difference between",source:"@site/docs/05-jarvis/01-jarvis-util/04-argument-parsing.md",sourceDirName:"05-jarvis/01-jarvis-util",slug:"/jarvis/jarvis-util/argument-parsing",permalink:"/docs/jarvis/jarvis-util/argument-parsing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Built-in Wrappers",permalink:"/docs/jarvis/jarvis-util/builtin-wrappers"},next:{title:"Hostfile",permalink:"/docs/jarvis/jarvis-util/hostfile"}},o={},h=[{value:"Defining Arguments",id:"defining-arguments",level:2},{value:"Required Positional Arguments",id:"required-positional-arguments",level:3},{value:"Optional Positional Arguments",id:"optional-positional-arguments",level:3},{value:"<code>keyword</code> Arguments",id:"keyword-arguments",level:3},{value:"Detecting Explicitly Set Parameters",id:"detecting-explicitly-set-parameters",level:3},{value:"Help",id:"help",level:3},{value:"Menus",id:"menus",level:2},{value:"VPIC Menu",id:"vpic-menu",level:3},{value:"BD-CATS Run Menu",id:"bd-cats-run-menu",level:3},{value:"BD-CATS Draw Menu",id:"bd-cats-draw-menu",level:3},{value:"Argument Types",id:"argument-types",level:2},{value:"Boolean Arguments",id:"boolean-arguments",level:3},{value:"<code>True</code>",id:"true",level:4},{value:"<code>False</code>",id:"false",level:4},{value:"List Arguments",id:"list-arguments",level:3},{value:"Nested List Arguments",id:"nested-list-arguments",level:3},{value:"Tracking Remaining Arguments",id:"tracking-remaining-arguments",level:2},{value:"List Remainder",id:"list-remainder",level:3},{value:"Key-Value Remainder",id:"key-value-remainder",level:3},{value:"Choice Arguments",id:"choice-arguments",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"argument-parsing",children:"Argument Parsing"}),"\n",(0,a.jsx)(n.p,{children:'We provide a custom argument parsing implementation. The main difference between\nthis argparser and others is that we support the concept of "menus".\nJarvis calls sub-modules, which each have their own specific interfaces.\nThere are sub-modules for modifying the resource graph, initializing jarvis,\ncreating pipelines, etc. These modules each have different parameter spaces.'}),"\n",(0,a.jsx)(n.h2,{id:"defining-arguments",children:"Defining Arguments"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"ArgParse"})," class has an abstract method called define_options. Create\na class inheriting from that method and use define_options to make the menu."]}),"\n",(0,a.jsxs)(n.p,{children:["We have the example ",(0,a.jsx)(n.a,{href:"https://github.com/grc-iit/jarvis-util/blob/master/example/basic_argparse.py",children:"basic_argparse.py"})," below:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu()\n        self.add_args([\n            {\n                'name': 'hello',\n                'msg': 'A message to print',\n                'type': str,  # The type of this variable\n                'required': True,  # This argument is required\n                'pos': True,  # This is a positional argument\n            },\n            {\n                'name': 'hello_optional',\n                'msg': 'An optional message to print',\n                'type': str,  # The type of the variable to produce\n                'default': 'no optional message given',\n                'required': False,  # This argument is not required\n                'pos': True,  # This is a positional argument\n            },\n            {\n                'name': 'hello_kwarg',\n                'msg': 'An integer keyword argument to print',\n                'type': int,  # The type of the variable\n                'default': 0,\n            },\n        ])\n\n    # When add_menu has no parameters, process_args will call this function\n    def main_menu(self):\n        # Parsed parameters are placed in self.kwargs\n        print(self.kwargs['hello'])\n        print(self.kwargs['hello_optional'])\n        print(self.kwargs['hello_kwarg'])\n        print(self.real_kwargs)\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.h3,{id:"required-positional-arguments",children:"Required Positional Arguments"}),"\n",(0,a.jsx)(n.p,{children:'The first argument we defined was "hello", which is a required parameter.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"{\n    'name': 'hello',\n    'msg': 'A message to print',\n    'type': str,  # The type of this variable\n    'required': True,  # This argument is required\n    'pos': True,  # This is a positional argument\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is the only required parameter in this case. We can run the program\nabove with only this one parameter."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/basic_argparse.py 'my required msg'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"my required msg\nno optional message given\n0\n{'hello_kwarg': 0, 'hello': 'my required msg', 'hello_optional': 'no optional message given'}\n{'hello': 'my required msg'}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"optional-positional-arguments",children:"Optional Positional Arguments"}),"\n",(0,a.jsx)(n.p,{children:'The second argument we defined was "hello_optional", which is optional.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"{\n    'name': 'hello_optional',\n    'msg': 'An optional message to print',\n    'type': str,  # The type of the variable to produce\n    'default': 'no optional message given',\n    'required': False,  # This argument is not required\n    'pos': True,  # This is a positional argument\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"To input the optional positional parameter, run the command below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/basic_argparse.py 'my required msg' 'my optional message'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"my required msg\nmy optional message\n0\n{'hello_kwarg': 0, 'hello': 'my required msg', 'hello_optional': 'my optional message'}\n{'hello': 'my required msg', 'hello_optional': 'my optional message'}\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"keyword-arguments",children:[(0,a.jsx)(n.code,{children:"keyword"})," Arguments"]}),"\n",(0,a.jsx)(n.p,{children:'The third argument we defined was "hello_kwarg". keyword arguments are\nalways optional. The default value, if not specified, will be None.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"{\n    'name': 'hello_kwarg',\n    'msg': 'An integer keyword argument to print',\n    'type': int,  # The type of the variable\n    'default': 0,\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following commands are all correct and mean the same thing. You can\nuse -- and - in front of keyword arguments. They mean the same thing.\nWe support this for more legacy reasons."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/basic_argparse.py 'my required msg' hello_kwarg=124\npython3 example/basic_argparse.py 'my required msg' --hello_kwarg=124\npython3 example/basic_argparse.py 'my required msg' -hello_kwarg=124\n"})}),"\n",(0,a.jsx)(n.p,{children:"In each case, the output is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"my required msg\nno optional message given\n124\n{'hello_kwarg': 124, 'hello': 'my required msg', 'hello_optional': 'no optional message given'}\n{'hello': 'my required msg', 'hello_kwarg': 124}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"detecting-explicitly-set-parameters",children:"Detecting Explicitly Set Parameters"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes, it's good to know what parameters the user set explicitly, without filling in default values for everything. self.kwargs stores the entire parameter scope with default values filled in, whereas self.real_kwargs stores the values passed in specifically by the users."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"python3 example/basic_argparse.py 'my required msg' hello_kwarg=124\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"my required msg\nno optional message given\n124\n{'hello_kwarg': 124, 'hello': 'my required msg', 'hello_optional': 'no optional message given'}\n{'hello': 'my required msg', 'hello_kwarg': 124}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Notice that self.real_kwargs (last line) does not have 'hello_optional', since it was not passed explicitly by the user."}),"\n",(0,a.jsx)(n.h3,{id:"help",children:"Help"}),"\n",(0,a.jsx)(n.p,{children:'You can print the help message by using the "h" or "help" keyword arguments.\nThese are provided automatically and should not be manually defined.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/basic_argparse.py h\npython3 example/basic_argparse.py -h\npython3 example/basic_argparse.py --help\npython3 example/basic_argparse.py -help\npython3 example/basic_argparse.py help\n"})}),"\n",(0,a.jsx)(n.p,{children:"In each case, the output is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"USAGE: basic_argparse.py  [hello] [hello_optional (opt)] ...\n\nName            Default                    Type    Description\n--------------  -------------------------  ------  -------------------------------------\nhello                                      str     A message to print\nhello_optional  no optional message given  str     An optional message to print\nhello_kwarg     0                          int     An integer keyword argument to print\nhelp            False                      bool    Print help menu\nh               False                      bool    Print help menu\n"})}),"\n",(0,a.jsx)(n.h2,{id:"menus",children:"Menus"}),"\n",(0,a.jsx)(n.p,{children:"Let's say we're building an application launcher. Each application has it's\nown parameter space. We have two applications:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"VPIC: A particle simulator code"}),"\n",(0,a.jsx)(n.li,{children:"BD-CATS: A particle clustering code"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"VPIC only has one operation: to generate the particle data."}),"\n",(0,a.jsx)(n.p,{children:"BD-CATS has two operations: cluster the particle data and then visualize\nthe clustering by rendering an image at a certain resolution."}),"\n",(0,a.jsxs)(n.p,{children:["Below is the code from ",(0,a.jsx)(n.a,{href:"https://github.com/grc-iit/jarvis-util/blob/master/example/menu_argparse.py",children:"example/menu_argparse.py"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu('vpic')\n        self.add_args([\n            {\n                'name': 'steps',\n                'msg': 'Number of execution steps',\n                'type': int,  # The type of this variable\n                'required': True,  # This argument is required\n                'pos': True,  # This is a positional argument\n            }\n        ])\n\n        self.add_menu('bd-cats run')\n        self.add_args([\n            {\n                'name': 'path',\n                'msg': 'Path to particle data',\n                'type': str,  # The type of this variable\n                'required': True,  # This argument is required\n                'pos': True,  # This is a positional argument\n            }\n        ])\n\n        self.add_menu('bd-cats draw')\n        self.add_args([\n            {\n                'name': 'resolution',\n                'msg': 'Dimensions of the image to create',\n                'type': str,  # The type of this variable\n                'required': True,  # This argument is required\n                'pos': True,  # This is a positional argument\n            }\n        ])\n\n    def vpic(self):\n        print(f'Starting VPIC with {self.kwargs[\"steps\"]} steps')\n\n    def bd_cats_run(self):\n        print(f'Starting BD-CATS with {self.kwargs[\"path\"]}')\n\n    def bd_cats_draw(self):\n        print(f'Drawing BD-CATS output at {self.kwargs[\"resolution\"]}')\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:"process_args will execute the function corresponding to the menu name.\nIn this case, the menu names are:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"vpic"}),"\n",(0,a.jsx)(n.li,{children:"bdcats run"}),"\n",(0,a.jsx)(n.li,{children:"bdcats draw"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"vpic-menu",children:"VPIC Menu"}),"\n",(0,a.jsx)(n.p,{children:"The following code defines the VPIC menu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"self.add_menu('vpic')\nself.add_args([\n    {\n        'name': 'steps',\n        'msg': 'Number of execution steps',\n        'type': int,  # The type of this variable\n        'required': True,  # This argument is required\n        'pos': True,  # This is a positional argument\n    }\n])\n"})}),"\n",(0,a.jsx)(n.p,{children:"To execute the VPIC menu:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"python3 example/menu_argparse.py vpic 24\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Starting VPIC with 24 steps\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bd-cats-run-menu",children:"BD-CATS Run Menu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"self.add_menu('bd-cats draw')\nself.add_args([\n    {\n        'name': 'resolution',\n        'msg': 'Dimensions of the image to create',\n        'type': str,  # The type of this variable\n        'required': True,  # This argument is required\n        'pos': True,  # This is a positional argument\n    }\n])\n"})}),"\n",(0,a.jsx)(n.p,{children:"process_args will search for the method name corresponding to 'bd-cats draw'.\nThe corresponding method name replaces all spaces with '_' and all '-' with\n'_'. In this case, it will search for bd_cats_run."}),"\n",(0,a.jsx)(n.p,{children:"To execute the BD-CATS run menu:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"python3 example/menu_argparse.py bd-cats run /tmp/output.bin\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Starting BD-CATS with /tmp/output.bin\n"})}),"\n",(0,a.jsx)(n.h3,{id:"bd-cats-draw-menu",children:"BD-CATS Draw Menu"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"self.add_menu('bd-cats draw')\nself.add_args([\n    {\n        'name': 'resolution',\n        'msg': 'Dimensions of the image to create',\n        'type': str,  # The type of this variable\n        'required': True,  # This argument is required\n        'pos': True,  # This is a positional argument\n    }\n])\n"})}),"\n",(0,a.jsx)(n.p,{children:"process_args will search for the method name corresponding to 'bd-cats draw'.\nThe corresponding method name replaces all spaces with '_' and all '-' with\n'_'. In this case, it will search for bd_cats_draw."}),"\n",(0,a.jsx)(n.p,{children:"To execute the BD-CATS draw menu:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"python3 example/menu_argparse.py bd-cats run /tmp/output.bin\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Drawing BD-CATS output at 4096x4096\n"})}),"\n",(0,a.jsx)(n.h2,{id:"argument-types",children:"Argument Types"}),"\n",(0,a.jsx)(n.p,{children:"We currently support five main types of arguments:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Strings"}),"\n",(0,a.jsx)(n.li,{children:"Integers"}),"\n",(0,a.jsx)(n.li,{children:"Floats"}),"\n",(0,a.jsx)(n.li,{children:"Booleans"}),"\n",(0,a.jsx)(n.li,{children:"Lists of the above types"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Of these, booleans and lists are somewhat special."}),"\n",(0,a.jsx)(n.h3,{id:"boolean-arguments",children:"Boolean Arguments"}),"\n",(0,a.jsx)(n.p,{children:"Booleans are special in the sense that they have a special command line\nsyntax when used as keyword arguments (as opposed to positional)."}),"\n",(0,a.jsx)(n.p,{children:"Let's say we are at a restaurant and are ordering pasta. You have\ntwo options: with cheese and without cheese."}),"\n",(0,a.jsxs)(n.p,{children:["Below is the code from ",(0,a.jsx)(n.a,{href:"https://github.com/grc-iit/jarvis-util/blob/master/example/boolean_spaghetti.py",children:"example/boolean_spaghetti.py"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu('spaghetti')\n        self.add_args([\n            {\n                'name': 'cheese',\n                'msg': 'Whether to use cheese',\n                'type': bool,  # The type of this variable\n                'default': True\n            }\n        ])\n\n    def spaghetti(self):\n        if self.kwargs['cheese']:\n            print('I will take the spaghetti with cheese')\n        else:\n            print('I want actual Italian, and will not take your cheese')\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.h4,{id:"true",children:(0,a.jsx)(n.code,{children:"True"})}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to indicate truth"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/boolean_spaghetti.py spaghetti --cheese=true\npython3 example/boolean_spaghetti.py spaghetti +cheese\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"I will take the spaghetti with cheese\n"})}),"\n",(0,a.jsx)(n.h4,{id:"false",children:(0,a.jsx)(n.code,{children:"False"})}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to indicate false"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/boolean_spaghetti.py spaghetti --cheese=false\npython3 example/boolean_spaghetti.py spaghetti -cheese\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"I want actual Italian, and will not take your cheese\n"})}),"\n",(0,a.jsx)(n.h3,{id:"list-arguments",children:"List Arguments"}),"\n",(0,a.jsx)(n.p,{children:"There are many cases where having a list of information is needed.\nOne case that comes up is deciding which nodes in a distributed system\nto execute software. For this case, we use a list of strings."}),"\n",(0,a.jsx)(n.p,{children:"Below we have an example of running the VPIC application on a set\nof machines in parallel."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu('vpic run',\n                      keep_remainder=False)\n        self.add_args([\n            {\n                'name': 'hosts',\n                'msg': 'A list of hosts and threads pr',\n                'type': list,\n                'args': [\n                    {\n                        'name': 'host',\n                        'msg': 'A string representing a host',\n                        'type': str,\n                    }\n                ]\n            }\n        ])\n\n    def vpic_run(self):\n        print(self.kwargs['hosts'])\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:"To pass a list of strings, run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'python3 example/hostfile_test.py vpic run --hosts="[127.0.0.1, 10.0.0.1]"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"['127.0.0.1', '10.0.0.1']\n"})}),"\n",(0,a.jsx)(n.h3,{id:"nested-list-arguments",children:"Nested List Arguments"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes, you may want to have a list of lists. We use YAML format\nto parse such a thing."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu('vpic run',\n                      keep_remainder=False)\n        self.add_args([\n            {\n                'name': 'hosts',\n                'msg': 'A list of hosts and threads per-host',\n                'type': list,\n                'args': [\n                    {\n                        'name': 'host',\n                        'msg': 'Host name',\n                        'type': str,\n                    },\n                    {\n                        'name': 'count',\n                        'msg': 'The number of devices to search for',\n                        'type': int,\n                    }\n                ]\n            }\n        ])\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:"To pass a list of strings and ints, run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'python3 example/hostfile_threads_test.py vpic run --hosts="[[127.0.0.1, 4], [10.0.0.1, 4]]"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[['127.0.0.1', 4], ['10.0.0.1', 4]]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"tracking-remaining-arguments",children:"Tracking Remaining Arguments"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes, you don't want your argument parser to error if a parameter is\nunrecognized. You may want to implement a special syntax for parsing the\nremaining parameters."}),"\n",(0,a.jsx)(n.p,{children:'In this case, menus provide the "keep_remainder" option and "remainder_as_kv" options.'}),"\n",(0,a.jsx)(n.h3,{id:"list-remainder",children:"List Remainder"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu(keep_remainder=True)\n        self.add_args([\n            {\n                'name': 'hi',\n                'msg': 'hello',\n                'type': str,\n                'default': None\n            }\n        ])\n\n    def main_menu(self):\n        print(self.kwargs['hi'])\n        print(self.remainder)\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:'This will create a keyword argument name "hi", which takes as input a string,\nand keeps the remaining arguments in a list named "self.remainder".'}),"\n",(0,a.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/remainder.py --hi=hi 1 2 3 4 5\n"})}),"\n",(0,a.jsx)(n.p,{children:"Output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hi\n['1', '2', '3', '4', '5']\n"})}),"\n",(0,a.jsx)(n.h3,{id:"key-value-remainder",children:"Key-Value Remainder"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes the remainder should be stored as a dict instead of\na list."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu(keep_remainder=True,\n                      remainder_as_kv=True)\n        self.add_args([\n            {\n                'name': 'hi',\n                'msg': 'hello',\n                'type': str,\n                'default': None\n            }\n        ])\n\n    def main_menu(self):\n        print(self.kwargs['hi'])\n        print(self.remainder_kv)\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:'This will create a keyword argument name "hi", which takes as input a string, and keeps the remaining arguments in a dict named "self.remainder_kv".'}),"\n",(0,a.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/remainder_kv.py --hi=hi VAR1=25 VAR2=26\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"hi\n{'VAR1': '25', 'VAR2': '26'}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"choice-arguments",children:"Choice Arguments"}),"\n",(0,a.jsx)(n.p,{children:"Sometimes you have parameters which have a well-defined set of values.\nIn this case, you can define 'choices'."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"from jarvis_util.util.argparse import ArgParse\n\n\nclass MyArgParse(ArgParse):\n    def define_options(self):\n        self.add_menu()\n        self.add_args([\n            {\n                'name': 'hi',\n                'msg': 'hello',\n                'type': str,\n                'choices': ['a', 'b', 'c'],\n                'default': None\n            }\n        ])\n\n    def main_menu(self):\n        print(self.kwargs['hi'])\n\n\nargs = MyArgParse()\nargs.process_args()\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example of correct input:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/choices.py hi=a\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Example of incorrect input:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 example/choices.py hi=d\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"In the menu , hi=d is not a valid choice\nUSAGE: choices.py   ...\n\nName    Default    Type    Description\n------  ---------  ------  ---------------\nhi                 str     hello\nhelp    False      bool    Print help menu\nh       False      bool    Print help menu\nIn the menu , hi was not of type <class 'str'>\nUSAGE: choices.py   ...\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>t});var a=s(7294);const r={},i=a.createContext(r);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);