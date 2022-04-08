import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
          alt='Logo de freeCodeCamp '/> 
      </div>
    </div>
  );
}

export default App;
