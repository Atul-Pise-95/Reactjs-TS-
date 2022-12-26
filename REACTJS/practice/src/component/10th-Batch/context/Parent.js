import React, { useState } from "react";
import A from "./A";
import CityContext from "./CityContext";
const Parent = () => {
  const [title, setTitle] = useState("TopperSkills");
  const [city, setCity] = useState("Pune");
  return (
    <>
      <h2>Parent component</h2>
      <CityContext.Provider value={city}>
        <A title={title} />
      </CityContext.Provider>
    </>
  );
};

export default Parent;
