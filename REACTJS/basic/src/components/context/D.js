import React, { useContext } from "react";
import { CityContext } from "./ContextDemo";
import E from "./E";

const D = () => {
  const city = useContext(CityContext);
  return (
    <>
      <h2>D Component-{city}</h2>
      <E />
    </>
  );
};

export default D;
