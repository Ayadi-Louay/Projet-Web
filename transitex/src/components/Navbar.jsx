import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path, e) => {
    if (e) e.preventDefault();
    navigate(path);
    setIsMenuOpen(false);
  };

  // Fonction spécifique pour la réservation
  const handleReservation = (e) => {
    e.preventDefault();
    
    // Utiliser directement isAuthenticated() du contexte
    if (isAuthenticated()) {
      navigate("/reservation");
    } else {
      navigate("/signin");
    }
    setIsMenuOpen(false);
  };

  // Fonction spécifique pour Profile
  const handleProfile = (e) => {
    e.preventDefault();
    
    if (isAuthenticated()) {
      navigate("/Profile");
    } else {
      navigate("/signin");
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Transitex logo" className="logo" />
      </div>
      
      <nav className="nav-links">
        <a href="/" onClick={(e) => handleNavigation("/", e)}>Home</a>
        <a href="/transport" onClick={(e) => handleNavigation("/transport", e)}>Transport</a>
        <a href="/reservation" onClick={handleReservation}>Reservation</a>
        <a href="/tracking" onClick={(e) => handleNavigation("/tracking", e)}>Tracking</a>
        <a href="/about_us" onClick={(e) => handleNavigation("/about_us", e)}>About us</a>
      </nav>
      
      <div className="nav-buttons">
        {isAuthenticated() ? (
          <>
            <span className="user-name">Hello, {user?.fullName}</span>
            <button className="btn-light" onClick={handleProfile}>
              Profile
            </button>
            <button className="btn-outline" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn-light" onClick={(e) => handleNavigation("/signin", e)}>
              Sign in
            </button>
            <button className="btn-outline" onClick={(e) => handleNavigation("/register", e)}>
              Register
            </button>
          </>
        )}
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
            <a href="/reservation" onClick={handleReservation}>Reservation</a>
            <a href="/tracking" onClick={(e) => handleNavigation("/tracking", e)}>Tracking</a>
            <a href="/about_us" onClick={(e) => handleNavigation("/about_us", e)}>About us</a>
          </nav>
          <div className="mobile-nav-buttons">
            {isAuthenticated() ? (
              <>
                <span className="user-name">Hello, {user?.fullName}</span>
                <button className="btn-light" onClick={handleProfile}>
                  Profile
                </button>
                <button className="btn-outline" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn-light" onClick={(e) => handleNavigation("/signin", e)}>
                  Sign in
                </button>
                <button className="btn-outline" onClick={(e) => handleNavigation("/register", e)}>
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}