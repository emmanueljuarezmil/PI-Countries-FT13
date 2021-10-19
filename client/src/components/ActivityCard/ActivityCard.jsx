import React from 'react'
import CountryCard from '../CountryCard/CountryCard';
import Carousel from '../Carousel/Carousel';

const ActivityCard = ({activity, mini}) => {
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

    const carouselCountriesItems = !mini ?
    countries.map(country =>
        <CountryCard
        country={country}
        key={country.id}
        />
    ) : 
    null

    
    return (
        <div>
            <p>{name}</p>
            <p>{difficults[difficult - 1]}</p>
            <p>{duration}</p>
            {
                !mini ?
                <p>{description}</p> :
                null
            }
            {
                !mini ?
                <Carousel
                items={carouselCountriesItems}
                n={5}
                /> :
                null      
            }
        </div>
    )
}

export default ActivityCard
