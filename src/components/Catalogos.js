import React from 'react';
import "./Catalogos.scss";

export default function Catalogos() {
  let array =[
    {
      name: "PVC", 
      img: "/images/Catalogo PVC PNG.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/04/11131201/2023_PVC_FRA_EN_ISP_V8-11.04.23.pdf"
    },
    {
      name: "Aluminio", 
      img: "/images/Catalogo aluminio PNG.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/04/11131227/2023-FR-ENG-ESP-ALU-V10-07.04.23.pdf"
    },
    {
      name: "Folleto General",
      img: "/images/Catalogo general PNG.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/01/17165523/GENERAL_BROSCHURE_FR_EN_ES.pdf"
    }
  ]
  return (
    <div className='catalogos'>
      <h2 id='catalogos'>Catálogos</h2>
      <div className='row justify-content-evenly contenedor row-cols-lg-3 row-cols-1'>
        {
          array.map((item,index)=>(
            <div className='wrapper' key={index}>
              <div className='card'>
                <div className='img-container'>
                  <img loading='lazy' src={item.img} alt={"Image about "+item.name} />
                </div>
                <p>{item.name}</p>
                <span className='d-flex justify-content-center'>
                  <a href={item.link} aria-label='Link to catalogue PDF'>
                    <p>Ver</p>
                    <i className="bi bi-download"></i>
                  </a>
                </span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
