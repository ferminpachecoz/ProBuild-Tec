import React from 'react';
import "./Contacto.scss";

export default function Contacto() {
  return (
    <div className='contacto' id='contacto'>
      <form>
        <h2>Contacto</h2>
        <div className='d-lg-flex d-block justify-content-around row-cols-lg-2 row-cols-1 '>
          <input type="text" name='name' placeholder='Nombre' />
          <input type="text" name='apellido' placeholder='Apellido' />
        </div>
        <div className='d-lg-flex d-block justify-content-around row-cols-lg-2 row-cols-1'>
          <input type="text" name='telefono' placeholder='Telefono' />
          <input type="text" name='empresa' placeholder='Empresa' />
        </div>
        <input type="text" name='email' placeholder='Email' />
        <textarea cols="30" rows="6" placeholder='Mensaje'></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}
