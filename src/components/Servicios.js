import React from 'react';
import "./Servicios.scss";
import CardServicio from './CardServicio';

export default function Servicios() {
  let array=[
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/industry-4-0-concept-illustration_114360-25336.jpg?t=st=1728419843~exp=1728423443~hmac=ad4c80dd9571ca0d492928615df0c473d2dd6604e235029a6d005a547051268a&w=740",
      title: "Maquinaria de Alta Tecnología",
      description: "Ofrecemos maquinaria avanzada para la fabricación de ventanas de PVC, diseñada para maximizar la eficiencia y precisión de tu taller."
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/online-tech-talks-concept-illustration_114360-7619.jpg?t=st=1728420050~exp=1728423650~hmac=b36530ec385dede62d7dece3fd4663be53747fc8e1ab42203dba0e642d54591f&w=740",
      title: "Consultoría Integral",
      description: "Asesoramos en cada paso de tu negocio, desde la selección de maquinaria hasta la optimización de procesos productivos."
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-vector/think-outside-box-concept-illustration_114360-15044.jpg?t=st=1728420222~exp=1728423822~hmac=fb569b837d178ae1be23a27bb1cfd9bbd6dbffca56f8442e83c68afb226d8930&w=740",
      title: "Personalización de Soluciones",
      description: "Adaptamos nuestras soluciones a las necesidades de tu taller, con layouts y maquinaria ajustados a tus objetivos."
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-vector/computer-troubleshooting-concept-illustration_114360-7616.jpg?t=st=1728420514~exp=1728424114~hmac=329c0aae5d8805f5126d0ab074304b50c14ed0df513f68b2aaea5a106afd7259&w=740",
      title: "Soporte Técnico Especializado",
      description: "Brindamos asistencia técnica continua, asegurando que tus equipos operen al máximo rendimiento."
    },
  ]
  return (
    <div className='servicios'>
      <h2>¿Que servicios ofrecemos?</h2>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore aeu fugiat nulla pariatur rui officia deserunt mollit anim id est laborum</p>
      <div className='row justify-content-evenly align-items-stretch row-cols-1 row-cols-lg-4 '>
        {
          array.map(item=>(
            <CardServicio key={item.id} image={item.img} title={item.title} description={item.description} />
          ))
        }
      </div>
    </div>
  )
}
