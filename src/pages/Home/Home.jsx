import React from "react";
import Category from "./components/Category";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div class="home-category-display">
        <Category name="women" />
        <Category name="men" />
      </div>
      <main>
        <div className="home-hero-image">
          <img src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </main>
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
