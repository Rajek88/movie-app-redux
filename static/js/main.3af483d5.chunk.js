(this["webpackJsonpmovie-app-with-redux"]=this["webpackJsonpmovie-app-with-redux"]||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var o=a(2),r=a.n(o),n=a(10),i=a.n(n),s=a(7),c=(a(16),a(3)),l=a(4),h=a(6),d=a(5),u="ADD_MOVIES",m="ADD_FAVOURITE",b="REMOVE_FAVOURITE",y="SHOW_FAV",v="SHOW_MOVIE",p="ADD_SEARCH_RESULT",M="ADD_MOVIE_TO_LIST";function g(e){return{type:m,movie:e}}function S(e){return{type:b,movie:e}}function f(e){return{type:y,val:e}}function A(e){return{type:v,val:e}}function T(e){var t="https://www.omdbapi.com/?apikey=3ca5df7&t=".concat(e);return function(e){fetch(t).then((function(e){return e.json()})).then((function(t){console.log("Movie : ",t),e(function(e){return{type:p,movie:e}}(t))}))}}var R=a(0),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).handleSearch=function(){var e=o.state.searchText;console.log("Navbar props dispatch  : ",o.props.dispatch),o.props.dispatch(T(e))},o.handleAddToMovieList=function(e){o.props.dispatch(function(e){return{type:M,movie:e}}(e)),o.setState({showSearchResults:!1})},o.handleChange=function(e){var t=e.target.value;o.setState({searchText:t}),console.log("You are typing : ",t)},o.state={searchText:""},o}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.search,a=t.result,o=t.showSearchResults;return console.log("response : ",a.Response),Object(R.jsx)("div",{className:"nav",children:Object(R.jsxs)("div",{className:"search-container",children:[Object(R.jsx)("input",{onChange:this.handleChange}),Object(R.jsx)("button",{id:"search-btn",onClick:this.handleSearch,children:"Search"}),o&&Object(R.jsx)("div",{className:"search-results",children:"False"===a.Response?"Movie not found ! Check your spelling":Object(R.jsxs)("div",{className:"search-result",children:[Object(R.jsx)("img",{src:a.Poster,alt:a.Title}),Object(R.jsxs)("div",{className:"movie-info",children:[Object(R.jsx)("span",{children:a.Title}),Object(R.jsx)("p",{children:a.Plot}),Object(R.jsx)("button",{onClick:function(){return e.handleAddToMovieList(a)},children:"Add to movies"})]})]})})]})})}}]),a}(o.Component),D=[{Title:"The Avengers",Year:"2012",Rated:"PG-13",Released:"04 May 2012",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Joss Whedon",Writer:"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",Language:"English, Russian, Hindi",Country:"USA",Awards:"Nominated for 1 Oscar. Another 38 wins & 79 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.0/10"},{Source:"Rotten Tomatoes",Value:"91%"},{Source:"Metacritic",Value:"69/100"}],Metascore:"69",imdbRating:"8.0",imdbVotes:"1,216,895",imdbID:"tt0848228",Type:"movie",DVD:"25 Sep 2012",BoxOffice:"$623,279,547",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"The Dark Knight",Year:"2008",Rated:"PG-13",Released:"18 Jul 2008",Runtime:"152 min",Genre:"Action, Crime, Drama, Thriller",Director:"Christopher Nolan",Writer:"Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",Actors:"Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",Plot:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",Language:"English, Mandarin",Country:"USA, UK",Awards:"Won 2 Oscars. Another 153 wins & 159 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"9.0/10"},{Source:"Rotten Tomatoes",Value:"94%"},{Source:"Metacritic",Value:"84/100"}],Metascore:"84",imdbRating:"9.0",imdbVotes:"2,173,344",imdbID:"tt0468569",Type:"movie",DVD:"09 Dec 2008",BoxOffice:"$533,316,061",Production:"Warner Bros. Pictures/Legendary",Website:"N/A",Response:"True"},{Title:"Iron Man",Year:"2008",Rated:"PG-13",Released:"02 May 2008",Runtime:"126 min",Genre:"Action, Adventure, Sci-Fi",Director:"Jon Favreau",Writer:"Mark Fergus (screenplay), Hawk Ostby (screenplay), Art Marcum (screenplay), Matt Holloway (screenplay), Stan Lee (characters), Don Heck (characters), Larry Lieber (characters), Jack Kirby (characters)",Actors:"Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow",Plot:"After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",Language:"Hungarian, Kurdish, Hindi, English, Persian, Urdu, Arabic",Country:"USA",Awards:"Nominated for 2 Oscars. Another 21 wins & 65 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.9/10"},{Source:"Rotten Tomatoes",Value:"94%"},{Source:"Metacritic",Value:"79/100"}],Metascore:"79",imdbRating:"7.9",imdbVotes:"896,884",imdbID:"tt0371746",Type:"movie",DVD:"30 Sep 2008",BoxOffice:"$318,298,180",Production:"Paramount Pictures",Website:"N/A",Response:"True"},{Title:"Iron Man 2",Year:"2010",Rated:"PG-13",Released:"07 May 2010",Runtime:"124 min",Genre:"Action, Adventure, Sci-Fi",Director:"Jon Favreau",Writer:"Justin Theroux (screenplay), Stan Lee (Marvel comic book), Don Heck (Marvel comic book), Larry Lieber (Marvel comic book), Jack Kirby (Marvel comic book)",Actors:"Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Scarlett Johansson",Plot:"With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful mad man with ties to his father's legacy.",Language:"English, French, Russian",Country:"USA",Awards:"Nominated for 1 Oscar. Another 7 wins & 43 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.0/10"},{Source:"Rotten Tomatoes",Value:"73%"},{Source:"Metacritic",Value:"57/100"}],Metascore:"57",imdbRating:"7.0",imdbVotes:"686,304",imdbID:"tt1228705",Type:"movie",DVD:"28 Sep 2010",BoxOffice:"$312,057,433",Production:"Paramount Studios",Website:"N/A",Response:"True"},{Title:"Iron Man 3",Year:"2013",Rated:"PG-13",Released:"03 May 2013",Runtime:"130 min",Genre:"Action, Adventure, Sci-Fi",Director:"Shane Black",Writer:'Drew Pearce (screenplay by), Shane Black (screenplay by), Stan Lee (based on the Marvel comic book by), Don Heck (based on the Marvel comic book by), Larry Lieber (based on the Marvel comic book by), Jack Kirby (based on the Marvel comic book by), Warren Ellis (based on the "Extremis" mini-series written by), Adi Granov (based on the "Extremis" mini-series illustrated by)',Actors:"Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce",Plot:"When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",Language:"English",Country:"USA",Awards:"Nominated for 1 Oscar. Another 20 wins & 62 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.2/10"},{Source:"Rotten Tomatoes",Value:"79%"},{Source:"Metacritic",Value:"62/100"}],Metascore:"62",imdbRating:"7.2",imdbVotes:"719,976",imdbID:"tt1300854",Type:"movie",DVD:"24 Sep 2013",BoxOffice:"$408,992,272",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Ronaldo",Year:"2015",Rated:"PG-13",Released:"09 Nov 2015",Runtime:"92 min",Genre:"Documentary, Biography, Sport",Director:"Anthony Wonke",Writer:"N/A",Actors:"Dolores Aveiro, Hugo Aveiro, Georgie Bingham, Adrian Clarke",Plot:"A close look at the life of Cristiano Ronaldo.",Language:"Portuguese, English, Spanish",Country:"UK, Spain",Awards:"N/A",Poster:"https://m.media-amazon.com/images/M/MV5BNzMyMTM1MjQxNF5BMl5BanBnXkFtZTgwMjY4NTE5NjE@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"6.4/10"},{Source:"Rotten Tomatoes",Value:"17%"}],Metascore:"N/A",imdbRating:"6.4",imdbVotes:"13,549",imdbID:"tt5065822",Type:"movie",DVD:"10 Nov 2015",BoxOffice:"N/A",Production:"On The Corner Films",Website:"http://www.ronaldothefilm.com/showtimes",Response:"True"},{Title:"Thor",Year:"2011",Rated:"PG-13",Released:"06 May 2011",Runtime:"115 min",Genre:"Action, Adventure, Fantasy",Director:"Kenneth Branagh",Writer:"Ashley Miller (screenplay), Zack Stentz (screenplay), Don Payne (screenplay), J. Michael Straczynski (story), Mark Protosevich (story), Stan Lee (comic book), Larry Lieber (comic book), Jack Kirby (comic book)",Actors:"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",Plot:"The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",Language:"English",Country:"USA",Awards:"5 wins & 30 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.0/10"},{Source:"Rotten Tomatoes",Value:"77%"},{Source:"Metacritic",Value:"57/100"}],Metascore:"57",imdbRating:"7.0",imdbVotes:"710,805",imdbID:"tt0800369",Type:"movie",DVD:"13 Sep 2011",BoxOffice:"$181,015,141",Production:"Paramount Pictures",Website:"N/A",Response:"True"},{Title:"Thor: The Dark World",Year:"2013",Rated:"PG-13",Released:"08 Nov 2013",Runtime:"112 min",Genre:"Action, Adventure, Fantasy",Director:"Alan Taylor",Writer:"Christopher L. Yost (screenplay by), Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Don Payne (story by), Robert Rodat (story by), Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Walter Simonson (character created by: Malekith)",Actors:"Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins",Plot:"When the Dark Elves attempt to plunge the universe into darkness, Thor must embark on a perilous and personal journey that will reunite him with doctor Jane Foster.",Language:"English",Country:"USA",Awards:"3 wins & 21 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"6.9/10"},{Source:"Rotten Tomatoes",Value:"66%"},{Source:"Metacritic",Value:"54/100"}],Metascore:"54",imdbRating:"6.9",imdbVotes:"564,401",imdbID:"tt1981115",Type:"movie",DVD:"25 Feb 2014",BoxOffice:"$206,360,018",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Thor: Ragnarok",Year:"2017",Rated:"PG-13",Released:"03 Nov 2017",Runtime:"130 min",Genre:"Action, Adventure, Comedy, Fantasy, Sci-Fi",Director:"Taika Waititi",Writer:"Eric Pearson, Craig Kyle, Christopher L. Yost, Stan Lee (based on the Marvel comics by), Larry Lieber (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by)",Actors:"Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba",Plot:"Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnar\xf6k, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",Language:"English",Country:"USA",Awards:"6 wins & 48 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.9/10"},{Source:"Rotten Tomatoes",Value:"93%"},{Source:"Metacritic",Value:"74/100"}],Metascore:"74",imdbRating:"7.9",imdbVotes:"532,010",imdbID:"tt3501632",Type:"movie",DVD:"06 Mar 2018",BoxOffice:"$314,971,245",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Avengers: Infinity War",Year:"2018",Rated:"PG-13",Released:"27 Apr 2018",Runtime:"149 min",Genre:"Action, Adventure, Sci-Fi",Director:"Anthony Russo, Joe Russo",Writer:"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",Actors:"Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",Plot:"The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",Language:"English",Country:"USA",Awards:"Nominated for 1 Oscar. Another 44 wins & 70 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.5/10"},{Source:"Rotten Tomatoes",Value:"85%"},{Source:"Metacritic",Value:"68/100"}],Metascore:"68",imdbRating:"8.5",imdbVotes:"748,996",imdbID:"tt4154756",Type:"movie",DVD:"14 Aug 2018",BoxOffice:"$664,987,816",Production:"Walt Disney Pictures",Website:"N/A",Response:"True"},{Title:"Avengers: Endgame",Year:"2019",Rated:"PG-13",Released:"26 Apr 2019",Runtime:"181 min",Genre:"Action, Adventure, Drama, Sci-Fi",Director:"Anthony Russo, Joe Russo",Writer:"Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora & Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",Actors:"Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",Plot:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",Language:"English, Japanese, Xhosa, German",Country:"USA",Awards:"Nominated for 1 Oscar. Another 46 wins & 97 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"8.5/10"},{Source:"Rotten Tomatoes",Value:"94%"},{Source:"Metacritic",Value:"78/100"}],Metascore:"78",imdbRating:"8.5",imdbVotes:"661,719",imdbID:"tt4154796",Type:"movie",DVD:"30 Jul 2019",BoxOffice:"N/A",Production:"Marvel Studios",Website:"N/A",Response:"True"},{Title:"Man of Steel",Year:"2013",Rated:"PG-13",Released:"14 Jun 2013",Runtime:"143 min",Genre:"Action, Adventure, Sci-Fi",Director:"Zack Snyder",Writer:"David S. Goyer (screenplay), David S. Goyer (story), Christopher Nolan (story), Jerry Siegel (Superman created by), Joe Shuster (Superman created by)",Actors:"Henry Cavill, Amy Adams, Michael Shannon, Diane Lane",Plot:"An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened, when survivors of his home planet invade Earth.",Language:"English",Country:"USA, UK",Awards:"7 wins & 46 nominations.",Poster:"https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg",Ratings:[{Source:"Internet Movie Database",Value:"7.1/10"},{Source:"Rotten Tomatoes",Value:"56%"},{Source:"Metacritic",Value:"55/100"}],Metascore:"55",imdbRating:"7.1",imdbVotes:"664,610",imdbID:"tt0770828",Type:"movie",DVD:"12 Nov 2013",BoxOffice:"$291,021,565",Production:"Warner Bros. Pictures",Website:"N/A",Response:"True"}],O=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).handleFavClick=function(){var t=e.props.movie;e.props.dispatch(g(t))},e.handleUnFavClick=function(){var t=e.props.movie;e.props.dispatch(S(t))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movie,a=e.isMovieFav;return Object(R.jsxs)("div",{className:"movie-card",children:[Object(R.jsx)("div",{className:"left",children:Object(R.jsx)("img",{src:t.Poster,alt:"movie-poster"})}),Object(R.jsxs)("div",{className:"right",children:[Object(R.jsx)("div",{className:"title",children:t.Title}),Object(R.jsx)("div",{className:"plot",children:t.Plot}),Object(R.jsxs)("div",{className:"footer",children:[Object(R.jsx)("div",{className:"rating",children:t.imdbRating}),a?Object(R.jsx)("button",{className:"unfavourite-btn",onClick:this.handleUnFavClick,children:"Remove from favourite"}):Object(R.jsx)("button",{className:"favourite-btn",onClick:this.handleFavClick,children:"Add to favourite"})]})]})]})}}]),a}(o.Component),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).isMovieFav=function(t){return-1!==e.props.store.getState().movies.favourites.indexOf(t)},e.handleFav=function(){e.props.store.dispatch(f())},e.handleMovies=function(){e.props.store.dispatch(A())},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.store;t.subscribe((function(){console.log("Updated"),e.forceUpdate()})),t.dispatch({type:u,movies:D}),console.log("STATE :: ",t.getState())}},{key:"render",value:function(){var e=this,t=this.props.store.getState(),a=t.movies,o=t.search,r=a.list,n=a.favourites,i=a.showFav;console.log("RENDER"),console.log("STATE 2 :: ",this.props.store.getState()),console.log("STORE 2 :: ",this.props.store);var s=i?n:r;return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(j,{dispatch:this.props.store.dispatch,search:o}),Object(R.jsxs)("div",{className:"main",children:[Object(R.jsxs)("div",{className:"tabs",children:[Object(R.jsx)("button",{className:" tab ".concat(i?"":"active-tabs"),onClick:this.handleMovies,children:"Movies"}),Object(R.jsx)("button",{className:" tab ".concat(i?"active-tabs":""),onClick:this.handleFav,children:"Favourites"})]}),Object(R.jsx)("div",{className:"list",children:s.map((function(t,a){return Object(R.jsx)(O,{movie:t,dispatch:e.props.store.dispatch,isMovieFav:e.isMovieFav(t)},"movies-".concat(a))}))}),0===s.length?Object(R.jsx)("div",{className:"no-movies",children:"No movies to show"}):null]})]})}}]),a}(r.a.Component),w=k,V=a(9),N=a(1),P={list:[],favourites:[],showFav:!1};var B={result:{},showSearchResults:!1};var C=Object(s.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(N.a)(Object(N.a)({},e),{},{list:t.movies});case m:return Object(N.a)(Object(N.a)({},e),{},{favourites:[t.movie].concat(Object(V.a)(e.favourites))});case b:var a=e.favourites.filter((function(e){return e.Title!==t.movie.Title}));return Object(N.a)(Object(N.a)({},e),{},{favourites:a});case y:return Object(N.a)(Object(N.a)({},e),{},{showFav:!0});case v:return Object(N.a)(Object(N.a)({},e),{},{showFav:!1});case M:return Object(N.a)(Object(N.a)({},e),{},{list:[t.movie].concat(Object(V.a)(e.list))});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(N.a)(Object(N.a)({},e),{},{result:t.movie,showSearchResults:!0});case M:return Object(N.a)(Object(N.a)({},e),{},{showSearchResults:!1});default:return e}}}),x=a(11),F=Object(s.c)(C,Object(s.a)((function(e){e.dispatch,e.getState;return function(e){return function(t){"function"!==typeof t&&console.log("ACTION_TYPE : ",t.type),e(t)}}}),x.a));console.log("STORE :: ",F),i.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(w,{store:F})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3af483d5.chunk.js.map