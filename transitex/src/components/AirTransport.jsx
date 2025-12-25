import React, { useState, useEffect } from "react";
import "./AirTransport.css";
import { useNavigate } from "react-router-dom";

const AirTransport = () => {
  const navigate = useNavigate();

  // États principaux
  const [weight, setWeight] = useState(100);
  const [deliveryTime, setDeliveryTime] = useState(2);
  const [price, setPrice] = useState(0);
  const [airports, setAirports] = useState([]);
  const [sourceAirport, setSourceAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [manualWeight, setManualWeight] = useState("100");
  const [manualDelivery, setManualDelivery] = useState("2");

  // Initialisation des aéroports
  useEffect(() => {
    setAirports([
      "Tunis-Carthage International (TUN)",
      "Paris-Charles de Gaulle (CDG)",
      "New York JFK International (JFK)",
      "Dubai International (DXB)",
      "Tokyo Haneda (HND)",
      "Singapore Changi (SIN)",
      "London Heathrow (LHR)",
      "Frankfurt Airport (FRA)",
      "Los Angeles International (LAX)",
      "Hong Kong International (HKG)"
    ]);
  }, []);

  // Calcul du prix
  useEffect(() => {
    const baseRate = weight * 2.5;
    const expressFee = (4 - deliveryTime) * 75;
    const total = baseRate + expressFee;
    setPrice(total.toFixed(2));
  }, [weight, deliveryTime]);

  // Gestion de la saisie manuelle du poids
  const handleWeightChange = (e) => {
    const value = e.target.value;
    setManualWeight(value);
    if (value >= 1 && value <= 1000) {
      setWeight(Number(value));
    }
  };

  // Gestion de la saisie manuelle du temps
  const handleDeliveryChange = (e) => {
    const value = e.target.value;
    setManualDelivery(value);
    if (value >= 1 && value <= 4) {
      setDeliveryTime(Number(value));
    }
  };

  // Soumission du formulaire
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (sourceAirport && destinationAirport) {
      // Préparer les données de réservation pour l'aérien
      const reservationData = {
        type: "Air Freight", // Pour différencier dans la page de paiement
        weight: weight,
        deliveryTime: deliveryTime,
        selectedDeparture: sourceAirport,
        selectedDestination: destinationAirport,
        price: parseFloat(price),
        departureDate: document.getElementById("dispatch-date")?.value || new Date().toISOString().split('T')[0]
      };
      
      // Rediriger vers la page de paiement avec les données
      navigate("/payment", { state: { reservationData } });
    } else {
      alert("Please select both source and destination airports.");
    }
  };

  return (
    <div className="air-transport-container">
      {/* Background Clouds */}
      <div className="clouds-background">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="cloud cloud-4"></div>
        <div className="cloud cloud-5"></div>
        <div className="cloud cloud-6"></div>
        <div className="cloud cloud-7"></div>
        <div className="cloud cloud-8"></div>
        <div className="cloud cloud-9"></div>
      </div>

      {/* Main Content */}
      <main className="air-content-wrapper">
        {/* Air Transport Info Section */}
        <section className="air-intro-section">
          <div className="intro-header">
            <svg className="plane-logo-icon" viewBox="0 0 24 24">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
            </svg>
            <h1>Air Freight Services</h1>
          </div>
          <p className="intro-subtitle">
            Premium air cargo solutions with expedited delivery, 
            advanced security protocols, and global network coverage.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm.5 10h-1v4h1v-4zm0-5h-1v3h1V7z"/>
                </svg>
              </div>
              <h3>Express Delivery</h3>
              <p>Next-day and same-day options available</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Secure Handling</h3>
              <p>Temperature-controlled and hazardous materials</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-6H4V8h11v4zm5 6h-4v-4h4v4zm0-6h-4V8h4v4z"/>
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>Live GPS tracking and status updates</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3>Premium Support</h3>
              <p>24/7 customer service and assistance</p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="booking-form-section">
          <div className="form-header">
            <h2>Air Freight Booking Request</h2>
            <p className="form-subtitle">Complete all fields for your air shipment quotation</p>
          </div>

          <form className="air-booking-form" onSubmit={handleSubmit}>
            <div className="form-columns-container">
              {/* Airport Information - Left Column */}
              <div className="form-column">
                <fieldset className="airport-information">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Airport Information
                  </legend>

                  <div className="form-group airport-group">
                    <label htmlFor="source-airport" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                      </svg>
                      <span className="label-text">Source Airport</span>
                    </label>
                    <br></br>
                    <br />
                    <select
                      id="source-airport"
                      required
                      value={sourceAirport}
                      onChange={(e) => {
                        setSourceAirport(e.target.value);
                        if (e.target.value === destinationAirport) setDestinationAirport("");
                      }}
                      className="form-select airport-select"
                    >
                      <option value="">Select source airport</option>
                      {airports.map((airport, index) => (
                        <option key={`source-${index}`} value={airport}>
                          {airport}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group airport-group">
                    <label htmlFor="destination-airport" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="label-text">Destination Airport</span>
                    </label>
                    <br />
                    <br />
                    <select
                      id="destination-airport"
                      required
                      value={destinationAirport}
                      onChange={(e) => setDestinationAirport(e.target.value)}
                      className="form-select airport-select"
                    >
                      <option value="">Select destination airport</option>
                      {airports
                        .filter((a) => a !== sourceAirport)
                        .map((airport, index) => (
                          <option key={`dest-${index}`} value={airport}>
                            {airport}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-group date-group">
                    <label htmlFor="dispatch-date" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      <span className="label-text">Date of Dispatch</span>
                    </label>
                    <br />
                    <br />
                    <input 
                      id="dispatch-date"
                      type="date" 
                      required 
                      className="form-input date-input"
                    />
                  </div>
                </fieldset>
              </div>

              {/* Cargo Details - Right Column */}
              <div className="form-column">
                <fieldset className="cargo-details">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                    </svg>
                    Cargo Specifications
                  </legend>

                  {/* Package Weight Section */}
                  <div className="package-weight-section">
                    <div className="section-header">
                      <svg className="section-icon" viewBox="0 0 24 24">
                        <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                      </svg>
                      <h3>Package Weight (kg)</h3>
                    </div>
                    
                    <div className="slider-container">
                      <input
                        type="range"
                        min="1"
                        max="1000"
                        step="1"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="weight-slider"
                      />
                      <div className="slider-range-labels">
                        <span>1 kg</span>
                        <span>500 kg</span>
                        <span>1000 kg</span>
                      </div>
                    </div>
                    
                    <div className="manual-input-group">
                      <label className="manual-input-label">Manual Input:</label>
                      <div className="manual-input-wrapper">
                        <input
                          type="number"
                          min="1"
                          max="1000"
                          value={manualWeight}
                          onChange={handleWeightChange}
                          placeholder="Enter weight"
                          className="manual-weight-input"
                        />
                        <span className="input-unit">kg</span>
                      </div>
                      <div className="current-weight-display">
                        Current: <strong>{weight.toLocaleString()} kg</strong>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Time Section */}
                  <div className="delivery-time-section">
                    <div className="section-header">
                      <svg className="section-icon" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      <h3>Delivery Time (days)</h3>
                    </div>
                    
                    <div className="slider-container">
                      <input
                        type="range"
                        min="1"
                        max="4"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(Number(e.target.value))}
                        className="delivery-slider"
                      />
                      <div className="slider-range-labels">
                        <span>1 day</span>
                        <span>2.5 days</span>
                        <span>4 days</span>
                      </div>
                    </div>
                    
                    <div className="manual-input-group">
                      <label className="manual-input-label">Manual Input:</label>
                      <div className="manual-input-wrapper">
                        <input
                          type="number"
                          min="1"
                          max="4"
                          value={manualDelivery}
                          onChange={handleDeliveryChange}
                          placeholder="Enter days"
                          className="manual-delivery-input"
                        />
                        <span className="input-unit">days</span>
                      </div>
                      <div className="current-delivery-display">
                        Current: <strong>{deliveryTime} days</strong>
                      </div>
                    </div>
                  </div>

                  {/* Price Summary */}
                  <div className="price-summary">
                    <div className="price-header">
                      <svg className="price-icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                      </svg>
                      Estimated Cost
                    </div>
                    <div className="price-amount">${price}</div>
                    <div className="price-breakdown">
                      <div className="breakdown-item">
                        <span>Base rate:</span>
                        <span>${(weight * 2.5).toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Express fee:</span>
                        <span>${((4 - deliveryTime) * 75).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            {/* Sender Information */}
            <fieldset className="sender-information">
              <legend className="fieldset-title">
                <svg className="legend-icon" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Sender Information
              </legend>
              <div className="sender-fields">
                <div className="form-group sender-group">
                  <input
                    id="sender-firstname"
                    type="text"
                    placeholder="First Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group sender-group">
                  <input
                    id="sender-lastname"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group sender-group">
                  <input
                    id="sender-email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group sender-group">
                  <input
                    id="sender-phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="form-input"
                  />
                </div>
              </div>
            </fieldset>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={() => navigate(-1)}>
                Back
              </button>
              <button type="submit" className="btn-primary">
                <svg className="submit-icon" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                Request Air Shipping Quote
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="air-footer">
        <p>© 2025 AirLogistics Global — Premium Air Cargo Solutions</p>
      </footer>
    </div>
  );
};

export default AirTransport;