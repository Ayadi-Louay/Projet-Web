// Reservations.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Reservations() {
  const { userId } = useParams();
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/reservations/${userId}`)
      .then(res => setReservations(res.data))
      .catch(err => console.error(err));
  }, [userId]);

  return (
    <div>
      <h1>Mes Réservations</h1>
      {reservations.length === 0 && <p>Aucune réservation.</p>}
      {reservations.map(r => (
        <div key={r.id}>
          <p>Type: {r.type}</p>
          <p>Départ: {r.departure}</p>
          <p>Destination: {r.destination}</p>
          <p>Poids: {r.weight} kg</p>
          <p>Prix: {r.price} €</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
