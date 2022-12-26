import React, { useContext } from "react";
import A from "./A";
import B from "./B";
const Top = () => {
  return (
    <>
      <h2>Parent</h2>
      <A />
      <B />
    </>
  );
};

export default Top;
