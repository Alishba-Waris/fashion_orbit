import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import React from 'react';
import "../../assets/css/SignUp.css";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();

  const password = watch("password");
//   const [isSubmitted, setIsSubmitted] = useState(false);
  const Navigate = useNavigate();

  const onSubmit = (data) => {
    reset();
    Navigate("/");
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
            minLength: {
              value: 5,
              message: "Username must be at least 5 characters",
            },
          })}
        />

        {errors.username && <p className="error-message">{errors.username.message}</p>}
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
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
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
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          name="confirmPassword"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary" >
        Submit
      </button>

      <div className='acc_div'>
        <p>Already have an account <Link className="login_link" to="/login">Login</Link></p>    
      </div>
     
    </form>
    </>
  );
}

export default SignUp;