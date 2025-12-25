import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

// Texte animé
const rotatingTexts = ["Fast Delivery", "Global Shipping", "Secure Logistics"];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Changement automatique du texte
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Gestion du clic sur GET STARTED
  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("token"); // vérifie si l'utilisateur est connecté
    if (isLoggedIn) {
      navigate("/transport"); // connecté → page transport
    } else {
      navigate("/signin"); // non connecté → page login
    }
  };

  // Gestion du clic sur CONTACT US
  const handleContactUs = () => {
    navigate("/about_us"); // redirection vers about_us
  };

  return (
    <section className="hero-section">
      {/* Background animé */}
      <div className="hero-background"></div>

      <div className="hero-content">
        <h1 className="hero-title">Welcome to TRANSITEX</h1>
        <p className="hero-subtitle">
          Your Trusted Partner in Global Transportation Solutions
        </p>

        <div className="hero-animated-text">
          {rotatingTexts[index]}
        </div>

        <div className="hero-buttons">
          <button className="btn-dark" onClick={handleGetStarted}>
            GET STARTED
          </button>
          <button className="btn-outline-dark" onClick={handleContactUs}>
            CONTACT US
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-box">
            <h2>150+</h2>
            <p>Countries Covered</p>
          </div>
          <div className="stat-box">
            <h2>98%</h2>
            <p>On-Time Delivery</p>
          </div>
          <div className="stat-box">
            <h2>5K+</h2>
            <p>Clients Worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
