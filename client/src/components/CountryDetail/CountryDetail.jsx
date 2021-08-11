import './CountryDetail.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Map from '../Map/Map'

const CountryDetail = () => {
    const countryDetail = useSelector(state => state.countryDetail)
    return (
        <div>
            {countryDetail.name}
            <Link to='/home'>Regresar al home</Link>
            <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp`}
            loadingElement={<p>Cargando...</p>}
            containerElement={<div style={{height: '400px'}}></div>}
            mapElement={<div style={{height: '100%'}}></div>}
            lat={countryDetail.lat}
            lng={countryDetail.lng}
            />
        </div>
    )
}

export default CountryDetail
