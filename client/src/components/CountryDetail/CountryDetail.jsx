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

    return (
        <div style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h2>{name}</h2>
            <div>
                <span>Capital: {capital}</span>
                <span>Poblacion:
                    {
                        poblation >= 1000 ?
                        poblation >= 1000000 ?
                        ` ${(poblation/1000000).toFixed(2)} millones de habitantes` :
                        ` ${(poblation/1000).toFixed(2)} miles de habitantes` :
                        ` ${poblation} habitantes`
                    }
                </span>
                <span>Superficie:
                    {
                        area >= 1000 ?
                        area >= 1000000 ?
                        ` ${(area/1000000).toFixed(2)} millones de kilómetros cuadrados` :
                        ` ${(area/1000).toFixed(2)} miles de kilómetros cuadrados` :
                        ` ${area} kilómetros cuadrados`
                    }
                </span>
            </div>
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
