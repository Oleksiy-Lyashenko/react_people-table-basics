(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(10),r=c.n(a),s=c(5),j=c(9),l=c.n(j),i=c(7),h=c(11),b=c(4),o=c(2),d=function(){return e="/people.json",fetch("".concat("https://mate-academy.github.io/react_people-table/api").concat(e)).then((function(e){return e.json()}));var e},p=(c(17),c(1)),O=function(){return Object(p.jsx)("div",{className:"page",children:Object(p.jsx)("h2",{className:"page__title",children:"HomePage"})})},m=function(){return Object(p.jsx)("div",{className:"page",children:Object(p.jsx)("h2",{className:"page__title",children:"Page not found"})})},u=function(e){var t=e.person;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:t.name}),Object(p.jsx)("td",{children:t.sex}),Object(p.jsx)("td",{children:t.born}),Object(p.jsx)("td",{children:t.died}),Object(p.jsx)("td",{children:t.fatherName}),Object(p.jsx)("td",{children:t.motherName})]},t.name)})},x=function(e){var t=e.people;return Object(p.jsxs)("table",{className:"PeopleTable",children:[Object(p.jsx)("thead",{className:"PeopleTable__head",children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Sex"}),Object(p.jsx)("th",{children:"Born"}),Object(p.jsx)("th",{children:"Died"}),Object(p.jsx)("th",{children:"Father"}),Object(p.jsx)("th",{children:"Mother"})]})}),Object(p.jsx)("tbody",{className:"PeopleTable__body",children:t.map((function(e){return Object(p.jsx)(u,{person:e})}))})]})},f=function(e){var t=e.people;return Object(p.jsxs)("div",{className:"page",children:[Object(p.jsx)("h2",{className:"page__title",children:"People page"}),Object(p.jsx)(x,{people:t})]})},N=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),j=Object(b.a)(r,2),u=j[0],x=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d();case 2:t=e.sent,c=t.map((function(e){var c=Object(i.a)({},e),n=t.filter((function(e){return c.fatherName===e.name})),a=t.filter((function(e){return c.motherName===e.name}));if(n.length>0){var r=t.filter((function(e){return c.fatherName===e.name}));c.fatherName=Object(i.a)({},r[0])}if(a.length>0){var s=t.filter((function(e){return c.motherName===e.name}));c.motherName=Object(i.a)({},s[0])}return c})),x(c),a(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),console.log(u)}),[]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{className:"nav",children:Object(p.jsxs)("div",{className:"nav-my_site",children:[Object(p.jsx)(s.b,{to:"/",className:"nav__link",children:"Home"}),Object(p.jsx)(s.b,{to:"/people",className:"nav__link",children:"PeoplePage"})]})})}),Object(p.jsx)("h1",{className:"App__title",children:"My site"}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",element:Object(p.jsx)(O,{})}),Object(p.jsx)(o.a,{path:"/people",element:Object(p.jsx)(f,{people:c})}),Object(p.jsx)(o.a,{path:"*",element:Object(p.jsx)(m,{})})]})]})};r.a.render(Object(p.jsx)(s.a,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.5dbc296f.chunk.js.map