import React from 'react';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';

export default function ProductCard({id, name, description, image}) {
  return (
    <div className='prod-card col'>
      <Link className='anchor' to={`/products/${id}`}>
        <div className='product-card'>
          <div className='img' style={{backgroundImage: `url('products/${image}')`}}></div>
          <div className='wrapper'>
            <p className='name'>{name}</p>
            <p className='description'>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
