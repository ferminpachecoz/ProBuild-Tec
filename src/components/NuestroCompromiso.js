import React from 'react';
import "./NuestroCompromiso.scss";
import CardPersona from './CardPersona';

export default function NuestroCompromiso() {
  let array=[
    {
      name: "Cristóbal Pacheco",
      role: "CEO",
      image: "/images/user-placeholder.png"
    },
    {
      name: "Fermín Pacheco",
      role: "COO",
      image: "/images/user-placeholder.png"
    }
  ]
  return (
    <div className='nuestro-compromiso'>
      <h2>Lo que nos diferencia</h2>
      <p>Sabemos que la inversión en maquinaria es una decisión clave, por eso ofrecemos no solo productos de alta calidad, sino también un acompañamiento estratégico y personalizado. Nos aseguramos de que nuestros clientes estén equipados con todo lo necesario para crecer en el sector de aberturas de PVC, un mercado en constante expansión.</p>
      <div className='row justify-content-center align-items-center no-wrap g-5 row-cols-1'>
        {
          array.map((item,index)=>(
            <div key={index} className='col-lg-5 col-12'>
              <CardPersona name={item.name} role={item.role} image={item.image} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
