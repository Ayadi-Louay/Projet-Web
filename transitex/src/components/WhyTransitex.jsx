// WhyTransitex.jsx
import React from "react";

export default function WhyTransitex() {
  return (
    <section className="why-container">
      <h3 className="section-title">Why Transitex</h3>
      <div className="why-list">
        <div className="why-item">
          <span className="icon">🌍</span>
          <div>
            <h4>Global Coverage</h4>
            <p>Operating in over 150 countries with reliable shipping networks worldwide.</p>
          </div>
        </div>

        <div className="why-item">
          <span className="icon">⏱️</span>
          <div>
            <h4>Fast Delivery</h4>
            <p>Express shipping options with real-time tracking and guaranteed delivery times.</p>
          </div>
        </div>

        <div className="why-item">
          <span className="icon">🛡️</span>
          <div>
            <h4>Secure Transport</h4>
            <p>Advanced security measures and insurance coverage for your valuable cargo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
