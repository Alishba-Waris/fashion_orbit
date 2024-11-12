import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { clearCart } from "./redux/CartSlice";
import { useState } from "react";
import "../assets/css/Checkout.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const imageBaseURL = "http://localhost:3000";
      const orderItems = cart.items.map((item) => ({
        id: item.id,
        image: `${imageBaseURL}${item.image}`,
        quantity: item.quantity,
        price: item.price,
      }));
      console.log(orderItems, ":::::::::::");
      const response = await axios.post(
        "http://localhost:5000/api/order/userorder",
        {
          userId: localStorage.getItem("userId"),
          items: orderItems,
          totalAmount: cart.totalAmount,
          username: data.fullName,
          email: data.email,
          phone: data.phone,
          address: data.address,
          city: data.city,
          country: data.country,
          postalcode: data.postalCode,
        }
      );
      console.log("Order placed successfully:", response.data);
      toast.success("🦄 Order Placed Successfully!", {
        autoClose: 5000,
        theme: "colored",
      });
      dispatch(clearCart());
      setIsSubmitted(true);
      reset();
      setTimeout(() => {
        navigate("/checkout_details");
      }, 3000);

    } catch (error) {
      toast.success("🦄  Error during order placement!", {
        autoClose: 3000,
        theme: "colored",
      });
      console.error(
        "Error during order placement",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <ToastContainer />
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
            <p className="free_dilevery">Free Home Delivery</p>
            <p className="total-price">
              Total: Rs. {cart.totalAmount.toFixed(2)}/-
            </p>
          </div>
        </div>
        <div className="shipping-info">
          <h2 className="details-heading">Shipping Information</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              className="input-field"
              {...register("fullName", { required: "Full name is required" })}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName.message}</p>
            )}

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
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}

            <input
              type="text"
              placeholder="Phone"
              className="input-field"
              {...register("phone", {
                required: "Phone# is required",
                minLength: {
                  value: 11,
                  message: "Phone# must be 11 digits",
                },
              })}
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}

            <input
              type="text"
              placeholder="Address"
              className="input-field"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}

            <input
              type="text"
              placeholder="City"
              className="input-field"
              {...register("city", { required: "City is required" })}
            />
            {errors.city && (
              <p className="error-message">{errors.city.message}</p>
            )}

            <input
              type="text"
              placeholder="Country"
              className="input-field"
              {...register("country", { required: "Country is required" })}
            />
            {errors.country && (
              <p className="error-message">{errors.country.message}</p>
            )}

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
            {errors.postalCode && (
              <p className="error-message">{errors.postalCode.message}</p>
            )}

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                value="COD"
                id="flexRadioDefault1"
                {...register("paymentMethod", {
                  required: "Select checkbox",
                })}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                COD (Cash on Delivery)
              </label>
            </div>

            {errors.paymentMethod && (
              <p className="error-message">{errors.paymentMethod.message}</p>
            )}

            <button
              type="submit"
              className="btn btn-success px-4 rounded-pill py-2 q_cart"
            >
                Place Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;
