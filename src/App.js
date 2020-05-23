import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {

  // Definir el state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ creargasto, guardarCrearGasto ] = useState(false);

  // UseEffect que actualiza el restante
  useEffect( ()=> {

    // Agrega el nuevo presupuesto
    if(creargasto){
      guardarGastos([
        ...gastos,
        gasto
      ])
    
    // Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);

    // Resetear a false
    guardarCrearGasto(false);
  }
  }, [gasto, creargasto, gastos, restante]);

  // Eliminar el gasto
  const eliminarGasto = gastoBorrar => {
    // Eliminar el gasto
    const gastoEliminado = gastos.filter(gasto=> gasto.id !== gastoBorrar.id);
    guardarGastos(gastoEliminado);

    // Actualizar el restante
    const actualizarRestante = restante + gastoBorrar.cantidad;
    guardarRestante(actualizarRestante);
  }


  return (
    <div className="container">
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
      {mostrarpregunta ? 
      (
        <Pregunta
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
        />
      )
      :
      (
        <div className="row">
          <div className="one-half column">
            <Formulario
              guardarGasto={guardarGasto}
              guardarCrearGasto={guardarCrearGasto}
            />
          </div>
          <div className="one-half column">
            <Listado 
              gastos={gastos}
              eliminarGasto={eliminarGasto}
            />
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
      )
      }  
      </div>
    </div>
  );
}

export default App;
