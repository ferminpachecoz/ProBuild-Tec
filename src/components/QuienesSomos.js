import React from 'react';
import "./QuienesSomos.scss";

export default function QuienesSomos() {
  return (
    <div className='quienes-somos' id='quienessomos'>
      <h2>¿Quiénes Somos?</h2>
      <div className='row contenedor'>
        <div className='col-6 img'>
          <div className='shadow'></div>
        </div>
        <div className='col-6 text'>
          <p>Somos un equipo de profesionales con amplia experiencia en el sector de las aberturas de PVC y un enfoque decidido en la transformación tecnológica de la industria. Con más de una década de trayectoria, lideramos este proyecto con el objetivo de revolucionar un rubro históricamente tradicional, introduciendo tecnologías avanzadas en comunicación, procesos de fabricación y optimización de talleres. En un mercado que valora la precisión y la eficiencia, nuestro propósito es ofrecer soluciones innovadoras que permitan a nuestros clientes posicionarse de manera competitiva y sostenible.</p>
        </div>
      </div>
      <div className='row contenedor'>
        <div className='col-6 text'>
          <p>Este proyecto está dirigido por Cristóbal, quien cuenta con 10 años de experiencia en la gestión de carpinterías de PVC, y Fermín, especialista en programación y estudiante de Negocios Digitales en la Universidad de San Andrés. Juntos, combinamos nuestro conocimiento profundo de la industria con una visión orientada al futuro, apoyada en la implementación de tecnologías de última generación. Esto nos permite ofrecer no solo equipos de alta calidad, sino también estrategias de negocio que aseguren el crecimiento y la optimización de los procesos productivos.</p>
        </div>
        <div className='col-6 img'>
          <div className='shadow'></div>
        </div>
      </div>
    </div>
  )
}
