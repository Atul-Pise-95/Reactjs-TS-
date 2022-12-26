import React, { useState } from "react";
import A from "./A";
export const CityContext = React.createContext("Pune");
const ContextDemo = () => {
  const [city, setCity] = useState("Mumbai");
  return (
    <>
      <h2>Context</h2>
      <CityContext.Provider value={city}>
        <A />
      </CityContext.Provider>
    </>
  );
};

export default ContextDemo;
