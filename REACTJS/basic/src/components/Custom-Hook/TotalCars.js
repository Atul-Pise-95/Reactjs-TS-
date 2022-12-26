import React from "react";
import useCounter from "./useCounter";

const TotalCars = () => {
  const [total, buy, sell, clear] = useCounter(0);
  return (
    <>
      <h2>Total Cars : {total}</h2>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
      <button onClick={clear}>Reset</button>
    </>
  );
};

export default TotalCars;
