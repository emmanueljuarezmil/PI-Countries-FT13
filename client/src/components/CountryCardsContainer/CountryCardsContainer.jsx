import './CountryCardsContainer.css'
import React from 'react'
import CountryCard from '../CountryCard/CountryCard'
import SearchFailed from '../SearchFailed/SearchFailed'
import { useSelector } from 'react-redux'

const CountryCardsContainer = () => {
    const countries = useSelector(state => state.countries)
    return (
        <div>
            {
                countries && countries.length ? countries.map(country => 
                <CountryCard 
                country={country} 
                key={country.id}
                />
                ) :
                <SearchFailed/>
            }
        </div>
    )
}

export default CountryCardsContainer
