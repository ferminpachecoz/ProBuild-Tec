import React from 'react';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';

export default function ProductCard({id, name, description, image}) {
  return (
    <div className='prod-card col'>
      <Link className='anchor' to={`/products/${id}`} aria-label="Link to product details">
        <div className='product-card'>
          <div className='img' style={{backgroundImage: `url('/products/${name}/${image}')`}}></div>
          <div className='wrapper'>
            <p className='name'>{name}</p>
            <p className='description' dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>
      </Link>
    </div>
  )
}
