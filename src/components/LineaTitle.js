import React from 'react';
import "./LineaTitle.scss";
import { useParams } from 'react-router-dom';
import db from "../database2";

export default function LineaTitle({title, subtitle}) {
  const { id } = useParams();
  let pack = db.find(item => item.id == id)
  
  return (
    <div className='linea-title'>
      <h1>{title && subtitle?title:pack.name}</h1>
      <p>{title && subtitle?subtitle:pack.short_description}</p>
    </div>
  )
}
