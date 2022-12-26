import React, { useState } from "react";
const Counter = ({ render, children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return render
    ? render(count, increment, decrement)
    : children(count, increment, decrement);
};
export default Counter;
