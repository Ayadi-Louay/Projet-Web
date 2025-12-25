import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Transitex</h3>
          <p>Your trusted logistics partner across the Mediterranean.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/Help">Help</a></li>
            
           
            <li><a href="/about_us">About Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@transitex.com</p>
          <p>Phone: +216 22 222 222</p>
          <p>Address: Tunis, Tunisia</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Transitex. All rights reserved.
      </div>
    </footer>
  );
}