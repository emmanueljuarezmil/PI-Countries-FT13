import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

function CountryCardFull({country}) {
    
    return (
        <div>
            <h2>Tarjeta country con todos los detalles</h2>
            {country ? 
            <div>
                <p>Nombre del pais: {country.name}</p>
            </div> :
            <h2>No existe el pais o algo paso :(</h2> 
            }
            <Link to='/home'>Volver al home</Link>            
        </div>
    )
}

const mapStateToProps = (state) => ({
    country: state.countryFull
})

export default connect(mapStateToProps)(CountryCardFull)
