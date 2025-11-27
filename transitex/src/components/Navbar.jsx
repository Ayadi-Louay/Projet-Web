import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Transitex logo" className="logo" />
      </div>
      
      <nav className="nav-links">
        <a href="/" onClick={(e) => handleNavigation("/", e)}>Home</a>
        <a href="/transport" onClick={(e) => handleNavigation("/transport", e)}>Transport</a>
        <a href="/reservation" onClick={(e) => handleNavigation("/reservation", e)}>Reservation</a>
        <a href="/tracking" onClick={(e) => handleNavigation("/tracking", e)}>Tracking</a>
        <a href="/about_us" onClick={(e) => handleNavigation("/about_us", e)}>About us</a>
      </nav>
      
      <div className="nav-buttons">
        <button className="btn-light" onClick={(e) => handleNavigation("/Profile", e)}>
          Profile
        </button>
        <button className="btn-light" onClick={(e) => handleNavigation("/signin", e)}>
          Sign in
        </button>
        <button className="btn-outline" onClick={(e) => handleNavigation("/register", e)}>
          Register
        </button>
      </div>

      {/* Hamburger Menu Icon */}
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <a href="/" onClick={(e) => handleNavigation("/", e)}>Home</a>
            <a href="/transport" onClick={(e) => handleNavigation("/transport", e)}>Transport</a>
            <a href="/reservation" onClick={(e) => handleNavigation("/reservation", e)}>Reservation</a>
            <a href="/tracking" onClick={(e) => handleNavigation("/tracking", e)}>Tracking</a>
            <a href="/about_us" onClick={(e) => handleNavigation("/about_us", e)}>About us</a>
          </nav>
          <div className="mobile-nav-buttons">
            <button className="btn-light" onClick={(e) => handleNavigation("/Profile", e)}>
              Profile
            </button>
            <button className="btn-light" onClick={(e) => handleNavigation("/signin", e)}>
              Sign in
            </button>
            <button className="btn-outline" onClick={(e) => handleNavigation("/register", e)}>
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
