import { gql } from '@apollo/client';

// Consulta para obtener la lista de usuarios
export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

// Si necesitas más consultas, puedes agregarlas aquí
export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      userId
      product
      date
    }
  }
`;

export const GET_MEMBERSHIPS = gql`
  query GetMemberships {
    memberships {
      id
      type
      price
    }
  }
`;