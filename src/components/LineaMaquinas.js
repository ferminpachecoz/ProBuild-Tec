import React from 'react';
import "./LineaMaquinas.scss";
import { useParams } from 'react-router-dom';
import db2 from "../database2.js";
import CardMaquina from "./CardMaquina.js"

export default function LineaMaquinas() {
  let { id } = useParams();
  let pack = db2.find(item=>toString(item.id) === toString(id));
  console.log(pack);
  
  return (
    <div className='linea-maquinas'>
      <p className='sec'>Qué ofrecemos...</p>
      <div className='row row-cols-2 title'>
          <h2>todas las máquinas incluidas</h2>
          <p>One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</p>
      </div>
      <div className='maquinas row row-cols-5 g-5 justify-content-start align-items-center'>
        {
          pack.machines.map((item, index)=>(
            <div key={index}>
              <CardMaquina maquina={item} />
            </div>
          ))
        }
      </div>
      <div className='row row-cols-2 title'>
        <h2>máquinas opcionales</h2>
        <p>One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</p>
      </div>
      <div className='maquinas row row-cols-5 justify-content-start align-items-center'>
        {
          pack.additionals.map((item, index)=>(
            <div key={index}>
              <CardMaquina maquina={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
