import React from 'react';
import "./Catalogos.scss";

export default function Catalogos() {
  let array =[
    {
      name: "PVC", 
      img: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2022/07/17170041/PVC-196x277.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/04/11131201/2023_PVC_FRA_EN_ISP_V8-11.04.23.pdf"
    },
    {
      name: "Aluminio", 
      img: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2022/07/17170038/ALU-196x277.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/04/11131227/2023-FR-ENG-ESP-ALU-V10-07.04.23.pdf"
    },
    {
      name: "Folleto General",
      img: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/01/17165518/gb-196x277.png",
      link: "https://di33l1fv68t4r.cloudfront.net/wp-content/uploads/2023/01/17165523/GENERAL_BROSCHURE_FR_EN_ES.pdf"
    }
  ]
  return (
    <div className='catalogos' id='catalogos'>
      <h2>Catálogos</h2>
      <div className='row justify-content-evenly contenedor row-cols-3'>
        {
          array.map((item,index)=>(
            <div className='wrapper' key={index}>
              <div className='card'>
                <div className='img-container'>
                  <img src={item.img} alt={item.name} />
                </div>
                <p>{item.name}</p>
                <span className='d-flex justify-content-center'>
                  <a href={item.link}>
                    <p>Descargar</p>
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
