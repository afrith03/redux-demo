import React from 'react'
import { useDispatch } from 'react-redux'
import { SetBool } from '../redux/Slice/true';

function True() {
   const dispatch = useDispatch();
  return (
    <div>
<button className="btn btn-warning" onClick={()=>{
    dispatch(SetBool())
}}>Change Boolean</button>
    
    </div>
  )
}

export default True