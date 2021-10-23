import React, { Component } from "react";
import { addFavourite, removeFavourite } from "../actions";

export default class MovieCard extends Component {
  //to favorite the movie

  handleFavClick = () => {
    const { movie } = this.props;
    // get the movie from props
    //and add dispatch to the function within actions
    //so first get the dispatch function via props
    this.props.dispatch(addFavourite(movie));
  };

  handleUnFavClick = () => {
    const { movie } = this.props;
    // get the movie from props
    //and add dispatch to the function within actions
    //so first get the dispatch function via props
    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, isMovieFav } = this.props;
    console.log("isMovieFav :: ");
    return (
      <div className="movie-card">
        <div className="left">
          <img src={movie.Poster} alt="movie-poster" />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isMovieFav ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavClick}
              >
                Remove from favourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={this.handleFavClick}>
                Add to favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
