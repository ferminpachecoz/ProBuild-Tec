import React from "react";
import Header from "../layout/Header";
import MainBanner from "../components/MainBanner";
import QuienesSomos from "../components/QuienesSomos";
import MasVendidos from "../components/MasVendidos";
import TodosLosProductos from "../components/TodosLosProductos";
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
        <Servicios />
        <Paquetes />
      </div>
      <QuienesSomos />
      <NuestroCompromiso />
      <Catalogos />
      <Contacto />
      <Footer />
    </>
  )
}