import React from 'react';
import "./LineaInfo.scss";

export default function LineaInfo({production, description, space, operators, image, electricidadRequerida, aireComprimido}) {
  return (
    <div className='linea-info'>
      <div className='background' style={{backgroundImage: `url("${image}")`}}>

      </div>
      <div className='wrapper'>
        <p>{description}</p>
        <hr/>
        <div className='d-lg-flex d-block justify-content-evenly row-cols-lg-5'>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>{operators} operadores requeridos</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>{space} mts cuadrados</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>{production} marcos x dia</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>{electricidadRequerida} Kw</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>{aireComprimido}</p>
          </span>
        </div>
      </div>
    </div>
  )
}
