(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),u=(n(12),n(7)),o=n(2),s=(n(13),n(0));function d(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(0),d=Object(o.a)(i,2),l=d[0],j=d[1],b=Object(c.useState)(""),O=Object(o.a)(b,2),h=O[0],f=O[1],p=Object(c.useState)(""),v=Object(o.a)(p,2),x=v[0],g=v[1],m=Object(c.useState)([]),y=Object(o.a)(m,2),N=y[0],C=y[1],I=Object(c.useRef)([]);I.current=[0,0].map((function(e,t){return I.current[t]=a.a.createRef()}));var S=function(e){var t=Object(u.a)(N),c=N.map((function(e){return e.id})).indexOf(parseInt(e.currentTarget.dataset.id));N[c].remove=!0,N[c].done?N[c].done=!1:N[c].done=!0,C(t);for(var a=0,r=0;r<t.length;r++){t[r].done&&(a+=1)}j(n-a)},k=function(e){var t=N.map((function(e){return e.id})).indexOf(parseInt(e.currentTarget.dataset.id));N[t].done=!1,N.splice(t,1),C(N);for(var n=0,c=0;c<N.length;c++){N[c].done&&(n+=1)}j(N.length-n),r(N.length)};return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Todo List"}),Object(s.jsx)("p",{children:"Get it done today"}),Object(s.jsxs)("p",{className:"summary",children:[Object(s.jsx)("b",{children:l})," remaining out of ",Object(s.jsx)("b",{children:n})," tasks"]}),Object(s.jsxs)("div",{className:"inputContainer",children:[Object(s.jsx)("input",{type:"text",id:"itemInput",placeholder:"Enter Items",ref:I.current[0],value:h,onChange:function(e){f(e.target.value)}},"a"),Object(s.jsx)("input",{type:"text",id:"quantityInput",placeholder:"Quantity",ref:I.current[1],value:x,onChange:function(e){isNaN(e.target.value)?g(e.target.value):g("  \xd7  ".concat(e.target.value))}},"b"),Object(s.jsx)("button",{id:"enter",onClick:function(e){var t=I.current[0].current.value,c=parseInt(I.current[1].current.value.replace(/\D+/g,""));""!==t&&(C((function(e){return e.concat({id:n,title:t,done:!1,remove:!1,quantity:c})})),r(n+1),j(n+1),f(""),g(""))},children:"Add"})]}),Object(s.jsx)("ul",{children:N.map((function(e,t){return Object(s.jsxs)("div",{className:"list",children:[Object(s.jsx)("li",{"data-id":e.id,onClick:S,className:e.done?"is-done ":"",children:e.quantity&&!isNaN(e.quantity)?"".concat(e.title,"  \xd7  ").concat(e.quantity):e.title}),e.done?Object(s.jsx)("button",{className:"deleteButton","data-id":e.id,onClick:k,children:"Remove"}):null]},t)}))})]})})}var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),l()}},[[15,1,2]]]);
//# sourceMappingURL=main.1f7c9a2a.chunk.js.map