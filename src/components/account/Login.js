import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [LoginError, setLoginError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user._id);
      setIsLoggedIn(true);
      reset();
      navigate("/");

    } catch (error) {
      if (error.response ){
        setLoginError("Incorrect Email or Password");
      }
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isLoggedIn) {
    navigate('/user_account');
  };

  return (
    <>
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
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
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
                  message: "Invalid Password",
                },
              })}
            />
            <span onClick={togglePasswordVisibility} className="eye_icon">
              {showPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        {LoginError && <p className="error-message">{LoginError}</p>}

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
    </>
  );
};

export default Login;
