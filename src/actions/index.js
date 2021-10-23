// {
//   type: "INCREASE_COUNT";
// }
// {
//   type: "DECREASE_COUNT";
// }

// action types

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SHOW_FAV = "SHOW_FAV";
export const SHOW_MOVIE = "SHOW_MOVIE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

//this function will return the object
//these are also action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies: movies,
  };
}

//to add movie into favourites
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITE,
    movie: movie,
  };
}

//to add movie into favourites
export function removeFavourite(movie) {
  return {
    type: REMOVE_FAVOURITE,
    movie: movie,
  };
}

export function showFav(val) {
  return {
    type: SHOW_FAV,
    val,
  };
}

export function showMovie(val) {
  return {
    type: SHOW_MOVIE,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie: movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

  return function (dispatch) {
    fetch(url)
      .then(
        (response) => {
          return response.json();
        }
        // console.log("fetched data : ", response);
      )
      .then((movie) => {
        console.log("Movie : ", movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie: movie,
  };
}
