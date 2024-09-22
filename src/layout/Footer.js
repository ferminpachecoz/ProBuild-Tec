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
        <div className='col-4 col-lg menu'>
          <h4>MENÚ RÁPIDO</h4>
          <ul>
            <li><Link to="/"></Link></li>
            <li><Link to="/">Nosotros</Link></li>
            <li><Link to="/">Contacto</Link></li>
            <li><Link to="/">Nuestro Equipos</Link></li>
          </ul>
        </div>
        <div className='col-4 col-lg contact'>
          <h4>CONTACTO</h4>
          <p>Mail: loremipsum@gmail.com</p>
          <p>Télefono: 11-2233-4455</p>
        </div>
        <div className='col-4 col-lg'>
          <h4>SEGUINOS</h4>
          <Link to="/" className='icon-a'><i className="bi bi-whatsapp"></i></Link>
        </div>
      </div>
      <div className='copyright'>
        <p>Lorem Ipsum © 2024 Todos los derechos reservados.</p>
      </div>
    </div>
  )
}
