import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

//create own middleware for logging the cation type, based on concept of currying

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middleware code
//       console.log("ACTION_TYPE : ", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action !== "function") {
      console.log("ACTION_TYPE : ", action.type);
    }
    next(action);
  };

// we can get the package thunk from redux-thunk
// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     if (typeof action === "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
//tell the app to use our middleWare Logger

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
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
