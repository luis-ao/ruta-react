import React from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './img/freecodecamp-logo.png';

class App extends React.Component{

  constructor(){
    /* Super nos ayuda heredar todas las funcionalidades de React.Component */
    super();
    /* Este objeto contiene todas las propiedades que definen el estado del componente */
    this.state = {
      numClics: 0
    };

    /* Si no incluimos estas lineas el metodo this pierde la asoción con el constructor */
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  }

  reiniciarContador(){
    this.setState({numClics: 0});
  }

  render(){
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
          numClics={this.state.numClics} />
          
          <Boton 
          texto='Click'
          esBotonDeClic={true}
          manejarClic={this.manejarClic}
          />
  
          <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={this.reiniciarContador}
          />
        </div>
  
      </div>
    );
  }
}

export default App;
