(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),u=n(13),j=n.n(u),i=n(8),a=n(10),s=n(11),o=n(19),b="GET_USERNAME";var O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===b?t.payload.username:e},d=Object(s.b)({username:O}),f=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,h=Object(s.d)(d,f(Object(s.a)(o.a))),l=(n(28),n(1));var x=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("header",{children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})})},m=n(3),v=Object(a.b)((function(e){return{username:e.username}}))((function(e){var t=e.username;return Object(l.jsxs)("p",{children:["Hello ",t]})})),p=Object(a.b)((function(e){return{username:e.username}}),(function(e){return{updateUsername:function(t){return e(function(e){return{type:b,payload:{username:e}}}(t))}}}))((function(e){var t=e.updateUsername,n=e.username;return Object(l.jsx)("input",{onChange:function(e){var n=e.target.value;t(n)},value:n})})),g=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{children:"I am the Home Page"}),Object(l.jsx)(v,{}),Object(l.jsx)(p,{})]})},E=function(){return Object(l.jsx)("p",{children:"I am the About Page"})},F=n(20);var _=function(){var e=Object(r.useState)([]),t=Object(F.a)(e,2),n=(t[0],t[1]);Object(r.useEffect)((function(){c()}),[]);var c=function(){fetch("http://localhost8080/server/films").then((function(e){return e.json()})).then((function(e){n(e)}))};return Object(l.jsx)("div",{children:"Films"})},S=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(l.jsx)(g,{})}}),Object(l.jsx)(m.a,{path:"/films",render:function(){return Object(l.jsx)(_,{})}}),Object(l.jsx)(m.a,{path:"/about",render:function(){return Object(l.jsx)(E,{})}})]})};n(32);var y=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("main",{children:Object(l.jsx)(m.c,{children:Object(l.jsx)(S,{})})})})};n(33);var C=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{children:"Footer"})})};n(34);var I=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{}),Object(l.jsx)(y,{}),Object(l.jsx)(C,{})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,u=t.getLCP,j=t.getTTFB;n(e),r(e),c(e),u(e),j(e)}))};j.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(a.a,{store:h,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(I,{})})})}),document.getElementById("root")),P()}},[[35,1,2]]]);
//# sourceMappingURL=main.952d1827.chunk.js.map