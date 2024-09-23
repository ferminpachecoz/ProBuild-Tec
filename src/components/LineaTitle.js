import React from 'react';
import "./LineaTitle.scss";
import { useParams } from 'react-router-dom';
import db from "../database2";

export default function LineaTitle() {
  const { id } = useParams();
  let pack = db.find(item => item.id == id)
  console.log(pack);
  
  return (
    <div className='linea-title'>
      <h1>{pack.name}</h1>
      <p>{pack.description}</p>
    </div>
  )
}
