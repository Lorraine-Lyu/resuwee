(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{161:function(e,t,a){e.exports=a(434)},171:function(e,t,a){},173:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},174:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(11),c=a.n(l),i=a(53),o="EDIT NAME",u="EDIT DATE",s="EDIT REGION",m="EDIT CONTECT",d="EDIT EDUCATION",p="EDIT EDUCATION INFO",E="CREATE WORK",h="EDIT WORK";function b(e){return{type:m,contactObject:e}}function v(e){return{type:p,eduObject:e}}function f(e){return{type:h,workObj:e}}var O=a(28),y=function e(){Object(O.a)(this,e),this.name="",this.date=null,this.region=null,this.contact=[new j(1,null,null)],this.education="",this.educationExperience=[new x(1,null,null)]},j=function e(t,a,n){Object(O.a)(this,e),this.index=t,this.name=a,this.link=n},x=function e(t){Object(O.a)(this,e),this.index=t,this.school="",this.startDate=new Date(0),this.endDate=new Date(0),this.major="",this.courses=""},g=function e(t){Object(O.a)(this,e),this.index=t,this.company="",this.jobTitle="",this.startDate=new Date(0),this.endDate=new Date(0),this.description=""},k={user:{name:"",date:new Date(0),region:"",education:"",contact:[new j(0)],educationExperience:[new x(0)],workExperience:[new g]},style:{themeColor:""}};var C=Object(i.b)({updateUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,a=e.user;switch(t.type){case o:return a.name=t.text,console.log(e),Object.assign({},e,a);case u:return a.date=t.text,Object.assign({},e,a);case s:return a.region=t.text,Object.assign({},e,a);case d:return a.education=t.text,Object.assign({},e,a);case m:return a.contact=t.contactObject,Object.assign({},e,a);case p:return a.educationExperience=t.eduObject,Object.assign({},e,a);case E:return a.workExperience=[new g(0)],Object.assign({},e,a);case h:return a.workExperience=t.workObj,Object.assign({},e,a);default:return e}},updateStyle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return arguments.length>1&&arguments[1],e}}),I=Object(i.c)(C),w=(r.a.createContext(),a(19)),D=(a(169),a(171),a(155)),S=a(55),F=a(58),N=a(56),B=a(59),T=a(33),R=(a(173),a(174),a(157)),L=a(21),U=a(9);a(40);function A(e){var t=e.menu,a=e.value.index,n=e.callBk,l=e.index,c=e.remove,i=t.map(function(e,t){return e===t?r.a.createElement(U.Select.Option,{value:e,key:t,selected:!0},e):r.a.createElement(U.Select.Option,{value:e,key:t},e)}),o=r.a.createElement(U.Select,{name:"contactMethods",key:a+"select",onChange:function(e){return n(a,"type",e)}},i);return r.a.createElement("div",{className:"contactUnit"},r.a.createElement(U.Form.Item,{className:"contactUnit",key:a+"div"},o),r.a.createElement(U.Form.Item,{label:"link: "},r.a.createElement(U.Input,{type:"text",className:"contactInput",key:a+"input",value:e.value.link,onChange:function(e){return n(a,"value",e)}})),r.a.createElement(U.Button,{type:"text",icon:"delete",onClick:function(){return c(l)}}))}var M=Object(w.b)(function(e){return{contacts:e.updateUser.user.contact}})(function(e){var t=e.contacts,a=e.dispatch,l=["other","phone","facebook","gmail","linkedin","instagram","qq","wechat"],c=Object(n.useState)(!0),i=Object(L.a)(c,2),o=i[0],u=i[1],s=Object(n.useState)(t),m=Object(L.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)(0),h=Object(L.a)(E,2),v=h[0],f=h[1];function O(e,t,n){var r,l=d.slice(),c=!0,i=!1,o=void 0;try{for(var u,s=l[Symbol.iterator]();!(c=(u=s.next()).done);c=!0)(r=u.value).index===e&&("type"===t?r.name=n:r.link=n)}catch(m){i=!0,o=m}finally{try{c||null==s.return||s.return()}finally{if(i)throw o}}p(l),a(b(l))}function y(e){var t=d.slice();t=t.filter(function(t){return t.index!=e}),p(t),a(b(t))}function x(){u(!o)}var g=d.map(function(e){return r.a.createElement(A,{menu:l,key:e.index+"unit",index:e.index,value:e,callBk:O,remove:y})});return o?r.a.createElement("div",null,r.a.createElement("div",{className:"openedContactTitle"},g,r.a.createElement(U.Button,{type:"primary small",onClick:function(){var e=d.slice(),t=new j(v+1);e.push(t),p(e),f(v+1),a(b(e))}},"Add"),r.a.createElement(U.Button,{type:"primary small",onClick:x},"Collapse"))):r.a.createElement("div",{className:"closedContact"},r.a.createElement(U.Button,{type:"primary small",onClick:x},"Expand"))});function W(e){var t=e.value,a=e.index,n=e.callBk,l=e.delete;function c(e,a){t[a]=e,n(t.index,t)}return r.a.createElement("div",null,r.a.createElement(U.Form.Item,{label:"\u6240\u5728\u5b66\u6821\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u5c31\u8bfb\u5b66\u6821\u540d\u79f0",value:t.school,onChange:function(e){return c(e,"school")}})),r.a.createElement(U.Form.Item,{label:"\u65f6\u95f4\uff1a "},r.a.createElement(U.Layout.Col,{span:"5"},r.a.createElement(U.Form.Item,{labelWidth:"0px"},r.a.createElement(U.DatePicker,{value:t.startDate,placeholder:"\u9009\u62e9\u5f00\u59cb\u65e5\u671f",onChange:function(e){return c.bind(e,"startDate")}}))),r.a.createElement(U.Layout.Col,{className:"line",span:"1"},"-"),r.a.createElement(U.Layout.Col,{span:"5"},r.a.createElement(U.Form.Item,{labelWidth:"0px"},r.a.createElement(U.DatePicker,{value:t.endDate,placeholder:"\u9009\u62e9\u7ed3\u675f\u65e5\u671f",onChange:function(e){return c.bind(e,"endDate")}})))),r.a.createElement(U.Form.Item,{label:"\u4e13\u4e1a\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u4e3b\u8981\u4e13\u4e1a",value:t.major,onChange:function(e){return c(e,"major")}})),r.a.createElement(U.Form.Item,{label:"\u4e13\u4e1a\u8bfe\u7a0b\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u4e3b\u8981\u5b66\u4e60\u8bfe\u7a0b",value:t.courses,onChange:function(e){return c(e,"courses")}})),r.a.createElement(U.Button,{type:"text",icon:"delete",onClick:function(){l(a)}}))}var P=Object(w.b)(function(e){return{eduExp:e.updateUser.user.educationExperience}})(function(e){var t=e.eduExp,a=e.dispatch,l=t,c=Object(n.useState)(!0),i=Object(L.a)(c,2),o=i[0],u=i[1],s=Object(n.useState)(1),m=Object(L.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)(l),h=Object(L.a)(E,2),b=h[0],f=h[1],O=b.map(function(e){return r.a.createElement(W,{key:e.index,index:e.index,value:e,callBk:g,delete:j})});function y(){u(!o)}function j(e){var t=b.slice();t=t.filter(function(t){return t.index!=e}),f(t),a(v(t))}function g(e,t){var n=b.slice(),r=!0,l=!1,c=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)i.value.index}catch(u){l=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(l)throw c}}f(n),a(v(n))}return o?r.a.createElement(U.Form.Item,{label:"\u5b66\u672f\u7ecf\u5386 "},O,r.a.createElement(U.Button,{type:"primary small",onClick:function(){var e=new x(d);p(d+1);var t=b.slice();t.push(e),f(t),a(v(t))}},"Add"),r.a.createElement(U.Button,{type:"primary small",onClick:y},"Collapse")):r.a.createElement(U.Form.Item,{label:"\u5b66\u672f\u7ecf\u5386 "},r.a.createElement(U.Button,{type:"primary small",onClick:y},"Expand"))});function J(e){var t=e.index,a=e.work,n=e.update,l=e.remove;function c(e,t){a[t]=e,n(a.index,a)}return r.a.createElement("div",null,r.a.createElement(U.Form.Item,{label:"\u6240\u5728\u5355\u4f4d\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u6240\u5728\u5355\u4f4d\u540d\u79f0",value:a.company,onChange:function(e){return c(e,"company")}})),r.a.createElement(U.Form.Item,{label:"\u804c\u4f4d\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u804c\u4f4d\u540d\u79f0",value:a.jobTitle,onChange:function(e){return c(e,"jobTitle")}})),r.a.createElement(U.Form.Item,{label:"\u65f6\u95f4\uff1a "},r.a.createElement(U.Layout.Col,{span:"5"},r.a.createElement(U.Form.Item,{labelWidth:"0px"},r.a.createElement(U.DatePicker,{value:a.startDate,placeholder:"\u9009\u62e9\u5f00\u59cb\u65e5\u671f",onChange:function(e){return c.bind(e,"startDate")}}))),r.a.createElement(U.Layout.Col,{className:"line",span:"1"},"-"),r.a.createElement(U.Layout.Col,{span:"5"},r.a.createElement(U.Form.Item,{labelWidth:"0px"},r.a.createElement(U.DatePicker,{value:a.endDate,placeholder:"\u9009\u62e9\u7ed3\u675f\u65e5\u671f",onChange:function(e){return c.bind(e,"endDate")}})))),r.a.createElement(U.Form.Item,{label:"\u5de5\u4f5c\u5185\u5bb9\uff1a "},r.a.createElement(U.Input,{placeholder:"\u8bf7\u8f93\u5165\u4e3b\u8981\u5de5\u4f5c\u804c\u8d23\u63cf\u8ff0",value:a.description,onChange:function(e){return c(e,"desxription")}})),r.a.createElement(U.Button,{type:"text",icon:"delete",onClick:function(){l(t)}}))}var q=Object(w.b)(function(e){return{works:e.updateUser.user.workExperience}})(function(e){var t=e.works,a=e.dispatch,l=Object(n.useState)(!0),c=Object(L.a)(l,2),i=c[0],o=c[1],u=Object(n.useState)(1),s=Object(L.a)(u,2),m=s[0],d=s[1],p=Object(n.useState)(t),E=Object(L.a)(p,2),h=E[0],b=E[1],v=h.map(function(e){return r.a.createElement(J,{key:e.index,index:e.index,work:e,remove:j,update:y})});function O(){o(!i)}function y(e,t){var n=h.slice(),r=!0,l=!1,c=void 0;try{for(var i,o=n[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)i.value.index}catch(u){l=!0,c=u}finally{try{r||null==o.return||o.return()}finally{if(l)throw c}}b(n),a(f(n))}function j(e){var t=h.slice();t=t.filter(function(t){return t.index!=e}),b(t),a(f(t))}return i?r.a.createElement(U.Form.Item,{label:"\u4ece\u4e1a\u7ecf\u5386 "},v,r.a.createElement(U.Button,{type:"primary small",onClick:function(){var e=new g(m);d(m+1);var t=h.slice();t.push(e),b(t),a(f(t))}},"Add"),r.a.createElement(U.Button,{type:"primary small",onClick:O},"Collapse")):r.a.createElement(U.Form.Item,{label:"\u4ece\u4e1a\u7ecf\u5386 "},r.a.createElement(U.Button,{type:"primary small",onClick:O},"Expand"))});var G=Object(w.b)(function(e){var t=e.updateUser.user;return{Name:t.name,birthDate:t.date,Region:t.region,Edu:t.education}})(function(e){var t=e.Name,a=e.Region,l=e.birthDate,c=e.Edu,i=e.dispatch,m=Object(n.useState)(t),p=Object(L.a)(m,2),E=p[0],h=p[1],b=Object(n.useState)(a),v=Object(L.a)(b,2),f=v[0],O=v[1],y=Object(n.useState)(l),j=Object(L.a)(y,2),x=j[0],g=j[1],k=Object(n.useState)(c),C=Object(L.a)(k,2),I=C[0],w=C[1];return r.a.createElement(U.Form,{labelWidth:"70"},r.a.createElement(U.Form.Item,{label:"\u59d3\u540d "},r.a.createElement(U.Input,{value:E,placeholder:"\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d",onChange:function(e){h(e),i({type:o,text:e})}})),r.a.createElement(U.Form.Item,{label:"\u6240\u5728\u5730 "},r.a.createElement(U.Select,{placeholder:"\u8bf7\u9009\u62e9\u6d3b\u52a8\u533a\u57df",value:f,onChange:function(e){O(e),i({type:s,text:e})}},r.a.createElement(U.Select.Option,{label:"\u4e0a\u6d77",value:"shanghai"}),r.a.createElement(U.Select.Option,{label:"\u5317\u4eac",value:"beijing"}))),r.a.createElement(U.Form.Item,{label:"\u51fa\u751f\u5e74\u6708 "},r.a.createElement(U.DatePicker,{value:x,placeholder:"\u9009\u62e9\u65e5\u671f",onChange:function(e){g(e),i({type:u,text:e})}})),r.a.createElement(U.Form.Item,{label:"\u5b66\u5386 "},r.a.createElement(U.Select,{value:I,placeholder:"\u8bf7\u9009\u62e9\u60a8\u7684\u6700\u9ad8\u5b66\u5386",onChange:function(e){w(e),i({type:d,text:{edu:I}})}},r.a.createElement(U.Select.Option,{label:"\u521d\u4e2d",value:"\u521d\u4e2d"}),r.a.createElement(U.Select.Option,{label:"\u9ad8\u4e2d",value:"\u9ad8\u4e2d"}),r.a.createElement(U.Select.Option,{label:"\u672c\u79d1",value:"\u672c\u79d1"}),r.a.createElement(U.Select.Option,{label:"\u7814\u7a76\u751f",value:"\u7814\u7a76\u751f"}),r.a.createElement(U.Select.Option,{label:"\u7855\u58eb",value:"\u7855\u58eb"}),r.a.createElement(U.Select.Option,{label:"\u535a\u58eb\u53ca\u4ee5\u4e0a",value:"\u535a\u58eb\u53ca\u4ee5\u4e0a"}))),r.a.createElement(U.Form.Item,{label:"\u8054\u7cfb\u65b9\u5f0f "},r.a.createElement(M,null)),r.a.createElement(P,null),r.a.createElement(q,null),r.a.createElement(U.Form.Item,null,r.a.createElement(U.Button,{type:"primary",nativeType:"submit"},"\u7acb\u5373\u521b\u5efa"),r.a.createElement(U.Button,null,"\u53d6\u6d88")))}),K=function(e){function t(e){return Object(O.a)(this,t),Object(F.a)(this,Object(N.a)(t).call(this,e))}return Object(B.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props.profile;this.props.upd;return r.a.createElement("div",null,r.a.createElement(G,{user:e}))}}]),t}(n.Component);var z=Object(w.b)(function(e){return{user:e.updateUser.user}})(K);var H=Object(w.b)(function(e){return{contactLst:e.updateUser.user.contact}})(function(e){var t=e.contactLst.map(function(e){return r.a.createElement(U.Button,{key:e.index},e.index)});return r.a.createElement("div",{class:"contactDiv"},t)});function $(e){return r.a.createElement(U.Button,{type:"primary",onClick:function(){return e.expandRight()},icon:"view"})}var Q=Object(w.b)(function(e){return{user:e.updateUser.user}})(function(e){return r.a.createElement("div",{className:e.className},r.a.createElement(U.Menu,{theme:"dark",defaultActive:"1",className:"el-menu-demo",mode:"horizontal"},r.a.createElement(U.Menu.Item,{index:"1"},"\u57fa\u7840\u4fe1\u606f"),r.a.createElement(U.Menu.Item,{index:"2"},"\u5b66\u672f\u7ecf\u5386"),r.a.createElement(U.Menu.Item,{index:"3"},"\u5c31\u4e1a\u7ecf\u5386")),r.a.createElement(H,null),r.a.createElement($,{expandRight:e.expandRight}))}),V=a(436),X=a(437),Y=a(438),Z=a(439),_=a(440),ee=a(441),te=a(442),ae=a(446),ne=a(445),re=a(443),le=a(444),ce=function(e){function t(e){var a;return Object(O.a)(this,t),(a=Object(F.a)(this,Object(N.a)(t).call(this,e))).toggle=a.toggle.bind(Object(T.a)(Object(T.a)(a))),a.state={isOpen:!1},a}return Object(B.a)(t,e),Object(S.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V.a,{color:"light",light:!0,expand:"md",className:"topNav"},r.a.createElement(X.a,{href:"/"},"Resuwee"),r.a.createElement(Y.a,{onClick:this.toggle}),r.a.createElement(Z.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(_.a,{className:"ml-auto ",navbar:!0},r.a.createElement(ee.a,null,r.a.createElement(te.a,{href:"/components/"},"Edit Mode")),r.a.createElement(ee.a,null,r.a.createElement(te.a,{href:""},"Resume Generator")),r.a.createElement(ee.a,null,r.a.createElement(te.a,{href:""},"Donate")),r.a.createElement(ae.a,{nav:!0,inNavbar:!0},r.a.createElement(ne.a,{nav:!0,caret:!0},"Settings"),r.a.createElement(re.a,{right:!0},r.a.createElement(le.a,null,"Help"),r.a.createElement(le.a,null,"My Profile"),r.a.createElement(le.a,null,"Manage Resumes"),r.a.createElement(le.a,{divider:!0}),r.a.createElement(le.a,null,"Logout")))))))}}]),t}(r.a.Component);function ie(){var e=Object(D.a)(["width:100%"]);return ie=function(){return e},e}var oe=function(e){function t(e){var a;Object(O.a)(this,t),a=Object(F.a)(this,Object(N.a)(t).call(this,e));var n=new y;return a.binded=a.expandRight.bind(Object(T.a)(Object(T.a)(a))),a.update=a.update.bind(Object(T.a)(Object(T.a)(a))),a.state={rightIsExpanded:!1,content:"This is the collapsed right panel",user:n},a}return Object(B.a)(t,e),Object(S.a)(t,[{key:"expandRight",value:function(){this.setState({rightIsExpanded:!this.state.rightIsExpanded})}},{key:"update",value:function(e){var t=JSON.parse(JSON.stringify(this.state.user));t[e.target.name]=e.target.value,console.log(t),this.setState({user:t})}},{key:"render",value:function(){if(this.state.rightIsExpanded){Object(R.a)(Q)(ie());return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(U.Layout.Col,{span:"24"},r.a.createElement(Q,{className:"expanded",content:"This is the expanded right panel",profile:this.state.user,expandRight:this.binded,direction:"right"})))}return r.a.createElement("div",null,r.a.createElement(ce,null),r.a.createElement(U.Layout.Col,{span:"12"},r.a.createElement(z,{profile:this.state.user,upd:this.update})),r.a.createElement(U.Layout.Col,{span:"12"},r.a.createElement(Q,{content:this.state.content,profile:this.state.user,expandRight:this.binded,direction:"left"})))}}]),t}(n.Component);var ue=Object(w.b)(function(e){return{user:e.user}})(oe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=document.getElementById("root");c.a.render(r.a.createElement(w.a,{store:I},r.a.createElement(ue,null)),se),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[161,2,1]]]);
//# sourceMappingURL=main.9f918adf.chunk.js.map