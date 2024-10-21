
import React from "react";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div className="user-account">
      <h1>Welcome to Your Account</h1>
      <p>User ID: {userId}</p>
      <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    </div>
  );
};

export default UserAccount;
