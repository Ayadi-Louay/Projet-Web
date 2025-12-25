import React, { useState, useEffect } from "react";
import "./ShipTransport.css";
import { useNavigate } from "react-router-dom";

const ShipTransport = () => {
  const navigate = useNavigate();

  const [weight, setWeight] = useState(10000);
  const [deliveryTime, setDeliveryTime] = useState(15);
  const [price, setPrice] = useState(0);
  const [ports, setPorts] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [manualWeight, setManualWeight] = useState("10000");
  const [manualDelivery, setManualDelivery] = useState("15");

  useEffect(() => {
    setPorts([
      "Tunis-La Goulette (TUN)",
      "Marseille Port (MRS)",
      "Rotterdam Port (RTD)",
      "Singapore Port (SGP)",
      "New York Port (NYC)",
      "Shanghai Port (SHA)",
      "Dubai Port (DXB)",
      "Hamburg Port (HAM)",
      "Tokyo Port (TYO)",
      "Los Angeles Port (LAX)"
    ]);
  }, []);

  useEffect(() => {
    const baseRate = weight * 0.8;
    const expressFee = (30 - deliveryTime) * 3;
    const total = baseRate + expressFee;
    setPrice(total.toFixed(2));
  }, [weight, deliveryTime]);

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setManualWeight(value);
    if (value >= 10 && value <= 50000) {
      setWeight(Number(value));
    }
  };

  const handleDeliveryChange = (e) => {
    const value = e.target.value;
    setManualDelivery(value);
    if (value >= 5 && value <= 30) {
      setDeliveryTime(Number(value));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (selectedDeparture && selectedDestination) {
    // Préparer les données de réservation
    const reservationData = {
      weight,
      deliveryTime,
      selectedDeparture,
      selectedDestination,
      price: parseFloat(price),
      departureDate: document.getElementById("departure-date")?.value || new Date().toISOString().split('T')[0]
    };
    
    // Rediriger vers la page de paiement avec les données
    navigate("/payment", { state: { reservationData } });
  } else {
    alert("Please select both departure and destination ports.");
  }
};

  return (
    <div className="ship-transport-container">
      {/* Background Waves seulement - Pas de bateau */}
      <div className="waves-background">
        <div className="wave-layer wave-1"></div>
        <div className="wave-layer wave-2"></div>
        <div className="wave-layer wave-3"></div>
        <div className="wave-layer wave-4"></div>
        <div className="wave-layer wave-5"></div>
      </div>

      {/* Main Content */}
      <main className="ship-content-wrapper">
        <section className="ship-intro-section">
          <div className="intro-header">
            <svg className="ship-logo-icon" viewBox="0 0 24 24">
              <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.47.26-.59.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
            </svg>
            <h1>Maritime Shipping Services</h1>
          </div>
          <p className="intro-subtitle">
            Professional sea freight solutions with global coverage, real-time tracking, 
            and comprehensive logistics support for your international shipments.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>
                </svg>
              </div>
              <h3>Full & Groupage</h3>
              <p>FCL and LCL container options with flexible loading</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 4-5 11-5 11S7 13 7 9c0-2.76 2.24-5 5-5zm0 7.5c1.38 0 2.5-1.12 2.5-2.5S13.38 4.5 12 4.5 9.5 5.62 9.5 7s1.12 2.5 2.5 2.5z"/>
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>24/7 vessel monitoring and cargo tracking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <h3>Customs Support</h3>
              <p>Complete documentation and clearance assistance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
                </svg>
              </div>
              <h3>Eco-friendly</h3>
              <p>Sustainable shipping with reduced carbon footprint</p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="booking-form-section">
          <div className="form-header">
            <h2>Sea Freight Booking Request</h2>
            <p className="form-subtitle">Complete all fields for your maritime shipment quotation</p>
          </div>

          <form className="ship-booking-form" onSubmit={handleSubmit}>
            <div className="form-columns-container">
              {/* Port Information - GAUCHE */}
              <div className="form-column">
                <fieldset className="port-information">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Port Information
                  </legend>

                  <div className="form-group port-group">
                    <label htmlFor="departure-port" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                      Departure Port
                    
                    </label>
                    <br></br> 
                    <br></br>
                    <select
                      id="departure-port"
                      required
                      value={selectedDeparture}
                      onChange={(e) => setSelectedDeparture(e.target.value)}
                      className="form-select port-select"
                    >
                      <option value="">Select departure port</option>
                      {ports.map((port, index) => (
                        <option key={`dep-${index}`} value={port}>
                          {port}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group port-group">
                    <label htmlFor="destination-port" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Destination Port
                    </label>
                    <br></br><br></br>

                    <select
                      id="destination-port"
                      required
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="form-select port-select"
                    >
                      <option value="">Select destination port</option>
                      {ports
                        .filter(port => port !== selectedDeparture)
                        .map((port, index) => (
                          <option key={`dest-${index}`} value={port}>
                            {port}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-group date-group">
                    <label htmlFor="departure-date" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      Estimated Departure Date
                    </label>
                    <br></br><br></br>
                    <input 
                      id="departure-date"
                      type="date" 
                      required 
                      className="form-input date-input"
                    />
                  </div>
                </fieldset>
              </div>

              {/* Cargo Details - DROITE */}
              <div className="form-column">
                <fieldset className="cargo-details">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                    </svg>
                    Cargo Specifications
                  </legend>

                  {/* Poids */}
                  <div className="cargo-weight-section">
                    <div className="section-header">
                      <svg className="section-icon" viewBox="0 0 24 24">
                        <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
                      </svg>
                      <h3>Cargo Weight (kg)</h3>
                    </div>
                    
                    <div className="slider-container">
                      <input
                        type="range"
                        min="10"
                        max="50000"
                        step="100"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                        className="weight-slider"
                      />
                      <div className="slider-range-labels">
                        <span>10 kg</span>
                        <span>25,000 kg</span>
                        <span>50,000 kg</span>
                      </div>
                    </div>
                    
                    <div className="manual-input-group">
                      <label className="manual-input-label">Manual Input:</label>
                      <div className="manual-input-wrapper">
                        <input
                          type="number"
                          min="10"
                          max="50000"
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

                  {/* Temps de livraison */}
                  <div className="delivery-time-section">
                    <div className="section-header">
                      <svg className="section-icon" viewBox="0 0 24 24">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      <h3>Estimated Delivery Time (days)</h3>
                    </div>
                    
                    <div className="slider-container">
                      <input
                        type="range"
                        min="5"
                        max="30"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(Number(e.target.value))}
                        className="delivery-slider"
                      />
                      <div className="slider-range-labels">
                        <span>5 days</span>
                        <span>18 days</span>
                        <span>30 days</span>
                      </div>
                    </div>
                    
                    <div className="manual-input-group">
                      <label className="manual-input-label">Manual Input:</label>
                      <div className="manual-input-wrapper">
                        <input
                          type="number"
                          min="5"
                          max="30"
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

                  {/* Prix */}
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
                        <span>${(weight * 0.8).toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Express fee:</span>
                        <span>${((30 - deliveryTime) * 3).toFixed(2)}</span>
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
                <div className="form-group">
                  <input
                    id="sender-name"
                    type="text"
                    placeholder="Full Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="sender-email"
                    type="email"
                    placeholder="Email Address"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="sender-company"
                    type="text"
                    placeholder="Company (Optional)"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
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
                Request Shipping Quote
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ShipTransport;