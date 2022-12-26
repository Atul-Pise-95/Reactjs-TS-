import React, { useState } from "react";
import CityList from "./CityList";
import CityListClass from "./CityListClass";
const CityPage = () => {
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const addCity = () => {
    setCities([city]);
  };
  console.log("CityPage...");
  return (
    <>
      <h2>City Page</h2>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={addCity}>Add City</button>
      <hr />
      <CityList items={cities} />
      <hr />
      <CityListClass items={cities} />
    </>
  );
};

export default CityPage;
