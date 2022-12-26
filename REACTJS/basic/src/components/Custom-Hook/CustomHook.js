import React from "react";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";

const CustomHooks = () => {
  return (
    <>
      <h2>Custom Hook</h2>
      <TotalCars />
      <hr />
      <TotalBikes />
    </>
  );
};

export default CustomHooks;
