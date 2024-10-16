import React from 'react';
import "./CardMaquina.scss";
import db from "../database_dev.js";
import { Link } from 'react-router-dom';

export default function CardMaquina({maquina}) {
  let info = db.find(item=>item.title===maquina)
  
  return (
    <div className='card-maquina'>
      <Link to={`/products/${info.id}`}>
        <div className='image' style={{backgroundImage: `url("/products/${info.title}/${info.images[0]}")`}}>

        </div>
        <p>{info.code}</p>
      </Link>
    </div>
  )
}
