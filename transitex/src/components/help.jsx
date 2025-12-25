import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Help.css";

export default function Help() {
  const faqs = [
    { q: "Comment réserver un transport ?", a: "Choisissez votre mode de transport, remplissez le formulaire et soumettez la réservation." },
    { q: "Comment calculer le prix ?", a: "Le prix est automatiquement calculé en fonction du poids et du délai de livraison." },
    { q: "Comment suivre ma commande ?", a: "Rendez-vous dans votre profil et cliquez sur 'Expéditions en cours'." },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="help-page">
      {/* Background dynamique */}
      <div className="dynamic-background"></div>

      <div className="help-content">
        <h1>Centre d'Aide Transitex</h1>

        {/* FAQ */}
        <section className="faq-section">
          <h2>FAQ</h2>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
              <h3 onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
                {faq.q} <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
              </h3>
              {activeIndex === index && <p className="faq-answer">{faq.a}</p>}
            </div>
          ))}
        </section>

        {/* Formulaire de contact */}
        <section className="contact-section">
          <h2>Contactez-nous</h2>
          <form>
            <div className="form-group">
              <input type="text" required />
              <label>Nom</label>
            </div>
            <div className="form-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="form-group">
              <textarea required></textarea>
              <label>Votre message</label>
            </div>
            <button type="submit">Envoyer</button>
          </form>

          {/* Réseaux sociaux */}
          <div className="social-media">
            <h3>Suivez-nous</h3>
            <div className="icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
