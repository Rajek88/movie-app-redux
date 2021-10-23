import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
console.log("STORE :: ", store);
// console.log("BEFORE_STATE :: ", store.getState());

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "Super man" }],
// });
// console.log("AFTER_STATE :: ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
