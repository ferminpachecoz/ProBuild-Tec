import React from 'react';
import "./Paquetes.scss";
import CardPaquete from './CardPaquete';

export default function Paquetes() {
  let array=[
    {
      id: 1,
      title: "Línea Básica",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut",
      production: "50-60",
      operators: 8,
      space: 300,
      image: "https://hostiko.com/layout91/wp-content/uploads/2024/05/vps-img1.png"
    },
    {
      id: 2,
      title: "Línea Media",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut",
      production: "80-90",
      operators: 15,
      space: 400,
      image: "https://hostiko.com/layout91/wp-content/uploads/2024/05/shared-img1.png"
    },
    {
      id: 3,
      title: "Línea Avanzada",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut",
      production: "120-150",
      operators: 20,
      space: 500,
      image: "https://hostiko.com/layout91/wp-content/uploads/2024/05/dedicated-img1.png"
    },
  ]
  return (
    <div className='paquetes' id='paquetes'>
      <h2 className='main-title'>Elegí tu paquete ideal</h2>
      <div className='row justify-content-evenly align-items-center g-5 row-cols-3 paq-container'>
        {
          array.map(item=>(
            <div key={item.id}>
              <CardPaquete  
              image={item.image} 
              title={item.title} 
              description={item.description}
              production={item.production}
              operators={item.operators}
              space={item.space}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}
