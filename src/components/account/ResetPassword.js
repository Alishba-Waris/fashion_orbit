import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    let haveError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("Email is Required");
      haveError = true;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      haveError = true;
    }

    if (!otp) {
      setOtpError("OTP is required!");
      haveError = true;
    }
    if (!newPassword) {
      setPasswordError("New password is required!");
      haveError = true;
    }
    if (haveError) return;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reset-password",
        {
          email,
          otp,
          newPassword,
        }
      );
      console.log("Password reset successfully!", response.data);
      toast.success("🦄 Password reset successfully!", {
        autoClose: 3000,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error(
        "Error resetting password:",
        error.response?.data || error.message
      );
      toast.error(error.response?.data.message || "Error resetting password.", {
        autoClose: 3000,
        theme: "colored",
      });
      setError(error.response?.data.message || "Error resetting password.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <ToastContainer />
      <div className="form_style">
        <form onSubmit={handleResetPassword} className="reset-password-form">
          <NavLink className="form_FashionOrbit" to="/">
            FashionOrbit
          </NavLink>
          <h2>
            <br />
            Reset Password
          </h2>
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
          <div className="mb-3 password-field">
            <label htmlFor="otp" className="form-label">
              Enter OTP
            </label>
            <input
              type="text"
              className="form-control"
              name="otp"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value);
                setOtpError("");
              }}
            />
            {error && <p className="error-message">{otpError}</p>}
          </div>
          <br />
          <div className="mb-3 password-field">
            <label htmlFor="password" className="form-label">
              New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
                setPasswordError("");
              }}
            />
            <span
              onClick={togglePasswordVisibility}
              className="eye_icon"
              style={{ top: "70%" }}
            >
              {showPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>
          {error && <p className="error-message">{passwordError}</p>}
          <br />
          <Link className="forgotpassword_link" to="/forgot_password">
            Resend OTP
          </Link>
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
