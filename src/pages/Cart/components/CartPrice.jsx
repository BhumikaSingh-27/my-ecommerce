import React from "react";

const CartPrice = () => {
  return (
    <div>
      <div className="cart-price-details">
        <h3>Price Details</h3>
        <hr />
        <div className="cart-price-flex">
          <div>Price</div>
          <div>&#x20B9;200</div>
        </div>
        <div className="cart-price-flex">
          <div>Discount</div>
          <div>&#x20B9;200</div>
        </div>
        <div className="cart-price-flex">
          <div>Delivery Charges</div>
          <div>&#x20B9;200</div>
        </div>
        <hr />
        <div className="cart-price-flex">
          <h3>TOTAL AMOUNT</h3>
          <h3>&#x20B9;200</h3>
        </div>
        <hr />
        <span className="cart-price-message">
          You will save rs 200 on this order
        </span>
        <button className="add-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPrice;
