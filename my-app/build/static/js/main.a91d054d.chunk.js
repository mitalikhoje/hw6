(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(t,e,n){},37:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),s=n.n(r),i=(n(29),n(15)),o=n.n(i),u=n(17),p=n(5),b=n(63),j=n(1);var f=function(){var t=Object(a.useState)(""),e=Object(p.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),s=Object(p.a)(r,2),i=s[0],f=s[1];function l(){return(l=Object(u.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/get-last-name",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return n=t.sent,t.next=5,n.json();case 5:a=t.sent,f(a);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),t.target.reset(),function(t){l.apply(this,arguments)}({fName:n})},children:[Object(j.jsx)("label",{for:"fname",children:"First name: "}),Object(j.jsx)(b.a,{id:"outlined-basic",variant:"outlined",onChange:function(t){return c(t.target.value)}}),Object(j.jsx)("button",{type:"submit",children:"Submit"}),Object(j.jsxs)("p",{children:["Last name: ",i]})]})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),l()}},[[37,1,2]]]);
//# sourceMappingURL=main.a91d054d.chunk.js.map