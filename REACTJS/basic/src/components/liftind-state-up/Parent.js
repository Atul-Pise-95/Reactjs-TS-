import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [adress, setAdress] = useState("");
  const city1 = (city) => {
    setAdress(city);
  };
  return (
    <>
      <h2>parent component - {adress}</h2>
      <Child cityName={city1} />
    </>
  );
};

export default Parent;

// import React, { useState } from "react";
// import Child from "./Child";
// const Parent = () => {
//   const [adress, setAdress] = useState("");
//   const getCity = (city) => {
//     setAdress(city);
//   };
//   return (
//     <>
//       <h2>Parent Component-{adress}</h2>
//       <Child getcity={getCity} />
//     </>
//   );
// };

// export default Parent;
