import React from 'react';
 
const Gasto = ({ gasto, eliminarGasto }) => {
    return (
        <li className="gastos">
            <p>
                {gasto.nombre}
                
                <span>
                <span className="gasto">$ {gasto.cantidad}
                </span>
                <button
                    onClick={()=>eliminarGasto(gasto)} 
                    className="button" 
                    style={{ backgroundColor: 'red', color: '#FFF'}}>&times;</button>
                </span>
                
                
            </p>
        </li>
    );
}
 
export default Gasto;