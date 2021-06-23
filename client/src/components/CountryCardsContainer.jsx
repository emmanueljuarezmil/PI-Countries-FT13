import React from 'react'
import CountryCard from './CountryCard'
import './CountryCardsContainer.css'

function CountryCardsContainer({loading, countries}) {
    if(loading) {
        return (
            <div>
                <h2>Cargando...</h2>
            </div>
        )
    }
    else {
        return (
            <div className='country-cards-container'>
                {
                    countries.length ?
                    countries.map(country => 
                        <CountryCard name={country.name} flag={country.flag} continent={country.continent} id={country.id}/>
                    ) :
                    <h2>No hay paises para mostrar</h2>
                }
            </div>
        )
    }
}

export default CountryCardsContainer
