import React from 'react';
import "./Slides.scss";
import { Link } from 'react-router-dom';

export default function Slides({imageDesktop, imageMovil, title, subtitle, callToAction, mobileBg, link}) {
  return (
    <div className='slides row' style={{backgroundImage: `url(${mobileBg?imageMovil:imageDesktop})`}}>
      <div className='shadow'>
        <div className='text col-12 col-lg-7'>
          <h1 style={{fontWeight: 700, textTransform: "capitalize", color: "rgb(240,240,240)"}}>{title}</h1>
          <h2 style={{marginBottom: "1em", color: "rgb(240,240,240)"}}>{subtitle}</h2>
          <div className='center'>
            <Link to={link}>
              <p>{callToAction}</p> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
