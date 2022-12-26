import React from "react";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";

const HOCDemo = () => {
  return (
    <>
      <h2>HOC Demo</h2>

      <TotalBikes />
      <hr />
      <TotalCars />
    </>
  );
};

export default HOCDemo;
