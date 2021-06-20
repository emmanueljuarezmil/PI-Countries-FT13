import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux'
import Paginater from './Paginater'
import CountryCardsContainer from './CountryCardsContainer';
import FilterBar from './FilterBar';
import axios from 'axios';

function Home({countriesInitial}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [countries, setCountries] = useState(countriesInitial)
    const [orderAndName, setOrderAndName] = useState({name: '', orderBy: 'name', orderType: 'ASC'})

    useEffect(async () => {
        try {
            const {data} = await axios.get('http://localhost:3001/countries',{
                params: {
                    name: orderAndName.name,
                    orderBy: orderAndName.orderBy,
                    orderType: orderAndName.orderType
                }
            })
            console.log(data)
            setCountries(data)
        } catch(err) {
            console.error(err)
        }
    }, [orderAndName])


    function handleOrderChange(e) {
        const { value, name } = e.target;
        setOrderAndName({
            ...orderAndName,
            [name]: value
        })
    }

    return (
        <div>
            <div>
                <p>SearchBar</p>
                <input type="text" name="name" value={orderAndName.name} placeholder="Ingresa el nombre de algun pais" onChange={handleOrderChange}/>
            </div>
            <div>
                <p>OrderBar</p>
                <div>
                    <label htmlFor="Ordenar por">Ordenar por:</label>
                    <select name="orderBy" value={orderAndName.orderBy} onChange={handleOrderChange}>
                        <option value="name">Nombres</option>
                        <option value="poblation">Población</option>
                    </select>
                    <label htmlFor="Tipo de orden">Tipo de orden:</label>
                    <select name="orderType" value={orderAndName.orderType} onChange={handleOrderChange}>
                        <option value="ASC">Ascendente</option>
                        <option value="DESC">Descendente</option>
                    </select>
                </div>
            </div>
            <CountryCardsContainer/>
            <Paginater/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countriesInitial: state.countries
})

export default connect(mapStateToProps)(Home)