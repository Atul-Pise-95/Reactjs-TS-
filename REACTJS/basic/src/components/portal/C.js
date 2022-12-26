import React from "react";
import ReactDOM from "react-dom";
import D from "./D";
const C = () => {
  return (
    <>
      <h2>C component</h2>
      {ReactDOM.createPortal(<D />, document.getElementById("another"))}
    </>
  );
};

export default C;
