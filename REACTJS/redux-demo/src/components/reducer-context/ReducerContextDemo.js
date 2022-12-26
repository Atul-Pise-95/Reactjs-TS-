import React, { useReducer } from "react";
import CounterContext from "./CounterContext";
import Parent from "./Parent";
const ReducerContextDemo = () => {
  const initialstate = { count: 0 };
  const reducer = (state = initialstate, action) => {
    switch (action.type) {
      case "increment": {
        //mutable
        //state.count=state.count+1;

        //immutable
        return { ...state, count: state.count + 1 };
      }
      case "decrement": {
        return { ...state, count: state.count - 1 };
      }
      case "reset": {
        return initialstate;
      }
      case "incrementByAmount": {
        return { ...state, count: state.count + parseFloat(action.payload) };
      }
    }
  };

  //const[state,dispatch]=useReducer(reducer(action),initialstate  );
  const [counter, setCounter] = useReducer(reducer, initialstate);
  return (
    <>
      <h2>ReducerContextDemo</h2>
      <CounterContext.Provider value={[counter, setCounter]}>
        <Parent />
      </CounterContext.Provider>
    </>
  );
};

export default ReducerContextDemo;
