import React from 'react';
import "./MainBanner.scss";


export default function MainBanner(){
  return(
    <div className='main-banner row'>
      <div className='text col'>
        <h1>Lorem ipsum dolor sit amet, consectetur</h1>
        <p>Duis non enim auctor justo mollis imperdiet. In imperdiet arcu at elementum elementum. Nulla eget porta justo.</p>
        <button>
          <p>lorem ipsum</p> 
        </button>
      </div>
      <div className='col image row justify-content-center align-items-center'>
        <img src="https://hostiko.com/layout91/wp-content/uploads/2024/05/hostiko-banner-img.png" alt ="" />
      </div>
    </div>
  )
}
