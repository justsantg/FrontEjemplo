// src/components/Memberships/Memberships.js

import React, { useState } from 'react';
import './Memberships.css'; // Importa el archivo CSS

// Datos simulados de membresías
const simulatedMemberships = [
  { id: 1, type: 'Membresía Básica', price: 19.99, startDate: '2023-01-01', endDate: '2023-12-31' },
  { id: 2, type: 'Membresía Premium', price: 29.99, startDate: '2023-02-01', endDate: '2023-12-31' },
  { id: 3, type: 'Membresía VIP', price: 39.99, startDate: '2023-03-01', endDate: '2023-12-31' },
  { id: 4, type: 'Membresía Anual', price: 199.99, startDate: '2023-04-01', endDate: '2024-03-31' },
];

const Memberships = () => {
  const [memberships, setMemberships] = useState(simulatedMemberships);
  const [formData, setFormData] = useState({
    type: '',
    price: '',
    startDate: '',
    endDate: '',
  });
  const [showModal, setShowModal] = useState(false);

  // Simulamos un estado de carga
  const loading = false;
  const error = false;

  // Si hay un error, mostramos un mensaje
  if (error) return <p>Error: {error.message}</p>;

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMembership = {
      id: memberships.length + 1,
      type: formData.type,
      price: parseFloat(formData.price),
      startDate: formData.startDate,
      endDate: formData.endDate,
    };
    setMemberships([...memberships, newMembership]); // Añadir la nueva membresía a la lista
    setFormData({ type: '', price: '', startDate: '', endDate: '' }); // Limpiar el formulario
    setShowModal(false); // Ocultar el modal después de registrar una nueva membresía
  };

  // Método para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="memberships-container">
      <h2 className="memberships-title">Membresías</h2>
      <button className="btn-register" onClick={() => setShowModal(true)}>Registrar nueva membresía</button>
      {loading ? (
        <p>Cargando membresías...</p>
      ) : (
        <ul className="memberships-list">
          {memberships.map(membership => (
            <li key={membership.id} className="membership-item">
              Tipo: <strong>{membership.type}</strong> - Precio: ${membership.price.toFixed(2)}<br />
              Fecha de Inicio: <strong>{membership.startDate}</strong> - Fecha de Fin: <strong>{membership.endDate}</strong>
            </li>
          ))}
        </ul>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2 className="form-title">Registrar nueva membresía</h2>
            <form className="membership-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="type"
                placeholder="Tipo de Membresía"
                value={formData.type}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="number"
                name="price"
                placeholder="Precio"
                value={formData.price}
                onChange={handleChange}
                required
                className="form-input"
                min="0"
                step="0.01"
              />
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="form-input"
              />
              <button type="submit" className="form-button">Registrar</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Memberships;