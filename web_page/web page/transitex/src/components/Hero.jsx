import React, { useEffect, useState } from "react";
//import "../assets/ship.png";
import "../assets/ship.jpg";
import "./Hero.css";

// ✅ Déplacer la liste en dehors du composant
const rotatingTexts = ["Fast Delivery", "Global Shipping", "Secure Logistics"];

export default function Hero() {
  const [offset, setOffset] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 1);
    };

    window.addEventListener("scroll", handleScroll);

    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % rotatingTexts.length);
    }, 2500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []); // ✅ OK maintenant, aucune dépendance obligatoire

  return (
    <section
      className="hero-section"
      style={{ backgroundPositionY: `${offset}px` }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to TRANSITEX</h1>
        <p className="hero-subtitle">
          Your Trusted Partner in Global Transportation Solutions
        </p>

        <p className="hero-animated-text">{rotatingTexts[index]}</p>

        <div className="hero-buttons">
          <button className="btn-dark">GET STARTED</button>
          <button className="btn-outline-dark">CONTACT US</button>
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
