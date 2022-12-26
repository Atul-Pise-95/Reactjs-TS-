import React, { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return render(count, increment, decrement);
};

export default Counter;
