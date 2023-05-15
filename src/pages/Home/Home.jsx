import React from "react";
import Category from "./components/Category";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <main>
        <div className="home-hero-image">
          <NavLink className="not-a-link" to="/product">
            <img
              src="https://res.cloudinary.com/interflora/f_auto,q_auto,t_pnopt32prodlp/banners/same_day_delivery_d_interflora_banner_20230427.jpg"
              alt=""
            />
          </NavLink>
        </div>
      </main>
      <div className="feature-image">
        <h1>Trending Collections</h1>
        <div> <img
          src="https://imgcdn.floweraura.com/flower_homepage_fa_desktop_8.jpg?tr=w-1583,dpr-1.5,q-70"
          alt="trending"
        /></div>
       
        {/* <div class="home-category-display">
        <Category name="women" />
        <Category name="men" />
      </div> */}
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
