import React, { useContext } from "react";
import { CityContext } from "./ContextDemo";
import C from "./C";

const B = () => {
  return (
    <>
      <h2>B Component</h2>
      <C />
    </>
  );
};

export default B;
