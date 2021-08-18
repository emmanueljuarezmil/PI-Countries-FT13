import React from 'react'
import CarouselCountryItem from '../CarouselCountryItem/CarouselCountryItem';
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

    const carouselItems = countries.map(country =>
        <CarouselCountryItem
        flag={country.flag}
        name={country.name}
        id={country.id}
        key={country.id}
        />
    )

    
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
