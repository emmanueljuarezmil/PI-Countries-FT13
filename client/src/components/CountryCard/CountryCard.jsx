import './CountryCard.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountryDetail } from '../../actions'
import { Link } from "react-router-dom"

const CountryCard = ({country}) => {
    const { name, id, flag } = country
    const dispatch = useDispatch()
    return (
        <Link
        onClick={() => dispatch(getCountryDetail(id))}
        to='/countryDetail'>
            <div style={{ backgroundImage: `url(${flag})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <span>{name}</span>
            </div>
        </Link> 
    )
}

export default CountryCard
