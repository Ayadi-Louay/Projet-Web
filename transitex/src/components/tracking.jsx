// src/components/Tracking.jsx
import React, { useState } from "react";
import "./tracking.css";

export default function Tracking() {
  const [tn, setTn] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!tn || tn.trim().length < 3) {
      setError("Veuillez saisir un numéro de suivi valide.");
      return;
    }

    setLoading(true);
    try {
      // Ici, tu peux appeler ton API
      // const res = await fetch(`/api/track/${encodeURIComponent(tn.trim())}`);
      // const data = await res.json();
      // setResult(data);

      // Simulation si pas d'API
      setResult({
        trackingNumber: tn.trim(),
        status: "En transit",
        history: [
          { date: "2025-12-23", location: "Tunis - Hub", state: "Departed" },
          { date: "2025-12-24", location: "Sfax - Hub", state: "In transit" },
        ],
      });
    } catch (err) {
      setError("Impossible de récupérer le statut pour ce numéro.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tracking-page">
      <header className="tracking-hero">
        <div className="tracking-hero-overlay">
          <form className="tracking-box" onSubmit={handleTrack}>
            <input
              type="text"
              placeholder="Entrez votre numéro de suivi ici"
              value={tn}
              onChange={(e) => setTn(e.target.value)}
              autoComplete="off"
            />
            <button type="submit" disabled={loading}>
              {loading ? "Recherche..." : "Suivre"}
            </button>
          </form>
        </div>
      </header>

      <section className="tracking-content">
        {error && <div className="alert error">{error}</div>}

        {result && (
          <div className="result-wrap">
            <h2>Numéro : {result.trackingNumber}</h2>
            <p>Statut actuel : <strong>{result.status}</strong></p>

            <h3>Historique :</h3>
            <ul className="timeline">
              {result.history.map((h, i) => (
                <li key={i} className="timeline-item">
                  <span>{h.date} - {h.location} : {h.state}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => { setTn(""); setResult(null); }}>Nouvelle recherche</button>
          </div>
        )}

        {!result && !error && (
          <p className="hint">Entrez votre numéro de suivi pour voir le statut et l'historique de votre bagage.</p>
        )}
      </section>
    </div>
  );
}
