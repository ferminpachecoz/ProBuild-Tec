import React from "react";
import Header from "../layout/Header";
import MainBanner from "../components/MainBanner";
import QuienesSomos from "../components/QuienesSomos";
import Footer from "../layout/Footer";
import Servicios from "../components/Servicios";
import Paquetes from "../components/Paquetes";
import Catalogos from "../components/Catalogos";
import Contacto from "../components/Contacto";
import NuestroCompromiso from "../components/NuestroCompromiso";

export default function Home(){
  function handleRedirect (){
    const phoneNumber = "5491123269142";  // Número de teléfono en formato internacional
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text`;
    
    window.location.href = url;  // Redirige a WhatsApp
  }
  let arrayServicios=[
    {
      id: 1,
      img: "/images/consultoria-integral.webp",
      title: "Consultoria integral",
      description: "Ofrecemos un servicio de asesoramiento integral para aquellos que buscan emprender o mejorar su producción en el rubro de aberturas de PVC."
    },
    {
      id: 2,
      img: "/images/optimizacion.webp",
      title: "Optimizacion de Procesos",
      description: "Te ayudamos a mejorar la eficiencia de tu fábrica, desde la planificación del layout hasta la instalación de equipos que maximizan la producción."
    },
    {
      id: 3,
      img: "/images/proveedores-certificados.webp",
      title: "Proveedores Certificados",
      description: "Gracias a nuestra experiencia, hemos desarrollado relaciones con proveedores de los mejores perfiles, herrajes, accesorios y vidrio para la fabricación de ventanas de PVC."
    },
    {
      id: 4,
      img: "/images/acompañamiento.webp",
      title: "Acompañamiento integral",
      description: "Te acompañamos desde el inicio, asesorándote en la compra de maquinaria adecuada, y seguimos trabajando contigo a lo largo del tiempo."
    },
  ]
  return(
    <>
      <div className="wpp-button" onClick={handleRedirect}>
        <i className="bi bi-whatsapp"></i>
      </div>
      <Header style={"dark"} />
      <MainBanner />
      <div className="background" 
        style={{
          backgroundImage: "url('https://hostiko.com/layout91/wp-content/uploads/2024/05/domain-sec-bg.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
      }}>
        <Servicios title={"¿Que servicios ofrecemos?"} subtitle={"Ofrecemos maquinaria especializada, asesoramiento técnico y capacitación para optimizar la producción de aberturas de PVC, adaptándonos a proyectos de cualquier escala."} data={arrayServicios} gif={false} rows="4" />
        <Paquetes />
      </div>
      <QuienesSomos />
      {/* <NuestroCompromiso /> */}
      <Catalogos />
      <Contacto />
      <Footer />
    </>
  )
}