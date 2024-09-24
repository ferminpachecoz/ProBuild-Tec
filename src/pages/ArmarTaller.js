import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LineaTitle from '../components/LineaTitle'
import FormTaller from '../components/FormTaller'

export default function ArmarTaller() {
  return (
    <>
      <Header />
      <LineaTitle title={"Armá tu taller"} subtitle={"Descubrí cual es tu pack ideal con el poder de la Inteligencia Artificial"} />
      <FormTaller />
      <Footer />
    </>
  )
}
