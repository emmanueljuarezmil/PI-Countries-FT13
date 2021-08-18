import './CountryDetail.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Map from '../Map/Map'
import Carousel from '../Carousel/Carousel'
import ActivityCard from '../ActivityCard/ActivityCard'

const CountryDetail = () => {
    const { name, lat, lng, activities} = useSelector(state => state.countryDetail)
    const carouselItems = activities.map(activity =>
        <ActivityCard
        activity={activity}
        key={activity.id}
        />      
    )
    return (
        <div>
            {name}
            <Link to='/home'>Regresar al home</Link>
            <Map
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&v=3.exp`}
            loadingElement={<p>Cargando...</p>}
            containerElement={<div style={{height: '400px'}}></div>}
            mapElement={<div style={{height: '100%'}}></div>}
            lat={lat}
            lng={lng}
            />
            <div>
                <Carousel
                items={carouselItems}
                n={2}
                />
            </div>
        </div>
    )
}

export default CountryDetail
