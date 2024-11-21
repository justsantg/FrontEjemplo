// src/App.js

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersComponent from './components/Users/Users'; // Asegúrate de que la ruta sea correcta
import Orders from './components/Orders/Orders';
import Memberships from './components/Memberships/Memberships';
import Template from './components/Template'; // Asegúrate de que la ruta sea correcta
import './components/Template.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              STRONGER
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/users">Users</Button>
            <Button color="inherit" component={Link} to="/orders">Orders</Button>
            <Button color="inherit" component={Link} to="/memberships">Memberships</Button>
          </Toolbar>
        </AppBar>

        <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Template />} /> {/* Ruta para el componente Template */}
            <Route path="/users" element={<UsersComponent />} /> {/* Ruta para el componente Users */}
            <Route path="/orders" element={<Orders />} /> {/* Ruta para el componente Orders */}
            <Route path="/memberships" element={<Memberships />} /> {/* Ruta para el componente Memberships */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;