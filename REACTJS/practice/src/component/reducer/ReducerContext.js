import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import Top from "./Top";
const ReducerContext = () => {
  const initialstate = { count: 0 };

  const reducer = (state = initialstate, action) => {
    switch (action.type) {
      case "increment": {
        return { ...state, value: state.count + 1 };
      }
      case "decrement": {
        return { ...state, value: state.count - 1 };
      }
      case "reset": {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <CounterContext.Provider value={state}>
        <Top />
      </CounterContext.Provider>
    </>
  );
};

export default ReducerContext;
