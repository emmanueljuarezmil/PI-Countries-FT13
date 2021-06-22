import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { addFullCountry } from '../actions';

// agregar link para ir al detalle del pais

function CountryCard({name, flag, continent, id, addFullCountry}) {
    return (
        <div>
            <div>
                <span>Nombre:</span>
                <span>{name}</span>
            </div>
            <div>
                <span>Continente:</span>
                <span>{continent}</span>
            </div>
            <div>
                <img src={flag} alt="No se encontro la imagen" />                
            </div>    
            <div>
                <Link to='/country' onClick={() => addFullCountry(id)}>Detalle del país</Link>
            </div>      
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFullCountry: id => dispatch(addFullCountry(id))
    }
  }

  export default connect(null, mapDispatchToProps)(CountryCard)
