// Reservation.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./reservation.css";

const Reservation = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      // Exemple de données fictives
      setReservations([
        { code: "RES001", departure: "Sfax", arrival: "Tunis", weight: 10, price: 25, status: "En cours" },
        { code: "RES002", departure: "Sousse", arrival: "Sfax", weight: 5, price: 15, status: "Livré" },
        { code: "RES003", departure: "Tunis", arrival: "Gabes", weight: 15, price: 40, status: "Annulé" },
      ]);
    }
  }, [navigate]);

  // Fonction pour colorer l'état
  const getStatusClass = (status) => {
    switch (status) {
      case "En cours":
        return "status in-progress";
      case "Livré":
        return "status delivered";
      case "Annulé":
        return "status cancelled";
      default:
        return "status";
    }
  };

  return (
    <div className="reservation-container">
      <h2>Mes anciennes réservations</h2>
      <table className="reservation-table">
        <thead>
          <tr>
            <th>Code Réservation</th>
            <th>Départ</th>
            <th>Arrivée</th>
            <th>Poids (kg)</th>
            <th>Prix (€)</th>
            <th>État du transport</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.code}>
              <td>{res.code}</td>
              <td>{res.departure}</td>
              <td>{res.arrival}</td>
              <td>{res.weight}</td>
              <td>{res.price}</td>
              <td>
                <span className={getStatusClass(res.status)}>{res.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;
