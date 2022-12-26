import React, { useState } from "react";
import AddCity from "./AddCity";
const CityList = () => {
  const [cities, setCities] = useState([]);
  const getCity = (city) => {
    setCities([...cities, city]);
  };

  return (
    <>
      <h2>City List</h2>
      <AddCity getCity={getCity} />
      <ul>
        {cities.map((city, i) => (
          <li key={i}>{city}</li>
        ))}
      </ul>
    </>
  );
};

export default CityList;
