(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{ab4X:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n("Fcif"),i=n("+I+c"),o=(n("jSf3"),n("/FXl")),r=n("TjRS"),c=n("5hvn"),s=(n("aD51"),["components"]),p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!Object.prototype.hasOwnProperty.call(p,"__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"UseDigimakerUI.mdx"}});var l={_frontmatter:p},d=r.a;function b(e){var t=e.components,n=Object(i.a)(e,s);return Object(o.b)(d,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"use-digimaker-ui"},"Use digimaker-ui"),Object(o.b)("h2",{id:"setting-up"},"Setting up"),Object(o.b)("h3",{id:"env"},".env"),Object(o.b)("p",null,"Before using, you need to set up env variables. Below is an example of .env file"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"REACT_APP_REMOTE_URL=/api\nREACT_APP_ASSET_URL=http://localhost:9200/var\n#imagepath will be replaced by the real image path\nREACT_APP_THUMB_PATH=images/thumbnail/{imagepath}\n")),Object(o.b)("h3",{id:"dminit"},"DMInit"),Object(o.b)("p",null,"All digimaker-ui's components should be inside DMInit(doesn't need to direct under). See properties of ",Object(o.b)("a",{parentName:"p",href:"../DMInit"},"DMInit")," for different uses."),Object(o.b)("h2",{id:"use-components"},"Use components"),Object(o.b)("p",null,"You can use digimaker-ui compoents separately(eg. list & actions, browse, etc) or build a whole admin from it."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'//List article under 3, with actions\n<List id={3} contenttype="article" columns={["name", "published"]} \n    row_actions={[{link:"/view/{id}", name:\'View\'}, (props)=><Add ..props />]} />\n\n//browse all images\n<Browse contenttype="image" onConfirm={(selected)=>{}} />\n\n//Show content tree\n<TreeNode root={3} contenttype={["folder", "usergroup"]} />\n')),Object(o.b)("h2",{id:"build-editorialadmin-ui"},"Build editorial/admin ui"),Object(o.b)("p",null,"Using routing is a good approach because url path gives great flexiablilty."),Object(o.b)("p",null,"It's a good idea to create a general component&route showing a content(call it ",Object(o.b)("inlineCode",{parentName:"p"},"Main"),", with path eg. /main/3)."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"./"},"dmdemo admin as example")),Object(o.b)("h3",{id:"route"},"Route"),Object(o.b)("p",null,"First we register all Main component like path /main/4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'//App.tsx\n<div>\n<div>{/*Left menu*/}</div>\n<Route path="/main/:id" component={Main} />\n</div>\n')),Object(o.b)("h3",{id:"main-component"},"Main component"),Object(o.b)("p",null,"In the Main component, it will fetch content based on id, and shows list of children based on configuration."),Object(o.b)(c.a,{type:"info",variant:"outer",mdxType:"Hint"},"You can add actions above lists(even if every list has its actions), show content, or add side action. Also you can show lists as tabs."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"//Main.tsx\nimport Config from './Config';\n\nconst Main = (props)=>{\n    const location = useLocation();\n    const [content, setContent] = '';\n\n    useEffect(() => {\n    util.FetchByID(props.match.params.id).then(data=>setContent(data));\n  }, [location]);\n\n\n    if(!content){\n        return <div>Loading</div>\n    }\n    return <div>\n        {Config.listTypes(content).map((contenttype)=>\n            <List id={content.id} contenttype={contenttype} {...Config.listConfig(content)} /> )}\n    </div>\n}\n")),Object(o.b)("h3",{id:"config-file"},"Config file"),Object(o.b)("p",null,"The config file will set rule of showing lists and each list's column, sorting, actions etc. "),Object(o.b)(c.a,{type:"info",variant:"outer",mdxType:"Hint"},"It's easy to show list based on parent's fields, eg. showing article if parent's `children_type` is article."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"//Config.ts\nconst Config = {\n    listTypes: (content)=>{\n        if( content.content_type == 'folder' ){\n            return [\"article\"];\n        }\n        return [\"folder\"];\n    },\n    listConfig: (content)=>{\n        return {           \n            actions:[], //action above list \n            columns: [ 'name', 'published' ],\n        }\n    }\n},\n\nexport default Config;\n")),Object(o.b)("h3",{id:"editcreate"},"Edit/Create"),Object(o.b)("p",null,"There are typically 2 ways to achieve edit/create, url or dialog. Below is an example of routing path ",Object(o.b)("inlineCode",{parentName:"p"},"/create/{parent}/{contenttype}")," to create."),Object(o.b)("p",null,"For dialog-like action, you can ",Object(o.b)("a",{parentName:"p",href:"./actions/Implement"},"implement your own action")," wraps of our ",Object(o.b)("inlineCode",{parentName:"p"},"Create"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Edit")," component in dialog, and then register the action in list row, or other places."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import Create from \'digimaker-ui/actions/Create\';\nimport Edit from \'digimaker-ui/actions/Edit\';\n\n//...\n<Route path="/create/:parent/:contenttype" render={route=>\n    <Create key={Date.now()} parent={parseInt(route.match.params.parent)} \n    contenttype={route.match.params.contenttype} \n     afterAction={(status, params)=>redirect(route.history, params)} />} />\n<Route path="/edit/:contenttype/:id" exact render={route=>\n    <Edit id={parseInt(route.match.params.id)} contenttype={route.match.params.contenttype}\n     afterAction={(status, params)=>redirect(route.history, params)} />} />\n<Route path="/edit/:id" exact render={route=><Edit id={parseInt(route.match.params.id)} \n        afterAction={(status, params)=>redirect(route.history, params)} />} />\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!Object.prototype.hasOwnProperty.call(b,"__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"UseDigimakerUI.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---use-digimaker-ui-mdx-7bf9b73fc178a9d9d630.js.map