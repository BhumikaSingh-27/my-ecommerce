import React from "react";
import Category from "./components/Category";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="home-hero-image">
          <NavLink className="not-a-link" to="/product">
            <img
              src="https://imgcdn.floweraura.com/flower_homepage_fa_desktop_5.jpg?tr=w-1583,dpr-1.5,q-70"
              alt=""
            />
          </NavLink>
        </div>
      </main>

      <div class="home-category-display">
        <Category name="women" />
        <Category name="men" />
      </div>

      <footer>
        <div>
          <h3>Let's Connect</h3>
          <a className="footer-link" href="https://twitter.com/BhumikaSingh27">
            Twitter
          </a>
          <a className="footer-link" href="https://github.com/BhumikaSingh-27">
            Github
          </a>
          <a
            className="footer-link"
            href="https://www.linkedin.com/in/bhumika-singh-594004184/"
          >
            LinkedIn
          </a>
        </div>
        <div className="footer-text"> @developed by bhumika</div>
      </footer>
    </>
  );
};

export default Home;
