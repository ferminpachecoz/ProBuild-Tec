import React from 'react';
import "./MasVendidos.scss"
import ProductCard from './ProductCard';

export default function MasVendidos() {
  let items = [
    {
      id: 1,
      name: "RYK 420 - Sierra Radial",
      description: "La Sierra Radial RYK 420 W está diseñada para operaciones de corte estrecho o angular de materiales de gran tamaño de PVC, teflón, baquelita o madera. RYK 420 W permite cortes rectos y angulares mediante el cabezal pivotante e inclinable",
      image: "RYK 420.png"
    },
    {
      id: 2,
      name: "CDC 600 - Máquina Cortadora de Sierra de Doble Cabezal de Ángulo Compuesto",
      description: "CDC 600 es una máquina completamente automática diseñada para cortar perfiles de PVC y aluminio de gran tamaño, rectos o en ángulo con una sierra de doble cabeza de Ø 600 mm. Ofrece una capacidad de corte óptima en diferentes variaciones de corte gracias a la sierra de gran diámetro y al mecanismo basculante y basculante que corta desde abajo. La unidad de corte izquierda es fija y la unidad de corte móvil derecha va a medir automáticamente. Brinda una gran ventaja al usuario al realizar cortes en ángulos especiales sin realizar cálculos en operaciones de corte a punto.",
      image: "CDC 600.png"
    },
    {
      id: 3,
      name: "TK 503 - Soldadora de Esquina Única de PVC",
      description: "Se utiliza para unir esquinas de perfiles de PVC en ángulos entre 30°-180°.",
      image: "TK 503.png"
    }
  ]
  return (
    <div className='mas-vendidos' id='masvendidos'>
      <h1>Más Vendidos</h1>
      <div className='contenedor'>
      {
        items.map(item=>(
          <ProductCard key={item.id} id={item.id} name={item.name} description={item.description} image={item.image} />
        ))
      }
      </div>
    </div>
  )
}
