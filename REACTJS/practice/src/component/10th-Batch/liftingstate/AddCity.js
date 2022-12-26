import React, { useState } from "react";
const AddCity = ({ getCity }) => {
  const [city, setCity] = useState("");
  return (
    <>
      <h3>Add City</h3>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <button onClick={() => getCity(city)}>Add City</button>
    </>
  );
};

export default AddCity;
