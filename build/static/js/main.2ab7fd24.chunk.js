(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[0],{14:function(e,t,c){e.exports={searchForm__input:"SearchBar_searchForm__input__1D6ki",searchForm__button:"SearchBar_searchForm__button__2OTUV"}},29:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(23),r=c.n(a),i=(c(29),c(30),c(2)),j=c(6),o=c(12),b=c.n(o),l=c(24),h=c(13),u=c.n(h);u.a.defaults.baseURL="https://api.themoviedb.org/3/";var x=function(){var e=Object(l.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 1,e.next=3,u.a.get("trending/movie/week?api_key=".concat("eef1cd881f885cf39765ac4359f8bbb0","&page=").concat(1)).then((function(e){return e.data.results}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=c(0);function m(e){e.page;var t=Object(n.useState)([]),c=Object(j.a)(t,2),s=c[0],a=c[1];return x(1).then((function(e){return a(e)})),Object(O.jsx)("ul",{children:s.map((function(e){var t=e.title,c=e.id,n=e.poster_path;return Object(O.jsxs)("li",{children:[Object(O.jsxs)("h3",{children:[t," "]}),Object(O.jsx)("img",{className:"setMovies",src:n,alt:t})]},c)}))})}function d(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"HomePage"}),Object(O.jsx)(m,{})]})}function v(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{children:"Cast"})})}function _(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{children:"Cast"})})}var p=c(5),f=c(14),g=c.n(f);function N(e){var t=e.onSubmit,c=Object(n.useState)(""),s=Object(j.a)(c,2),a=s[0],r=s[1];return Object(O.jsx)("header",{className:"Searchbar",children:Object(O.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),console.log(" \u043f\u0435\u0440\u0435\u0434 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u043e\u0439",a),t(a.trim().toLowerCase()),r("")},children:[Object(O.jsx)("input",{className:g.a.searchForm__input,type:"text",onChange:function(e){r(e.target.value)},value:a,placeholder:"Search movies"})," ",Object(O.jsx)("button",{type:"submit",className:g.a.searchForm__button,children:Object(O.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})})}function F(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(N,{}),Object(O.jsx)("h2",{children:" MoviesPage"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"cast",children:"cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(p.b,{to:"reviews",children:"reviews"})})]}),Object(O.jsxs)(i.d,{children:[Object(O.jsx)(i.b,{to:":cast",element:Object(O.jsx)(_,{})}),Object(O.jsx)(i.b,{to:":reviews",element:Object(O.jsx)(v,{})})]}),Object(O.jsx)(i.a,{})]})}function S(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h2",{children:" MovieDetailsPage"})})}function w(){return Object(O.jsx)("h2",{children:" Notfoundpages"})}var k=c(7),y=c.n(k);function M(){var e=function(e){return{color:e.isActive?"blue":"black"}};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("nav",{className:y.a.nav,children:Object(O.jsxs)("ul",{className:y.a.nav__list,children:[Object(O.jsx)("li",{className:y.a.nav__item,children:Object(O.jsx)(p.c,{to:"/",style:e,children:"Home"})}),Object(O.jsx)("li",{className:y.a.nav__item,children:Object(O.jsx)(p.c,{to:"/movies",style:e,children:"Movies"})})]})}),Object(O.jsx)("main",{className:y.a.container,children:Object(O.jsx)(i.a,{})})]})}function C(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(i.d,{children:[Object(O.jsxs)(i.b,{path:"/",element:Object(O.jsx)(M,{}),children:[Object(O.jsx)(i.b,{index:!0,element:Object(O.jsx)(d,{})}),Object(O.jsx)(i.b,{path:"movies/*",element:Object(O.jsx)(F,{})}),Object(O.jsx)(i.b,{path:":movieId/*",className:"activeLink",element:Object(O.jsx)(S,{})})]}),Object(O.jsx)(i.b,{path:"",element:Object(O.jsx)(w,{})})]})})}r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(p.a,{children:Object(O.jsx)(C,{})})}),document.getElementById("root"))},7:function(e,t,c){e.exports={nav:"Navigation_nav__2N_Vq",nav__list:"Navigation_nav__list__3HsuG",nav__item:"Navigation_nav__item__19nlp","active-link":"Navigation_active-link__3A5G-"}}},[[51,1,2]]]);
//# sourceMappingURL=main.2ab7fd24.chunk.js.map