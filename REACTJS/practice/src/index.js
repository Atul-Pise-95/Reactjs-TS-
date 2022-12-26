import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
// import store from "./component/redux/store";
// import { Provider } from "react-redux";
const root = document.getElementById("root");
const domRoot = ReactDOM.createRoot(root);
domRoot.render(
  // <Provider store={store}>
  <Router>
    <App />
  </Router>
  // </Provider>
);
