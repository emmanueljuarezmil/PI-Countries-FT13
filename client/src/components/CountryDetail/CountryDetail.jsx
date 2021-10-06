import './CountryDetail.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import Carousel from '../Carousel/Carousel'
import ActivityCard from '../ActivityCard/ActivityCard'

const CountryDetail = () => {
    const { name, activities} = useSelector(state => state.countryDetail)
    const carouselItems = activities ? 
    activities.map(activity =>
        <ActivityCard
        activity={activity}
        key={activity.id}
        />      
    ) : []
    return (
        <div>
            {name}
            <Link to='/home'>Regresar al home</Link>
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
