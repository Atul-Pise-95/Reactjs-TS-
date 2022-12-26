import { createSlice } from "@reduxjs/toolkit";
const countrSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state, action) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };
    },
    reset: (state, action) => {
      return { count: 0 };
    },
    incrementByAmount: (state, action) => {
      return { ...state, count: state.count + parseFloat(action.payload) };
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  countrSlice.actions;
export const selectCount = (state) => state.counter.count;
export default countrSlice.reducer;
