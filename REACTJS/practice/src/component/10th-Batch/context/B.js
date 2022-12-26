import React from "react";
import C from "./C";
const B = (props) => {
  return (
    <>
      <h2>B component</h2>
      <C {...props} />
    </>
  );
};

export default B;
