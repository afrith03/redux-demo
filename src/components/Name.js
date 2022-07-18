import React from 'react'
import { useDispatch } from 'react-redux'
import { SetName } from '../redux/Slice/NameSlice'
function Name() {
   const dispatch =  useDispatch()
  return (
 <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example text</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={
    (e)=>{
  dispatch(SetName(e.target.value))
}
  } rows={3} defaultValue={""} />
</div>
  )
}

export default Name