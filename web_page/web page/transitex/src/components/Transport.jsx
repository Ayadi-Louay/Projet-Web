import React from "react";
import { useNavigate } from "react-router-dom";
import "./Transport.css";

export default function Transport() {
  const navigate = useNavigate();

  return (
    <div className="transport-page">
      <header>
        <h1>Choose Your Transport Mode</h1>
        <p>Select one of the transport options below:</p>
      </header>

      <div className="transport-options">
        <div
          className="transport-card ship"
          onClick={() => navigate("/ship")}
        >
          🚢
          <h3>Ship</h3>
          <p>Reliable sea transport for cargo worldwide.</p>
        </div>

        <div
          className="transport-card plane"
          onClick={() => navigate("/airtransport")}
        >
          ✈️
          <h3>Air</h3>
          <p>Fast air transport with real-time tracking.</p>
        </div>

        <div
          className="transport-card train"
          onClick={() => navigate("/train")}
        >
          🚆
          <h3>Train</h3>
          <p>Efficient land transport across regions.</p>
        </div>
      </div>
    </div>
  );
}
