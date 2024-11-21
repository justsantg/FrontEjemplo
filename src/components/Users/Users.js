import React, { useState } from 'react';
import './Users.css'; // Asegúrate de que este archivo CSS exista

const UsersComponent = () => {
  // Datos simulados de usuarios
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com' },
    { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com' },
    { id: 4, name: 'Ana Fernández', email: 'ana.fernandez@example.com' },
  ]);

  // Estado para el formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  // Estado para mostrar/ocultar el modal
  const [showModal, setShowModal] = useState(false);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser  = {
      id: users.length + 1,
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
    };
    setUsers([...users, newUser ]);
    setFormData({ firstName: '', lastName: '', email: '', password: '' }); // Limpiar el formulario
    setShowModal(false); // Ocultar el modal después de registrar un nuevo usuario
  };

  // Método para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="users-container">
      <h1 className="users-title">Lista de Usuarios registrados en nuestro gimnasio</h1>

      <button className="btn-register" onClick={() => setShowModal(true)}>Registrar nuevo usuario</button>

      <ul className="users-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2 className="form-title">Registrar nuevo usuario</h2>
            <form className="user-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
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

export default UsersComponent;