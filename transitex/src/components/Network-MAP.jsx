import React from "react";
import "./Network-MAP.css";
import worldmap from "../assets/world-map.png";

export default function Network() {
  return (
    <main className="network-page">
      <h1>Our Global Network</h1>
      <p>
        Transitex connects Tunisia to the world through a reliable East–West logistics network.
      </p>
      <div className="map-container">
        <img
          src={worldmap}
          alt="Global logistics network map"
        />
      </div>
    </main>
  );
}