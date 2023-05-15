import React from "react";
import "./Product.css";

const ProductDetails = () => {
  return (
    <div className="product-details">
        <img
          className="product-details-img"
          src="https://picsum.photos/500/500"
          alt=""
        />
        <div className="display-flex">
          <h2>Title of the product!</h2>
          <div>
            <p>details</p>
            <p><b>Rs400</b></p>
            <div >Delivery:</div>
          </div>
          <button className="add-to-wishlist">Move to wishlist</button>
            <button className="add-btn">Add to cart</button>
        </div>

</div>
   
  );
};

export default ProductDetails;
