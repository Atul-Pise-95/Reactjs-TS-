import React, { useContext } from "react";
import { CityContext } from "./ContextDemo";
import D from "./D";

const C = () => {
  return (
    <>
      <CityContext.Consumer>
        {(city) => {
          return <h2>C Component-{city}</h2>;
        }}
      </CityContext.Consumer>
      <D />
    </>
  );
};

export default C;
