(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{MyE8:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return m}));var i=n("Fcif"),o=n("+I+c"),a=(n("mXGw"),n("/FXl")),c=n("TjRS"),r=n("ZFoC"),s=n("00p2"),l=(n("aD51"),["components"]),b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/DMInit.mdx"}});var d={_frontmatter:b},p=c.a;function m(e){var t,n=e.components,m=Object(o.a)(e,l);return Object(a.b)(p,Object(i.a)({},d,m,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"dminit"},"DMInit"),Object(a.b)("p",null,"DMInit is a component which initializes digimaker-ui. All the rendering is suggested to be inside this."),Object(a.b)("p",null,"DMInit can be put into App.tsx directly."),Object(a.b)(r.d,{table:!0,of:s.a,mdxType:"Props"}),Object(a.b)("h2",{id:"basic-usage"},"Basic usage"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'//set setting for inline/block mode\n<DMInit contenttypeSetting={(contenttype: string)=>{\n    if( contenttype == \'image\' ){\n        return {inline_fields:["image"], block_fields:["name","image"],browselist:{viewmode: \'block\', columns:["name"], sort_default:[["priority", "desc"]] }};\n    }else{\n        return {inline_fields:["name"],browselist:{viewmode: \'list\', columns:["name", "published"], sort_default:[["priority", "desc"]] }}};\n    }\n}}>\n\n<div class="left">\n    LEFT MENU\n</div>\n<div class="right">\n    <Main />\n</div>\n</DMInit>\n')),Object(a.b)(r.c,{__position:1,__code:"",__scope:(t={props:m,DefaultLayout:c.a,Playground:r.c,Props:r.d,DMInit:s.a},t.DefaultLayout=c.a,t._frontmatter=b,t),mdxType:"Playground"}))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!Object.prototype.hasOwnProperty.call(m,"__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/DMInit.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-dm-init-mdx-3bed5dfae9a17e33f279.js.map