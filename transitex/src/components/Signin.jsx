      import React, { useEffect, useState } from "react";
      import { useNavigate } from "react-router-dom";
      import { useAuth } from "../context/AuthContext";
      import "./Signin.css";

      export default function SignIn() {
        const navigate = useNavigate();
        const { login } = useAuth();
        const [formData, setFormData] = useState({
          email: "",
          password: "",
        });

        const [errors, setErrors] = useState({});
        const [loading, setLoading] = useState(false);

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

        const handleSubmit = async (e) => {
          e.preventDefault();
          const validationErrors = validate();
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }

          setLoading(true);
          setErrors({});

          try {
            const response = await fetch("http://localhost:3001/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
              // Utiliser la fonction login du contexte
              login(data.data.user, data.data.token);
              
              // Redirection directe sans alert
              navigate("/");
            } else {
              setErrors({ general: data.message || "Sign in failed" });
            }
          } catch (error) {
            setErrors({ general: "Network error. Please try again." });
            console.error("Sign in error:", error);
          } finally {
            setLoading(false);
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
                  {errors.general && (
                    <div className="error general-error">{errors.general}</div>
                  )}
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
                    <button type="submit" className="btn-login" disabled={loading}>
                      {loading ? "Signing in..." : "Login"}
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