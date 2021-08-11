import './CountryDetail.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const CountryDetail = () => {
    const countryDetail = useSelector(state => state.countryDetail)
    return (
        <div>
            {countryDetail.name}
            <Link to='/home'>Regresar al home</Link>
        </div>
    )
}

export default CountryDetail
