import {
  ADD_MOVIES,
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  SHOW_FAV,
  SHOW_MOVIE,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFav: false,
};

export default function movies(state = initialMovieState, action) {
  // using switch case for cleaner code
  switch (action.type) {
    case ADD_MOVIES:
      return {
        //use spread operator to copy all the data from state object in new state and then update the list with action list
        ...state,
        list: action.movies,
      };

    case ADD_FAVOURITE:
      return {
        //use spread operator to copy all the data from state object in new state and then update the list with action list
        ...state,
        // first copy all elemnts from array , then add your movie in that array
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FAVOURITE:
      // const index = state.list.indexOf(action.movie);
      // if (index === -1) {
      //   return state;
      // }
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        //use spread operator to copy all the data from state object in new state and then update the list with action list
        ...state,
        // first copy all elemnts from array , then add your movie in that array
        favourites: filteredArray,
      };

    case SHOW_FAV:
      return {
        ...state,
        showFav: true,
      };

    case SHOW_MOVIE:
      return {
        ...state,
        showFav: false,
      };

    default:
      return state;
  }

  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       //use spread operator to copy all the data from state object in new state and then update the list with action list
  //       ...state,
  //       list: action.movies,
  //     };
  //   }
  //   if (action.type === ADD_FAVOURITE) {
  //     return {
  //       //use spread operator to copy all the data from state object in new state and then update the list with action list
  //       ...state,
  //       // first copy all elemnts from array , then add your movie in that array
  //       favourites: [...state.favourites, action.movie],
  //     };
  //   }
}
