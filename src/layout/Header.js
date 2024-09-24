import React, {useState} from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Header(){
  const [display, setDisplay] = useState(true);
  function handleClick(){
    console.log(display);
    setDisplay(!display)
  }
  
  return(
    <div className="header d-flex">
      <div className="logo">
        <Link to="/">
          <img src="/logobg.png" alt="logo" />
        </Link>
      </div>
      <div className="menu" style={{display: display?"block":"none"}}>
        <ul className="row justify-content-center h-100 align-items-center">
          <li className="col">
            <Link to="/armar-tu-taller">Armá tu taller</Link>
          </li>
          <li className="col">
            <HashLink smooth to="/#catalogos">Catálogos</HashLink>
          </li>
          <li className="col">
            <HashLink smooth to="/#catalogos">Consultoría</HashLink>
          </li>
          <li className="col">
            <HashLink smooth to="/#paquetes">Paquetes</HashLink>
          </li>
          <li className="col">
            <HashLink smooth to="/#contacto">Contacto</HashLink>
          </li>
        </ul>
      </div>
      <i className="bi bi-list burger-menu" onClick={()=>handleClick()}></i>
    </div>
  )
}