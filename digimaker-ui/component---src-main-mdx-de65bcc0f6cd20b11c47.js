(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{jE5W:function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return u})),t.d(e,"default",(function(){return l}));var o=t("Fcif"),i=t("+I+c"),a=(t("jSf3"),t("/FXl")),r=t("TjRS"),c=t("ZFoC"),s=t("WOib"),p=(t("aD51"),["components"]),u={};void 0!==u&&u&&u===Object(u)&&Object.isExtensible(u)&&!Object.prototype.hasOwnProperty.call(u,"__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/Main.mdx"}});var m={_frontmatter:u},b=r.a;function l(n){var e,t=n.components,l=Object(i.a)(n,p);return Object(a.b)(b,Object(o.a)({},m,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"main"},"Main"),Object(a.b)("p",null,"Main provide the 'main' area of admin site."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"//main settings\nconst mainConfig = {\n    folder: {\n      actions: [\n        (actionProps:ActionProps)=><SetPriority {...actionProps} />\n      ]\n    },\n    frontpage: {\n      list: ['frontpage_block'],\n    },  \n    role: {\n      view: true,\n    },\n    article: {\n      view: true,\n      metainfo:true,\n      actions: [      \n        (actionProps:ActionProps)=><Move {...actionProps} />\n      ],\n    },\n    user: {\n      view: true,\n      viewComponent: UserRoles,    \n    },\n  };\n\nconst getMainConfig =(content:any)=>{\n    return mainConfig[content.content_type]\n}\n\n//list settings\nconst getListConfig = (_parent: any, contenttype: string)=>{\n  const commonSettings = {\n    show_header: true,\n    show_table_header: true,\n    pagination: 10,\n    sort:[],\n    row_actions: [\n      {\n        link: '/edit/{_contenttype_id}?from=/main/{_from_id}',\n        name: 'Edit',\n        icon: 'icon-edit',\n      },\n      (actionProps:ActionProps)=><Delete {...actionProps} />\n    ]\n   }\n   return commonSettings;\n}\n\n//main in route\n<Route\n    path='/main/:id'\n    exact={true}\n    render={(route) => (\n        <Main\n            onLoad={(content)=>{     \n                //set current content for left menu use.           \n                setCurrent(content);\n            }}                                          \n            id={parseInt(route.match.params.id)}\n            getMainConfig={getMainConfig}\n            getListConfig={getListConfig}\n            redirect={(url: string) =>\n                commonAfterAction(route.history, 0, [url])}\n        />\n    )}\n/>\n\n")),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)(c.d,{table:!0,isToggle:!0,of:s.a,mdxType:"Props"}),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)(c.c,{__position:1,__code:"<Main />",__scope:(e={props:l,DefaultLayout:r.a,Playground:c.c,Props:c.d,Main:s.a},e.DefaultLayout=r.a,e._frontmatter=u,e),mdxType:"Playground"},Object(a.b)(s.a,{mdxType:"Main"})))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!Object.prototype.hasOwnProperty.call(l,"__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/Main.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-main-mdx-de65bcc0f6cd20b11c47.js.map