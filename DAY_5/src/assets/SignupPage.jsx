// SignUpForm.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./SignupPage.css";

const SignUp = () => { // Changed class name to SignUp
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, you can submit the data or perform further actions
      console.log('Form submitted successfully!');
      // Example: You can redirect to another page
      navigate('/login');
    }
  };

  return (
    <div className="main-w3layouts wrapper"> {/* Changed class name to main-w3layouts */}
      <h1>SignUp</h1>
      <div className="main-agileinfo"> {/* Changed class name to main-agileinfo */}
        <div className="agileits-top"> {/* Changed class name to agileits-top */}
          <form onSubmit={handleSubmit}>
            <input
              className="text"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <span className="error">{errors.username}</span>}

            <input
              className="text email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              className="text"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}

            <input
              className="text w3lpass"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

            <input type="submit" value="SIGNUP" />
          </form>

          <p>Already have an Account? <Link to="/login">Login Now!</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
