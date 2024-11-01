import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "../redux/UserSlice"; 
import axios from "axios";
import "../../assets/css/UserAccount.css"

const UserAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [orderDetails, setOrderDetails] = useState([]); 

  const userId = useSelector((state) => state.user.userId);
  
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    console.log("Stored User ID:", storedUserId);

    if (storedUserId && token) {
      dispatch(setUser({ userId: storedUserId, token }));

      axios.get(`http://localhost:5000/api/user/userinfo/${storedUserId}`)

        .then((response) => {
          console.log("Response from backend:", response.data);
          setUserData(response.data);  
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });

        axios.get(`http://localhost:5000/api/order/orderdetails?userId=${storedUserId}`)
        .then((response) => {
          setOrderDetails(response.data); 
        })
        .catch((error) => {
          console.error("Error fetching order details:", error);
        });

    } else {
      navigate("/login"); 
    }
  }, [dispatch, navigate, userId]);
  



  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="user-account">
      <div className="acc_head">
        <h1>Welcome to Your Account</h1>
       <button onClick={handleLogout} className="btn btn-danger logout-btn">Logout</button>
       </div>
       <br/><br/>
      {userId ? (
        <>
          <div className="user-info">
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
          </div>
          <br/>
          <h2>Your Orders History</h2><br/>
          {orderDetails.length > 0 ? (
            <ul className="order-list">
              {orderDetails.map((order) => (
                <li key={order._id} className="order-item">                  
                  <ul className="order-items-list">
                  <p><strong>Items:</strong></p>
                    {order.items.map((item) => (
                      <li key={item.id} className="order-item-details">
                        <img src={item.image} alt={item.discription} className="order-item-image" />
                        <span>{item.name} - Quantity: {item.quantity} - Price: {item.price}/-</span>
                      </li>
                    ))}
                  </ul>
                  <p><strong>Total Amount:</strong> Rs. {order.totalAmount}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders found.</p>
          )}
        </>
      ) : (
        <p>You are not logged in</p>
      )}
      
    </div>
  );
};

export default UserAccount;
