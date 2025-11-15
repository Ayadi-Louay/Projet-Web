import mission from "../assets/mission.png";
import userPlaceholder from "../assets/user-placeholder.jpg";
import mahdi from "../assets/mahdi.png";
import farhat from "../assets/farhat.png";

import React from "react";
import "./about_us.css";


export default function AboutUs() {
  return (
    <main className="about-page">


      <section className="hero">
        <div className="hero-overlay">
          <h1>ABOUT US – Transitex</h1>
        </div>
      </section>

      <section className="container who-we-are">
        <h2 className="section-title gold">Who We Are</h2>
        <p className="lead">Transitex is a Tunisian-based international transit and logistics service created to simplify, secure, and digitalize import and export operations for businesses of all sizes. We provide smart, transparent, and efficient logistics solutions that connect Tunisia to the rest of the world.</p>

        <blockquote className="vision">
          “Our vision is to make global trade faster, clearer, and more accessible — especially for developing markets like Tunisia.”
        </blockquote>
      </section>

      <section className="container mission">
        <div className="mission-left">
          <h2 className="section-title gold">Our Mission</h2>
          <p>To streamline international transit for Tunisian and global businesses by offering a modern, tech-driven platform that reduces delays, lowers costs, and enhances visibility across every shipment.</p>

          <p className="commitment">Our commitment:</p>
          <ul className="bullets">
            <li>Simplify customs procedures</li>
            <li>Ensure transparency and tracking</li>
            <li>Improve delivery speed and reliability</li>
            <li>Empower companies to grow beyond borders</li>
          </ul>
        </div>

        <div className="mission-right">
          <img src={mission} alt="Mission" className="mission-img" />
        </div>
      </section>

      <section className="container values">
        <h2 className="section-title gold">Our Values</h2>

        <div className="values-table-wrap">
          <table className="values-table" aria-label="Company values">
            <thead>
              <tr>
                <th>Value</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="value-name">Transparency</td>
                <td>Clear pricing, real-time tracking, no hidden costs</td>
              </tr>
              <tr>
                <td className="value-name">Efficiency</td>
                <td>Faster processes through automation and optimized logistics</td>
              </tr>
              <tr>
                <td className="value-name">Trust &amp; Reliability</td>
                <td>Strong partnerships, secure shipments, and customer-first service</td>
              </tr>
              <tr>
                <td className="value-name">Innovation</td>
                <td>Digital solutions tailored to the Tunisian and regional context</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="founders container">
        <h2 className="section-title gold">Meet the Founders</h2>

        <div className="founder-grid">
          <article className="founder-card">
            <div className="founder-photo-wrap">
              <img src={userPlaceholder} alt="Louay Ayadi" className="founder-photo" />
            </div>
            <h3>Louay Ayadi</h3>
            <p className="role">Co-Founder &amp; CEO</p>
            <p className="founder-desc">Visionary leader focused on strategy, digital transformation, and customer-centric experience.</p>
          </article>

          <article className="founder-card">
            <div className="founder-photo-wrap">
              <img src={mahdi} alt="Mahdi Fakhfakh" className="founder-photo" />
            </div>
            <h3>Mahdi Fakhfakh</h3>
            <p className="role">Co-Founder &amp; COO</p>
            <p className="founder-desc">Operational excellence expert in logistics coordination, process optimization, and supply chain efficiency.</p>
          </article>

          <article className="founder-card">
            <div className="founder-photo-wrap">
              <img src={farhat} alt="Farhat Zenim" className="founder-photo" />
            </div>
            <h3>Farhat Zenim</h3>
            <p className="role">Co-Founder &amp; CTO</p>
            <p className="founder-desc">Technology and systems development specialist.</p>
          </article>
        </div>
      </section>

      <section className="container why">
        <h2 className="section-title gold">Why Transitex?</h2>
        <ul className="bullets">  
          <li>A local solution tailored to the Tunisian logistics reality</li>
          <li>Combining technology + logistics expertise</li>
          <li>Strong focus on SMEs, importers, exporters, and e-commerce</li>
          <li>Multilingual support: Arabic, French, English</li>
          <li>A single platform to manage, track, and optimize all shipment operations</li>
        </ul>

        <div className="growth">
          <h2 className="gold">Our Growth Ambition</h2>
          <p>We aim to position Transitex as a major logistics enabler in North Africa by:</p>
          <ul className="bullets">
            <li>Expanding our regional partner network</li>
            <li>Offering more digital services &amp; automation</li>
            <li>Supporting Tunisian SMEs in global trade expansion</li>
          </ul>
        </div>
      </section>

    </main>
  );
}
