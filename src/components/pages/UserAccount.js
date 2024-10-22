
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "../redux/UserSlice"; 

const UserAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.userId);
  
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    if (storedUserId && token) {
      dispatch(setUser({ userId: storedUserId, token }));
    } else {
      navigate("/login"); 
    }
  }, [dispatch, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="user-account">
      <h1>Welcome to Your Account</h1>
      {userId ? <p>User ID: {userId}</p> : <p>You are not logged in</p>}
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default UserAccount;
