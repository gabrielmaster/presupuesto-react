import React from 'react';
import PropTypes from 'prop-types';
 
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
                    style={{ backgroundColor: 'red', color: '#FFF', margin: 0, padding: '1px 25px', lineHeight: '37px', marginLeft: '5px'}}>&times;</button> 
 
                </span>
                
                
            </p>
        </li>
    );
}

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired,
    eliminarGasto: PropTypes.func.isRequired
}
 
export default Gasto;