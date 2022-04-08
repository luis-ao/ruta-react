import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './componentes/Boton.jsx'
import Pantalla  from './componentes/Pantalla';
import BotonClear  from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  /* Aquí vamos a modificar el estado de Input (setInput)*/
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val); // aún trabajamos con crácteres por lo que + esta actuando como concatenación y no una operación matematica
  };

  const calcularResultado = () => {
    // input es un valor truthy falsy. Por si sólo es verdarera o falsa, si la cadena de carácteres esta vacia es falsa
    if (input){
      setInput(evaluate(input));
    } else {
      alert("Por favor agregue valores para realizar los calculos")
    }
  };


  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-calculadora'>
        
        <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>

          <Boton manejarClic={calcularResultado}>=</Boton>
          
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
