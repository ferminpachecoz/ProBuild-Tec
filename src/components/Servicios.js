import React from 'react';
import "./Servicios.scss";
import CardServicio from './CardServicio';

export default function Servicios({title, subtitle, data, gif}) {
  return (
    <div className='servicios'>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className='row justify-content-evenly align-items-stretch row-cols-1 row-cols-lg-4 '>
        {
          data.map(item=>(
            <CardServicio key={item.id} image={item.img} title={item.title} description={item.description} gif={gif} />
          ))
        }
      </div>
    </div>
  )
}
