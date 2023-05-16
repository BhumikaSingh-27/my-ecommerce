import React from "react";
import "./Category.css";

const Category = ({ name }) => {
  return (
    <div>
      <div className="category-card">
        <img className="category-img"
          src="https://imgcdn.floweraura.com/white_d_0.png?tr=w-164,dpr-1.5,q-70"
          alt="title"
        />
        {/* <div className="category-card-content"><h3>{name}</h3></div>    */}
        <h3>Roses</h3>
      </div>
    </div>
  );
};

export default Category;
