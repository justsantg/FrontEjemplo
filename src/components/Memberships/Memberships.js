// src/components/Memberships/Memberships.js

import React from 'react';
import './Memberships.css'; // Importa el archivo CSS

// Datos simulados de membresías
const simulatedMemberships = [
  { id: 1, type: 'Membresía Básica', price: 19.99 },
  { id: 2, type: 'Membresía Premium', price: 29.99 },
  { id: 3, type: 'Membresía VIP', price: 39.99 },
  { id: 4, type: 'Membresía Anual', price: 199.99 },
];

const Memberships = () => {
  // Simulamos un estado de carga
  const loading = false;
  const error = false;

  // Si hay un error, mostramos un mensaje
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="memberships-container">
      <h2 className="memberships-title">Membresías</h2>
      {loading ? (
        <p>Cargando membresías...</p>
      ) : (
        <ul className="memberships-list">
          {simulatedMemberships.map(membership => (
            <li key={membership.id} className="membership-item">
              Tipo: <strong>{membership.type}</strong> - Precio: ${membership.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Memberships;