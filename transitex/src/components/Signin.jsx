      import React, { useEffect, useState } from "react";
      import "./Signin.css";

      export default function SignIn() {
        const [formData, setFormData] = useState({
          email: "",
          password: "",
        });

        const [errors, setErrors] = useState({});

        useEffect(() => {
          document.body.classList.add("signin-page");
          return () => {
            document.body.classList.remove("signin-page");
          };
        }, []);

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
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
          <div className="signin-page-wrapper">
            <div className="signin-container">
              <div className="signin-left">
                <div className="welcome-text">
                  <h1>Welcome</h1>
                  <h1>Back</h1>
                </div>
              </div>

              <div className="signin-right">
                <h2>Sign in to Transitex</h2>

                <form onSubmit={handleSubmit} className="signin-form">
                  <div className="input-group">
                    <label>User ID or e-mail:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>

                  <div className="input-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                  </div>

                  <div className="buttons-row">
                    <button type="submit" className="btn-login">
                      Login
                    </button>
                    <button type="button" className="btn-forgot" onClick={handleForgotPassword}>
                      forgotten password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }