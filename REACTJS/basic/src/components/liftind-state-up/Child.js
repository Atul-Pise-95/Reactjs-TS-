import React, { useState } from "react";
const Child = ({ cityName }) => {
  const [city, setCity] = useState("Pune");
  const handleClick = () => {
    cityName(city);
  };
  return (
    <>
      <h2>Child Component</h2>
      <button onClick={handleClick}>Pass city to parent</button>
    </>
  );
};

export default Child;

// import React, { useState } from "react";
// const Child = ({ getCity }) => {
//   const [city, setCity] = useState("Pune");
//   const handleClick = () => {
//     getCity(city);
//   };
//   return (
//     <>
//       <h2>Child component</h2>
//       <button onClick={handleClick}>Lift the state</button>
//     </>
//   );
// };

// export default Child;
