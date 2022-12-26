import React from "react";
const TotalCars = ({ total, buy, sell }) => {
  return (
    <>
      <h2>I have Total {total} Cars</h2>
      <button onClick={buy}>Buy</button>
      <button onClick={sell}>sell</button>
    </>
  );
};

export default TotalCars;
