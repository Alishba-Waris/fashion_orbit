import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/Login.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/forgot-password", {
        email,
      }); 
      toast.success('🦄 OTP sent to your email!', {
        autoClose: 3000,
        theme: "colored",
      })
      setTimeout(() => {
        navigate("/login")
      },3000);
      
      console.log("OTP sent to your email");
    } catch (error) {
      console.error(error);
      toast.error("User on this email doesn't exist!", {
        autoClose: 3000,
        theme: "colored",
      });
      console.log("Error sending OTP");
    }
  };
  return (
    <>
    <ToastContainer/>
    <form className="form_style" onSubmit={handleForgotPassword}>
        <NavLink className="form_FashionOrbit" to="/">
          FashionOrbit
        </NavLink>
      <h1 className="heading">Forgot Password</h1>
      <br />
      <br />
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError(""); 
          }}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Send OTP
      </button>
    </form>
    </>
  );
};

export default ForgotPassword;
