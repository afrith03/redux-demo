import { configureStore } from "@reduxjs/toolkit";
import BalanceReducer from "./Slice/Balance/BalanceSlice";

import NameReducer from "./Slice/NameSlice";
import  TrueReducer  from "./Slice/true";

export default configureStore({
  reducer: {
    balance: BalanceReducer,
    name: NameReducer,
    bool:TrueReducer
  },
});
