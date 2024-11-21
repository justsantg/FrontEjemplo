// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { usersClient } from './graphql/client'; // Importa el cliente que deseas usar
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={usersClient}> {/* Usa el cliente importado */}
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);