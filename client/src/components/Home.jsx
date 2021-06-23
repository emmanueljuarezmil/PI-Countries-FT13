import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import Paginater from './Paginater'
import CountryCardsContainer from './CountryCardsContainer';
import axios from 'axios';
import './Home.css'

function Home({countriesInitial, activities}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [countries, setCountries] = useState(countriesInitial)
    const [countriesToShow, setCountriesToShow] = useState(countries)
    const [orderAndName, setOrderAndName] = useState({name: '', orderBy: 'name', orderType: 'ASC'})
    const [filter, setFilter] = useState({activityIdFilter: '', continentFilter: ''})
    const [loading, setLoading] = useState(false)

    const continentsRepeated = countriesInitial.map(el => el.continent)
    const continents = continentsRepeated.filter(function(item, pos) {
        return continentsRepeated.indexOf(item) === pos;
    })
    
    const countriesPerPage = 12
    const indexOfLastCountry = currentPage * countriesPerPage
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
    const countriesOfPage = countriesToShow.slice(indexOfFirstCountry, indexOfLastCountry)
    

    // ordenamientos
    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const {data} = await axios.get('http://localhost:3001/countries',{
                    params: {
                        name: orderAndName.name,
                        orderBy: orderAndName.orderBy,
                        orderType: orderAndName.orderType
                    }
                })
                setCountries(data)
            } catch(err) {
                setCountries([])
                console.error(err)
            }
            setLoading(false)
        })()
    }, [orderAndName])

    useEffect(() => {
        setCountriesToShow(
            filter.activityIdFilter && filter.continentFilter ?
            countries.filter(el => el.continent === filter.continentFilter).filter(el => el.activities.includes(parseInt(filter.activityIdFilter))) :
            filter.activityIdFilter && !filter.continentFilter ?
            countries.filter(el => el.activities.includes(parseInt(filter.activityIdFilter))) :
            !filter.activityIdFilter && filter.continentFilter ?
            countries.filter(el => el.continent === filter.continentFilter) :
            countries
        )
        setCurrentPage(1)
    },[filter, countries])

    // seteo de ordenamientos
    function handleOrderChange(e) {
        const { value, name } = e.target;
        setOrderAndName({
            ...orderAndName,
            [name]: value
        })
    }

    // seteo de filtros
    function handleFilterChange(e){
        const {value, name} = e.target
        setFilter({
            ...filter,
            [name]: value
        })     
    }

    function clearFiltersAndOrders(e){
        e.preventDefault()
        setFilter({activityIdFilter: '', continentFilter: ''})
        setOrderAndName({name: '', orderBy: 'name', orderType: 'ASC'})
    }

    return (
        <div className='home'>
            <div className='home-filtersearchbar'>
                <div className='home-filtersearchbar-element'>
                    <div>
                        <label htmlFor="Ordenar por">Ordenar por:</label>
                    </div>
                    <div>
                        <select name="orderBy" value={orderAndName.orderBy} onChange={handleOrderChange}>
                            <option value="name">Nombres</option>
                            <option value="poblation">Población</option>
                        </select>
                    </div>
                </div>
                <div className='home-filtersearchbar-element'>
                    <div>
                        <label htmlFor="Tipo de orden">Tipo de orden:</label>
                    </div>
                    <div>
                        <select name="orderType" value={orderAndName.orderType} onChange={handleOrderChange}>
                            <option value="ASC">Ascendente</option>
                            <option value="DESC">Descendente</option>
                        </select>
                    </div>
                </div>
                <div className='home-filtersearchbar-element'>
                    <div>
                        <label htmlFor="Filtrar por actividades">Filtrar por actividades:</label>
                    </div>
                    <div>
                        <select name="activityIdFilter" value={filter.activityIdFilter} onChange={handleFilterChange}>
                            <option value="">Actividad</option>
                            {
                                activities.map(activity => 
                                    <option value={activity.id}>{activity.name}</option>
                                )
                            }
                        </select>
                    </div>
                </div>
                <div className='home-filtersearchbar-element'>
                    <label htmlFor="Filtrar por continente">Filtrar por continente:</label>
                    <select name="continentFilter" value={filter.continentFilter} onChange={handleFilterChange}>
                        <option value="">Continente</option>
                        {
                            continents.map(el => 
                                <option value={el}>{el}</option>
                            )
                        }
                    </select>
                </div>
                <div className='home-filtersearchbar-element'>
                    <input type="text" name="name" value={orderAndName.name} placeholder="Buscar un pais" onChange={handleOrderChange}/>
                </div>
                <div className='home-filtersearchbar-element'>
                    <button onClick={clearFiltersAndOrders}>Eliminar filtros y búsqueda</button>
                </div>
            </div>
            <CountryCardsContainer loading={loading} countries={countriesOfPage}/>
            <Paginater countriesPerPage={countriesPerPage} totalCountries={countriesToShow.length} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countriesInitial: state.countries,
    activities: state.activities
})

export default connect(mapStateToProps)(Home)