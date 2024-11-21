// src/components/Orders/Orders.js

import React from 'react';
import './Orders.css'; // Importa el archivo CSS

// Datos simulados de órdenes
const simulatedOrders = [
  { id: 1, product: 'Membresía Mensual', date: '2023-10-01' },
  { id: 2, product: 'Clases de Yoga', date: '2023-10-02' },
  { id: 3, product: 'Entrenamiento Personal', date: '2023-10-03' },
  { id: 4, product: 'Suplementos de Proteína', date: '2023-10-04' },
];

const Orders = () => {
  // Simulamos un estado de carga
  const loading = false;
  const error = false;

  // Si hay un error, mostramos un mensaje
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="orders-container">
      <h2 className="orders-title">Órdenes</h2>
      {loading ? (
        <p>Cargando órdenes...</p>
      ) : (
        <ul className="orders-list">
          {simulatedOrders.map(order => (
            <li key={order.id} className="order-item">
              ID de Orden: <strong>{order.id}</strong>, Producto: {order.product}, Fecha: {order.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;