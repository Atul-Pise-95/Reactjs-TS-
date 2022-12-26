import { chainPropTypes } from "@mui/utils";
import React, { useState } from "react";
const IncreDecr = () => {
  const [state, setState] = useState(0);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState("");
  const addCity = () => {
    setCities([...cities, city]);
  };
  const handleIncr = () => {
    setState(state + 1);
  };
  const handleDecr = () => {
    setState(state - 1);
  };
  return (
    <>
      <h2>Increment Decrement={state}</h2>
      <button onClick={handleIncr}>+</button>
      <button onClick={handleDecr}>-</button>
      <h4>city List</h4>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <ul>
        {cities.map((city, i) => {
          return <li key={city + i}>{city}</li>;
        })}
      </ul>
      <button onClick={addCity}>Add City</button>
    </>
  );
};

export default IncreDecr;
