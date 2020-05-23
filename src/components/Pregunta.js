import React, { Fragment, useState } from 'react';
import Error from './Error';
 
const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e=>{
        guardarCantidad( parseFloat(e.target.value) );
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();


        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }


        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error>El Presupuesto es Incorrecto</Error>: null}

            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder='Colocar tu presupuesto'
                    onChange={definirPresupuesto}

                />

                <input 
                    type="submit" 
                    value="Definir presupuesto"
                    className='button-primary u-full-width'
                    
                    />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;