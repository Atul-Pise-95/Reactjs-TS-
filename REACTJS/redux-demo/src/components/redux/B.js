import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./CounterSlice";
const B = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h2>B Componenent - {count}</h2>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <input type="number" onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Add</button>
    </>
  );
};

export default B;
