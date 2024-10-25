import React from 'react';
import "./CardPaquete.scss";
import { Link } from 'react-router-dom';

export default function CardPaquete({id, image, title, short_description, production, operators, space, width}) {
  return (
    <div className='paquete'>
      <div className='img-container'>
        <img src={image} loading='lazy' alt={short_description} className={`${width}`} />
      </div>
      <p className='title'>{title}</p>
      <p className='description'>{short_description}</p>
      <div className='requerido'>
        <span className='d-flex align-items-center'>
          <i className="bi bi-check-lg"></i>
          <p>{production} <strong>marcos</strong> x dia</p>
        </span>
        <span className='d-flex align-items-center'>
          <i className="bi bi-check-lg"></i>
          <p>{operators} <strong>operadores</strong></p>
        </span>
        <span className='d-flex align-items-center'>
          <i className="bi bi-check-lg"></i>
          <p>{space} mts <strong>cuadrados</strong></p>
        </span>
      </div>
      <Link aria-label="More info about packages" to={`/nuestros-paquetes-personalizados/${id}`}>Mas información</Link>
    </div>
  )
}
