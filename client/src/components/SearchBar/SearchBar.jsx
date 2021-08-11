import './SearchBar.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    setSearch,
    setOrderBy,
    setOrderType,
    setCurrentPage,
    setActivityFilter,
    setContinentFilter
} from '../../actions'

const SearchBar = () => {
    const currentSearch = useSelector(state => state.searchedCountries)
    const orderBy = useSelector(state => state.orderBy)
    const orderType = useSelector(state => state.orderType)
    const activities = useSelector(state => state.activities)
    const activityFilter = useSelector(state => state.activityFilter)
    const continents = useSelector(state => state.continents)
    const continentFilter = useSelector(state => state.continentFilter)
    const dispatch = useDispatch()

    const clearSearch = () => {
        dispatch(setSearch(''))
        dispatch(setOrderBy('name'))
        dispatch(setOrderType('ASC'))
        dispatch(setActivityFilter(''))
        dispatch(setContinentFilter(''))
        dispatch(setCurrentPage(1))
    }

    return (
        <div>
            <input type="text"
            value={currentSearch}
            onChange={e => {
                dispatch(setSearch(e.target.value))
                dispatch(setCurrentPage(1))
            }}/>
            <select name="orderBy" 
            value={orderBy}
            onChange={e => {
                dispatch(setOrderBy(e.target.value))
                dispatch(setCurrentPage(1))}}>
                <option value="name">Nombres</option>
                <option value="poblation">Población</option>
                <option value="area">Superficie</option>
            </select>
            <select name="orderType" 
            value={orderType}
            onChange={e => {
                dispatch(setOrderType(e.target.value))
                dispatch(setCurrentPage(1))}}>
                <option value="ASC">Ascendente</option>
                <option value="DESC">Descendente</option>
            </select>
            <select name="continentFilter"
            value={continentFilter}
            onChange={e => {
                dispatch(setContinentFilter(e.target.value))
                dispatch(setCurrentPage(1))}}>
                <option value="">Todos</option>
                {
                    continents && continents.map((continent, index) => <option value={continent} key={index}>{continent}</option>)
                }
            </select>
            <select name="setActivityFilter" 
            onChange={e => {
                dispatch(setActivityFilter(e.target.value))
                dispatch(setCurrentPage(1))}}
            value={activityFilter}>
                <option value="">Ninguna</option>
                {
                    activities && activities.map((activity, index) => <option key={index} value={activity.id}>{activity.name}</option>)
                }
            </select>
            <button onClick={() => clearSearch()}>Eliminar filtros y búsqueda</button>
        </div>
    )
}

export default SearchBar
