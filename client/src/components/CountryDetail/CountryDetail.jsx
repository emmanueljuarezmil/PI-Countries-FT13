import './CountryDetail.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Carousel from '../Carousel/Carousel'
import ActivityCard from '../ActivityCard/ActivityCard'

const CountryDetail = () => {

    const { 
        name,
        flag,
        continent,
        capital,
        subregion,
        area,
        poblation,
        lat,
        lng,
        activities
    } = useSelector(state => state.countryDetail)

    const carouselItems = 
    activities ? 
    activities.map(activity =>
        <ActivityCard
        activity={activity}
        key={activity.id}
        />      
    )
    : []

    const roundAndFix = (number, string) => {
        return number >= 1000 ?
        number >= 1000000 ?
        `${(number/1000000).toFixed(2)} millones de ${string}` :
        `${(number/1000).toFixed(2)} miles de ${string}` :
        `${number} ${string}`
    }

    return (
        <div style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>{name}</h2>
            <div>
                <div>
                    <span>Capital: {capital}</span>
                    <span>Poblacion: {roundAndFix(poblation, 'habitantes')}</span>
                    <span>Superficie: {roundAndFix(area, 'kilómetros cuadrados')}</span>
                </div>
                <div>
                    <span>Continente: {continent}</span>
                    <span>Subregion: {subregion}</span>
                    <span>Coordenadas: {lat}, {lng}</span>
                </div>
            </div>
            <a href={`https://www.google.com.ar/maps/@${lat},${lng},6z`} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
            <div>
                <Carousel
                items={carouselItems}
                n={2}
                />
            </div>
            <Link to='/home'>Regresar al home</Link>
        </div>
    )
}

export default CountryDetail
