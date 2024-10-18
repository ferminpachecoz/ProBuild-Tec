import React from 'react';
import "./QuienesSomos.scss";
import BannerAbout from './BannerAbout';

export default function QuienesSomos() {
  let arr = [
    {
      subtitle: "Innovación constante",
      fill: "Nos mantenemos a la vanguardia en tecnología para asegurar que nuestros clientes cuenten con las mejores herramientas del mercado."
    },
    {
      subtitle: "Asesoramiento Integral",
      fill: "Nuestra experiencia no se limita a la venta de maquinaria, sino que abarca una consultoría completa para optimizar cada etapa del proceso de fabricación."
    },
    {
      subtitle: "Soporte técnico y mantenimiento",
      fill: "Ofrecemos acompañamiento constante para asegurar que cada equipo funcione al máximo rendimiento."
    },
    {
      subtitle: "Sostenibilidad y eficiencia",
      fill: "Estamos comprometidos con soluciones que no solo mejoren la productividad, sino que también sean responsables con el medio ambiente."
    },
  ]
  return (
    <div className='quienes-somos' id='quienessomos'>
      <h2>¿Quiénes Somos?</h2>
      <BannerAbout 
      title={"Nosotros"} 
      text={"En ProBuild Tec, somos un equipo de especialistas comprometidos con la innovación y la excelencia en el suministro de soluciones para la fabricación de ventanas de PVC. Con una sólida trayectoria en el mercado, nos hemos posicionado como líderes en la provisión de maquinaria de alta tecnología y consultoría integral para talleres que buscan optimizar sus procesos productivos."} 
      bg={false}
      image={"https://img.freepik.com/free-vector/mobile-control-data-analysis-illustration_1150-41584.jpg?t=st=1727185971~exp=1727189571~hmac=55c26123efe921a49d087a8d3bd4141d0bc8b2d7e830355e0a00d5d763c26c15&w=740"}
      reverse={false}
      col1={"col-lg-6"}
      col2={"col-lg-6"}
      />
      <BannerAbout 
      title={""} 
      text={"Nuestra empresa se destaca por ofrecer un servicio integral, no solo proveyendo maquinaria avanzada, sino también brindando asesoramiento estratégico en la selección de proveedores, herrajes, vidrio y todos los componentes necesarios para la fabricación de ventanas de calidad. Con un enfoque en la eficiencia operativa y el soporte personalizado, en ProBuild Tec trabajamos mano a mano con nuestros clientes para comprender sus necesidades específicas y desarrollar soluciones a medida que impulsen su crecimiento."} 
      bg={true}
      image={"/images/ejemplo1.png"}
      reverse={true}
      col1={"col-lg-6"}
      col2={"col-lg-6"}
      />
      <BannerAbout 
        title={"Nuestro Compromiso"}
        text={"Nos comprometemos a brindar un servicio altamente personalizado, adaptando nuestra oferta a las particularidades de cada proyecto."}
        bg={false}
        image={"/images/ejemplo2.jpg"}
        reverse={false}
        col1={"col-lg-7"}
        col2={"col-lg-5"}
      >
        <ul>
          {
            arr.map((item, index)=>(
              <li key={index} className='d-flex align-items-center'>
                <span className='icon'>
                  <i className="bi bi-check2"></i>
                </span>
                <span>
                  <p className='subtitle'>{item.subtitle}</p>
                  <p className='fill'>{item.fill}</p>
                </span>
              </li>
            ))
          }
        </ul>
      </BannerAbout>
    </div>
  )
}
