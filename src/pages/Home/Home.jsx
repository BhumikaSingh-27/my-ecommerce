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

        <div>
          <Category />
          <Category />
    
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
