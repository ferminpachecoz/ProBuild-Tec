import React from 'react';
import "./Servicios.scss";
import CardServicio from './CardServicio';

export default function Servicios() {
  let array=[
    {
      id: 1,
      img: "/images/consultoria-integral.png",
      title: "Consultoria integral",
      description: "Ofrecemos un servicio de asesoramiento integral para aquellos que buscan emprender o mejorar su producción en el rubro de aberturas de PVC."
    },
    {
      id: 2,
      img: "/images/optimizacion.png",
      title: "Optimizacion de Procesos",
      description: "Te ayudamos a mejorar la eficiencia de tu taller, desde la planificación del layout hasta la instalación de equipos que maximizan la producción."
    },
    {
      id: 3,
      img: "/images/proveedores-certificados.png",
      title: "Proveedores Certificados",
      description: "Gracias a nuestra experiencia, hemos desarrollado relaciones con proveedores de los mejores perfiles, herrajes, accesorios y vidrio para la fabricación de ventanas de PVC."
    },
    {
      id: 4,
      img: "/images/acompañamiento.png",
      title: "Acompañamiento integral",
      description: "Te acompañamos desde el inicio, asesorándote en la compra de maquinaria adecuada, y seguimos trabajando contigo a lo largo del tiempo."
    },
  ]
  return (
    <div className='servicios'>
      <h2>¿Que servicios ofrecemos?</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur rui officia deserunt mollit anim id est laborum</p>
      <div className='row justify-content-evenly align-items-stretch row-cols-1 row-cols-lg-4 '>
        {
          array.map(item=>(
            <CardServicio key={item.id} image={item.img} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}
