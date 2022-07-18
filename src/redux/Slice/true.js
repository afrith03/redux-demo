import { createSlice } from "@reduxjs/toolkit";

export const TrueSlice = createSlice({
    name: "set Boolean",
    initialState: {
      value: true,
    },
    reducers: {
      SetBool: (state) => {
        state.value = !state.value;
      },
    },
  });
  
  
export const {SetBool} = TrueSlice.actions;

export default TrueSlice.reducer;