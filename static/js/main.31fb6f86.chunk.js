(this.webpackJsonptest0628=this.webpackJsonptest0628||[]).push([[0],{146:function(e,t,n){},147:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),l=n(51),i=n.n(l),r=(n(146),n(134)),s=n(272),o=(n(147),n(3)),j=n(278),u=n(46),d=n(275),b=n(22),h=n(139),O=n(276),m=n(266),x=n(267),g=n(257),S=n(258),f=n(259),C=n(260),p=n(261),v=n(262),y=n(263),A=n(264),k=n(265),w=n(274),F=n(135),T=n(1);function I(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],l=Object(c.useCallback)((function(){return a((function(e){return!e}))}),[]),i=n?Object(T.jsx)(j.a.Section,{fullWidth:!0,children:Object(T.jsx)(w.a,{title:"TITLE PEACH",status:"success",action:{content:"Print label"},onDismiss:l,children:Object(T.jsx)(F.a,{children:" peach peach peach peach"})})}):null;return Object(T.jsx)(T.Fragment,{children:i})}var D=n(281),L=n(246),M=n(279),U=n(102),R=n(7),E=n(137),J=n(27),P=n(45);function W(){var e=[{id:"1",name:"pink",num:1},{id:"2",name:"orange",num:5},{id:"3",name:"black",num:2},{id:"4",name:"summer",num:2},{id:"5",name:"home",num:5}];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a.Section,{children:Object(T.jsx)(d.a,{title:"Categories",children:Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(D.a,{items:e,renderItem:t})})})}),Object(T.jsxs)(j.a.Section,{secondary:!0,children:[Object(T.jsx)(d.a,{children:Object(T.jsx)(d.a.Section,{title:"Category Add",children:Object(T.jsx)(L.a,{onSubmit:function(){},children:Object(T.jsx)(M.a,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(b.a.Item,{fill:!0,children:Object(T.jsx)(U.a,{label:"",value:"sample",onChange:function(){},placeholder:"Category",maxLength:20,showCharacterCount:!0})}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)(R.a,{submit:!0,primary:!0,children:"ADD"})})]})})})})}),Object(T.jsxs)(d.a,{children:[Object(T.jsx)(d.a.Section,{title:"Category search",children:Object(T.jsx)(M.a,{children:Object(T.jsx)(U.a,{label:"",value:"sample",onChange:function(){},placeholder:"Category"})})}),Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(D.a,{items:e,renderItem:t})})]})]})]});function t(e){var t=e.id,n=e.name,c=e.num;return Object(T.jsx)(E.a,{id:t,name:n,onClick:function(){},children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(b.a.Item,{fill:!0,children:Object(T.jsx)(J.a,{variation:"strong",children:n})}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)(P.a,{status:"info",children:t})}),Object(T.jsx)(b.a.Item,{children:c})]})})}}var H=n(247),N=n(268),V=n(248);function G(){var e=[{date:"Wen Jul 14 2020",title:"Sample title",id:"1",show:!0},{date:"Thu Jul 15 2020",title:"Sample title 2",id:"2",show:!1},{date:"Tue Jul 13 2020",title:"Sample title 3",id:"3",show:!1}],t=Object(H.a)(e),n=t.selectedResources,a=t.allResourcesSelected,l=t.handleSelectionChange,i=e.map((function(e,t){var c=e.id,a=e.title,l=e.date,i=e.show;return Object(T.jsxs)(N.a.Row,{id:c,selected:n.includes(c),position:t,children:[Object(T.jsx)(N.a.Cell,{children:Object(T.jsx)(J.a,{variation:"strong",children:a})}),Object(T.jsx)(N.a.Cell,{children:l}),Object(T.jsx)(N.a.Cell,{children:i?"show":"hide"})]},c)})),r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],b=s[1],h=Object(c.useCallback)((function(){b((function(e){return!0}))}),[]),O=Object(c.useCallback)((function(){b((function(e){return!1}))}),[]),m=(new Date).toDateString();return Object(T.jsxs)(j.a.Section,{children:[Object(T.jsxs)(d.a,{primaryFooterAction:{icon:V.a,onAction:function(){h()}},children:[Object(T.jsx)(d.a.Header,{title:"Blog",actions:[{content:"action",url:"/"},{content:"action2",url:"/"}]}),Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(N.a,{resourceName:{singular:"article",plural:"artciles"},itemCount:e.length,selectedItemsCount:a?"All":n.length,onSelectionChange:l,headings:[{title:"Title"},{title:"Date"},{title:"Show"}],children:i})})]}),!0===u&&Object(T.jsx)(d.a,{title:"Create new Article",primaryFooterAction:{content:"Add"},secondaryFooterActions:[{content:"Cansel",onAction:function(){O()}}],children:Object(T.jsx)(d.a.Section,{children:Object(T.jsxs)(M.a,{children:[Object(T.jsxs)(M.a.Group,{children:[Object(T.jsx)(U.a,{label:"title",onChange:function(){}}),Object(T.jsx)(U.a,{label:"date",onChange:function(){},value:m})]}),Object(T.jsx)(U.a,{label:"article",onChange:function(){},multiline:3})]})})})]})}function B(){var e=[{start:20210101,end:20200107,date:"Oct 15, 2015",title:"Sample ",id:"1",show:!0},{start:20210101,end:20200107,date:"Oct 20, 2015",title:"\u5165\u8377\u3057\u307e\u3057\u305f",id:"2",show:!0}],t=Object(H.a)(e),n=t.selectedResources,a=t.allResourcesSelected,l=t.handleSelectionChange,i=e.map((function(e,t){var c=e.id,a=e.title,l=e.date,i=e.show;return Object(T.jsxs)(N.a.Row,{id:c,selected:n.includes(c),position:t,children:[Object(T.jsx)(N.a.Cell,{children:Object(T.jsx)(J.a,{variation:"strong",children:a})}),Object(T.jsx)(N.a.Cell,{children:l}),Object(T.jsx)(N.a.Cell,{children:i?"show":"hide"})]},c)})),r=Object(c.useState)(!1),s=Object(o.a)(r,2),u=s[0],b=s[1],h=Object(c.useCallback)((function(){b((function(e){return!0}))}),[]),O=Object(c.useCallback)((function(){b((function(e){return!1}))}),[]),m=(new Date).toDateString();return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(j.a.Section,{children:[Object(T.jsxs)(d.a,{primaryFooterAction:{icon:V.a,onAction:function(){h()}},children:[Object(T.jsx)(d.a.Header,{title:"News",actions:[{content:"action",url:"/"},{content:"action2",url:"/"}]}),Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(N.a,{resourceName:{singular:"article",plural:"artciles"},itemCount:e.length,selectedItemsCount:a?"All":n.length,onSelectionChange:l,headings:[{title:"Title"},{title:"Date"},{title:"Show"}],children:i})})]}),!0===u&&Object(T.jsx)(d.a,{title:"Create News",primaryFooterAction:{content:"Add"},secondaryFooterActions:[{content:"Cansel",onAction:function(){O()}}],children:Object(T.jsx)(d.a.Section,{children:Object(T.jsxs)(M.a,{children:[Object(T.jsxs)(M.a.Group,{children:[Object(T.jsx)(U.a,{label:"title",onChange:function(){}}),Object(T.jsx)(U.a,{label:"date",onChange:function(){},value:m})]}),Object(T.jsx)(U.a,{label:"article",onChange:function(){},multiline:3})]})})})]})})}function $(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(T.jsx)(j.a.Section,{children:Object(T.jsxs)(d.a,{children:[Object(T.jsx)(d.a.Header,{title:"Sale",actions:[{content:"action",url:"/"},{content:"action2",url:"/"}]}),Object(T.jsx)(D.a,{resourceName:{singular:"blog post",plural:"blog posts"},items:[{id:"6",url:"sale/6",title:"Autumn Sale",author:"Oct 15,2020 - Oct 21,2020"}],selectedItems:n,onSelectionChange:a,selectable:!0,renderItem:function(e){var t=e.id,n=e.url,c=e.title,a=e.author,l=a?Object(T.jsx)("div",{children:a}):null;return Object(T.jsxs)(E.a,{id:t,url:n,accessibilityLabel:"View details for ".concat(c),name:c,children:[Object(T.jsx)("h3",{children:Object(T.jsx)(J.a,{variation:"strong",children:c})}),l]})}})]})})}var q=n(270),z=n(282),Q=n(249),Y=n(250),X=n(251),_=n(6),K=n(138),Z=n(269);function ee(){var e=Object(c.useMemo)((function(){return[{value:"rustic",label:"Rustic"},{value:"antique",label:"Antique"},{value:"vinyl",label:"Vinyl"},{value:"vintage",label:"Vintage"},{value:"refurbished",label:"Refurbished"}]}),[]),t=Object(c.useState)([]),n=Object(o.a)(t,2),a=n[0],l=n[1],i=Object(c.useState)(""),r=Object(o.a)(i,2),s=r[0],j=r[1],u=Object(c.useState)(e),h=Object(o.a)(u,2),O=h[0],m=h[1],x=Object(c.useCallback)((function(t){if(j(t),""!==t){var n=new RegExp(t,"i"),c=e.filter((function(e){return e.label.match(n)}));m(c)}else m(e)}),[e]),g=Object(c.useCallback)((function(e){return function(){var t=Object(_.a)(a);t.splice(t.indexOf(e),1),l(t)}}),[a]),S=a.map((function(e){var t="";return t=e.replace("_"," "),t=t.toLowerCase().split(" ").map((function(e){return e.replace(e[0],e[0].toUpperCase())})).join(""),Object(T.jsx)(K.a,{onRemove:g(e),children:t},"option".concat(e))})),f=Object(T.jsx)(Z.a.TextField,{onChange:x,label:"",value:s,placeholder:"Vintage, cotton, summer"});return Object(T.jsxs)(d.a.Section,{title:"Categories",children:[Object(T.jsx)(Z.a,{allowMultiple:!0,options:O,selected:a,textField:f,onSelect:l,listTitle:"Suggested Tags"}),Object(T.jsx)("br",{}),Object(T.jsx)(F.a,{children:Object(T.jsx)(b.a,{children:S})})]})}function te(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(j.a.Section,{children:Object(T.jsx)(L.a,{onSubmit:function(){},children:Object(T.jsx)(M.a,{children:Object(T.jsxs)(d.a,{title:"Create Products",primaryFooterAction:{content:"ADD"},secondaryFooterActions:[{content:"Save",icon:Q.a},{content:"preview",icon:Y.a},{content:"Delete",destructive:!0,icon:X.a}],children:[Object(T.jsxs)(d.a.Section,{title:"info",children:[Object(T.jsx)(U.a,{value:"",label:"\u5546\u54c1\u540d",placeholder:"\u5546\u54c1\u540d",maxLength:20,showCharacterCount:!0,onChange:function(){}}),Object(T.jsx)(U.a,{value:"",label:"\u5546\u54c1\u306e\u8aac\u660e",placeholder:"\u5546\u54c1\u306e\u8aac\u660e",maxLength:300,showCharacterCount:!0,onChange:function(){},multiline:3,helpText:"\u8aac\u660e\u6587\u3092\u66f8\u304f\u3068\u304d\u306e\u6ce8\u610f\uff01\u8aac\u660e\u6587\u3092\u66f8\u304f\u3068\u304d\u306e\u6ce8\u610f\uff01\u8aac\u660e\u6587\u3092\u66f8\u304f\u3068\u304d\u306e\u6ce8\u610f\uff01\u8aac\u660e\u6587\u3092\u66f8\u304f\u3068\u304d\u306e\u6ce8\u610f\uff01"})]}),Object(T.jsx)(d.a.Section,{title:"Image",children:Object(T.jsx)(q.a,{label:"Image files",children:Object(T.jsx)(q.a.FileUpload,{})})}),Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(M.a,{children:Object(T.jsxs)(M.a.Group,{children:[Object(T.jsx)(U.a,{type:"number",value:"11",label:"\u4fa1\u683c",max:30,onChange:function(){},prefix:"\xa5"}),Object(T.jsx)(U.a,{type:"number",value:"11",label:"\u5728\u5eab\u6570",max:30,onChange:function(){},align:"right"})]})})}),Object(T.jsx)(ee,{}),Object(T.jsx)(d.a.Section,{title:"Wrapping size",children:Object(T.jsx)(M.a,{children:Object(T.jsxs)(M.a.Group,{children:[Object(T.jsx)(z.a,{title:"\u5dfe\u7740",choices:[{label:"SS",value:"ss"},{label:"S",value:"s"},{label:"M",value:"m"},{label:"L",value:"l"}],selected:["ss"]}),Object(T.jsx)(z.a,{title:"BOX",choices:[{label:"SS",value:"ss"},{label:"S",value:"s"},{label:"M",value:"m"},{label:"L",value:"l"}],selected:["s"]})]})})})]})})})})})}var ne=n(252),ce=n(253),ae=function(e){var t=Object(c.useState)("disabled"),n=Object(o.a)(t,2),a=n[0],l=n[1],i=Object(c.useState)(!0),r=Object(o.a)(i,2),s=r[0],u=r[1],O=Object(c.useState)(!1),m=Object(o.a)(O,2),x=m[0],g=m[1],S=Object(c.useCallback)((function(e,t){l(t),u((function(e){return!e})),g((function(e){return!e}))}),[]);return Object(T.jsx)(j.a.Section,{secondary:!0,children:Object(T.jsxs)(d.a,{title:e.ShipmentCompany,children:[Object(T.jsx)(d.a.Section,{children:Object(T.jsxs)(b.a,{vertical:!0,children:[Object(T.jsxs)(M.a,{children:[Object(T.jsx)(h.a,{label:"\u5168\u56fd\u4e00\u5f8b",helpText:"\u5317\u6d77\u9053\u30fb\u672c\u5dde\u30fb\u56db\u56fd\u30fb\u4e5d\u5dde\u30fb\u6c96\u7e04\u30fb\u96e2\u5cf6",checked:"disabled"===a,id:"disabled",name:"accounts",onChange:S}),Object(T.jsx)(U.a,{disabled:x,type:"number",label:"\u4fa1\u683c",onChange:function(){},prefix:"\xa5"})]}),Object(T.jsxs)(M.a,{children:[Object(T.jsx)(h.a,{label:"\u96e2\u5cf6\u30fb\u4e00\u90e8\u5730\u57df\u5225",helpText:"\u96e2\u5cf6\u3092\u542b\u3080\u4e00\u90e8\u5730\u57df\x1d\uff1a\u5317\u6d77\u9053\u30fb\u6c96\u7e04\u30fb\u96e2\u5cf6",id:"optional",name:"accounts",checked:"optional"===a,onChange:S}),Object(T.jsx)(U.a,{disabled:s,type:"number",label:"\u672c\u5dde\u30fb\u56db\u56fd\u30fb\u4e5d\u5dde",onChange:function(){},prefix:"\xa5"}),Object(T.jsx)(U.a,{disabled:s,type:"number",label:"\u96e2\u5cf6\u30fb\u4e00\u90e8\u5730\u57df",onChange:function(){},prefix:"\xa5"})]})]})}),Object(T.jsx)(d.a.Section,{children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(b.a.Item,{fill:!0,children:Object(T.jsx)(J.a,{variation:"subdued",children:"N\u4ef6"})}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)(R.a,{primary:!0,children:"\u5546\u54c1\u306e\u8ffd\u52a0"})})]})})]})})};function le(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a.Section,{children:Object(T.jsx)(d.a,{title:"Shipment",primaryFooterAction:{content:"Save"},children:Object(T.jsx)(d.a.Section,{children:Object(T.jsx)(D.a,{items:[{id:"1",name:"\u30b7\u30ed\u30cd\u30b3\u30e4\u30de\u30c8",num:1},{id:"2",name:"\u4f51\u5ddd\u6025\u4fbf",num:5},{id:"3",name:"U\u30d1\u30c3\u30af",num:2},{id:"4",name:"\u30e1\u30fc\u30eb\u90f5\u4fbf",num:2}],renderItem:function(e){var t=e.id,n=e.name;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(E.a,{id:t,name:n,onClick:function(){},children:Object(T.jsxs)(b.a,{children:[Object(T.jsx)(b.a.Item,{fill:!0,children:Object(T.jsx)(J.a,{variation:"strong",children:n})}),Object(T.jsx)(J.a,{variation:"subdued",children:"\u5168\u56fd\u4e00\u5f8b\u3000\u96e2\u5cf6\u30fb\u4e00\u90e8\u5730\u57df\u8a2d\u5b9a"}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)(R.a,{icon:ne.a,primary:!0,onClick:function(){}})}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)(R.a,{icon:ce.a,monochrome:!0,outline:!0,onClick:function(){alert("\u521d\u671f\u8a2d\u5b9a\u306b\u623b\u3057\u307e\u3059\u304b\uff1f")}})})]})})})}})})})}),Object(T.jsx)(ae,{ShipmentCompany:""})]})}var ie=n(277),re=n(273);function se(){var e=Object(c.useState)({month:1,year:2018}),t=Object(o.a)(e,2),n=t[0],a=n.month,l=n.year,i=t[1],r=Object(c.useState)({start:new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),end:new Date("Mon Feb 12 2018 00:00:00 GMT-0500 (EST)")}),s=Object(o.a)(r,2),u=s[0],b=s[1],h=Object(c.useCallback)((function(e,t){return i({month:e,year:t})}),[]);return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(j.a.Section,{secondary:!0,children:Object(T.jsxs)(d.a,{title:"\u7d5e\u308a\u8fbc\u307f",primaryFooterAction:{content:"Sort"},children:[Object(T.jsx)(d.a.Section,{title:"\u671f\u9593",children:Object(T.jsx)(re.a,{month:a,year:l,onChange:b,onMonthChange:h,selected:u,allowRange:!0})}),Object(T.jsx)(d.a.Section,{title:"\u58f2\u4e0a",children:Object(T.jsx)(M.a,{children:Object(T.jsxs)(M.a.Group,{condensed:!0,children:[Object(T.jsx)(U.a,{type:"number",label:"Min",onChange:function(){}}),Object(T.jsx)(U.a,{type:"number",label:"Max",onChange:function(){}})]})})})]})})})}var oe=n(271),je=n(136);function ue(){var e,t=[{id:"3416",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA",orders:20,amountSpent:"$2,400",payment:"succeess"},{id:"2566",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA",orders:30,amountSpent:"$140"},{id:"3416",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA",orders:20,amountSpent:"$2,400",payment:"succeess"},{id:"3416",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA",orders:20,amountSpent:"$2,400",payment:""},{id:"3416",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA",orders:20,amountSpent:"$2,400",payment:""}],n=Object(H.a)(t),a=n.selectedResources,l=n.allResourcesSelected,i=n.handleSelectionChange,r=Object(c.useState)("VIP"),s=Object(o.a)(r,2),j=s[0],u=s[1],b=Object(c.useState)(""),h=Object(o.a)(b,2),O=h[0],m=h[1],x=Object(c.useState)("today"),g=Object(o.a)(x,2),S=g[0],f=g[1],C=Object(c.useCallback)((function(e){return u(e)}),[]),p=Object(c.useCallback)((function(){return u("")}),[]),v=Object(c.useCallback)((function(){return m("")}),[]),y=Object(c.useCallback)((function(){p(),v()}),[v,p]),A=Object(c.useCallback)((function(e){return f(e)}),[]),k=[{key:"taggedWith",label:"Tagged with",filter:Object(T.jsx)(U.a,{label:"Tagged with",value:j,onChange:C,labelHidden:!0}),shortcut:!0}],w=(e=j,(Array.isArray(e)?0===e.length:""===e||null==e)?[]:[{key:"taggedWith",label:function(e,t){switch(e){case"taggedWith":return"Tagged with ".concat(t);default:return t}}("taggedWith",j),onRemove:p}]),F=t.map((function(e,t){var n=e.id,c=e.name,l=e.location,i=e.orders,r=e.amountSpent,s=e.payment;return Object(T.jsxs)(N.a.Row,{id:n,selected:a.includes(n),position:t,children:[Object(T.jsx)(N.a.Cell,{children:Object(T.jsx)(J.a,{variation:"strong",children:c})}),Object(T.jsx)(N.a.Cell,{children:"DIAMOND"}),Object(T.jsx)(N.a.Cell,{children:l}),Object(T.jsx)(N.a.Cell,{children:i}),Object(T.jsx)(N.a.Cell,{children:r}),Object(T.jsx)(N.a.Cell,{children:"succeess"===s?Object(T.jsx)(P.a,{status:"success",children:"\u6e08"}):Object(T.jsx)(P.a,{status:"attention",children:"\u672a"})})]},n)}));return Object(T.jsxs)(d.a,{children:[Object(T.jsxs)("div",{style:{padding:"16px",display:"flex"},children:[Object(T.jsx)("div",{style:{flex:1},children:Object(T.jsx)(oe.a,{queryValue:O,filters:k,appliedFilters:w,onQueryChange:m,onQueryClear:v,onClearAll:y})}),Object(T.jsx)("div",{style:{paddingLeft:"0.4rem"},children:Object(T.jsx)(je.a,{labelInline:!0,label:"Sort by",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"}],value:S,onChange:A})})]}),Object(T.jsx)(N.a,{resourceName:{singular:"customer",plural:"customers"},itemCount:t.length,selectedItemsCount:l?"All":a.length,onSelectionChange:i,headings:[{title:"\u304a\u540d\u524d"},{title:"\u4f1a\u54e1\u30e9\u30f3\u30af"},{title:"\u4f4f\u6240"},{title:"\u500b\u6570"},{title:"\u5408\u8a08\u91d1\u984d"},{title:"\u5165\u91d1"}],children:F})]})}function de(){var e=["\u65b0\u898f\u53d7\u4ed8","\u767a\u9001\u6e96\u5099","\u767a\u9001\u4e2d","\u767a\u9001\u6e08\u307f","\u30ad\u30e3\u30f3\u30bb\u30eb"],t=[12,2,24,189],n=[140,140,140,140],c=[233,1234,12334,112345],a=[[e[0],t[0],n[0],30,"\xa5"+c[0]],[e[1],t[1],n[1],20,"\xa5"+c[1]],[e[2],t[2],n[2],30,"\xa5"+c[2]],[e[3],t[3],n[3],60,"\xa5"+c[3]]];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(j.a.Section,{children:[Object(T.jsx)(d.a,{children:Object(T.jsx)(ie.a,{columnContentTypes:["text","numeric","numeric","numeric","numeric"],headings:["\u72b6\u6cc1","\u4ef6\u6570","\u500b\u6570","\u5ba2\u6570","\u58f2\u4e0a"],rows:a,totals:["",200,560,200,"\xa5"+c.reduce((function(e,t){return e+t}))],showTotalsInFooter:!0})}),Object(T.jsx)(ue,{})]}),Object(T.jsx)(se,{})]})}var be=n(283);function he(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],l=[{content:"Edit customers",onAction:function(){return console.log("Todo: implement bulk edit")}}],i=[{content:"Add tags",onAction:function(){return console.log("Todo: implement bulk add tags")}},{content:"Remove tags",onAction:function(){return console.log("Todo: implement bulk remove tags")}},{content:"Delete customers",onAction:function(){return console.log("Todo: implement bulk delete")}}];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(j.a.Section,{children:Object(T.jsxs)(d.a,{children:[Object(T.jsx)(d.a.Header,{actions:[{}],title:"Accounts"}),Object(T.jsx)(D.a,{resourceName:{singular:"customer",plural:"customers"},items:[{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"},{id:"103",url:"customers/341",name:"Mae Jemison",location:"Decatur, USA"},{id:"203",url:"customers/256",name:"Ellen Ochoa",location:"Los Angeles, USA"}],renderItem:function(e){var t=e.id,n=e.url,c=e.name,a=e.location,l=Object(T.jsx)(be.a,{customer:!0,size:"medium",name:c});return Object(T.jsxs)(E.a,{id:t,url:n,media:l,accessibilityLabel:"View details for ".concat(c),children:[Object(T.jsx)("h3",{children:Object(T.jsx)(J.a,{variation:"strong",children:c})}),Object(T.jsx)("div",{children:a}),Object(T.jsxs)(b.a,{children:[Object(T.jsx)(b.a.Item,{fill:!0,children:Object(T.jsx)(P.a,{status:"attention",children:"\u6ce8\u610f"})}),Object(T.jsx)(P.a,{status:"success",children:"\u6210\u529f"}),Object(T.jsx)(P.a,{status:"critical",children:"\u30af\u30ea\u30c6\u30a3\u30ab\u30eb"}),Object(T.jsx)(P.a,{status:"warning",children:"\u8b66\u544a"}),Object(T.jsx)(P.a,{status:"new",children:"DEFAULT"}),Object(T.jsx)(P.a,{status:"info",children:"\u60c5\u5831"}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)("p",{children:"3456"})}),Object(T.jsx)(b.a.Item,{children:Object(T.jsx)("p",{children:"\xa5123456"})})]})]})},selectedItems:n,onSelectionChange:a,promotedBulkActions:l,bulkActions:i})]})}),Object(T.jsx)(j.a.Section,{secondary:!0,children:Object(T.jsx)(d.a,{primaryFooterAction:{content:"Search"},title:"Search",children:Object(T.jsx)(d.a.Section,{title:"",children:Object(T.jsx)(M.a,{children:Object(T.jsx)(U.a,{label:"Name",onChange:function(){}})})})})})]})}function Oe(){var e,t=[{id:"3417",url:"customers/341",name:"\u30ad\u30e3\u30f3\u30d0\u30b9",orders:20,stock:30,code:1234567890,release:!0,price:2345},{id:"2567",url:"customers/256",name:"\u6c34\u5f69\u30da\u30f3\u30bb\u30c3\u30c8(12\u8272)",orders:30,stock:30,code:1234567890,release:!0,price:2345},{id:"3417",url:"customers/341",name:"\u30af\u30ed\u30c3\u30ad\u30fc\u5e33",orders:20,stock:30,code:1234567890,release:!0,price:2345},{id:"2567",url:"customers/256",name:"\u30da\u30f3\u30b1\u30fc\u30b9",orders:30,stock:30,code:1234567890,release:!1,price:2345},{id:"3417",url:"customers/341",name:"\u30d1\u30ec\u30c3\u30c8",orders:20,stock:30,code:1234567890,release:!0,price:2345},{id:"2567",url:"customers/256",name:"\u7df4\u308a\u30b4\u30e0",orders:30,stock:30,code:1234567890,release:!0,price:2345}],n=Object(H.a)(t),a=n.selectedResources,l=n.allResourcesSelected,i=n.handleSelectionChange,r=Object(c.useState)("VIP"),s=Object(o.a)(r,2),u=s[0],b=s[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),m=O[0],x=O[1],g=Object(c.useState)("today"),S=Object(o.a)(g,2),f=S[0],C=S[1],p=Object(c.useCallback)((function(e){return b(e)}),[]),v=Object(c.useCallback)((function(){return b("")}),[]),y=Object(c.useCallback)((function(){return x("")}),[]),A=Object(c.useCallback)((function(){v(),y()}),[y,v]),k=Object(c.useCallback)((function(e){return C(e)}),[]),w=[{content:"Edit customers",onAction:function(){return console.log("Todo: implement bulk edit")}}],F=[{content:"Add tags",onAction:function(){return console.log("Todo: implement bulk add tags")}},{content:"Remove tags",onAction:function(){return console.log("Todo: implement bulk remove tags")}},{content:"Delete customers",onAction:function(){return console.log("Todo: implement bulk delete")}}],I=[{key:"taggedWith",label:"Tagged with",filter:Object(T.jsx)(U.a,{label:"Tagged with",value:u,onChange:p,labelHidden:!0}),shortcut:!0}],D=(e=u,(Array.isArray(e)?0===e.length:""===e||null==e)?[]:[{key:"taggedWith",label:function(e,t){switch(e){case"taggedWith":return"Tagged with ".concat(t);default:return t}}("taggedWith",u),onRemove:v}]),L=t.map((function(e,t){var n=e.id,c=e.name,l=e.stock,i=e.code,r=e.release,s=e.price,o=e.orders;return Object(T.jsxs)(N.a.Row,{id:n,selected:a.includes(n),position:t,children:[Object(T.jsx)(N.a.Cell,{children:n}),Object(T.jsx)(N.a.Cell,{children:Object(T.jsx)(J.a,{variation:"strong",children:c})}),Object(T.jsx)(N.a.Cell,{children:i}),Object(T.jsx)(N.a.Cell,{children:l}),Object(T.jsx)(N.a.Cell,{children:!0===r?Object(T.jsx)(J.a,{variation:"positive",children:"\u516c\u958b"}):Object(T.jsx)(J.a,{variation:"negative",children:"\u975e\u516c\u958b"})}),Object(T.jsxs)(N.a.Cell,{children:["\xa5",s]}),Object(T.jsx)(N.a.Cell,{children:o})]},n)}));return Object(T.jsx)(j.a.Section,{children:Object(T.jsxs)(d.a,{children:[Object(T.jsxs)("div",{style:{padding:"16px",display:"flex"},children:[Object(T.jsx)("div",{style:{flex:1},children:Object(T.jsx)(oe.a,{queryValue:m,filters:I,appliedFilters:D,onQueryChange:x,onQueryClear:y,onClearAll:A})}),Object(T.jsx)("div",{style:{paddingLeft:"0.4rem"},children:Object(T.jsx)(je.a,{labelInline:!0,label:"Sort by",options:[{label:"Today",value:"today"},{label:"Yesterday",value:"yesterday"},{label:"Last 7 days",value:"lastWeek"}],value:f,onChange:k})})]}),Object(T.jsx)(N.a,{resourceName:{singular:"customer",plural:"customers"},itemCount:t.length,selectedItemsCount:l?"All":a.length,onSelectionChange:i,hasMoreItems:!0,bulkActions:F,promotedBulkActions:w,headings:[{title:"id"},{title:"\u5546\u54c1\u540d"},{title:"\u5546\u54c1\u30b3\u30fc\u30c9"},{title:"\u5728\u5eab"},{title:"\u72b6\u614b"},{title:"\u8ca9\u58f2\u4fa1\u683c"},{title:"\u6ce8\u6587\u6570"}],children:L})]})})}function me(){return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(j.a.Section,{children:Object(T.jsx)(d.a,{children:Object(T.jsx)(d.a.Section,{children:"memo Contents   \u4e00\u62ec\u7ba1\u7406 Setting \u7ba1\u7406\u8005\u4ee5\u5916\u306e\u30e6\u30fc\u30b6\u30fc\u8a2d\u5b9a\u3068\u304b \u691c\u7d22\u306f\u4e0a\u306e\u3068\u3053\u306b\u7d71\u4e00 header? \u7d71\u4e00\u304b\u500b\u5225\u304b\u3000\u500b\u5225\u306e\u65b9\u304c\u3054\u3061\u3083\u3064\u304b\u306a\u304f\u3066\u3044\u3044\uff1f\u691c\u7d22\u3067\u304d\u308b\u7bc4\u56f2\u306e\u9650\u5b9a\u306a\u3069\u3082"})})})})}var xe=function(e){var t=Object(c.useState)("Home"),n=Object(o.a)(t,2),a=n[0],l=n[1],i=Object(c.useCallback)((function(e){l(e)}),[]),r=function(e){return Object(T.jsx)(j.a.Section,{children:Object(T.jsx)(u.a,{size:"large",children:e.title})})},w=Object(c.useState)("light"),F=Object(o.a)(w,2),D=F[0],L=F[1],M=Object(c.useCallback)((function(e,t){L(t)}),[]),U=Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(j.a.Section,{children:Object(T.jsxs)(d.a,{primaryFooterAction:{content:"Save"},children:[Object(T.jsx)(d.a.Section,{title:"Theme",children:Object(T.jsxs)(b.a,{vertical:!0,children:[Object(T.jsx)(h.a,{label:"Ligth",onChange:M,checked:"light"===D,id:"light",name:"accounts"}),Object(T.jsx)(h.a,{label:"Dark",onChange:M,checked:"dark"===D,id:"dark",name:"accounts"})]})}),Object(T.jsx)(d.a.Section,{title:"Font Size"})]})})}),R=Object(T.jsxs)(O.a,{location:"/",children:[Object(T.jsx)(O.a.Section,{items:[{url:"/",label:"Home",icon:g.a,onClick:function(){return i("Home")}},{url:"/",label:"All Products",icon:S.a,badge:"1",onClick:function(){i("All Products")}},{url:"/",label:"Create Product",icon:S.a,onClick:function(){return i("Create Products")}},{url:"/",label:"Categories",icon:f.a,onClick:function(){return i("Categories")}},{url:"/",label:"Orders",icon:C.a,badge:"15",onClick:function(){return i("Orders")}},{url:"/",label:"Customers",icon:p.a,badge:"15",onClick:function(){return i("Customers")}},{url:"/",label:"Contents",icon:v.a,onClick:function(){return i("Contents")}},{url:"/",label:"Shipment",icon:y.a,onClick:function(){return i("Shipment")}},{url:"/",label:"Settings",icon:A.a,onClick:function(){i("Settings")}}],rollup:{after:8,view:"view",hide:"hide",activePath:"/"}}),Object(T.jsx)(O.a.Section,{title:"Web Store",separator:!0,items:[{url:"/Page2",label:"Store",icon:k.a}]})]});return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(s.a,{i18n:{},theme:{colorScheme:D},children:Object(T.jsxs)(m.a,{navigation:R,children:["Create Products"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(x.a,{narrowWidth:!0,children:Object(T.jsxs)(j.a,{children:[Object(T.jsx)(r,{title:"Create Products"}),Object(T.jsx)(te,{})]})})}),Object(T.jsx)(x.a,{fullWidth:!0,children:Object(T.jsxs)(j.a,{children:["Create Products"!==a&&Object(T.jsx)(r,{title:a}),"Orders"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(de,{})}),"Home"===a&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(I,{}),Object(T.jsx)(me,{})]}),"Customers"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(he,{})}),"Categories"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(W,{})}),"All Products"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(Oe,{})}),"Contents"===a&&Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(B,{}),Object(T.jsx)(G,{}),Object(T.jsx)($,{})]}),"Shipment"===a&&Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(le,{})}),"Settings"===a&&U]})})]})})})};var ge=function(){return Object(T.jsx)(s.a,{i18n:{translations:r},theme:{colorScheme:"light"},children:Object(T.jsx)(xe,{})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,284)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,l=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),l(e),i(e)}))};n(234);i.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(ge,{})}),document.getElementById("root")),Se()}},[[235,1,2]]]);
//# sourceMappingURL=main.31fb6f86.chunk.js.map