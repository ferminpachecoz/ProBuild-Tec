import React from 'react';
import "./ProductInfo.scss";
import { useParams } from 'react-router-dom';
import array from "../database.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductInfo.scss'; // Archivo CSS para el estilo

export default function ProductInfo() {
  const { id } = useParams();
  let product = array.find(item=>item.id==id)
  console.log(product);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  function handleRedirect (){
    const phoneNumber = "5491123269142";  // Número de teléfono en formato internacional
    const message = `Buenas, me gustaría pedirte un presupuesto para la máquina ${product.name}`;  // Mensaje personalizado
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;  // Redirige a WhatsApp
  }

  return (
    <div className='product-info'>
      <h1 className='responsive-title'>{product.name}</h1>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <Slider {...settings}>
            <div className="image-slide" style={{ backgroundImage: "url('https://via.placeholder.com/800x600?text=Image+1')" }}>
            </div>
            <div className="image-slide" style={{ backgroundImage: "url('https://via.placeholder.com/800x600?text=Image+2')" }}>
            </div>
            <div className="image-slide" style={{ backgroundImage: "url('https://via.placeholder.com/800x600?text=Image+3')" }}>
            </div>
          </Slider>
        </div>
        <div className='col-12 col-lg-6 informacion'>
          <h1>{product.name}</h1>
          <h2>{product.categoria}</h2>
          <p className='description'>{product.description}</p>
          <ul className='accesorios'>
            <p>Accesorios Standard</p>
            <li>Sierra de Ø 420 mm</li>
            <li>Cinta transportadora manual MKN 300 (3 m)</li>
            <li>2 abrazaderas verticales</li>
            <li>Sistema de refrigeración de sierras via esprayado (ACK 420S)</li>
            <li>Martillo neumático</li>
          </ul>
          <div className='diagrama'>
            <p className='title'>Diagrama de Corte</p>
            <a href='/'>
              <i className="bi bi-filetype-pdf"></i>
              <p>{product.name}</p>
            </a>
          </div>
          <button onClick={handleRedirect}>Pedí tu Presupuesto!</button>
        </div>
      </div>
    </div>
  )
}
