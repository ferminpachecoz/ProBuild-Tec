import React from 'react';
import "./LineaMaquinas.scss";
import CardMaquina from "./CardMaquina.js"

export default function LineaMaquinas({principales, additionals}) {
  return (
    <div className='linea-maquinas'>
      <p className='sec'>Qué ofrecemos...</p>
      <div className='row row-cols-2 title'>
          <h2>todas las máquinas incluidas</h2>
          <p>Descubre todas las máquinas incluidas en nuestros packs. Equipadas con tecnología de punta para optimizar tu producción y garantizar eficiencia en cada etapa del proceso de fabricación.</p>
      </div>
      <div className='maquinas row row-cols-2 row-cols-lg-5 g-5 justify-content-start align-items-center'>
        {
          principales.map((item, index)=>(
            <div key={index}>
              <CardMaquina maquina={item} />
            </div>
          ))
        }
      </div>
      <div className='row row-cols-2 title'>
        <h2>máquinas opcionales</h2>
        <p>Consulta las máquinas opcionales disponibles para personalizar tu taller. Agrega equipamiento adicional según tus necesidades para mejorar la productividad y adaptarte a los proyectos más exigentes.</p>
      </div>
      <div className='maquinas row row-cols-2 row-cols-lg-5 justify-content-start align-items-center'>
        {
          additionals.map((item, index)=>(
            <div key={index}>
              <CardMaquina maquina={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
