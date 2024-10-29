
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./redux/CartSlice";
import { Link } from "react-router-dom";
import "../assets/css/ViewCart.css";

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
          type="button"
          className="clear-cart-button cart_btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Clear Cart
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Clear Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you wants to clear the cart?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  onClick={handleClearCart}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
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
