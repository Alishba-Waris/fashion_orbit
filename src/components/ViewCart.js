
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./Redux/cartSlice";
import { Link } from "react-router-dom";
import "../assets/css/ViewCart.css";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (cart.items.length === 0) {
    return <div className="cartEmpty">
        <p className="emptyCart">Your cart is empty.</p>
        <Link className="cont-shopp-button" to={"/"}>
        Continue Shopping
      </Link>
    </div>;
  }
  return (
    <div className="view-cart-container">
      <h5>Shopping Cart</h5>

      <div className="cart-head">
        <div>Product</div>
        <div className="cart-head-details">
          <div className="quantity-head">Quantity</div>
          <div className="size-head">Size/Material</div>
          <div className="price-head">Price</div>
        </div>
      </div>

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
              <div>{item.quantity}</div>
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
      <button
        className="clear-cart-button"
        onClick={() => dispatch(clearCart())}
      >
        Clear Cart
      </button>
      <Link className="cont-shop-button" to={"/"}>
        Continue Shopping
      </Link>

      <Link className="checkout-button" to={"/checkout"}>
        Checkout
      </Link>

    </div>
  );
};

export default ViewCart;
