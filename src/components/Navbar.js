import React, { Component } from "react";
import { handleMovieSearch } from "../actions";
// import { data } from "../data";

class Navbar extends Component {
  constructor(props) {
    // console.log("Navbar props : ", props);
    super(props);
    this.state = {
      showSearchResults: true,
      searchText: "",
    };
  }
  handleSearch = () => {
    const { searchText } = this.state;
    // destructure props from this.props
    const { props } = this.props;
    // console.log("NaVbar props dispatch  : ", this.props.props.dispatch);

    // this.props.props.dispatch(handleMovieSearch(searchText));

    console.log("Navbar props dispatch  : ", props.dispatch);

    props.dispatch(handleMovieSearch(searchText));
  };

  handleChange = (e) => {
    let query = e.target.value;
    this.setState({
      searchText: query,
    });
    console.log("You are typing : ", query);
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
