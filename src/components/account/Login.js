import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/Login.css";
import axios from "axios";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/UserSlice";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email: data.email,
        password: data.password,
      });

      const { user } = response.data; 
      dispatch(setUser({ userId: user._id, token: response.data.token }));
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", user._id);

      reset();
      navigate("/"); 

    } catch (error) {
      if (error.response) {
        setLoginError("Incorrect Email or Password");
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="form_style" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="heading">Login</h1>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          <span onClick={togglePasswordVisibility} className="eye_icon">
            {showPassword ? <VscEye /> : <VscEyeClosed />}
          </span>
        </div>
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>
      {loginError && <p className="error-message">{loginError}</p>}

      <button type="submit" className="btn btn-primary">
        Login
      </button>

      <div className="acc_div">
        <p>
          Create account{" "}
          <Link className="login_link" to="/signup">
            SignUp
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Login;
