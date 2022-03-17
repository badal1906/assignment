import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import detailReducer from "./redux/reducer/detailReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import userReducer from "./redux/reducer/userReducer"
import store from "./redux/store"



ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
