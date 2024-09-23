import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LineaTitle from '../components/LineaTitle';
import LineaInfo from '../components/LineaInfo';
import LineaMaquinas from '../components/LineaMaquinas';

export default function Linea() {

  return (
    <>
      <Header />
      <LineaTitle />
      <LineaInfo />
      <LineaMaquinas />
      <Footer />
    </>
  )
}
