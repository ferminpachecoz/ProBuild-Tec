import React from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='row justify-content-evenly'>
        <div className='col-12 col-lg texto'>
          <p>Ofrecemos soluciones personalizadas, asesoramiento integral y tecnología de vanguardia para fábricas que buscan optimizar su producción con equipos de alta precisión y calidad.</p>
        </div>
        <div className='col-12 col-lg menu'>
          <h2>MENÚ RÁPIDO</h2>
          <ul>
            <li>
              <HashLink aria-label="Link to Make your Taller page" to="/armar-tu-taller">Armá tu fábrica</HashLink>
            </li>
            <li>
              <HashLink aria-label="Link to Catalogos section" smooth to="/#catalogos">Catálogos</HashLink>
            </li>
            <li>
              <HashLink aria-label="Link to Consultoria section" smooth to="/consultoria">Consultoría</HashLink>
            </li>
            <li>
              <HashLink aria-label="Link to Packages section" smooth to="/#paquetes">Paquetes</HashLink>
            </li>
            <li>
              <HashLink aria-label="Link to Contact form" smooth to="/#contacto">Contacto</HashLink>
            </li>
            <li>
              <HashLink aria-label="Link to All Products page" smooth to="/productos">Productos</HashLink>
            </li>
          </ul>
        </div>
        <div className='col-12 col-lg contact'>
          <h2>CONTACTO</h2>
          <p>Mail: loremipsum@gmail.com</p>
          <p>Télefono: +54 9 11 2326-9142</p>
        </div>
        <div className='col-12 col-lg'>
          <h2>SEGUINOS</h2>
          <Link to="/" aria-label='Link to our WhatsApp through website' className='icon-a'><i className="bi bi-whatsapp"></i></Link>
        </div>
      </div>
      <div className='copyright'>
        <p>Pro Build Tec © 2024 Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
