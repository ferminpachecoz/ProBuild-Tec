import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ConsultoriaIntegral from '../components/ConsultoriaIntegral';
import LineaTitle from '../components/LineaTitle';
import BannerAbout from '../components/BannerAbout';
import Servicios from '../components/Servicios';

export default function Consultoria() {
  let data=[
    {
      id: 1,
      img: "/images/consultoria/auditorias.png",
      title: "Auditorías Técnicas de Maquinaria",
      description: "Realizamos auditorías periódicas para evaluar el rendimiento de la maquinaria, asegurando que funcionen a su máxima capacidad. Identificamos áreas de mejora y prevenimos posibles fallos para mantener la producción en marcha sin interrupciones."
    },
    {
      id: 2,
      img: "/images/consultoria/planificacion.png",
      title: "Planificación de Crecimiento del Taller",
      description: "Ofrecemos asesoramiento personalizado para la expansión de talleres a medida que tu negocio crece. Desde la compra de nueva maquinaria hasta la optimización del layout del taller, te acompañamos en cada etapa del crecimiento, asegurando que tu producción esté siempre al nivel de la demanda."
    },
    {
      id: 3,
      img: "/images/optimizacion.webp",
      title: "Acceso a Red de Contactos",
      description: "Facilita tu expansión y crecimiento con nuestro acceso exclusivo a una red de proveedores del sector que pueden ayudarte a colaborar, obtener materiales clave o establecer nuevas alianzas estratégicas en el rubro de las aberturas."
    },
    {
      id: 4,
      img: "/images/optimizacion.webp",
      title: "Creación de la Propuesta de Valor",
      description: "Te ayudamos a definir la propuesta de valor de tu empresa, clave para destacarse en el mercado competitivo de aberturas y construcción."
    },
    {
      id: 5,
      img: "/images/optimizacion.webp",
      title: "Diseño de Identidad Digital",
      description: "Nos encargamos de diseñar logos, banners e información digital personalizada para tu negocio, asegurando una presencia online coherente y efectiva."
    },
    {
      id: 6,
      img: "/images/optimizacion.webp",
      title: "Consultoría en Marketing y Capacitación para Ventas",
      description: "Proporcionamos consultoría en marketing digital y capacitaciones para tu equipo de ventas, optimizando tu estrategia comercial para aumentar tu visibilidad y atraer más clientes."
    },
  ]
  return (
    <>
      <Header />
      <LineaTitle title={"Consultoria"} subtitle={" "} />
      <BannerAbout 
        title={"Consultoría Integral Pro Build"} 
        text={"En Pro Build, nuestra consultoría está diseñada para impulsar el éxito de los fabricantes de aberturas de PVC y maximizar el rendimiento de sus talleres. Desde la primera consulta, trabajamos estrechamente para comprender a fondo los objetivos y necesidades de cada cliente."}
        image={"/images/consultoria/Logo fondo negro PNG.png"}
        col1={"col-lg-7"}
        col2={"col-lg-5"}
        size={"cover"}
      />
      <BannerAbout 
        title={"Desarrollo y optimización de talleres"} 
        text={"Acompañamos a nuestros clientes en cada fase del desarrollo, abarcando el diseño de layout de talleres, procesos de fabricación y equipamiento, con el objetivo de lograr la máxima eficiencia y productividad en la fabricación de aberturas y obtener el mejor precio del mercado."}
        image={"/images/consultoria/Consultoria.jpeg"}
        col1={"col-lg-6"}
        col2={"col-lg-6"}
        reverse={true}
      />
      <BannerAbout 
        title={"Instalación y capacitación"} 
        text={"Gracias a nuestra alianza estratégica con Yilmaz Machine, garantizamos la instalación y capacitación en el montaje de maquinaria, asegurando que su taller esté completamente operativo y a la vanguardia tecnológica."}
        image={"/images/optimizacion.webp"}
        col1={"col-lg-6"}
        col2={"col-lg-6"}
      />
      <Servicios 
        title={"Suscripción Premium Pro Build"}
        subtitle={"Para quienes buscan un acompañamiento integral, ofrecemos un servicio exclusivo que incluye"}
        data={data}
        gif={false}
        rows="3"
      />
      <Footer />
    </>
  )
}
