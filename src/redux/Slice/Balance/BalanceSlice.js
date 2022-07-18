import { createSlice } from "@reduxjs/toolkit";

export const BalanceSlice = createSlice({
  name: "Balance",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    }
  },
});

export const { increment, decrement } = BalanceSlice.actions;

export default BalanceSlice.reducer;
