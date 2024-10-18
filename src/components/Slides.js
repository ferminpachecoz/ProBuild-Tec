import React from 'react';
import "./Slides.scss";

export default function Slides({image, title, subtitle, callToAction}) {
  return (
    <div className='slides row' style={{backgroundImage: `url(${image})`}}>
      <div className='text col-12 col-lg-6'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className='center'>
          <button>
            <p>{callToAction}</p> 
          </button>
        </div>
      </div>
    </div>
  )
}
