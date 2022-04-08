import React from 'react';
import '../estilos/Boton.css'

function Boton(props) {

  const esOperador = valor => {
    /* siNaN confirma si una cadena de caracteres no es un número */
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  return (
    <div

    /* vamos a evaluar si el contenido del boton es operador o número para asignarle una clase, la constante esOperador esta tomando el valor de props.children

    trimEnd() es un métodod que permite elminar spacios al final de la cadea de caracteres, (en este caso eliminamos el espacios que le dimos como clase)
    */ 

      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}

      /* Cuando sucesado el evento click vamos a llamar una función anónima */
      onClick={() => props.manejarClic(props.children)}>

      {props.children}

    </div>
  );
}

export default Boton;