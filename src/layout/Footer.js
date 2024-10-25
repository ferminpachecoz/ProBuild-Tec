import React from 'react';
import "./Footer.scss"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='row justify-content-evenly'>
        <div className='col-12 col-lg texto'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae pharetra nibh.</p>
        </div>
        <div className='col-12 col-lg menu'>
          <h2>MENÚ RÁPIDO</h2>
          <ul>
            <li><Link aria-label="Link to Home page" to="/"></Link></li>
            <li><Link aria-label="Link to About Us section" to="/">Nosotros</Link></li>
            <li><Link aria-label="Link to Contact section" to="/">Contacto</Link></li>
            <li><Link aria-label="Link to Our Team section" to="/">Nuestro Equipos</Link></li>
          </ul>
        </div>
        <div className='col-12 col-lg contact'>
          <h2>CONTACTO</h2>
          <p>Mail: loremipsum@gmail.com</p>
          <p>Télefono: 11-2233-4455</p>
        </div>
        <div className='col-12 col-lg'>
          <h2>SEGUINOS</h2>
          <Link to="/" aria-label='Link to our WhatsApp through website' className='icon-a'><i className="bi bi-whatsapp"></i></Link>
        </div>
      </div>
      <div className='copyright'>
        <p>Lorem Ipsum © 2024 Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
