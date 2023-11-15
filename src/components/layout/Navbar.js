import React from "react";
import { Link , Outlet} from "react-router-dom";

const Navbar = () => {
return(
    <>
    <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
    <div class="container">
      <Link class="navbar-brand" to="#">React User</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" exact to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page"  exact to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" exact to="/contact">Contact</Link>
          </li>
         
        </ul>
        
      </div>
      <Link className="btn btn-outline-light" to="/user/add"> Add User</Link>
    </div>
  </nav> 
  <Outlet /> 
</>
);

};


export default Navbar;