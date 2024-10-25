import React from 'react';
import "./LineaTitle.scss";
import { useParams } from 'react-router-dom';
import db from "../database2";

export default function LineaTitle({title, subtitle}) {
  
  return (
    <div className='linea-title'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  )
}
