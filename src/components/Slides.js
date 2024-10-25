import React from 'react';
import "./Slides.scss";

export default function Slides({imageDesktop, imageMovil, title, subtitle, callToAction, mobileBg}) {
  return (
    <div className='slides row' style={{backgroundImage: `url(${mobileBg?imageMovil:imageDesktop})`}}>
      <div className='shadow'>
        <div className='text col-12 col-lg-7'>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <div className='center'>
            <button>
              <p>{callToAction}</p> 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
