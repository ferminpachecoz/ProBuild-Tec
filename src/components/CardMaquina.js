import React from 'react';
import "./CardMaquina.scss";
import db from "../database_dev.js";
import { Link } from 'react-router-dom';

export default function CardMaquina({maquina}) {
  let info = db.find(item=>item.title===maquina)
  
  return (
    <div className='card-maquina'>
      <Link to={`/products/${info.id}`} target="_blank" aria-label='Link to Product Detail'>
        <div className='image' style={{backgroundImage: `url("/products/${info.title}/${info.images[0]}")`}}>

        </div>
        <p>{info.title}</p>
      </Link>
    </div>
  )
}
