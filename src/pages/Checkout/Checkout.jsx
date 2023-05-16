import React from "react";
import "./Checkout/checkout.css";
import CheckoutCard from "./Checkout/CheckoutCard";
import CheckoutAddress from "./Checkout/CheckoutAddress";

const Checkout = () => {
  return (
    <div className="checkout-body">
      <h2>Checkout</h2>
      <div className="main-checkout-body">
        <div className="show-checkout-container">
          <div className="checkout-address-container">
            <CheckoutAddress />
            <CheckoutAddress />
          </div>
          <CheckoutCard />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
