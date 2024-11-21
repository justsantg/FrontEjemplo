// src/graphql/config/apiRoutes.js

const API_BASE_URL = 'https://api.example.com/graphql'; // Cambia esto a la URL de tu API

const API_ROUTES = {
  users: `${API_BASE_URL}/users`, // Ruta para usuarios
  orders: `${API_BASE_URL}/orders`, // Ruta para órdenes
  memberships: `${API_BASE_URL}/memberships`, // Ruta para membresías
  products: `${API_BASE_URL}/products`, // Ruta para productos
  payments: `${API_BASE_URL}/payments`, // Ruta para pagos
};

export default API_ROUTES;