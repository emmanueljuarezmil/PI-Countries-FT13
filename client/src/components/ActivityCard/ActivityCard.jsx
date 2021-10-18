import React from 'react'
import CountryCard from '../CountryCard/CountryCard';
import Carousel from '../Carousel/Carousel';

const ActivityCard = ({activity}) => {
    const {
        name,
        description,
        difficult,
        duration,
        countries
    } = activity

    const difficults = [
        'Muy fácil',
        'Fácil',
        'Intermedia',
        'Dificil',
        'Muy dificil',
    ]

    const carouselItems = countries ? 
    countries.map(country =>
        <CountryCard
        country={country}
        key={country.id}
        />
    ) : []

    
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{difficults[difficult - 1]}</p>
            <p>{duration}</p>
            <Carousel
            items={carouselItems}
            n={5}
            />        
        </div>
    )
}

export default ActivityCard
