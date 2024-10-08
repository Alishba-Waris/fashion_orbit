import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const Navigate = useNavigate();

  const onSubmit = (data) => {
    reset();
    Navigate("/");
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

      <button type="submit" className="btn btn-primary" >
        Submit
      </button>

      <div className='acc_div'>
        <p>Create account <Link className="login_link" to="/signup">SignUp</Link></p>    
      </div>
     
    </form>
    </>
  );
}

export default Login;