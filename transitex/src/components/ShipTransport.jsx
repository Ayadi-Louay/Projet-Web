import React, { useState, useEffect } from "react";
import "./ShipTransport.css";
import { useNavigate } from "react-router-dom";

const ShipTransport = () => {
  const navigate = useNavigate();

  const [weight, setWeight] = useState(100);
  const [deliveryTime, setDeliveryTime] = useState(10);
  const [price, setPrice] = useState(0);
  const [ports, setPorts] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  // Rempli la liste des ports une seule fois
  useEffect(() => {
    setPorts([
      "Tunis-La Goulette (TUN)",
      "Marseille Port (MRS)",
      "Rotterdam Port (RTD)",
      "Singapore Port (SGP)",
      "New York Port (NYC)",
    ]);
  }, []);

  // Calcule automatique du prix
  useEffect(() => {
    const newPrice = (weight * 0.8 + (30 - deliveryTime) * 3).toFixed(2);
    setPrice(newPrice);
  }, [weight, deliveryTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="ship-transport-container">
      {/* 🌊 Section Info */}
      <main>
        <section className="ship-info">
          <h1>🚢 Ship Transport Services</h1>
          <p>
            We provide reliable and cost-effective sea freight solutions worldwide.
            Perfect for large cargo and international shipments.
          </p>
          <ul>
            <li>Full-container or groupage shipment options</li>
            <li>Real-time maritime tracking</li>
            <li>Customs clearance and documentation support</li>
            <li>Eco-friendly shipping choices</li>
          </ul>
        </section>

        {/* 📦 Booking Form */}
        <section className="booking-section">
          <h2>📦 Book Your Sea Shipment</h2>

          <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Shipment Details</legend>

              <label htmlFor="departure">Departure Port:</label>
              <select
                id="departure"
                required
                value={selectedDeparture}
                onChange={(e) => setSelectedDeparture(e.target.value)}
              >
                <option value="">--Select a port--</option>
                {ports.map((p, i) => (
                  <option key={`dep-${i}`} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <label htmlFor="destination">Destination Port:</label>
              <select
                id="destination"
                required
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
              >
                <option value="">--Select a port--</option>
                {ports
                  .filter((p) => p !== selectedDeparture)
                  .map((p, i) => (
                    <option key={`dest-${i}`} value={p}>
                      {p}
                    </option>
                  ))}
              </select>

              <label htmlFor="date">Departure Date:</label>
              <input id="date" type="date" required />

              <label htmlFor="weight">Container Weight (kg):</label>
              <input
                id="weight"
                type="range"
                min="10"
                max="50000"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
              <span>{weight} kg</span>

              <label htmlFor="delivery">Estimated Delivery Time (days):</label>
              <input
                id="delivery"
                type="range"
                min="5"
                max="30"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(Number(e.target.value))}
              />
              <span>{deliveryTime} days</span>

              <label htmlFor="price">Estimated Price:</label>
              <input id="price" type="text" value={`$${price}`} readOnly />
            </fieldset>

            <fieldset>
              <legend>Sender Information</legend>

              <label htmlFor="fullname">Full Name:</label>
              <input id="fullname" type="text" placeholder="Your full name" required />

              <label htmlFor="email">Email:</label>
              <input id="email" type="email" placeholder="you@example.com" required />

              <label htmlFor="company">Company (optional):</label>
              <input id="company" type="text" placeholder="Company name" />

              <button type="submit">Submit Booking</button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ShipTransport;
