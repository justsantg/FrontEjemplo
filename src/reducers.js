// src/reducers.js

import { combineReducers } from 'redux';

// Un reducer de ejemplo
const initialState = {
  example: []
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Combina todos los reducers
const rootReducer = combineReducers({
  example: exampleReducer,
  // Puedes agregar más reducers aquí
});

export default rootReducer;