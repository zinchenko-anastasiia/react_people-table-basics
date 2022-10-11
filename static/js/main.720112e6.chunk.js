(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(24),a=n(9),r=(n(33),n(34),n(4)),s=n(22),i=n(7),j=n(5),l=n(0),o=n(3);n(35);function b(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var d=n(14),h=n.n(d),p=n(2),u=function(e){var t=e.persone;return Object(p.jsx)(a.b,{to:"/people/".concat(t.slug),className:h()({"has-text-danger":"f"===t.sex}),children:t.name})},x=function(e){var t=e.peopleTable,n=e.slugPersone,c=function(e){return e.slug===n};return Object(p.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Sex"}),Object(p.jsx)("th",{children:"Born"}),Object(p.jsx)("th",{children:"Died"}),Object(p.jsx)("th",{children:"Mother"}),Object(p.jsx)("th",{children:"Father"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e){return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("tr",{"data-cy":"person",className:h()({"has-background-warning":c(e)}),children:[Object(p.jsx)("td",{children:Object(p.jsx)(u,{persone:e})}),Object(p.jsx)("td",{children:e.sex}),Object(p.jsx)("td",{children:e.born}),Object(p.jsx)("td",{children:e.died}),Object(p.jsx)("td",{children:e.mother?Object(p.jsx)(u,{persone:e.mother}):e.motherName||"-"}),Object(p.jsx)("td",{children:e.father?Object(p.jsx)(u,{persone:e.father}):e.fatherName||"-"})]},e.slug)})}))})]})},O=function(e){var t=e.peopleTable,n=Object(o.p)().slug,c=void 0===n?null:n;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"title",children:"People Page"}),Object(p.jsx)(x,{peopleTable:t,slugPersone:c})]})},m=function(e){var t=e.to,n=e.text,c=e.end,r=void 0!==c&&c;return Object(p.jsx)(a.c,{className:function(e){var t=e.isActive;return h()("navbar-item",{"has-background-grey-lighter":t})},to:t,end:r,children:n})},f=(n(37),function(){return Object(p.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(p.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.isLoading,n=e.isError,c=e.peopleTable;return Object(p.jsx)("div",{className:"block",children:Object(p.jsxs)("div",{className:"box table-container",children:[t&&Object(p.jsx)(f,{}),n&&Object(p.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!n&&!t&&0===c.length&&Object(p.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})},g=function(){var e=Object(l.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(l.useState)(!1),d=Object(j.a)(a,2),h=d[0],u=d[1],x=Object(l.useState)(!1),f=Object(j.a)(x,2),g=f[0],N=f[1];return Object(l.useEffect)((function(){N(!0);var e=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,c(t.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{mother:t.find((function(t){return e.motherName===t.name})),father:t.find((function(t){return e.fatherName===t.name}))})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:return e.prev=10,N(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(p.jsxs)("div",{"data-cy":"app",children:[Object(p.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"navbar-brand",children:[Object(p.jsx)(m,{to:"/",text:"Home",end:!0}),Object(p.jsx)(m,{to:"/people",text:"People"})]})})}),Object(p.jsx)("main",{className:"section",children:Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)(o.d,{children:[Object(p.jsx)(o.b,{path:"/",element:Object(p.jsx)("h1",{className:"title",children:"Home Page"}),children:Object(p.jsx)(o.b,{path:"home",element:Object(p.jsx)(o.a,{to:"/",replace:!0})})}),Object(p.jsxs)(o.b,{path:"/people",children:[Object(p.jsx)(o.b,{index:!0,element:Object(p.jsx)(O,{peopleTable:n})}),Object(p.jsx)(o.b,{path:":slug",element:Object(p.jsx)(O,{peopleTable:n})})]}),Object(p.jsx)(o.b,{path:"*",element:Object(p.jsx)("h1",{className:"title",children:"Page not found"})})]}),(h||g)&&Object(p.jsx)(v,{isError:h,isLoading:g,peopleTable:n})]})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(p.jsx)(a.a,{children:Object(p.jsx)(g,{})}))}},[[38,1,2]]]);
//# sourceMappingURL=main.720112e6.chunk.js.map