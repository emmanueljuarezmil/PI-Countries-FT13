import './Home.css'
import React, { useEffect } from 'react'
import CountryCardsContainer from '../CountryCardsContainer/CountryCardsContainer'
import { getCountries, getActivities } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import SearchBar from '../SearchBar/SearchBar'
import Paginater from '../Paginater/Paginater'

const Home = () => {
    const dispatch = useDispatch()
    const itemsPerPage = 10

    const page = useSelector(state => state.currentPage)
    const searchedCountries = useSelector(state => state.searchedCountries)
    const orderBy = useSelector(state => state.orderBy)
    const orderType = useSelector(state => state.orderType)
    const activityFilter = useSelector(state => state.activityFilter)
    const continentFilter = useSelector(state => state.continentFilter)

    useEffect(() => {
        dispatch(getCountries( searchedCountries, orderBy, orderType, page, itemsPerPage, activityFilter, continentFilter ))
        dispatch(getActivities())
    }, [dispatch, searchedCountries, orderBy, orderType, page, itemsPerPage, activityFilter, continentFilter ])

    return (
        <div>
            <SearchBar/>
            <CountryCardsContainer/>
            <Paginater/>
        </div>
    )
}

export default Home
