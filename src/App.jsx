import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import DetalleJuego from './pages/DetalleJuego';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/juego/:id" element={<DetalleJuego />} />
      </Routes>
    </Router>
  );
};

export default App;
