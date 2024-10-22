import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import React, {  useState } from "react";
import "../../assets/css/SignUp.css";
import { useNavigate } from "react-router-dom";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import axios from "axios";
import { useDispatch } from "react-redux"; 
import { setUser } from "../redux/UserSlice";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signUpError, setSignUpError] = useState("");

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    try {
      console.log("Form data:", data);
      const response = await axios.post(
        "http://localhost:5000/api/user/signup",
        {
          name: data.username,
          email: data.email,
          password: data.password,
        }
      );
      dispatch(setUser({ 
        userId: response.data.user._id, 
        token: response.data.token 
      }));
      console.log("User registered successfully:", response.data);
      reset();
      navigate("/");

    } catch (error) {
      if (error.response) {
        setSignUpError("User on this email already exists");
      } else {
        setSignUpError("SignUp failed. Please try again.");
      }
      console.error("Login failed:", error.response ? error.response.data : error.message);
      console.error(
        "Error during signup:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <form className="form_style" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="heading">Sign Up</h1>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            {...register("username", {
              required: "Username is required",
            })}
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>

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

        <div className="mb-3 password-container">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
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

        <div className="mb-3 password-container">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="form-control"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="eye_icon"
            >
              {showConfirmPassword ? <VscEye /> : <VscEyeClosed />}
            </span>
          </div>
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>
        {signUpError && <p className="error-message">{signUpError}</p>}
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>

        <div className="acc_div">
          <p>
            Already have an account?{" "}
            <Link className="login_link" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
