import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProductInfo from '../components/ProductInfo';
import { useParams } from 'react-router-dom';
import array from "../database_dev.js";
import LineaTitle from '../components/LineaTitle.js';

export default function Product() {
  const { id } = useParams();
  let product = array.find(item=>item.id==id)
  console.log(product);
  return (
    <>
      <Header />
      <LineaTitle title={product.title} subtitle={product.type} />
      <ProductInfo product={product} />
      <Footer />
    </>
  )
}
