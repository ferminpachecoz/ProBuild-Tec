import React from 'react';
import "./MainBanner.scss";
import Slides from './Slides';


export default function MainBanner(){
  let array=[
    {
      img: "/images/banner-1.jpeg.jpg",
      title: "¿Estás listo para optimizar tu producción?",
      subtitle: "Arma tu taller ideal en solo unos clics. Descubre qué pack de maquinaria se adapta mejor a tus necesidades ingresando los detalles de tu taller",
      callToAction: "Arma tu Taller Ahora"
    },
    {
      img: "/images/banner-2.jpeg",
      title: "No solo vendemos máquinas, somos tu socio en el crecimiento",
      subtitle: "Ofrecemos consultoría integral y asesoramiento personalizado para que optimices cada etapa de tu producción. Desde proveedores hasta automatización, te acompañamos en todo el proceso.",
      callToAction: "Descubre Nuestra Consultoría"
    },
    {
      img: "/images/banner-1.jpeg.jpg",
      title: "Tecnología de Vanguardia para tu Taller",
      subtitle: "Descubre nuestros packs de maquinaria diseñados para potenciar la producción de aberturas de PVC. Innovación y eficiencia en cada solución.",
      callToAction: "Ver Packs de Maquinaria"
    },
    
  ]
  return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner">
        {
          array.map((item, index)=>(
            <div className={`carousel-item ${index==0?'active':''}`} data-bs-interval="5000" key={index}>
              <Slides image={item.img} title={item.title} subtitle={item.subtitle} callToAction={item.callToAction} />
            </div>
          ))
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev" id="btn">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next" id="btn">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
