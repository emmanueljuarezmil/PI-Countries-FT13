import './CountryCard.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCountryDetail } from '../../actions'
import { Link } from "react-router-dom"

const CountryCard = ({country}) => {
    const { name, id } = country
    const dispatch = useDispatch()
    return (
        <div>
            {name}
            <Link
            onClick={() => dispatch(getCountryDetail(id))}
            to='/countryDetail'>
                Ver mas
            </Link>
        </div>
    )
}

export default CountryCard
