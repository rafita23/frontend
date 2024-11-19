import React from 'react';
import './Footer.css';
import certificate from '../assets/images/logos-normas-1.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h4>HOME Improvement Ventas</h4>
          <p>Zona Industrial Camino a Sucre</p>
          <p>Tranca salida a Sucre N°3452</p>
          <p>Potosí - Bolivia</p>
          <p>Teléfono: +591 (2) 6225312/14</p>
          <p>Email: ventas@inf636.com</p>
        </div>
        <div className="certificates">
          <img src={certificate} alt="Certificado" />
        </div>
      </div>
      <div className="footer-menu">
        <a href="#inicio">Inicio</a>
        <a href="#la-empresa">La empresa</a>
        <a href="#calidad">Política de calidad</a>
        <a href="#contacto">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
