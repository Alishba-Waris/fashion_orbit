import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";
import "../assets/css/ViewCart.css";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.items.length === 0) {
    return (
      <div className="cartEmpty">
        <div>
          <p className="emptyCart">Your cart is empty.</p>
          <div className="contt_shop">
            <Link className="cont-shopp-button" to={"/"}>
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="view-cart-container">
      <h5>Shopping Cart</h5>

      <div className="cart-items">
        {cart.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.image}
              alt={item.description}
              className="cart-item-image"
            />

            <p className="cart-item-description">{item.description}</p>

            <div className="cart-item-details">
              <div>Quantity: {item.quantity}</div>
              <div>{item.size}</div>
              <div>Rs. {item.price}</div>
            </div>
            <button
              className="remove-button"
              onClick={() =>
                dispatch(
                  removeFromCart({ productId: item.id, size: item.size })
                )
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h6 className="total-price">Total: Rs. {cart.totalAmount}</h6>
      <div className="cart-buttons">
        <button
          className="clear-cart-button cart_btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        <Link className="cont-shop-button cart_btn" to={"/"}>
          Continue Shopping
        </Link>

        <Link className="checkout-button cart_btn" to={"/checkout"}>
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ViewCart;
