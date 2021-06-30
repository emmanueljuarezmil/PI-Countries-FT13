import React from 'react'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import './CountryFull.css'

function CountryCardFull({country}) {
    
    return (
        <div className='countryfull-container'>
            {country ? 
            <div className='countryfull-container-card'>
                <div className='countryfull-container-card-flag'>
                    <img src={country.flag} alt="Imagen no encontrada" />
                </div>
                <div className='countryfull-container-card-data'>
                    <h2> {
                            `${country.name} (${country.id})`
                        } 
                    </h2>
                    <h3>Continente: {country.continent}</h3>
                    <h3>Subregion: {country.subregion}</h3>
                    <h3>Capital: {country.capital}</h3>
                    <h3>{
                            country.poblation >= 1000000 ?
                            (country.poblation/1000000).toFixed(2) + " Millones de habitantes" :
                            (country.poblation/1000).toFixed(2) + " Miles de habitantes"                            
                        }
                    </h3>
                    <h3>
                        {
                            country.area >= 1000000 ?
                            (country.area/1000000).toFixed(2) + " millones de km2" :
                            country.area >= 1000 ?
                            (country.area/1000).toFixed(2) + " mil km2" :
                            country.area + " km2"
                        }
                    </h3>
                    {
                        country.activities ?
                        (

                            <div className='countryfull-container-card-data-activities'>
                                <h3>Actividades que se pueden realizar en el pais:</h3>
                                <div>
                                    {
                                        country.activities ?
                                        country.activities.map(activity => <span className='countryfull-container-card-data-activities-item'>
                                            {
                                                (`${activity.name}. `) +
                                                (activity.duration ? ` Duración: ${activity.duration} minutos.` : ``) +
                                                (activity.difficult ? ` Dificultad: ${activity.difficult}.` : ``) +
                                                (activity.season ? ` Temporada: ${activity.season}.` : ``) +
                                                (activity.description ? ` Descripción: ${activity.description}.` : ``)
                                            }
                                        </span>) :
                                        null
                                    }
                                </div>
                            </div>
                        ) :
                        null
                    }
                </div>
            </div> :
            <h2>No existe el pais o algo paso :(</h2> 
            }
            <Link to='/home' className='countryfull-linkhome'>Regresar al home</Link>            
        </div>
    )
}

const mapStateToProps = (state) => ({
    country: state.countryFull
})

export default connect(mapStateToProps)(CountryCardFull)
