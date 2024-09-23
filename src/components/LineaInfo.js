import React from 'react';
import "./LineaInfo.scss";

export default function LineaInfo() {
  return (
    <div className='linea-info'>
      <div className='background'>

      </div>
      <div className='wrapper'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <hr/>
        <div className='d-flex justify-content-evenly'>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>Lorem ipsum dolor sit amet</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>Lorem ipsum dolor sit amet</p>
          </span>
          <span className='contenedor'>
            <i className="bi bi-check-lg"></i>
            <p>Lorem ipsum dolor sit amet</p>
          </span>
        </div>
      </div>
    </div>
  )
}
