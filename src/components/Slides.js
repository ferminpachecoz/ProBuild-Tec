import React from 'react';
import "./Slides.scss";

export default function Slides({imageDesktop, imageMovil, title, subtitle, callToAction, id}) {
  return (
    <picture className='slides row' >
      <source
        media="(max-width: 768px)"
        srcSet={imageMovil}
      />
      <img
        src={imageDesktop}
        className="d-block w-100"
        alt="Imagen 3"
        loading={id==0?"eager":"lazy"}
      />
      <div className='text col-12 col-lg-6'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div className='center'>
          <button>
            <p>{callToAction}</p> 
          </button>
        </div>
      </div>
    </picture>
  )
}
