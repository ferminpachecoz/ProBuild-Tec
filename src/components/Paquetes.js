import React from 'react';
import "./Paquetes.scss";
import CardPaquete from './CardPaquete';
import database from "../database2";

export default function Paquetes() {
  return (
    <div className='paquetes'>
      <h2 className='main-title' id='paquetes'>Elegí tu paquete ideal</h2>
      <div className='row justify-content-evenly align-items-center g-5 row-cols-1 row-cols-lg-4 paq-container'>
        {
          database.map(item=>(
            <div key={item.id}>
              <CardPaquete  
              id={item.id}
              image={item.image}
              title={item.name}
              description={item.description}
              production={item.production}
              operators={item.operatorsRequired}
              space={item.spaceRequired}
              width={"responsive-width"}
              short_description={item.short_description}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
