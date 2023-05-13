import React from "react";
import "./Auth.css";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Signup = () => {
  return (
    <div>
      <div className="login-page">
        <h3>Sign Up</h3>
        <div className="login-element">
          <label>Name:</label>{" "}
          <input class="input-element" type="text" placeholder="Mr. ABC" />
          <label>Email:</label>{" "}
          <input
            class="input-element"
            type="text"
            placeholder="bhumika@gmail.com"
          />
          <label>Password:</label>
          <input class="input-element" type="text" placeholder="***********" />
          <button className="login-btn">Create New Account</button>
        </div>
        <a className="link" href="/login">
          Already have an account <FaArrowAltCircleRight />
        </a>
      </div>
    </div>
  );
};

export default Signup;
