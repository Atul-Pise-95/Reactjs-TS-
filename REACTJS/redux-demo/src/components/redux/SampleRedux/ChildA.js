import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
  SelectCount,
} from "./CounterSlice";
const ChildA = () => {
  const [data, setData] = useState(0);
  const count = useSelector(SelectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h2>ChildA Component-{count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="number" onChange={(e) => setData(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(data))}>Add</button>
    </>
  );
};

export default ChildA;
