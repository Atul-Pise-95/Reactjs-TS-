import React from "react";
import useCounter from "./useCounter";

const TotalBikes = () => {
  const [count, increment, decrement, reset] = useCounter(0);
  return (
    <>
      <h2>Total Bikes : {count}</h2>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default TotalBikes;
