import React from 'react'
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import { addFullCountry } from '../actions';
import './CountryCard.css'

// agregar link para ir al detalle del pais

function CountryCard({name, flag, continent, id, addFullCountry}) {
    return (
        <div className='countrycard-container' style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div>
                <Link to='/country' onClick={() => addFullCountry(id)} className='country-card-link'>{name} ({continent})</Link>
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
