import React, { useContext } from "react";
import CityContext from "./CityContext";
const D = ({ title }) => {
  const city = useContext(CityContext);
  return (
    <>
      <h2>
        D component,Title-{title}, city-{city}
      </h2>
    </>
  );
};

export default D;
