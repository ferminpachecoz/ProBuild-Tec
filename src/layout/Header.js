import React, {useState, useRef} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Header({style}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return(
    <div className="header d-flex row-cols-2">
      <div className="logo order-1">
        <Link aria-label="Link to Home section" to="/">
          <img src="/Logo sin fondo PNG.png" alt="ProBuild Logo" />
        </Link>
      </div>
      <div className={`menu order-3 ${isMenuOpen ? "menu-open" : "menu-close"}`}>
        <ul className="row justify-content-center h-100 align-items-center">
          <li className="col">
            <Link aria-label="Link to Make your Taller page" to="/armar-tu-taller" className={`${style=="dark"?"dark":"white"}`}>Armá tu fábrica</Link>
          </li>
          <li className="col">
            <HashLink aria-label="Link to Catalogos section" smooth to="/#catalogos" className={`${style=="dark"?"dark":"white"}`}>Catálogos</HashLink>
          </li>
          <li className="col">
            <HashLink aria-label="Link to Consultoria section" smooth to="/consultoria" className={`${style=="dark"?"dark":"white"}`}>Consultoría</HashLink>
          </li>
          <li className="col">
            <HashLink aria-label="Link to Packages section" smooth to="/#paquetes" className={`${style=="dark"?"dark":"white"}`}>Paquetes</HashLink>
          </li>
          <li className="col">
            <HashLink aria-label="Link to Contact form" smooth to="/#contacto" className={`${style=="dark"?"dark":"white"}`}>Contacto</HashLink>
          </li>
          <li className="col">
            <HashLink aria-label="Link to All Products page" smooth to="/productos" className={`${style=="dark"?"dark":"white"}`}>Productos</HashLink>
          </li>
        </ul>
      </div>
      <div className="burger-menu order-2">
        <i className={`bi bi-list ${style=="dark"?"dark":"white"}`} onClick={toggleMenu}></i>
      </div>
    </div>
  )
}