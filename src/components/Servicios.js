import React from 'react';
import "./Servicios.scss";
import CardServicio from './CardServicio';

export default function Servicios() {
  let array=[
    {
      id: 1,
      img: "https://hostiko.com/layout91/wp-content/uploads/2024/05/feature-img.png",
      title: "Data Centers",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut."
    },
    {
      id: 2,
      img: "https://hostiko.com/layout91/wp-content/uploads/2024/05/feature-img1.png",
      title: "Global Network",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut."
    },
    {
      id: 3,
      img: "https://hostiko.com/layout91/wp-content/uploads/2024/05/feature-img2.png",
      title: "Maximum Perfomance",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut."
    },
    {
      id: 4,
      img: "https://hostiko.com/layout91/wp-content/uploads/2024/05/feature-img3.png",
      title: "Cloud Storage",
      description: "Duis aute irure dolor in repreo velit esse cillum dolore fugiat conseuatur aut."
    },
  ]
  return (
    <div className='servicios'>
      <h2>¿Que servicios ofrecemos?</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur rui officia deserunt mollit anim id est laborum</p>
      <div className='row justify-content-evenly align-items-center row-cols-4 '>
        {
          array.map(item=>(
            <CardServicio key={item.id} image={item.img} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}
