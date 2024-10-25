import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LineaTitle from '../components/LineaTitle';
import LineaInfo from '../components/LineaInfo';
import LineaMaquinas from '../components/LineaMaquinas';
import array from "../database2.js"
import { useParams } from 'react-router-dom';

export default function Linea() {
  const { id } = useParams();
  let linea = array.find(item=>item.id==id)
  return (
    <>
      <Header style={"white"} />
      <LineaTitle />
      <LineaInfo description={linea.description} operators={linea.operatorsRequired} space={linea.spaceRequired} production={linea.production} image={linea.image} electricidadRequerida={linea.electricidadRequerida} aireComprimido={linea.aireComprimido} />
      <LineaMaquinas />
      <Footer />
    </>
  )
}
