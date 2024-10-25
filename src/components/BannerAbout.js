import React from 'react';
import "./BannerAbout.scss";

export default function BannerAbout({title, text, bg, image, reverse, children, col1, col2, size}) {
  return (
    <div className='row contenedor'>
      <div className={`col-12 order-1 ${col1} text ${reverse?"order-lg-2": "order-lg-1"}`} style={{backgroundColor: `${bg?"#F0F1FF":"white"}`}}>
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
      <div className={`col-12 order-2 ${col2} img ${reverse?"order-lg-1": "order-lg-2"}`} style={{backgroundImage: `url("${image}")`, backgroundSize: `${size}`}}>
      </div>
    </div>
  )
}
