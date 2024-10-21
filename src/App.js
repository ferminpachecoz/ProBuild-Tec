import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';
import Linea from './pages/Linea';
import ArmarTaller from './pages/ArmarTaller';
import Consultoria from './pages/Consultoria';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/linea/:id' element={<Linea />} />
        <Route path='/armar-tu-taller' element={<ArmarTaller />} />
        <Route path='/consultoria' element={<Consultoria />} />
      </Routes>
    </>
  );
}

export default App;
