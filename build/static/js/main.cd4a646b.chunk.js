(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{12:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),a=n(21),u=n.n(a),s=(n(12),n(1)),i=n.n(s),o=n(22),d=n(4),p=n(5),f=n(7),b=n.n(f),j="api/persons",l=function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get(j);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post(j,t);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.put("".concat(j,"/").concat(t.id),n);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.delete("".concat(j,"/").concat(t.id));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=n(0),v=function(e){return function(t){return e(t.target.value)}},w=function(e){return Object(O.jsxs)("div",{children:["Filter shown with ",Object(O.jsx)("input",{value:e.filter,onChange:e.setFilter})]})},g=function(e){var t=Object(r.useState)(""),n=Object(p.a)(t,2),c=n[0],a=n[1],u=Object(r.useState)(""),s=Object(p.a)(u,2),i=s[0],o=s[1];return Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.addPerson({name:c,number:i})},children:[Object(O.jsxs)("div",{children:["name: ",Object(O.jsx)("input",{value:c,onChange:v(a)})]}),Object(O.jsxs)("div",{children:["number: ",Object(O.jsx)("input",{value:i,onChange:v(o)})]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"add"})})]})},y=function(e){return e.persons.map((function(t){return Object(O.jsxs)("li",{children:[Object(O.jsxs)("span",{children:[t.name,t.number]}),Object(O.jsx)("button",{onClick:function(){return e.delete(t)},children:"Delete"})]},t.id)}))},k=function(e){var t=e.message,n=e.type;return Object(O.jsx)("p",{className:"".concat(n," notification"),children:t})},C=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),u=Object(p.a)(a,2),s=u[0],f=u[1],b=Object(r.useState)(),j=Object(p.a)(b,2),C=j[0],S=j[1],F=function(e){S(e),setTimeout((function(){return S(null)}),3e3)},P=function(){var e=Object(d.a)(i.a.mark((function e(t){var r,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=n.find((function(e){return e.name===t.name})))){e.next=16;break}if(window.confirm("".concat(t.name," is already added to phonebook, replace old number with the new one?"))){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,m(r,t);case 7:a=e.sent,c(n.map((function(e){return e.id!==a.id?e:a}))),F({message:"Updated ".concat(a.name),type:"success"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),F({message:"Information of ".concat(r.name," has already been removed from the server."),type:"error"});case 15:return e.abrupt("return");case 16:return e.next=18,h(t);case 18:u=e.sent,c([].concat(Object(o.a)(n),[u])),F({message:"Added ".concat(t.name),type:"success"});case 21:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Delete ".concat(t.name,"?"))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x(t);case 4:c(n.filter((function(e){return e.id!==t.id}))),F({message:"Removed ".concat(t.name),type:"success"});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,l();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Phonebook"}),(null===C||void 0===C?void 0:C.message)&&Object(O.jsx)(k,{message:C.message,type:C.type}),Object(O.jsx)(w,{filter:s,setFilter:v(f)}),Object(O.jsx)("h3",{children:"Add new"}),Object(O.jsx)(g,{addPerson:P}),Object(O.jsx)("h2",{children:"Numbers"}),Object(O.jsx)("ul",{children:Object(O.jsx)(y,{persons:n.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())})),delete:D})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,u=t.getTTFB;n(e),r(e),c(e),a(e),u(e)}))};u.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.cd4a646b.chunk.js.map