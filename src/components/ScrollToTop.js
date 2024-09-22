import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Detecta cambios en la ruta

  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el scroll hacia la parte superior
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null; // No renderiza nada
}

export default ScrollToTop;
