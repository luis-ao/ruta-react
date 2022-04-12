import React, { useState } from "react";
import '../estilos/ListaDeTareas.css'
import TareaFormulario from './TareaFormulario.jsx';
import Tarea from './Tarea.jsx';


/* <> "Fragmentos" es para no Agregar nuevos div que no tienen un proposito en nuestra structura */

function ListaDeTareas() {
  
  /* Es un estandar usar set para identificar el estado que vamos a cmabiar aunque podemos nombrarlo como queramos */
  const[tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
      tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        { 
          tareas.map((tarea) =>
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
          )
        }
      </div>
    </>
  );
}

/* map es un método que va tomar cada tarea y las va a pasar como argumento y va a crear un "componente tarea" para cada tarea (se va a representar como un objeto en el arreglo) */

export default ListaDeTareas;