(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{50:function(e,n,t){"use strict";t.r(n);var c,r,i,o,a,l,d,s,u,b=t(0),j=t.n(b),h=t(16),f=t.n(h),O=t(34),x=t(5),m=t(3),p=t(55),g=t(33),k="hsl(235, 24%, 19%)",v="hsl(234, 11%, 52%)",y="hsl(233, 14%, 35%)",w="hsl(220, 98%, 61%)",C={body:"hsl(235, 21%, 11%)",textPrimary:"#fff",textSecondary:v,textHover:w,listItem:k,listItemBorder:y,checkBoxBorder:y},I={body:"hsl(0, 0%, 98%)",textPrimary:v,textSecondary:k,textHover:w,listItem:"#fff",listItemBorder:v,checkBoxBorder:"hsl(235, 19%, 35%)"},T=t(4),S=Object(m.b)(c||(c=Object(T.a)(['\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, font, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-weight: inherit;\n    font-style: inherit;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline;\n  }\n  /* remember to define focus styles! */\n  :focus {\n    outline: 0;\n  }\n  body {\n    line-height: 1;\n    color: black;\n    background: white;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  /* tables still need \'cellspacing="0"\' in the markup */\n  table {\n    border-collapse: separate;\n    border-spacing: 0;\n  }\n  caption, th, td {\n    text-align: left;\n    font-weight: normal;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: "";\n  }\n  blockquote, q {\n    quotes: "" "";\n  }\n']))),B=Object(m.b)(r||(r=Object(T.a)(["\n  body {\n    background: ",";\n    color: ",";\n    font-size: 18px;\n    font-family: 'Josefin Sans';\n  }\n"])),(function(e){return e.theme.body}),(function(e){return e.theme.textPrimary})),q=m.c.div(i||(i=Object(T.a)(["\n  border-radius: 5px;\n  overflow: hidden;\n"]))),L=m.c.div(o||(o=Object(T.a)(["\n  margin-bottom: 20px;\n"]))),z=Object(m.c)(q)(a||(a=Object(T.a)(["\n  margin-bottom: 20px;\n"]))),P=m.c.div(l||(l=Object(T.a)(["\n  width: 600px;\n  margin: auto;\n  margin-top: 100px;\n"]))),D=m.c.div(d||(d=Object(T.a)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 250px;\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: -1;\n"])),(function(e){return e.url?e.url:""})),A=t(1);function E(e){var n=e.url;return Object(A.jsx)(D,{url:n})}var H,J=m.c.header(s||(s=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),F=m.c.h2(u||(u=Object(T.a)(["\n  font-size: 35px;\n  letter-spacing: 0.5em;\n"]))),M=m.c.button(H||(H=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])));function V(e){var n=e.theme,t=e.onClick;return Object(A.jsx)(M,{onClick:t,children:"dark"===n?Object(A.jsx)("img",{src:"./images/icon-sun.svg",alt:"theme toggle button icon"}):Object(A.jsx)("img",{src:"./images/icon-moon.svg",alt:"theme toggle button icon"})})}var G=t(9),K=Object(G.b)({name:"theme",initialState:"dark",reducers:{toggleTheme:function(e){return"dark"===e?"light":"dark"}}}),N=K.actions.toggleTheme,Q=K.reducer;function R(){var e=Object(x.c)((function(e){return e.theme})),n=Object(x.b)();return Object(A.jsxs)(J,{children:[Object(A.jsx)(F,{children:"TODO"}),Object(A.jsx)(V,{theme:e,onClick:function(){n(N())}})]})}var U,W,X,Y,Z,$=t(10),_=t(26),ee=Object(G.b)({name:"todoList",initialState:[],reducers:{addList:{reducer:function(e,n){e.push(n.payload)},prepare:function(e){return{payload:{id:Object(G.c)(),text:e,checked:!1}}}},clearCompletedTodo:function(e){return e.filter((function(e){return!1===e.checked}))},moveTodo:function(e,n){var t=n.payload,c=t.fromId,r=t.toId,i=e.findIndex((function(e){return e.id===c})),o=e.findIndex((function(e){return e.id===r})),a=e[o];e[o]=e[i],e[i]=a},toggleTodo:function(e,n){return e.map((function(e){return e.id===n.payload?Object(_.a)(Object(_.a)({},e),{},{checked:!e.checked}):e}))}}}),ne=ee.actions,te=ne.addList,ce=ne.moveTodo,re=ne.clearCompletedTodo,ie=ne.toggleTodo,oe=ee.reducer,ae=m.c.span(U||(U=Object(T.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 25px;\n  height: 25px;\n  border-radius: 25px;\n  background: ",";\n  border: solid 1px ",";\n"])),(function(e){return e.checked?"linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))":"transparent"}),(function(e){return e.theme.checkBoxBorder}));function le(e){var n=e.checked,t=void 0!==n&&n;return Object(A.jsx)(ae,{checked:t,children:t&&Object(A.jsx)("img",{src:"./images/icon-check.svg",alt:"check icon"})})}var de,se,ue,be,je=m.c.div(W||(W=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),he=m.c.div(X||(X=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background-color: ",";\n"])),(function(e){return e.theme.listItem})),fe=m.c.div(Y||(Y=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n"]))),Oe=m.c.input(Z||(Z=Object(T.a)(["\n  background-color: transparent;\n  border: none;\n  color: ",";\n  font-family: 'Josefin Sans';\n  font-size: 18px;\n"])),(function(e){return e.theme.textPrimary}));function xe(){var e=Object(b.useState)(""),n=Object($.a)(e,2),t=n[0],c=n[1],r=Object(x.b)();return Object(A.jsx)(he,{children:Object(A.jsxs)(je,{children:[Object(A.jsx)(fe,{children:Object(A.jsx)(le,{})}),Object(A.jsx)("form",{onSubmit:function(e){e.preventDefault(),r(te(t)),c("")},children:Object(A.jsx)(Oe,{value:t,onChange:function(e){return c(e.currentTarget.value)},placeholder:"Create a new todo"})})]})})}var me=m.c.div(de||(de=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),pe=m.c.div(se||(se=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 70px;\n  background-color: ",";\n  border-bottom: solid 1px ",";\n"])),(function(e){return e.theme.listItem}),(function(e){return e.theme.listItemBorder})),ge=m.c.button(ue||(ue=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 70px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n"]))),ke=m.c.span(be||(be=Object(T.a)(["\n  color: ",";\n\n  ","\n"])),(function(e){return e.theme.textPrimary}),(function(e){return e.checked&&"\n    text-decoration-line: line-through;\n    opacity: 0.5;\n  "})),ve=t(56),ye=t(57);function we(e){var n=e.todo,t=n.id,c=n.checked,r=n.text,i=Object(x.b)(),o=Object(ve.a)((function(){return{item:n,type:"TODO"}})),a=Object($.a)(o,2)[1],l=Object(ye.a)({accept:"TODO",drop:function(e){var t=e.id,c=n.id;i(ce({fromId:t,toId:c}))}}),d=Object($.a)(l,2)[1];return Object(A.jsx)("div",{ref:d,children:Object(A.jsx)(pe,{ref:a,children:Object(A.jsxs)(me,{children:[Object(A.jsx)(ge,{onClick:function(){i(ie(t))},children:Object(A.jsx)(le,{checked:c})}),Object(A.jsx)(ke,{checked:c,children:r})]})})})}var Ce,Ie,Te,Se="ALL",Be="ACTIVE",qe="COMPLETED",Le=Object(G.b)({name:"filter",initialState:{type:Se},reducers:{changeFilter:function(e,n){e.type=n.payload}}}),ze=Le.actions.changeFilter,Pe=Le.reducer;var De=m.c.div(Ce||(Ce=Object(T.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  background-color: ",";\n  height: 50px;\n  width: 100%;\n  font-size: 14px;\n  color: ",";\n"])),(function(e){return e.theme.listItem}),(function(e){return e.theme.textSecondary})),Ae=m.c.li(Ie||(Ie=Object(T.a)(["\n  display: inline-block;\n  margin-left: 10px;\n  margin-right: 10px;\n"]))),Ee=m.c.button(Te||(Te=Object(T.a)(["\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  color: inherit;\n  font-weight: 700;\n  transition: color 0.2s linear;\n\n  &:hover{\n    color: ",";\n    transition: color 0.2s linear;\n  }\n\n  ",";\n"])),(function(e){return e.theme.textHover}),(function(e){return e.active&&"color: ".concat(e.theme.textHover)}));function He(){var e=Object(x.c)((function(e){return e.todoList})),n=function(){var e=Object(x.b)(),n=Object(x.c)((function(e){return e.filter}));return[function(e){return e===n.type},function(n){e(ze(n))}]}(),t=Object($.a)(n,2),c=t[0],r=t[1],i=function(){var e=Object(x.b)();return function(){e(re())}}();return Object(A.jsxs)(De,{children:[Object(A.jsxs)("div",{children:[e.length," items left"]}),Object(A.jsxs)("ul",{children:[Object(A.jsx)(Ae,{children:Object(A.jsx)(Ee,{active:c(Se),onClick:function(){return r(Se)},children:"All"})}),Object(A.jsx)(Ae,{children:Object(A.jsx)(Ee,{active:c(Be),onClick:function(){return r(Be)},children:"Active"})}),Object(A.jsx)(Ae,{children:Object(A.jsx)(Ee,{active:c(qe),onClick:function(){return r(qe)},children:"Completed"})})]}),Object(A.jsx)(Ee,{onClick:i,children:"Clear Completed"})]})}function Je(){var e=Object(x.c)((function(e){return e.todoList})),n=Object(x.c)((function(e){return e.theme})),t=Object(x.c)((function(e){return e.filter}));return Object(A.jsxs)(m.a,{theme:"dark"===n?C:I,children:[Object(A.jsx)(B,{}),Object(A.jsx)(E,{url:"./images/bg-desktop-dark.jpg"}),Object(A.jsxs)(P,{children:[Object(A.jsx)(L,{children:Object(A.jsx)(R,{})}),Object(A.jsx)(z,{children:Object(A.jsx)(xe,{})}),Object(A.jsxs)(q,{children:[Object(A.jsx)(p.a,{backend:g.a,children:Object(A.jsx)("ul",{children:function(){var n=Object(O.a)(e);switch(t.type){case Se:break;case qe:n=e.filter((function(e){return!0===e.checked}));break;case Be:n=e.filter((function(e){return!1===e.checked}))}return n.map((function(e){return Object(A.jsx)(we,{todo:e},e.id)}))}()})}),Object(A.jsx)(He,{})]})]})]})}var Fe=t(8),Me=Object(Fe.b)({todoList:oe,theme:Q,filter:Pe}),Ve=Object(G.a)({reducer:Me});Ve.getState;f.a.render(Object(A.jsx)(j.a.StrictMode,{children:Object(A.jsxs)(x.a,{store:Ve,children:[Object(A.jsx)(S,{}),Object(A.jsx)(Je,{})]})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.9a4fe502.chunk.js.map