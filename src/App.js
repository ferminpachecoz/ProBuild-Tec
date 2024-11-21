import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Routes, Route} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';
import Linea from './pages/Linea';
import ArmarTaller from './pages/ArmarTaller';
import Consultoria from './pages/Consultoria';
import TodosLosProductos from './pages/TodosLosProductos.js';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de animación
      once: true, // Si la animación se ejecuta solo una vez o en cada scroll
    });
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/nuestros-paquetes-personalizados/:title' element={<Linea />} />
        <Route path='/armar-tu-taller' element={<ArmarTaller />} />
        <Route path='/consultoria' element={<Consultoria />} />
        <Route path='/productos' element={<TodosLosProductos />} />
      </Routes>
    </>
  );
}

export default App;
