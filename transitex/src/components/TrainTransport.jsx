import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./TrainTransport.css";

const TrainTransport = () => {
  const navigate = useNavigate();

  // États principaux
  const [weight, setWeight] = useState(10);
  const [deliveryTime, setDeliveryTime] = useState(1);
  const [price, setPrice] = useState(0);
  const [stations, setStations] = useState([]);
  const [manualWeight, setManualWeight] = useState("10");
  const [manualDelivery, setManualDelivery] = useState("1");

  // États pour source et destination
  const [sourceStation, setSourceStation] = useState("");
  const [destinationStation, setDestinationStation] = useState("");

  // Initialisation des gares
  useEffect(() => {
    setStations([
      "Tunis Centrale",
      "Sfax Ville",
      "Sousse",
      "Paris Gare du Nord",
      "Marseille Saint-Charles",
      "Berlin Hauptbahnhof",
      "Rome Termini",
      "Madrid Puerta de Atocha",
      "London King's Cross",
      "Amsterdam Centraal"
    ]);
  }, []);

  // Calcul du prix
  useEffect(() => {
    const baseRate = weight * 0.5;
    const expressFee = (4 - deliveryTime) * 20;
    const total = baseRate + expressFee;
    setPrice(total.toFixed(2));
  }, [weight, deliveryTime]);

  const handleWeightChange = (e) => {
    const value = e.target.value;
    setManualWeight(value);
    if (value >= 1 && value <= 1000) {
      setWeight(Number(value));
    }
  };

  const handleDeliveryChange = (e) => {
    const value = e.target.value;
    setManualDelivery(value);
    if (value >= 1 && value <= 3) {
      setDeliveryTime(Number(value));
    }
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sourceStation || !destinationStation) {
      alert("Please select both source and destination stations.");
      return;
    }
    
    // Préparer les données de réservation
    const reservationData = {
      weight,
      deliveryTime,
      sourceStation,
      destinationStation,
      price: parseFloat(price),
      departureDate: document.getElementById("departure-date")?.value || new Date().toISOString().split('T')[0]
    };
    
    navigate("/payment", { state: { reservationData } });
  };

  return (
    <div className="train-transport-container">
      {/* Background Rails - Inspiré par les rails de train */}
      <div className="rails-background">
        <div className="rail-layer rail-1"></div>
        <div className="rail-layer rail-2"></div>
        <div className="rail-layer rail-3"></div>
        <div className="rail-layer rail-4"></div>
        <div className="rail-layer rail-5"></div>
      </div>

      {/* Main Content */}
      <main className="train-content-wrapper">
        <section className="train-intro-section">
          <div className="intro-header">
            <svg className="train-logo-icon" viewBox="0 0 24 24">
              <path d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4zM5.5 16c-.83 0-1.5-.67-1.5-1.5S4.67 13 5.5 13s1.5.67 1.5 1.5S6.33 16 5.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-5H4V6h12v5z"/>
            </svg>
            <h1>Train Transport Services</h1>
          </div>
          <p className="intro-subtitle">
            Fast, reliable, and eco-friendly train transport solutions for packages of all sizes, 
            connecting cities across national and international routes.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2c-4 0-8 .5-8 4v9.5c0 .95.38 1.81 1 2.44V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-2.06c.62-.63 1-1.49 1-2.44V6c0-3.5-3.58-4-8-4z"/>
                </svg>
              </div>
              <h3>National & International</h3>
              <p>Connecting major cities across borders</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 2c2.76 0 5 2.24 5 5 0 4-5 11-5 11S7 13 7 9c0-2.76 2.24-5 5-5zm0 7.5c1.38 0 2.5-1.12 2.5-2.5S13.38 4.5 12 4.5 9.5 5.62 9.5 7s1.12 2.5 2.5 2.5z"/>
                </svg>
              </div>
              <h3>Real-time Tracking</h3>
              <p>24/7 train monitoring and cargo tracking</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <h3>Secure Handling</h3>
              <p>Fragile and hazardous material support</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-container">
                <svg viewBox="0 0 24 24" className="feature-icon">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
                </svg>
              </div>
              <h3>Eco-friendly</h3>
              <p>Low carbon footprint transportation</p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="booking-form-section">
          <div className="form-header">
            <h2>Train Freight Booking Request</h2>
            <p className="form-subtitle">Complete all fields for your railway shipment quotation</p>
          </div>

          <form className="train-booking-form" onSubmit={handleSubmit}>
            <div className="form-columns-container">
              {/* Station Information - GAUCHE */}
              <div className="form-column">
                <fieldset className="station-information">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    Station Information
                  </legend>

                  <div className="form-group station-group">
                    <label htmlFor="source-station" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      </svg>
                      Source Station
                    </label>
                    <br></br>
                    <br></br>
                    <select
                      id="source-station"
                      required
                      value={sourceStation}
                      onChange={(e) => {
                        setSourceStation(e.target.value);
                        if (e.target.value === destinationStation) setDestinationStation("");
                      }}
                      className="form-select station-select"
                    >
                      <option value="">Select source station</option>
                      {stations.map((station, index) => (
                        <option key={`src-${index}`} value={station}>
                          {station}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group station-group">
                    <label htmlFor="destination-station" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      Destination Station
                    </label>
                    <br></br>
                    <br></br>
                    <select
                      id="destination-station"
                      required
                      value={destinationStation}
                      onChange={(e) => setDestinationStation(e.target.value)}
                      className="form-select station-select"
                    >
                      <option value="">Select destination station</option>
                      {stations
                        .filter(station => station !== sourceStation)
                        .map((station, index) => (
                          <option key={`dest-${index}`} value={station}>
                            {station}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-group date-group">
                    <label htmlFor="departure-date" className="form-label">
                      <svg className="input-icon" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                      Date of Dispatch
                    </label>
                    <br></br>
                    <br></br>
                    <input 
                      id="departure-date"
                      type="date" 
                      required 
                      className="form-input date-input"
                    />
                  </div>
                </fieldset>
              </div>

              {/* Package Details - DROITE */}
              <div className="form-column">
                <fieldset className="package-details">
                  <legend className="fieldset-title">
                    <svg className="legend-icon" viewBox="0 0 24 24">
                      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/>
                    </svg>
                    Package Specifications
                  </legend>

                  {/* Poids */}
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

                  {/* Temps de livraison */}
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
                        max="3"
                        value={deliveryTime}
                        onChange={(e) => setDeliveryTime(Number(e.target.value))}
                        className="delivery-slider"
                      />
                      <div className="slider-range-labels">
                        <span>1 day</span>
                        <span>2 days</span>
                        <span>3 days</span>
                      </div>
                    </div>
                    
                    <div className="manual-input-group">
                      <label className="manual-input-label">Manual Input:</label>
                      <div className="manual-input-wrapper">
                        <input
                          type="number"
                          min="1"
                          max="3"
                          value={manualDelivery}
                          onChange={handleDeliveryChange}
                          placeholder="Enter days"
                          className="manual-delivery-input"
                        />
                        <span className="input-unit">days</span>
                      </div>
                      <div className="current-delivery-display">
                        Current: <strong>{deliveryTime} day{deliveryTime > 1 ? 's' : ''}</strong>
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
                        <span>${(weight * 0.5).toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span>Express fee:</span>
                        <span>${((4 - deliveryTime) * 20).toFixed(2)}</span>
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
                    id="sender-firstname"
                    type="text"
                    placeholder="First Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    id="sender-lastname"
                    type="text"
                    placeholder="Last Name"
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
                Book Train Shipment
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default TrainTransport;