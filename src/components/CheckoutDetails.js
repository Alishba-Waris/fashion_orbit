import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/CheckoutDetails.css";

const CheckoutDetails = () => {
  const [recentOrder, setRecentOrder] = useState(null);

  useEffect(() => {
    const fetchRecentOrder = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/order/recentorder`
        );
        setRecentOrder(response.data);
      } catch (error) {
        console.log("Error fetching order details!", error);
      }
    };
    fetchRecentOrder();
  }, []);

  return (
    <div className="user-account">
      <div className="order_head">
        <h1>Thank You for Your Order!</h1>
        <br />
      </div>
      <p className="order_contact">
        <strong>
          If you have any query, feel free to{" "}
          <Link to="/contact_us">Contact Us</Link> any time!
        </strong>
      </p>
      <p className="order_contact">
        <strong>
          Explore more items and <Link to="/"> continue shopping</Link> with us!
        </strong>
      </p>

      <br />
      <br />

      {recentOrder ? (
        <div>
          <div>
            <h2>Order Details</h2>
            <br />
            {recentOrder.items.map((recentOrder) => (
              <div key={recentOrder.id} className="cart-item">
                <img
                  src={recentOrder.image}
                  alt={recentOrder.description}
                  className="cart-item-image"
                />
                <p className="cart-item-description">
                  {recentOrder.description}
                </p>
                <div className="cart-item-details">
                  <div>
                    <strong>Quantity: </strong>
                    {recentOrder.quantity}
                  </div>
                  <div>
                    <strong>Price: </strong>Rs. {recentOrder.price}/-
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <h6 className="total-price" style={{color: "purple"}}>Total: Rs. {recentOrder.totalAmount}</h6>
          <div className="user-info">
            <h3>Checkout Details</h3>
            <br />
            <p>
              <strong>Name:</strong> {recentOrder.username}
            </p>
            <p>
              <strong>Email:</strong> {recentOrder.email}
            </p>
            <p>
              <strong>Phone#:</strong> {recentOrder.phone}
            </p>
            <p>
              <strong>Address:</strong> {recentOrder.address}
            </p>
            <p>
              <strong>City:</strong> {recentOrder.city}
            </p>
            <p>
              <strong>Country:</strong> {recentOrder.country}
            </p>
            <p>
              <strong>Postal Code:</strong> {recentOrder.postalcode}
            </p>
          </div>
        </div>
      ) : (
        <p>No order found.</p>
      )}
    </div>
  );
};

export default CheckoutDetails;
