// src/store.js

import { createStore } from 'redux';
import rootReducer from './reducers'; // Asegúrate de que esta ruta sea correcta

const store = createStore(rootReducer);

export default store;