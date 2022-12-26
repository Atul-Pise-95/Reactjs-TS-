import React, { useContext } from "react";
import CounterContext from "./CounterContext";
const B = () => {
  const [{ count }] = useContext(CounterContext);
  return (
    <>
      <h2>B component-{count}</h2>
    </>
  );
};

export default B;
