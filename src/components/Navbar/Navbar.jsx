import React from "react";
import "./Navbar.css";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="not-a-link" to="/">
        {" "}
        <h1 className="nav-header">Shopify</h1>
      </NavLink>
      <div className="search-container">
        <div>
          <em></em>
          <input className="nav-input" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="navbar-nav">
        <div className="login">Login</div>
        <NavLink to="/wishlist">
          <div className="icon-style">
            <FaRegHeart />
          </div>
        </NavLink>
        <div className="icon-style">
          {" "}
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
