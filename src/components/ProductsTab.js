import React, {useState} from 'react';
import "./ProductsTab.scss";
import ProductCard from './ProductCard';
import array from "../database_dev.js"
import { Link } from 'react-router-dom';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function TodosLosProductos() {
  let randomItems = shuffleArray(array).slice(0, 6);
  const [lista, setLista] = useState(randomItems);  
  const [results, setResults] = useState([])
  const [input, setInput] = useState("")
    
  function filterElements (cat){
    let lista1 = array.filter(item=>{
      return item.category == cat;
    })
    setLista(lista1)
  }
  
  function handleChange (event){
    let res = array.filter(item=> item.title.toLowerCase().includes(event.target.value.toLowerCase().trim()))
    setResults(res)
    setInput(event.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    setLista(results)
  }
  
  return (
    <div className='todos-los-productos' id='nuestrosequipos'>
      <h1>Nuestros Productos</h1>
      <div className='row'>
        <div className='col-12 col-lg-4 menu'>
          <h4>Filtrar por Producto</h4>
          <div className="search-container">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Buscar productos..." onChange={handleChange} />
              <i className="bi bi-search search-icon"></i>
            </form>
            <ul className='results'>
              {
              input.length > 0?
                results.slice(0,5).map(item=>(
                  <li key={item.id}><Link to={`/products/${item.id}`}>{item.title}</Link></li>
                ))
              :results.length==0 && input.length>0?
              <li>No hay resultados...</li>
              :<></>
              }
            </ul>
          </div>
          <p>CATEGORÍAS</p>
          <ul>
            <li key={1} onClick={()=>filterElements("Corte")}>CORTE</li>
            <li key={2} onClick={()=>filterElements("Centros De Corte Y Limpieza De Mecanizado")}>CENTROS DE CORTE Y LIMPIEZA DE MECANIZADO</li>
            <li key={4} onClick={()=>filterElements("Fresadora de Corte")}>FRESADORAS DE CORTE</li>
            <li key={6} onClick={()=>filterElements("Atornilladora De Laminas De Apoyo")}>ATORNILLADORA DE LÁMINAS DE APOYO</li>
            <li key={7} onClick={()=>filterElements("Soldadura")}>SOLDADURA</li>
            <li key={8} onClick={()=>filterElements("Equipo de Apoyo")}>EQUIPO DE APOYO</li>
          </ul>
        </div>
        <div className='col-12 col-lg-8 row row-cols-1 row-cols-lg-2 g-3'>
          {
            lista.map(item=>(
              <ProductCard key={item.id} id={item.id} name={item.title} description={item.info[0]} image={item.images[0]} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
