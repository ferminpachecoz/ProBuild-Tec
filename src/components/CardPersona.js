import React from 'react';
import "./CardPersona.scss";

export default function CardPersona({image, name, role}) {
  return (
    <div className='card-persona'>
      <div className='img-container'>
        <div className='round'  style={{backgroundImage: `url(${image})`}}>

        </div>
      </div>
      <p className='name'>{name}</p>
      <p className='role'>{role}</p>
    </div>
  )
}
