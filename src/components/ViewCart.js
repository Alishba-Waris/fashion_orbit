import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from './Redux/cartSlice';
import '../assets/css/ViewCart.css';

const ViewCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  if (cart.items.length === 0) {
    return <p className='emptyCart'>Your cart is empty.</p>;
  }
  return (
    
    <div className="view-cart-container">
        
      <h5>Shopping Cart</h5>
      <div className="cart-items">
        {cart.items.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.description} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-description">{item.description}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Size: {item.size}</p>
              <p>Price: Rs. {item.price}</p>
            </div>
            <button 
              className="remove-button" 
              onClick={() => dispatch(removeFromCart({ productId: item.id, size: item.size }))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <h6 className="total-price">Total: Rs. {cart.totalAmount}</h6>
      <button className="clear-cart-button" onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default ViewCart;
