import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import {useState} from 'react';

/* useState es un Hook que nos permite agregar un estado a un componente funcional */

function App() {

  // arreglo con el valor que vamos usar como estado numClics (en este caso 0 "useState(0);") y otro valor que nos permita actualizarlo convencionalmente se le agrega un "set" al inicio setNumClics.
  const[numClics, setNumClics] = useState(0);


  const manejarClic = () => {
    setNumClics(numClics + 1);
  }; // las funciones flecha siempre tienen que terminar con ;

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App"'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo de freeCodeCamp' />
      </div>
      
      <div className='contenedor-principal'>

        <Contador 
        numClics={numClics} />
        
        <Boton 
        texto='Click'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />

        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>

    </div>
  );
}

export default App;
