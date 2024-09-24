import React from 'react';
import "./BannerAbout.scss";

export default function BannerAbout({title, text, bg, image, reverse, children}) {
  return (
    <div className='row contenedor'>
      <div className={`col-7 text ${reverse?"order-2": "order-1"}`} style={{backgroundColor: `${bg?"#F0F1FF":"white"}`}}>
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
      <div className={`col-5 img ${reverse?"order-1": "order-2"}`} style={{backgroundImage: `url("${image}")`}}>
      </div>
    </div>
  )
}
