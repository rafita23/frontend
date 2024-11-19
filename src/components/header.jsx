import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.png';

const Header = () => {
  const toggleMenu = () => {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('open');
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="HOME Improvement Logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>&#9776;</button>
      <nav id="navMenu">
        <ul className="nav-links">
          <li><a href="#inicio">INICIO</a></li>
          <li><a href="#la-empresa">LA EMPRESA</a></li>
          <li><a href="#calidad">CALIDAD</a></li>
          <li><a href="#productos">PRODUCTOS</a></li>
          <li><a href="#contacto">CONTACTO</a></li>
          <li className="search-icon">&#128269;</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
