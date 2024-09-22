import React, {useState} from 'react';
import "./TodosLosProductos.scss";
import ProductCard from './ProductCard';
import array from "../database.js"
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
      return item.categoria == cat;
    })
    setLista(lista1)
  }
  
  function handleChange (event){
    let res = array.filter(item=> item.name.toLowerCase().includes(event.target.value.toLowerCase().trim()))
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
                  <li key={item.id}><Link to={`/products/${item.id}`}>{item.name}</Link></li>
                ))
              :results.length==0 && input.length>0?
              <li>No hay resultados...</li>
              :<></>
              }
            </ul>
          </div>
          <p>CATEGORÍAS</p>
          <ul>
            <li key={1} onClick={()=>filterElements("corte")}>CORTE</li>
            <li key={2} onClick={()=>filterElements("Centro de Corte y Limpieza de Mecanizado")}>CENTROS DE CORTE Y LIMPIEZA DE MECANIZADO</li>
            <li key={3} onClick={()=>filterElements("Desbarbadora")}>DESBARBADORA</li>
            <li key={4} onClick={()=>filterElements("Fresas de Corte")}>FRESAS DE CORTE</li>
            <li key={5} onClick={()=>filterElements("Máquina Muescadora")}>MÁQUINA MUESCADORA</li>
            <li key={6} onClick={()=>filterElements("Atornilladora de Láminas de Apoyo")}>ATORNILLADORA DE LÁMINAS DE APOYO</li>
            <li key={7} onClick={()=>filterElements("Soldadura")}>SOLDADURA</li>
          </ul>
        </div>
        <div className='col-12 col-lg-8 row row-cols-1 row-cols-lg-2 g-3'>
          {
            lista.map(item=>(
              <ProductCard key={item.id} id={item.id} name={item.name} description={item.description} image={item.image} />
            ))
          }
        </div>
      </div>
    </div>
  )
}
