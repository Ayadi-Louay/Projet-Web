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
    ]);
  }, []);

  // Calcul du prix
  useEffect(() => {
    const newPrice = (weight * 0.5 + (4 - deliveryTime) * 20).toFixed(2);
    setPrice(newPrice);
  }, [weight, deliveryTime]);

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sourceStation || !destinationStation) {
      alert("Please select both source and destination stations.");
      return;
    }
    navigate("/payment"); // Redirection après validation
  };

  return (
    <div className="train-transport-page">
      <main>
        {/* Info section */}
        <section className="train-info">
          <h1>🚆 Train Transport Services</h1>
          <p>
            Reliable and eco-friendly train transport solutions for packages of all sizes.
          </p>
          <ul>
            <li>National and international routes</li>
            <li>Fragile and hazardous material handling</li>
            <li>Insurance and customs support</li>
            <li>Real-time shipment tracking</li>
          </ul>
        </section>

        {/* Booking section */}
        <section className="booking-section">
          <h2>📦 Book Your Train Shipment</h2>
          <form className="booking-form" onSubmit={handleSubmit}>
            <fieldset>
              <legend>Shipment Details</legend>

              <label>Source Station:</label>
              <select
                required
                value={sourceStation}
                onChange={(e) => {
                  setSourceStation(e.target.value);
                  if (e.target.value === destinationStation) setDestinationStation("");
                }}
              >
                <option value="">--Select source station--</option>
                {stations.map((s, i) => (
                  <option key={i} value={s}>{s}</option>
                ))}
              </select>

              <label>Destination Station:</label>
              <select
                required
                value={destinationStation}
                onChange={(e) => setDestinationStation(e.target.value)}
              >
                <option value="">--Select destination station--</option>
                {stations
                  .filter((s) => s !== sourceStation)
                  .map((s, i) => (
                    <option key={i} value={s}>{s}</option>
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

      
    </div>
  );
};

export default TrainTransport;
