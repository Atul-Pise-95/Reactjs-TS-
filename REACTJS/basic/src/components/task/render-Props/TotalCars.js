import React, { useState } from "react";

const TotalCars = ({ total, buy, sell }) => {
  return (
    <>
      <h2>Total Cars = {total}</h2>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>Sell</button>
    </>
  );
};

export default TotalCars;
