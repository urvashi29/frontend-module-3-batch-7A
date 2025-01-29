import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    // action methods
    increment: (state) => {
      console.log(state);
      state.value += 1; //state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value -= 1; //state.value = state.value - 1;
    },
  },
});

console.log(counterSlice); //object

export const { increment, decrement } = counterSlice.actions; //export actions
export default counterSlice.reducer; //export reducer
