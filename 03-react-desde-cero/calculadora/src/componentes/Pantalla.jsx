import React from 'react';
import '../estilos/Pantalla.css'

/* input es valor que ingreso el usuario, el valor que entra por el usuario lo vamos a reemplazar en el div */

const Pantalla = ({ input }) =>(
  <div className='input'>
    {input} 
  </div>
);

export default Pantalla;

