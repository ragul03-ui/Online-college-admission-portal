// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./assets/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!loginData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!loginData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
      <header>
        <div className="header-buttons"><Link to="/Login">
          {/* <button onClick={() => console.log('Admin clicked')}>Admin</button> */}
          <button onClick={() => console.log('User clicked')}>User</button></Link>
        </div>
      </header>
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
          <input
            type="password"
            placeholder="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <Link to="/HomePage">
            <button type="submit">Login</button>
          </Link>
          <p className="message">
            <button onClick={() => navigate('/signup')}>Create an account</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
