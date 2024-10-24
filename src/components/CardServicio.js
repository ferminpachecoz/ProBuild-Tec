import React, { useState } from 'react';
import "./CardServicio.scss";

export default function CardServicio({image, title, description, gif}) {
  const [imageSrc, setImageSrc] = useState(`${image}.png`);
  
  // Función para cambiar al GIF en hover
  const handleMouseEnter = () => {
    setImageSrc(`${image}.gif`);
  };

  // Función para cambiar de nuevo a la imagen estática cuando quitas el hover
  const handleMouseLeave = () => {
    setImageSrc(`${image}.png`);
  };
  return (
    <div className='card-servicio'>
      <div className='sub-container'>
        <div className='img-container'>
          {gif?
            <img className='gif' src={imageSrc} loading='lazy' alt="Icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          :
            <img className='normal-png' loading='lazy' src={image} alt="Icon" />
          }
        </div>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}
