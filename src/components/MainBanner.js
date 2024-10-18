import React from 'react';
import "./MainBanner.scss";
import Slides from './Slides';


export default function MainBanner(){
  let array=[
    {
      img: "/images/banner-1.jpeg.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur",
      subtitle: "Duis non enim auctor justo mollis imperdiet. In imperdiet arcu at elementum elementum. Nulla eget porta justo.",
      callToAction: "lorem ipsum"
    },
    {
      img: "/images/banner-2.jpeg",
      title: "Lorem ipsum dolor sit amet, consectetur 111",
      subtitle: "Duis non enim auctor justo mollis imperdiet. In imperdiet arcu at elementum elementum. Nulla eget porta justo.",
      callToAction: "lorem ipsum"
    },
    {
      img: "/images/banner-1.jpeg.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur 222",
      subtitle: "Duis non enim auctor justo mollis imperdiet. In imperdiet arcu at elementum elementum. Nulla eget porta justo.",
      callToAction: "lorem ipsum"
    },
    
  ]
  return(
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner">
        {
          array.map((item, index)=>(
            <div className={`carousel-item ${index==0?'active':''}`} data-bs-interval="5000" key={index}>
              <Slides image={item.img} title={item.title} subtitle={item.subtitle} callToAction={item.callToAction} />
            </div>
          ))
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev" id="btn">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next" id="btn">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
