import React, { useContext } from "react";
import { CityContext } from "./ContextDemo";
import B from "./B";

const A = () => {
  return (
    <>
      <h2>A Component</h2>
      <B />
    </>
  );
};

export default A;
