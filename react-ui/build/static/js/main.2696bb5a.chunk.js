(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{28:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(13),r=c.n(s),a=c(9),j=c(8),o=c(11),l=c(20),d="GET_USERNAME",b="UPDATE_MOVIE_DETAIL",u="UPDATE_MOVIES_LIST";var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===d?t.payload.username:e},O={storyline:"I like nachos.",comments:"I like nachos."};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;return t.type===b?t.payload.selectedMovie:e},x=[];var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;return t.type===u?t.payload.moviesList:e},f=Object(o.b)({username:h,movieDetail:m,moviesList:p}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,g=Object(o.d)(f,v(Object(o.a)(l.a))),_=(c(28),c(0));var y=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)("header",{children:[Object(_.jsx)("div",{className:"banner",children:"TedFlix"}),Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(a.b,{to:"/",children:"Home"})}),Object(_.jsx)("li",{children:Object(_.jsx)(a.b,{to:"/films",children:"Films"})}),Object(_.jsx)("li",{children:Object(_.jsx)(a.b,{to:"/about",children:"About"})})]})]})})},N=c(3),M=Object(j.b)((function(e){return{username:e.username}}))((function(e){var t=e.username;return Object(_.jsxs)("p",{children:["Hello ",t]})})),F=Object(j.b)((function(e){return{username:e.username}}),(function(e){return{updateUsername:function(t){return e(function(e){return{type:d,payload:{username:e}}}(t))}}}))((function(e){var t=e.updateUsername,c=e.username;return Object(_.jsx)("input",{onChange:function(e){var c=e.target.value;t(c)},value:c})})),T=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{children:"I am the Home Page"}),Object(_.jsx)(M,{}),Object(_.jsx)(F,{})]})},D=function(){return Object(_.jsx)("p",{children:"I am the About Page"})},E=c(15),I=(c(32),function(e){var t=e.handleModal,c=e.movieDetail;return console.log(c),Object(_.jsx)(_.Fragment,{children:Object(_.jsx)("div",{className:"modal",onClick:t,children:Object(_.jsxs)("div",{className:"movie-page",children:[Object(_.jsx)("div",{className:"movie-card-poster",children:Object(_.jsx)("img",{src:c.format,alt:"Movie Poster"})}),Object(_.jsxs)("p",{children:["Title: ",c.title]}),Object(_.jsx)("br",{}),Object(_.jsxs)("p",{children:["Release Date: ",c.release]}),Object(_.jsxs)("p",{children:["Production Company: ",c.production_co]}),Object(_.jsxs)("p",{children:["My Rating: ",c.my_rating]}),Object(_.jsxs)("p",{children:["My Top Ten: ",c.my_top_ten]}),Object(_.jsxs)("p",{children:["AFI Top 100: ",c.afi_top_100]}),Object(_.jsx)("p",{children:c.night_at_the_movies?"DVD includes Night at the movies.":""}),Object(_.jsxs)("p",{children:["Last viewed on: ",c.last_viewed]}),Object(_.jsx)("p",{children:c.train_scenes?"There is a scene in this movie with a train.":"There is no train scene in this movie."}),Object(_.jsxs)("p",{children:["Genre: ",c.genre]}),Object(_.jsxs)("p",{children:["City: ",c.city]}),Object(_.jsxs)("p",{children:["State: ",c.state]}),Object(_.jsxs)("p",{children:["Country: ",c.country]}),Object(_.jsx)("br",{}),Object(_.jsxs)("p",{children:["Storyline: ",c.storyline]}),Object(_.jsx)("br",{}),Object(_.jsxs)("p",{children:["Comments: ",c.comments]})]})})})}),S=(c(33),c.p+"static/media/af19330407_King_Kong_Poster.51435ac3.jpg"),C=c.p+"static/media/cr19340223_Gable_ithapponepm_poster.023b0a79.jpg",L=c.p+"static/media/dc19720324_Godfather_ver1.531feae8.jpg",P=c.p+"static/media/fn20011026_Mulholland.4e091fd6.png",w=c.p+"static/media/sf20030515_the-matrix-reloaded-cover-3.76e08bd8.jpg",k=c.p+"static/media/sf20100716_Inception_ver3.98879910.jpg",A=c.p+"static/media/wa20070309_300poster_box.4b45b42c.jpg",G=c.p+"static/media/we19641016_Fistful_Macaroni.38aa56fa.jpg",R=S,U=C,H=L,K=P,V=w,B=k,J=A,X=G,W=S,q=C,z=L,Q=P;var Y=function(e){var t=Object(n.useState)(!1),c=Object(E.a)(t,2),i=c[0],s=c[1],r=Object(n.useState)(""),a=Object(E.a)(r,2),j=(a[0],a[1],Object(n.useState)(null)),o=Object(E.a)(j,2),l=o[0],d=o[1],b=function(e){return function(){s(!0),d(e)}},u=e.films.map((function(e){return Object(_.jsxs)("div",{className:"movie-card",children:[Object(_.jsxs)("div",{children:[i&&Object(_.jsx)("div",{className:"dark-bg"}),Object(_.jsx)("div",{onClick:b(e),children:Object(_.jsx)("div",{className:"movie-card-poster",children:Object(_.jsx)("img",{src:e.format,alt:"Movie Poster"})})})]}),Object(_.jsx)("h3",{children:e.title}),Object(_.jsxs)("p",{children:["Film ID: ",e.id]}),Object(_.jsxs)("p",{children:["Production Co: ",e.production_co]}),Object(_.jsxs)("p",{children:["Release Date: ",e.release]}),Object(_.jsxs)("p",{children:["My Rating: ",e.my_rating]}),Object(_.jsxs)("p",{children:["Genre: ",e.genre]})]},e.id)}));return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("div",{className:"top-container",children:[Object(_.jsxs)("div",{className:"posters-left",children:[Object(_.jsx)("img",{src:R,alt:"King Kong"}),Object(_.jsx)("img",{src:U,alt:"It Happened One Night"}),Object(_.jsx)("img",{src:H,alt:"The Godfather"}),Object(_.jsx)("img",{src:K,alt:"Mullholland Dr."})]}),Object(_.jsx)("div",{className:"search-container",children:Object(_.jsx)("form",{className:"search-form",id:"search-films-form",children:Object(_.jsxs)("p",{children:[Object(_.jsx)("label",{for:"Search-films"}),Object(_.jsx)("input",{className:"search-field",type:"text",id:"film-search-input",name:"Search-films",placeholder:"Enter movie title keywords.  ex: Godfather"}),Object(_.jsx)("button",{className:"search-button",id:"find-films-btn",type:"submit",children:"Find Films"})]})})}),Object(_.jsxs)("div",{className:"posters-right",children:[Object(_.jsx)("img",{src:V,alt:"The Matrix Reloaded"}),Object(_.jsx)("img",{src:B,alt:"Inception"}),Object(_.jsx)("img",{src:J,alt:"Winchester '73"}),Object(_.jsx)("img",{src:X,alt:"A Fistful of Dollars"})]})]}),Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{className:"movies-container",children:Object(_.jsx)("div",{className:"movie-flex-row",children:u})}),i&&Object(_.jsx)(I,{handleModal:function(){s(!1),W=R,q=U,z=H,Q=B,R=K,U=V,H=W,K=X,V=J,B=q,J=z,X=Q},movieDetail:l})]})]})};var Z=Object(j.b)((function(e){return{films:e.moviesList}}),(function(e){return{updateMoviesList:function(t){return e(function(e){return{type:u,payload:{moviesList:e}}}(t))}}}))((function(e){var t=e.updateMoviesList,c=e.films;Object(n.useEffect)((function(){i()}),[]);var i=function(){fetch("http://localhost:8080/server/films").then((function(e){return e.json()})).then((function(e){return t(e)}))};return Object(_.jsx)("div",{children:Object(_.jsx)(Y,{films:c})})})),$=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(N.a,{exact:!0,path:"/",render:function(){return Object(_.jsx)(T,{})}}),Object(_.jsx)(N.a,{path:"/films",render:function(){return Object(_.jsx)(Z,{})}}),Object(_.jsx)(N.a,{path:"/about",render:function(){return Object(_.jsx)(D,{})}})]})};c(34);var ee=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("main",{children:Object(_.jsx)(N.c,{children:Object(_.jsx)($,{})})})})};c(35);var te=function(){return Object(_.jsx)("div",{children:Object(_.jsx)("footer",{children:"Footer"})})};c(36);var ce=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(y,{}),Object(_.jsx)(ee,{}),Object(_.jsx)(te,{})]})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(j.a,{store:g,children:Object(_.jsx)(a.a,{children:Object(_.jsx)(ce,{})})})}),document.getElementById("root")),ne()}},[[37,1,2]]]);
//# sourceMappingURL=main.2696bb5a.chunk.js.map