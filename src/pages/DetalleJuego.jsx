// src/pages/DetalleJuego.jsx
import React from 'react';

const DetalleJuego = ({ gameId }) => {
  // Aquí irían los detalles del juego, cargados desde una API
  return (
    <div className="game-detail">
      <h1>Nombre del Juego</h1>
      <img src="game-image.jpg" alt="Game Title" />
      <p>Descripción: Un juego increíble...</p>
      <p>Precio: $30.00</p>
      <p>Requisitos Técnicos: 8GB RAM, 2GB VRAM, etc.</p>
      <button>Comprar</button>

      <section className="community-forum">
        <h2>Foros</h2>
        <div className="forum-list">
          <div className="forum-post">
            <h3>¿Cómo ganar en este juego?</h3>
            <p>¿Alguien tiene tips para avanzar más rápido?</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetalleJuego;
