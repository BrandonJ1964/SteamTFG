// src/pages/Tienda.jsx
import React, { useState } from 'react';

const Tienda = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="store">
      <h1>Tienda de Videojuegos</h1>
      
      <div className="search-bar">
        <input 
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Buscar juegos..." 
        />
      </div>

      <div className="filters">
        <button>Categorías</button>
        <button>Precio</button>
        <button>Más Valorados</button>
      </div>

      <div className="game-list">
        {/* Muestra los juegos filtrados aquí */}
        <div className="game-card">
          <img src="game-image.jpg" alt="Game Title" />
          <h3>Nombre del Juego</h3>
          <p>Precio: $20.00</p>
          <button>Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
