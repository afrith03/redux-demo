import React from "react";
import { useDispatch} from "react-redux";
import { increment } from "../redux/Slice/Balance/BalanceSlice";
import { decrement } from "../redux/Slice/Balance/BalanceSlice";
const Addbalance = () => {
 
  const dispatch = useDispatch();

  const deposit = () => {
    dispatch(increment());
  };
const widthraw = ()=>{
  dispatch(decrement());
}
  return (
    <div className="container">

      <h2>Add Balance</h2>
      <button className="btn btn-dark" onClick={widthraw} >-</button>
      <b>Balance</b>
      <button className="btn btn-dark" onClick={deposit}>
        +
      </button>
    </div>
  );
};

export default Addbalance;
