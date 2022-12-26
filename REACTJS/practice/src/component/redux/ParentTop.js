import React from "react";
import A from "./A";
import B from "./B";
import C from "./C";
const ParentTop = () => {
  return (
    <>
      <h2>Parent component</h2>
      <A />
      <hr />
      <B />
      <hr />
      <C />
    </>
  );
};

export default ParentTop;
