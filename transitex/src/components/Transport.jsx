import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Transport.css";

export default function Transport() {
  const navigate = useNavigate();
   const { isAuthenticated, loading } = useAuth(); // Si tu utilises le contexte

  // Version avec contexte
  useEffect(() => {
    if (!loading && !isAuthenticated()) {
      navigate("/signin");
    }
  }, [loading, isAuthenticated, navigate]);

  // Version simplifiée (comme ton ami)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  // Si en train de charger
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si non authentifié (double sécurité)
  const token = localStorage.getItem("token");
  if (!token) {
    return null; // ou rediriger
  }

  return (
    <div className="transport-page">
      <header className="transport-header">
        <h1>Select Transport Mode</h1>
        <p className="transport-subtitle">Choose your preferred transportation method</p>
      </header>

      <div className="transport-options">
        <div
          className="transport-card ship-card"
          onClick={() => navigate("/ship")}
        >
          <div className="card-icon-container">
            <svg className="transport-icon" viewBox="0 0 24 24">
              <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.47.26-.59.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
            </svg>
          </div>
          <h3>Maritime Shipping</h3>
          <p>Cost-effective sea freight for bulk cargo with global coverage</p>
          <div className="card-features">
            <span>• Ocean Freight</span>
            <span>• Container Shipping</span>
            <span>• Bulk Cargo</span>
          </div>
          <button className="card-button">Select</button>
        </div>

        <div
          className="transport-card air-card"
          onClick={() => navigate("/airtransport")}
        >
          <div className="card-icon-container">
            <svg className="transport-icon" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
          </div>
          <h3>Air Freight</h3>
          <p>Express air transport with premium tracking and security</p>
          <div className="card-features">
            <span>• Express Delivery</span>
            <span>• Real-time Tracking</span>
            <span>• Temperature Control</span>
          </div>
          <button className="card-button">Select</button>
        </div>

        <div
          className="transport-card train-card"
          onClick={() => navigate("/train")}
        >
          <div className="card-icon-container">
            <svg className="transport-icon" viewBox="0 0 24 24">
              <path d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM8.5 16c-.83 0-1.5-.67-1.5-1.5S7.67 13 8.5 13s1.5.67 1.5 1.5S9.33 16 8.5 16zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5-6H6V6h12v4z"/>
            </svg>
          </div>
          <h3>Rail Transport</h3>
          <p>Efficient land transport for inter-regional logistics</p>
          <div className="card-features">
            <span>• Intermodal</span>
            <span>• Cross-border</span>
            <span>• Eco-friendly</span>
          </div>
          <button className="card-button">Select</button>
        </div>
      </div>

      <div className="transport-footer">
        <p>Need assistance? <button className="contact-btn">Contact Logistics Team</button></p>
      </div>
    </div>
  );
}