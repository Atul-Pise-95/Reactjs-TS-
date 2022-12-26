import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
const root = document.getElementById("root");
const domRoot = createRoot(root);
domRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
