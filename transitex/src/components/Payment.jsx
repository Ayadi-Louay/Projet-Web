import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reservationData } = location.state || {};

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  if (!reservationData) {
    return (
      <div className="payment-error">
        <h2>No reservation data found.</h2>
        <button onClick={() => navigate("/")}>Return to Booking</button>
      </div>
    );
  }

  const handlePay = (e) => {
    e.preventDefault();
    alert(`Payment of $${reservationData.price} successful! Confirmation sent to your email.`);
    navigate("/");
  };

  return (
    <div className="payment-container">
      <div className="payment-card-wrapper">

        <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
            {/* Affiche "Air Freight" ou "Maritime Shipping" selon la provenance */}
            <p><strong>Service:</strong> {reservationData.type || "Maritime Shipping"}</p>
            <p><strong>Route:</strong> {reservationData.selectedDeparture} → {reservationData.selectedDestination}</p>
            <p><strong>Weight:</strong> {reservationData.weight} kg</p>
            <p><strong>Delivery:</strong> {reservationData.deliveryTime} days</p>
            <hr />
            <div className="total-price">
            <span>Total Amount:</span>
            <span className="amount">${reservationData.price}</span>
            </div>
        </div>
        </div>

        <div className="payment-form-section">
          <h2>Secure Payment</h2>
          <form onSubmit={handlePay}>
            <div className="form-group">
              <label>Cardholder Name</label>
              <br /><br />
              <input 
                type="text" 
                required 
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="John Doe" 
              />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <br />
              <br />
              <input 
                type="text" 
                required 
                maxLength="16"
                placeholder="1234 5678 9101 1121"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expiration</label>
                <br />
                <br />
                <input 
                  type="text" 
                  placeholder="MM/YY" 
                  required 
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>CVV</label>
                <br />
                <br />
                <input 
                  type="password" 
                  maxLength="3" 
                  placeholder="123" 
                  required 
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="btn-pay">
              Pay Now ${reservationData.price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;