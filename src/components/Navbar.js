import React, { Component } from "react";
import { addMovieToList, handleMovieSearch } from "../actions";
// import { data } from "../data";

class Navbar extends Component {
  constructor(props) {
    // console.log("Navbar props : ", props);
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleSearch = () => {
    const { searchText } = this.state;
    // destructure props from this.props
    // const { props } = this.props;
    // console.log("NaVbar props dispatch  : ", this.props.props.dispatch);

    // this.props.props.dispatch(handleMovieSearch(searchText));

    console.log("Navbar props dispatch  : ", this.props.dispatch);

    this.props.dispatch(handleMovieSearch(searchText));
  };

  handleAddToMovieList = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({
      searchText: query,
    });
    console.log("You are typing : ", query);
  };
  render() {
    const { result, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt={result.Title} />
                <div className="movie-info">
                  <span>{result.Title}</span>
                  <p>{result.Plot}</p>
                  <button onClick={() => this.handleAddToMovieList(result)}>
                    Add to movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
