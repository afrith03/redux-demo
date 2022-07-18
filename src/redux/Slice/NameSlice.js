import { createSlice } from "@reduxjs/toolkit";

export const NameSlice = createSlice({
    name: "set Name",
    initialState: {
      value: "",
    },
    reducers: {
      SetName: (state,action) => {
        state.value = action.payload;
      },
    },
  });
  
  
export const {SetName} = NameSlice.actions;

export default NameSlice.reducer;
