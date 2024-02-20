
import React from 'react'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Admin DashBoard App</a>
   
    <Link className='btn btn-outline-light' to="/adduser">Add Customer</Link>
   
  </div>
</nav>



    </div>
  )
}

export default Navbar
