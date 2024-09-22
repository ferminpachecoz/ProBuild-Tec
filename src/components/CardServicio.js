import React from 'react';
import "./CardServicio.scss";

export default function CardServicio({image, title, description}) {
  return (
    <div className='card-servicio'>
      <div className='sub-container'>
        <div className='img-container'>
          <img src={image} alt="Icon" />
        </div>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}
