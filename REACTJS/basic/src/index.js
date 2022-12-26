// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from "react";
// import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
//import App from "./App";
import "./style.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundles";
import App from "./App";
// import { BrouserRouter as Router } from "react-router-dom";

const root = document.getElementById("root");

// const content = (
//   <div>
//     <h1>sample react app by topper skills</h1>
//     <p>MERN Stack</p>
//   </div>
// );

//react version 17.
// ReactDom.render(content, root);

//react version 18.
const domRoot = createRoot(root);
domRoot.render(
  <App />
  // <Router>
  //   <App />
  // </Router>
);
//domRoot.render(<App>any content</App>);
