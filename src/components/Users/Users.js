// src/components/Users/Users.js

import React from 'react';
import './Users.css'; // Asegúrate de que este archivo CSS exista

const UsersComponent = () => {
  // Datos simulados de usuarios
  const users = [
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com' },
    { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com' },
    { id: 4, name: 'Ana Fernández', email: 'ana.fernandez@example.com' },
  ];

  return (
    <div className="users-container">
      <h1 className="users-title">Lista de Usuarios registrados en nuestro gimnasio</h1>
      <ul className="users-list">
        {users.map(user => (
          <li key={user.id} className="user-item">
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersComponent;