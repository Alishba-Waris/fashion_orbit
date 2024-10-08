
import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart); 

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-details">
        <h2 className="details-heading">Order Summary</h2>
        {cart.items.map((item) => (
          <div key={item.id} className="order-item">
            <img
              src={item.image}
              alt={item.description}
              className="cart-item-image"
            />
            
            <p className="item-price">Quantity: {item.quantity}</p>
            <p className="item-price">Rs. {item.price}/-</p>
          </div>
        ))}
        <div className="total">
          <p>Total:</p>
          <p className="total-price">Rs. {cart.totalAmount.toFixed(2)}/-</p>
        </div>
      </div>
      <div className="shipping-info">
        <h2 className="details-heading">Shipping Information</h2>
        <form>
        <input
            type="text"
            placeholder="Email"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="City"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Country"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="input-field"
            required
          />
          <button type="submit" className="checkout-button">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;