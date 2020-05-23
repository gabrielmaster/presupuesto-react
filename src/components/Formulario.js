import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';
 
const Formulario = ({ guardarGasto, guardarCrearGasto }) => {

    // Definir el state
    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if( cantidad < 1 || isNaN( cantidad || nombre.trim() === '' )){
            guardarError(true);
            return;
        };

        guardarError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);


        // resetear el formulario
        guardarNombre('');
        guardarCantidad(0);

    }

    return (
        <form onSubmit={ agregarGasto }>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error>Ambos campos son obligatoios o Presupuesto incorrecto.</Error> : null}

            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre( e.target.value )}
                />
                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={ cantidad }
                    onChange={ e => guardarCantidad( parseFloat(e.target.value) )}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                />
            </div>
        </form>
    );
}
 
export default Formulario;