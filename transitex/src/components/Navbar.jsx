import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register"); // redirige vers la page Register
  };

  const handleSignInClick = () => {
    navigate("/signin"); // redirige vers la page Sign In
  };

  const handleProfileClick = () => {
    navigate("/Profile"); // redirige vers la page Profile
  }

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Transitex logo" className="logo" />
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/transport">Transport</a>
        <a href="/reservation">Reservation</a>
        <a href="/tracking">Tracking</a>
        <a href="/about_us">About us</a>
      </nav>

      <div className="nav-buttons">
        <button className="btn-light" onClick={handleProfileClick}>Profile</button>
        <button className="btn-light" onClick={handleSignInClick}>
          Sign in
        </button>
        <button className="btn-outline" onClick={handleRegisterClick}>
          Register
        </button>
      </div>
    </header>
  );
}
