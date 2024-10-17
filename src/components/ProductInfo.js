import React from 'react';
import "./ProductInfo.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductInfo.scss'; // Archivo CSS para el estilo
export default function ProductInfo({product}) {
  console.log(product);
  
  /* function handleRedirect (){
    const phoneNumber = "5491123269142";  // Número de teléfono en formato internacional
    const message = `Buenas, me gustaría pedirte un presupuesto para la máquina ${product.name}`;  // Mensaje personalizado
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    
    window.location.href = url;  // Redirige a WhatsApp
  } */

  return (
    <div className='product-info'>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {
            product.images.map((item, index)=>(
              <div className={`carousel-item ${index==0?"active":""}`} key={index}>
                <div className='img' style={{backgroundImage: `url('/products/${product.title}/${item}')`}}>

                </div>
              </div>
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='info'>
        {
          product.info.map((item, index)=>(
            <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
          ))
        }
        <h2>¿Por qué elegir la {product.title}?</h2>
        <p dangerouslySetInnerHTML={{ __html: product.why }}></p>
        {product.standards?
          <>
            <h2>Accesorios Estándar</h2>
            <p>{product.standards}</p>
          </>
          :""
        }
        {product.optionals?
          <>
            <h2>Accesorios opcionales para mayor versatilidad</h2>
            <p>{product.optionals}</p>
          </>
          :""
        }
        {product.specifications?
          <>
            <h2>Especificaciones</h2>
            <ul>
              {
                product.specifications.map((item, index)=>(
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))
              }
            </ul>
          </>
          :""
        }
        {product.video?
        <div className='video' dangerouslySetInnerHTML={{ __html: product.video }}></div>
        :""
        }
      </div>
    </div>
  )
}
