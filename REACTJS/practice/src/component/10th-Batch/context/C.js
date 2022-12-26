import React from "react";
import D from "./D";
import E from "./E";
const C = ({ title }) => {
  return (
    <>
      <h2>C component</h2>
      <D title={title} />
      <E title={title} />
    </>
  );
};

export default C;
