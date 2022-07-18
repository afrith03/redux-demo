import React from 'react'
import { useSelector } from 'react-redux';
const NavBar = () => {

  const balance = useSelector((state) => state.balance.value);
  const name = useSelector((state) => state.name.value);
  const boolValue = useSelector((state) => state.bool.value);
  return (
      <nav className="navbar bg-light container">
  <div className="container-fluid">
    <b className="navbar-brand">Redux Bank</b>
    <form className="d-flex" role="search">
    <button className="btn btn-outline-dark" disabled={true} type="submit">{name}</button>
    <button className="btn btn-outline-dark" disabled={true} type="submit">{boolValue? "true":"false"}</button>
       <button className="btn btn-outline-dark" disabled={true} type="submit">Balance: {balance}</button>
    </form>
  </div>
</nav>

  )
}

export default NavBar