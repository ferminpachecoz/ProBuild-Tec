import React, {useEffect, useState} from 'react';
import "./FormTaller.scss";
import db2 from "../database2.js";
import CardPaquete from './CardPaquete';

export default function FormTaller() {
  const [formValues, setFormValues] = useState({
    produccion: "",
    superficie: "",
    operadores: "",
  });

  // Función generalizada para manejar cambios en cualquier input
  const handleChange = (event) => {
    const { name, value } = event.target; // Extraer el nombre del campo y su valor
    setFormValues({
      ...formValues,  // Mantener los valores anteriores
      [name]: value   // Actualizar solo el campo modificado
    });
  };
  const [loading, setLoading] = useState(false);  // Estado para controlar el loader
  const [formVisible, setFormVisible] = useState(true); // Estado para mostrar/ocultar el formulario
  const [recommendedPackage, setRecommendedPackage] = useState(null); // Estado para almacenar el paquete recomendado
  const [notFound, setNotFound] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Iniciar el proceso de "cálculo"
    setFormVisible(false); // Oculta el formulario
    setLoading(true);  // Muestra el loader
    setTimeout(()=>{
      setAlert(true)
    }, 1000)

    setTimeout(() => {
      // Extraer los valores del formulario
      const { produccion, superficie, operadores } = formValues;
  
      // Convertir valores a números
      const prodValue = parseInt(produccion);
      const superficieValue = parseInt(superficie);
      const operadoresValue = parseInt(operadores);
  
      // Buscar el mejor paquete en la base de datos
      const recommendedPackage = db2.find((pack) => {
        // Convertir los rangos de producción y operadores a números para poder comparar
        const [prodMin, prodMax] = pack.production.split('-').map(Number);
        const [opMin, opMax] = pack.operatorsRequired.split('-').map(Number);
  
        return (
          superficieValue >= pack.spaceRequired &&
          operadoresValue >= opMin && operadoresValue <= opMax &&
          prodValue >= prodMin && prodValue <= prodMax
        );
      });

      setLoading(false);  // Oculta el loader
      setRecommendedPackage(recommendedPackage); // Guardar el paquete recomendado

      if (recommendedPackage) {
        console.log("Paquete recomendado:", recommendedPackage.name);
      } else {
        console.log("No se encontró un paquete adecuado.");
        setNotFound(true)
      }
    }, 2000);
  }

  useEffect(()=>{
    if(alert){
      setTimeout(()=>{
        setAlert(false)
      }, 4000)
    }
  },[alert])

  return (
    <div className='form-taller'>
      {alert && <div className='alert'>Un asesor se pondra en contacto con usted!</div>}
      {formVisible && (
        <form onSubmit={handleSubmit}>
          <h2>Rellena con tus datos</h2>
          <div className='group d-lg-flex d-block justify-content-around row-cols-2'>
            <input type="text" name='nombre' placeholder='Nombre' onChange={handleChange} />
            <input type="text" name='apellido' placeholder='Apellido' onChange={handleChange} />
          </div>
          <input type="text" name='email' placeholder='Email' onChange={handleChange} />
          <div className='group d-lg-flex d-block justify-content-around row-cols-2'>
            <input type="text" name='empresa' placeholder='Empresa' onChange={handleChange} />
            <input type="text" name='telefono' placeholder='Teléfono' onChange={handleChange} />
          </div>
          <div className='group d-lg-flex d-block justify-content-around row-cols-2'>
            <input type="text" name='produccion' placeholder='Objetivo de producción por día' onChange={handleChange} />
            <input type="text" name='superficie' placeholder='Superficie disponible del taller' onChange={handleChange} />
          </div>
          <div className='group d-lg-flex d-block justify-content-start row-cols-2'>
            <input type="text" name='operadores' placeholder='Cuantos operadores tiene su equipo' onChange={handleChange} />
          </div>
          <button type='submit'>Calcular</button>
        </form>
      )}

      {/* Loader que aparece mientras se hace el "cálculo" */}
      {loading && (
        <div className="loader">
          <p>Calculando...</p>
          <div className="spinner"></div> {/* Puedes usar un spinner CSS aquí */}
        </div>
      )}
      {recommendedPackage && 
      <div className='wrapper'>
        <CardPaquete 
        id={recommendedPackage.id} 
        image={"https://hostiko.com/layout91/wp-content/uploads/2024/05/vps-img1.png"} 
        title={recommendedPackage.name} 
        description={recommendedPackage.description} 
        production={recommendedPackage.production} 
        operators={recommendedPackage.operatorsRequired} 
        space={recommendedPackage.spaceRequired} 
        width={"50%"}
        />
      </div>
      }
      {notFound &&
        <p>No se encontró un paquete adecuado.</p>
      }
    </div>
  )
}
