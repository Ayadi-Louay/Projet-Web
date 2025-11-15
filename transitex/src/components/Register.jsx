import React, { useState } from "react";
import "./Register.css";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Registration successful!");
      console.log(formData);
    }
  };

  const handleGoogleSignUp = () => {
    alert("Google Sign Up - To be implemented");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-left">
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>

            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="input-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>

            <button type="submit" className="btn-submit">
              Sign up
            </button>
          </form>
        </div>

        <div className="register-right">
          <p className="login-link">
            Already have an account? <a href="/signin">Sign in</a>
          </p>
          <div className="divider">
            <span>OR</span>
          </div>
          <button className="btn-google" onClick={handleGoogleSignUp}>
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
}
