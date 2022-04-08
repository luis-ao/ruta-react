import React from 'react';
import '../hojas-de-estilo/testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='img-testimonio'
        /* P|ara utilizar una imagen necesitamos agregar requir */
        src={require(`../img/testimonio-${props.img}.png`)}
        /* Un estandar importante es incluir un espacio en elementos que se autocierran /> */
        alt='Foto de Emma' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div>
  );
}

/* Exportación por defecto: permite indicar que va ser el único componente que se va a exportar del archivo 

Exportación nombrada: si podemo exportar varios elementos de un mismo archivo */

export default Testimonio;

