import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  const details = useSelector((state) => state);

  return (
    // <div className="col-md-12 bg-dark py-2">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to={"/"} className="navbar-brand ml-5">
        React Redux Inventory System
      </Link>
      
    </nav>
    // </div>
  );
};

export default Navbar;
