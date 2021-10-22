import React from "react";
import Navbar from "./Navbar";
import { data } from "../data";
import MovieCard from "./MovieCard";

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

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });

    console.log("STATE :: ", store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    console.log("RENDER");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
            <div className="list"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
