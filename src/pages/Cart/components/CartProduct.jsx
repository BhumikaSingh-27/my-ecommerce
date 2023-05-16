import React from "react";
import "../Cart.css";

const CartProduct = () => {
  return (
    <div>
      <div className="cart-product-card">
        <img src="https://picsum.photos/500/500" alt="" />
        <div className="cart-product-details">
          <div className="cart-product-title">
            {" "}
            <h3 className="title">TITLE of product</h3>
            <p className="cart-price">
              <span>&#x20B9;200</span>{" "}
              <span class="cross-text"> &#x20B9;400</span>
            </p>
            <div>
              Quantity: <button className="quantity-change-btn">-</button> 1{" "}
              <button className="quantity-change-btn">+</button>
            </div>
          </div>

          <button className="add-btn remove-btn">Remove from Cart</button>
          <button className="add-to-wishlist">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
