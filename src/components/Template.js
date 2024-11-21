// src/components/Template.js

import React, { useState } from 'react';
import './Template.css'; // Importar el archivo CSS

const Template = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias por registrarte, ${name}!`);
  };

  return (
    <div className="template-container">
      <h1 className="welcome-text">Bienvenido a Nuestro Gimnasio</h1>
      <p>¡Únete a nosotros y transforma tu vida!</p>
      
      <form onSubmit={handleSubmit} className="registration-form">
        <input 
          type="text" 
          placeholder="Tu nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Tu correo electrónico" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <button type="submit" className="cta-button">¡Comienza Ahora!</button>
      </form>

      <h2>Beneficios de unirte a nosotros:</h2>
      <ul className="benefits-list">
        <li>Entrenadores profesionales y certificados.</li>
        <li>Acceso a equipos de última generación.</li>
        <li>Clases grupales motivadoras.</li>
        <li>Programas personalizados de entrenamiento.</li>
        <li>Ambiente amigable y motivador.</li>
      </ul>
    </div>
  );
};

export default Template;