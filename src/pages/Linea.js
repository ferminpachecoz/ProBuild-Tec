import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import LineaTitle from '../components/LineaTitle';
import LineaInfo from '../components/LineaInfo';
import LineaMaquinas from '../components/LineaMaquinas';
import array from "../database2.js"
import { useParams } from 'react-router-dom';

export default function Linea() {
  const { title } = useParams();
  let a = title.split("-")
  let b = a.join(" ")
  let linea = array.find(item=>item.name==b)
  console.log(b);
  
  console.log(linea);
  
  return (
    <>
      <Header style={"white"} />
      <LineaTitle title={linea.name} subtitle={linea.short_description} />
      <LineaInfo description={linea.description} operators={linea.operatorsRequired} space={linea.spaceRequired} production={linea.production} image={linea.image} electricidadRequerida={linea.electricidadRequerida} aireComprimido={linea.aireComprimido} />
      <LineaMaquinas principales={linea.machines} additionals={linea.additionals} />
      <Footer />
    </>
  )
}
