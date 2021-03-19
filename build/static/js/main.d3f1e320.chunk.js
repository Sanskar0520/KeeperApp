(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{41:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),o=a.n(r),c=a(20),i=a(2),s=a(12),m=a(8);var u=function(e){return l.a.createElement("header",null,l.a.createElement("h1",null,"Keeper"),l.a.createElement("button",{id:"logout",onClick:e.logoutFunc,style:{position:"absolute",right:"1.2rem",top:"1.8rem",fontSize:"1.3rem",padding:"0.25rem 0.25rem 0.25rem 0.25rem"}},e.logOut))};var d=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},f=a(15),g=a.n(f),E="https://git.heroku.com/dry-basin-38726.git";var p=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)({email:"",password:""}),f=Object(m.a)(c,2),p=f[0],h=f[1],b=Object(i.f)(),v=function(e){var t=e.target,a=t.id,n=t.value;h((function(e){return Object(s.a)(Object(s.a)({},e),{},{[a]:n})}))};return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("main",{class:"form-signin"},l.a.createElement("form",{style:{lineHeight:"5rem"}},l.a.createElement("h1",{class:"h3 mb-3 fw-normal",style:{textAlign:"center",fontSize:"2.3rem"}},"Sign In"),l.a.createElement("label",{for:"inputEmail",class:"visually-hidden"},"Email address"),l.a.createElement("input",{onChange:v,style:{margin:"1.4rem 0 1.8rem 0",padding:"0.6rem"},type:"email",id:"email",class:"form-control",placeholder:"Email address",required:"",autofocus:""}),l.a.createElement("label",{for:"inputPassword",class:"visually-hidden"},"Password"),l.a.createElement("input",{onChange:v,style:{margin:"1.4rem 0 1rem 0",padding:"0.6rem"},type:"password",id:"password",class:"form-control",placeholder:"Password",required:""}),l.a.createElement("p",{style:{color:"red"}},r),l.a.createElement("button",{onClick:function(e){e.preventDefault(),g.a.post(E+"signin",p).then((function(e){localStorage.setItem("token",e.data),localStorage.getItem("token")===e.data&&o("Email or Password does not match our records"),b.push("/notes")})).catch((function(e){console.log(e)}))},style:{backgroundColor:"#f5ba13",color:"white",fontSize:"1.2rem"},class:"w-100 btn btn-sm",type:"submit"},"Sign in"))),l.a.createElement(d,null))};var h=function(){var e=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],r=t[1],o=function(e){var t=e.target,a=t.id,n=t.value;r((function(e){return Object(s.a)(Object(s.a)({},e),{},{[a]:n})}))};return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("main",{class:"form-signin"},l.a.createElement("form",{style:{lineHeight:"5rem"}},l.a.createElement("h1",{class:"h3 mb-3 fw-normal",style:{textAlign:"center",fontSize:"2.3rem"}},"Register"),l.a.createElement("label",{for:"firstName",class:"visually-hidden"},"firstName"),l.a.createElement("input",{onChange:o,style:{margin:"1.4rem 0 1rem 0",padding:"0.6rem"},type:"name",id:"firstName",class:"form-control",placeholder:"First Name",required:""}),l.a.createElement("label",{for:"lastName",class:"visually-hidden"},"lastName"),l.a.createElement("input",{onChange:o,style:{margin:"1.4rem 0 1rem 0",padding:"0.6rem"},type:"name",id:"lastName",class:"form-control",placeholder:"Last Name",required:""}),l.a.createElement("label",{for:"inputEmail",class:"visually-hidden"},"Email address"),l.a.createElement("input",{onChange:o,style:{margin:"1.4rem 0 1.8rem 0",padding:"0.6rem"},type:"email",id:"email",class:"form-control",placeholder:"Email Address",required:"",autofocus:""}),l.a.createElement("label",{for:"inputPassword",class:"visually-hidden"},"Password"),l.a.createElement("input",{onChange:o,style:{margin:"1.4rem 0 1rem 0",padding:"0.6rem"},type:"password",id:"password",class:"form-control",placeholder:"Password",required:""}),l.a.createElement("button",{onClick:function(e){e.preventDefault(),g.a.post(E+"register",a).then((function(){window.location="/signin"})).catch((function(e){console.log(e)}))},style:{backgroundColor:"#f5ba13",color:"white",fontSize:"1.2rem"},class:"w-100 btn btn-sm",type:"submit"},"Register"))),l.a.createElement(d,null))};var b=function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("div",{class:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"},l.a.createElement("main",{class:"px-4",style:{margin:"8rem",textAlign:"center",lineHeight:"4.5rem"}},l.a.createElement("h1",null,"Wanna keep your notes safe?"),l.a.createElement("p",{class:"lead"},"Then go ahead, register yourself and start making notes."),l.a.createElement("a",{href:"/Register"},l.a.createElement("button",{style:{backgroundColor:"#f5ba13",color:"white",fontSize:"1.8rem",borderRadius:"20px",margin:"0 3rem 0 0"},class:"w-25 btn btn-sm",type:"submit"},"Register")),l.a.createElement("a",{href:"/Signin"},l.a.createElement("button",{style:{backgroundColor:"#f5ba13",color:"white",fontSize:"1.8rem",borderRadius:"20px"},class:"w-25 btn btn-sm",type:"submit"},"Sign in")))),l.a.createElement(d,null))},v=a(13),y=a(38),w=a.n(y);var O=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{type:"button",onClick:function(){e.funcDel(e.id)}},l.a.createElement(w.a,null)))},S=a(39),j=a.n(S);var k=function(e){return l.a.createElement("div",null,l.a.createElement("form",{onChange:e.funcChange},l.a.createElement("input",{name:"title",placeholder:"Title",value:e.value.title}),l.a.createElement("textarea",{name:"content",placeholder:"Take a note...",rows:"3",value:e.value.content}),l.a.createElement("button",{id:"add",type:"button",onClick:e.funcAdd},l.a.createElement(j.a,null))))};var C=function(){var e=Object(n.useState)(!0),t=Object(m.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)({title:"",content:""}),c=Object(m.a)(o,2),i=c[0],f=c[1],p=Object(n.useState)([]),h=Object(m.a)(p,2),b=h[0],y=h[1];function w(e){y((function(t){return t.filter((function(t,a){return a!==e}))}))}return Object(n.useEffect)((function(){g.a.get(E+"notes",{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){r(!!e),y(e.data.notes)})).catch((function(e){console.log(e)}))}),[]),a?l.a.createElement("div",null,l.a.createElement(u,{logOut:"Log Out",logoutFunc:function(){localStorage.setItem("token",""),localStorage.setItem("id",""),window.location="/"}}),l.a.createElement(k,{value:i,funcAdd:function(){console.log({id:localStorage.getItem("id"),notes:[].concat(Object(v.a)(b),[i])}),g.a.post(E+"notes",{notes:[].concat(Object(v.a)(b),[i])},{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e),y((function(e){return[].concat(Object(v.a)(e),[i])})),f({title:"",content:""})})).catch((function(e){console.log(e)}))},funcChange:function(e){var t=e.target,a=t.name,n=t.value;f((function(e){return Object(s.a)(Object(s.a)({},e),{},{[a]:n})}))}}),b.length>0&&b.map((function(e,t){return l.a.createElement(O,{key:t,id:t,title:e.title,content:e.content,funcDel:w})})),l.a.createElement(d,null)):l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement("h1",null,"Access Denied"),l.a.createElement(d,null))};var x=function(){return l.a.createElement(c.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(b,null)),l.a.createElement(i.a,{path:"/register"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"/signin"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/notes"},l.a.createElement(C,null))))};o.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d3f1e320.chunk.js.map