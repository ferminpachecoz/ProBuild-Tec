import React from 'react';
import "./BannerAbout.scss";

export default function BannerAbout({title, text, bg, image, reverse, children}) {
  return (
    <div className='row contenedor'>
      <div className={`col-12 order-1 col-lg-7 text ${reverse?"order-lg-2": "order-lg-1"}`} style={{backgroundColor: `${bg?"#F0F1FF":"white"}`}}>
        <h3>{title}</h3>
        <p>{text}</p>
        {children}
      </div>
      <div className={`col-12 order-2 col-lg-5 img ${reverse?"order-lg-1": "order-lg-2"}`} style={{backgroundImage: `url("${image}")`}}>
      </div>
    </div>
  )
}
