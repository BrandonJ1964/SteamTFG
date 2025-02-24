// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1>Bienvenido a tu plataforma de juegos</h1>
        <div>
          <Link to="/login">Iniciar sesión</Link> | <Link to="/register">Registrarse</Link>
        </div>
      </header>
      
      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-list">
          <div className="category-card">
            <h3>RPG</h3>
            <p>Explora mundos fantásticos</p>
          </div>
          <div className="category-card">
            <h3>Shooter</h3>
            <p>Acción sin límites</p>
          </div>
          <div className="category-card">
            <h3>Indie</h3>
            <p>Juegos creativos y originales</p>
          </div>
        </div>
      </section>

      <section className="popular-games">
        <h2>Juegos Populares</h2>
        <div className="game-list">
          {/* Aquí puedes mostrar juegos populares con un mapa o similar */}
          <div className="game-card">
            <img src="game-image.jpg" alt="Game Title" />
            <h3>Nombre del Juego</h3>
            <p>Precio: $10.00</p>
            <button>Ver Detalles</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
