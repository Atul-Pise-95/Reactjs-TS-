import React from "react";
import Counter from "./Counter";
import TotalBikes from "./TotalBikes";
import TotalCars from "./TotalCars";

const RenderProps = () => {
  return (
    <>
      <h2>Render Props</h2>

      <hr />

      <Counter
        render={(count, increment, decrement) => {
          return (
            <TotalBikes
              count={count}
              increment={increment}
              decrement={decrement}
            />
          );
        }}
      />

      <hr />
      <Counter
        render={(count, increment, decrement) => {
          return <TotalCars total={count} buy={increment} sell={decrement} />;
        }}
      />
    </>
  );
};

export default RenderProps;
