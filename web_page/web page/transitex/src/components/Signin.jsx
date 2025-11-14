      import React, { useEffect, useState } from "react";
      import "./Signin.css";

      export default function SignIn() {
        const [formData, setFormData] = useState({
          email: "",
          password: "",
          remember: false
        });

        const [errors, setErrors] = useState({});

        useEffect(() => {
          document.body.classList.add("signin-page");
          return () => {
            document.body.classList.remove("signin-page");
          };
        }, []);

        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
          });
          setErrors({ ...errors, [name]: "" });
        };

        const validate = () => {
          const newErrors = {};
          if (!formData.email.includes("@")) newErrors.email = "Invalid email";
          if (formData.password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
          return newErrors;
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          const validationErrors = validate();
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
          } else {
            alert("Sign In successful!");
            console.log(formData);
          }
        };

        const handleForgotPassword = () => {
          alert("Redirect to password recovery page.");
        };

        return (
          <div>
            <div className="signin-container">
              <h2>Sign In</h2>

              <form onSubmit={handleSubmit} className="signin-form">
                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
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

                <div className="options-row">
                  <label className="remember-me">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                    />
                    Remember me
                  </label>

                  <span className="forgot-password" onClick={handleForgotPassword}>
                    Forgot Password?
                  </span>
                </div>

                <button type="submit" className="btn-submit">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        );
      }