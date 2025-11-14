import React, { useState, useEffect } from "react";
import "./AirTransport.css";
import { useNavigate } from "react-router-dom";

const AirTransport = () => {
  const navigate = useNavigate();

  // États principaux
  const [weight, setWeight] = useState(10);
  const [deliveryTime, setDeliveryTime] = useState(3);
  const [price, setPrice] = useState(0);
  const [airports, setAirports] = useState([]);

  // États pour source et destination
  const [sourceAirport, setSourceAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");

  // Initialisation des aéroports
  useEffect(() => {
    setAirports([
      "Tunis-Carthage (TUN)",
      "Paris-Charles de Gaulle (CDG)",
      "New York JFK (JFK)",
      "Dubai Intl (DXB)",
    ]);
  }, []);

  // Calcul du prix
  useEffect(() => {
    const newPrice = (weight * 2 + (4 - deliveryTime) * 50).toFixed(2);
    setPrice(newPrice);
  }, [weight, deliveryTime]);

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sourceAirport || !destinationAirport) {
      alert("Please select both source and destination airports.");
      return;
    }
    navigate("/payment"); // Redirection après validation
  };

  return (
    <div>
      {/* MAIN */}
      <main>
        <section className="air-transport-info">
          <h1>✈️ Air Transport Services</h1>
          <p>We provide fast, reliable, and secure air transport solutions worldwide.</p>
          <ul>
            <li>Express delivery for urgent shipments</li>
            <li>Handling of hazardous or fragile materials</li>
            <li>Customs clearance and insurance support</li>
            <li>Real-time GPS tracking of your shipments</li>
          </ul>
        </section>

        <section className="booking-section">
          <h2>📦 Book Your Air Shipment</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Shipment Details</legend>

              <label>Source Airport:</label>
              <select
                required
                value={sourceAirport}
                onChange={(e) => {
                  setSourceAirport(e.target.value);
                  if (e.target.value === destinationAirport) setDestinationAirport("");
                }}
              >
                <option value="">--Select an airport--</option>
                {airports.map((a, i) => (
                  <option key={i} value={a}>{a}</option>
                ))}
              </select>

              <label>Destination Airport:</label>
              <select
                required
                value={destinationAirport}
                onChange={(e) => setDestinationAirport(e.target.value)}
              >
                <option value="">--Select an airport--</option>
                {airports
                  .filter((a) => a !== sourceAirport)
                  .map((a, i) => (
                    <option key={i} value={a}>{a}</option>
                  ))}
              </select>

              <label>Date of Dispatch:</label>
              <input type="date" required />

              <label>Package Weight (kg):</label>
              <input
                type="range"
                min="1"
                max="1000"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
              />
              <span>{weight} kg</span>

              <label>Delivery Time (days):</label>
              <input
                type="range"
                min="1"
                max="3"
                value={deliveryTime}
                onChange={(e) => setDeliveryTime(Number(e.target.value))}
              />
              <span>{deliveryTime} days</span>

              <label>Estimated Price:</label>
              <input type="text" value={`$${price}`} readOnly />
            </fieldset>

            <fieldset>
              <legend>Sender Information</legend>
              <label>First Name:</label>
              <input type="text" placeholder="Your first name" required />

              <label>Last Name:</label>
              <input type="text" placeholder="Your last name" required />

              <label>Email:</label>
              <input type="email" placeholder="you@example.com" required />

              <button type="submit">Submit Booking</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 AirLogistics Global — All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AirTransport;
