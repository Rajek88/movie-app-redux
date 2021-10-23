import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";
import { addMovies, showFav, showMovie } from "../actions";

class App extends React.Component {
  componentDidMount() {
    //make an API call, here we rae using local json file named data
    const { store } = this.props;
    // to keep a look on data chabge of store, we need to setup a listener called subscribe()

    store.subscribe(() => {
      console.log("Updated");
      //dont use this force update method, I am just using it for my convinience
      this.forceUpdate();
    });

    //dispatch the action to the store
    // dispatching with the help of function
    store.dispatch(addMovies(data));

    console.log("STATE :: ", store.getState());
  }
  // const [state, setstate] = useState(initialState)

  //   isMovieTabPressed = () => {
  //     if (isMovieTab) {
  //       isMovieTab = false;
  //       return;
  //     }
  //     return;
  //   };

  isMovieFav = (movie) => {
    const { favourites } = this.props.store.getState();
    // get index of current movie
    const index = favourites.indexOf(movie);
    // if the movie is found and we will get correct index, else we will get -1 if movie not found
    if (index === -1) {
      // if movie not found, return false
      return false;
    } else {
      // if found return true
      return true;
    }
  };

  handleFav = () => {
    // using reducer to tab switch
    const { store } = this.props;
    store.dispatch(showFav());
  };

  handleMovies = () => {
    // using reducer to tab switch
    const { store } = this.props;
    store.dispatch(showMovie());
  };

  render() {
    //fetch the list of movies from object returned by store via destructuring
    const { list, favourites, showFav } = this.props.store.getState();
    console.log("RENDER");
    console.log("STATE :: ", this.props.store.getState());
    // get what we want to display
    const display = showFav ? favourites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <button
              className={` tab ${showFav ? "" : "active-tabs"}`}
              onClick={this.handleMovies}
            >
              Movies
            </button>
            <button
              className={` tab ${showFav ? "active-tabs" : ""}`}
              onClick={this.handleFav}
            >
              Favourites
            </button>
          </div>
          {/* {console.log('is Movies Tab')} */}
          <div className="list">
            {display.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`} // send the dispatch function to the movie card
                dispatch={this.props.store.dispatch}
                isMovieFav={this.isMovieFav(movie)}
              />
            ))}
          </div>
          {display.length === 0 ? (
            <div className="no-movies">No movies to show</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
