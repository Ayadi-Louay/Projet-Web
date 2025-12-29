import React from "react";
import "./WhyTransitex.css";

import IndustrySectors from "../components/Industrysector";
import Network from "../components/Network";
// Import des composants d'icônes SVG
import GlobeIcon from "../icons/GlobeIcon";
import ClockIcon from "../icons/ClockIcon";
import ShieldIcon from "../icons/ShieldIcon";

export default function WhyTransitex() {
  return (
    <section className="why-container">
      <h3 className="section-title">Why Choose Transitex</h3>
      <div className="why-list">
        <div className="why-item">
          <div className="icon-container">
            <GlobeIcon className="icon" />
          </div>
          <div className="why-item-content">
            <h4>Global Coverage</h4>
            <p>Operating in over 150 countries with reliable shipping networks worldwide. Our extensive network ensures your goods reach any destination safely and efficiently.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="icon-container">
            <ClockIcon className="icon" />
          </div>
          <div className="why-item-content">
            <h4>Fast Delivery</h4>
            <p>Express shipping options with real-time tracking and guaranteed delivery times. We optimize routes to ensure timely delivery of your cargo.</p>
          </div>
        </div>

        <div className="why-item">
          <div className="icon-container">
            <ShieldIcon className="icon" />
          </div>
          <div className="why-item-content">
            <h4>Secure Transport</h4>
            <p>Advanced security measures and insurance coverage for your valuable cargo. 24/7 monitoring ensures complete protection throughout the journey.</p>
          </div>
        </div>
      </div>
      <Network/>
      <IndustrySectors/>
    </section>
    
  );
}