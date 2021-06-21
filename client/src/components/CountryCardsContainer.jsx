import React from 'react'

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
            <div>
                {
                    countries.length ?
                    countries.map(country => 
                        <p>
                            {country.name}
                        </p>
                    ) :
                    <h2>No hay paises para mostrar</h2>
                }
            </div>
        )
    }
}

export default CountryCardsContainer
