import React from "react";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="nav-header">Shopify</h1>

      <input className="nav-input" type="text" placeholder="search" />
      <div className="navbar-nav">
        <div className="login">Login</div>
        <div className="icon-style">
          <FaRegHeart />
        </div>
        <div className="icon-style">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
