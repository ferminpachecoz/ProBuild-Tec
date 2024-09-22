import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';
import Linea from './pages/Linea';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/linea/:id' element={<Linea />} />
      </Routes>
    </>
  );
}

export default App;
