import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice2";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
