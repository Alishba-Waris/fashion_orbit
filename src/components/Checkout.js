import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react"; 
import "../assets/css/Checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    setIsSubmitted(true);
    reset();
  };

  return (
    <>
      {isSubmitted && (
        <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
          <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
              <strong className="me-auto">Order Confirmation</strong>
              <small className="text-muted">Just now</small>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setIsSubmitted(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="toast-body">
              Your order has been placed successfully!
            </div>
          </div>
        </div>
      )}

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Email"
              className="input-field"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}

            <input
              type="text"
              placeholder="Address"
              className="input-field"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && <p className="error-message">{errors.address.message}</p>}

            <input
              type="text"
              placeholder="City"
              className="input-field"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && <p className="error-message">{errors.city.message}</p>}

            <input
              type="text"
              placeholder="Country"
              className="input-field"
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && <p className="error-message">{errors.country.message}</p>}

            <input
              type="text"
              placeholder="Postal Code"
              className="input-field"
              {...register("postalCode", {
                required: "Postal code is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Postal code must be numeric",
                },
              })}
            />
            {errors.postalCode && <p className="error-message">{errors.postalCode.message}</p>}

            <button type="submit" className="checkout-button">
              Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;

