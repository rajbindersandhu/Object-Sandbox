(this.webpackJsonpmyfirst=this.webpackJsonpmyfirst||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),l=c.n(n),s=c(8),a=c.n(s),i=(c(13),c(3)),r=c(6),j=c(2),b=(c(14),c(0));var d=function(){var e=l.a.useState(""),t=Object(j.a)(e,2),c=t[0],n=t[1],s=l.a.useState([]),a=Object(j.a)(s,2),d=a[0],o=a[1],u=l.a.useState(!1),O=Object(j.a)(u,2),h=O[0],x=O[1],p=l.a.useState(""),f=Object(j.a)(p,2),v=f[0],g=f[1],y=l.a.useState([]),k=Object(j.a)(y,2),m=k[0],S=k[1],C=l.a.useState(!1),N=Object(j.a)(C,2),w=N[0],E=N[1],L=l.a.useState([]),A=Object(j.a)(L,2),B=A[0],F=A[1],T=l.a.useState({key:"",value:""}),D=Object(j.a)(T,2),V=D[0],I=D[1],J=l.a.useState(!1),K=Object(j.a)(J,2),P=K[0],R=K[1];function X(e){((e.target.id=e.target.value.length>0)||(e.target.id="selOpt"))&&I(Object(i.a)(Object(i.a)({},V),{},{value:e.target.value}))}return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("div",{className:"key-box",children:[Object(b.jsx)("h3",{children:"Enter the list of keys below : "}),Object(b.jsx)("p",{children:"(seprated by comma's)"}),Object(b.jsx)("textarea",{rows:5,cols:50,value:c,onChange:function(e){return n(e.target.value)},placeholder:"A, B, C......",style:{paddingLeft:"2%"},disabled:h}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){if(c.length>0){var e=c.split(",").filter((function(e){return/[\w]+/.test(e)}));o(Object(r.a)(e)),x(!0)}else alert("Enter the key List")},disabled:h,children:"NEXT"})]}),h?Object(b.jsxs)("div",{className:"value-box",children:[Object(b.jsx)("h3",{children:"Enter the list of values below (optional) : "}),Object(b.jsx)("p",{children:"(seprated by comma's)"}),Object(b.jsx)("textarea",{rows:5,cols:50,value:v,onChange:function(e){return g(e.target.value)},placeholder:"A, B, C......",style:{paddingLeft:"2%"},disabled:w}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:function(){if(v.length>0){var e=v.split(",").filter((function(e){return/[\w]+/.test(e)}));S(Object(r.a)(e))}E(!0)},disabled:w,children:"NEXT"})]}):null,w?Object(b.jsxs)("div",{className:"final-box",children:[Object(b.jsx)("p",{children:"Select the key : "}),Object(b.jsxs)("select",{onChange:function(e){return I(Object(i.a)(Object(i.a)({},V),{},{key:e.target.value}))},children:[Object(b.jsx)("option",{disabled:!0,selected:!0,children:"Select Key"}),d.map((function(e,t){return Object(b.jsx)("option",{children:e.trim()},t)}))]}),Object(b.jsx)("p",{children:"Select the Value : "}),Object(b.jsxs)("select",{id:"selOpt",onChange:X,children:[Object(b.jsx)("option",{disabled:!0,selected:!0,children:"Select Value"}),m.map((function(e,t){return Object(b.jsx)("option",{children:e.trim()},t)}))]}),Object(b.jsx)("span",{children:" OR "}),Object(b.jsx)("input",{type:"text",id:"inpOpt",onChange:X}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"btn-final",children:[Object(b.jsx)("button",{onClick:function(){if(V.key.length>0&&V.value.length>0){var e={};e[V.key]=V.value,B.push(e),F(Object(r.a)(B)),R(!0)}},children:"ADD"}),Object(b.jsx)("button",{onClick:function(){n(""),o([]),x(!1),g(""),S([]),E(!1),F([]),I({key:"",value:""}),R(!1)},children:"ReStart"})]})]}):null,Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Object table"}),P?Object(b.jsx)("div",{className:"table",children:Object(b.jsxs)("table",{className:"obj-table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{style:{border:"2px solid black"},children:"Key"}),Object(b.jsx)("th",{style:{border:"2px solid black"},children:"Value"})]})}),Object(b.jsx)("tbody",{children:B.map((function(e,t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{style:{border:"2px solid black"},children:Object.keys(e)[0]}),Object(b.jsx)("td",{style:{border:"2px solid black"},children:e[Object.keys(e)[0]]})]},t)}))})]})}):null]})]})},o=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,l=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),l(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.9052233e.chunk.js.map