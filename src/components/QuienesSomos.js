import React from 'react';
import "./QuienesSomos.scss";
import BannerAbout from './BannerAbout';

export default function QuienesSomos() {
  let arr = [
    {
      subtitle: "Acompañamiento",
      fill: "Desde talleres pequeños hasta operaciones de mayor escala, acompañamos a nuestros clientes en cada paso del camino."
    },
    {
      subtitle: "soluciones a medida",
      fill: "Desde los requerimientos de maquinaria hasta la optimización del espacio y los flujos de trabajo."
    },
    {
      subtitle: "valiosa experiencia",
      fill: "Ponemos a disposición todo nuestro conocimiento acerca de la industria del PVC"
    },
    {
      subtitle: "asesoramiento y proveedores",
      fill: "Nuestra misión es facilitar la entrada de nuevos emprendedores al mercado de aberturas de PVC, siempre con una mirada puesta en la eficiencia y la innovación."
    },
  ]
  return (
    <div className='quienes-somos' id='quienessomos'>
      <h2>¿Quiénes Somos?</h2>
      <BannerAbout 
      title={"Nosotros"} 
      text={"Somos un equipo de profesionales con amplia experiencia en el sector de las aberturas de PVC y un enfoque decidido en la transformación tecnológica de la industria. Con más de una década de trayectoria, lideramos este proyecto con el objetivo de revolucionar un rubro históricamente tradicional, introduciendo tecnologías avanzadas en comunicación, procesos de fabricación y optimización de talleres. En un mercado que valora la precisión y la eficiencia, nuestro propósito es ofrecer soluciones innovadoras que permitan a nuestros clientes posicionarse de manera competitiva y sostenible."} 
      bg={false}
      image={"https://img.freepik.com/free-vector/mobile-control-data-analysis-illustration_1150-41584.jpg?t=st=1727185971~exp=1727189571~hmac=55c26123efe921a49d087a8d3bd4141d0bc8b2d7e830355e0a00d5d763c26c15&w=740"}
      reverse={false}
      />
      <BannerAbout 
      title={""} 
      text={"Este proyecto está dirigido por Cristóbal, quien cuenta con 10 años de experiencia en la gestión de carpinterías de PVC, y Fermín, especialista en programación y estudiante de Negocios Digitales en la Universidad de San Andrés. Juntos, combinamos nuestro conocimiento profundo de la industria con una visión orientada al futuro, apoyada en la implementación de tecnologías de última generación. Esto nos permite ofrecer no solo equipos de alta calidad, sino también estrategias de negocio que aseguren el crecimiento y la optimización de los procesos productivos."} 
      bg={true}
      image={"/images/ejemplo1.png"}
      reverse={true}
      />
      <BannerAbout 
        title={"Lo que nos diferencia"}
        text={"Nos comprometemos a brindar un servicio altamente personalizado, adaptando nuestra oferta a las particularidades de cada proyecto."}
        bg={false}
        image={"/images/ejemplo2.jpg"}
        reverse={false}
      >
        <ul>
          {
            arr.map((item, index)=>(
              <li key={index} className='d-flex align-items-center'>
                <span className='icon'>
                  <i className="bi bi-check2"></i>
                </span>
                <span>
                  <p className='subtitle'>{item.subtitle}</p>
                  <p className='fill'>{item.fill}</p>
                </span>
              </li>
            ))
          }
        </ul>
      </BannerAbout>
    </div>
  )
}
