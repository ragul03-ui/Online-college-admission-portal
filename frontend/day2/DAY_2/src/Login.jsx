// LoginPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./assets/login.css";

const LoginPage = () => {
  const navigate = useNavigate();

  // State to manage form inputs and validation
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  // Validation function
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

  // Submit function
  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform login action
      // For now, let's just navigate to home
      navigate('/');
    }
  };

  // Update function for controlled inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
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
          <button type="submit">login</button>
          <p className="message">
            <button onClick={() => navigate('/signup')}>Create an account</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
