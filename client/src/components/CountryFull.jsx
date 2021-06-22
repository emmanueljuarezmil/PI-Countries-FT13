import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

function CountryCardFull({countries}) {
    const actualCountryId = window.location.pathname.split('/')[2]
    // const previousCountryIndex = countries.findIndex(el => el.id === actualCountryId) - 1
    // const nextCountryIndex = countries.findIndex(el => el.id === actualCountryId) + 1
    // const previousCountryId = previousCountryIndex < 0 ? countries[previousCountryIndex].id : null
    // const nextCountryId = nextCountryIndex < 0 ? countries[nextCountryIndex].id : null

    const [country, setCountry] = useState()

    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get(`http://localhost:3001/countries/${actualCountryId}`)
                setCountry(data[0])
            } catch(err) {
                setCountry()
                console.error(err)
            }
        })()
    }, [])

    return (
        <div>
            <h2>Tarjeta country con todos los detalles</h2>
            {country ? 
            <div>
                <p>Nombre del pai: {country.name}</p>
            </div> :
            <h2>No existe el pais o algo paso :(</h2> 
            }              
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.countries
})

export default connect(mapStateToProps)(CountryCardFull)
