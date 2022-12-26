import React, { useState } from "react";
import {
  increment,
  decrement,
  reset,
  selectCount,
  incrementByAmount,
} from "./CounterSlice";
import { useSelector, useDispatch } from "react-redux/es/exports";
const A = () => {
  const [state, setState] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      <h2>A component-{count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="text" onChange={(e) => setState(e.tergrt.value)} />
      <button onClick={() => dispatch(incrementByAmount(state))}>Add</button>
    </>
  );
};

export default A;
