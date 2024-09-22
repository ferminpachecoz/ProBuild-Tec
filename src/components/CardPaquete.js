import React from 'react';
import "./CardPaquete.scss";
import { Link } from 'react-router-dom';

export default function CardPaquete({image, title, description, production, operators, space}) {
  return (
    <div className='paquete'>
      <div className='img-container'>
        <img src={image} alt={title} />
      </div>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
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
      <Link to="/">Mas información</Link>
    </div>
  )
}
