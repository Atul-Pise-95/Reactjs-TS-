import React from "react";
const TotalBikes = ({ count, increment, decrement }) => {
  return (
    <>
      <h2>I have Total {count} Bikes</h2>
      <button onClick={increment}>Buy</button>
      <button onClick={decrement}>sell</button>
    </>
  );
};

export default TotalBikes;
