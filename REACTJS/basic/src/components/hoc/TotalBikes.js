import React, { useState } from "react";
import withCounter from "./withCounter";

const TotalBikes = ({ count, increment, decrement }) => {
  //no need to write separate code. maintain HOC withCounter.js

  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };
  return (
    <>
      <h2>I have {count} Bikes</h2>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>Sell</button>
    </>
  );
};

export default withCounter(TotalBikes);
