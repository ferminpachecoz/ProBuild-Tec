import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LineaTitle from '../components/LineaTitle'
import FormTaller from '../components/FormTaller'
import Servicios from '../components/Servicios'

export default function ArmarTaller() {
  let array=[
    {
      id: 1,
      title: "Superficie Disponible",
      description: "Indícanos el espacio físico de tu taller destinado a al producción. Cada pack está diseñado para ocupar un área específica, asegurando que tengas espacio suficiente para operar con eficiencia.",
      img: "/images/size-gif"
    },
    {
      id: 2,
      title: "Cantidad de Operarios",
      description: "Dependiendo de cuántos operarios tengas disponibles, recomendaremos el pack que mejor se ajuste a la capacidad laboral de tu equipo.",
      img: "/images/operators-gif"
    },
    {
      id: 3,
      title: "Objetivo de Producción",
      description: "Selecciona cuántas ventanas diarias planeas fabricar. Basándonos en este dato, te sugeriremos la solución que te permitirá alcanzar tu objetivo con la maquinaria adecuada.",
      img: "/images/production-gif"
    }
  ]
  return (
    <>
      <Header style={"white"} />
      <LineaTitle title={"Armá tu taller"} subtitle={"¿No sabes qué pack de maquinaria se adapta mejor a tu taller de aberturas de PVC? ¡No te preocupes! En Pro Build, te ofrecemos una herramienta personalizada para que puedas armar tu taller ideal en función de tus necesidades y objetivos de producción. "} />
      <Servicios title={"¿Cómo funciona?"} subtitle={"Con solo ingresar algunos datos clave, como la superficie disponible, la cantidad de operarios, y tu objetivo de fabricación diaria, te ayudaremos a determinar el pack de maquinaria que mejor se adapta a tu negocio, optimizando tus recursos y maximizando tu productividad."} data={array} gif={true} />
      <FormTaller />
      <Footer />
    </>
  )
}
