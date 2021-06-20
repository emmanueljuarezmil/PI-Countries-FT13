import React, { useState, useRef } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'

function ActivityForm({countries}) {
    const [input, setInput] = useState({
        name: '',
        difficult: '',
        season: '',
        description: '',
      });

    const [countriesIds, setCountriesIds] = useState([])
    
    const [error, setError] = useState('Debes ingresar una actividad y al menos un pais');

    function validateForm() {
        if(!input.name.length || countriesIds.length) setError('Debes ingresar una actividad y al menos un pais')
        if(input.name.length && countriesIds.length) setError('')
    }

    function handleChange(e) {
        e.preventDefault()
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        });
        validateForm()
    }

    const countryIdSelect = useRef(null)
    
    function removeCountryId(countryId) {
        setCountriesIds(countriesIds.filter((el) => el[0] !== countryId))
        validateForm()
    }

    const addCountry = (e) => {
        e.preventDefault()
        const countryToAdd = [e.target.value, e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text]
        var countryDontExists = true
        countriesIds.forEach(el => {
            if (el[0] === countryToAdd[0])
            countryDontExists = false
        })
        if(e.target.value !== "" && countryDontExists) {
            setCountriesIds([...countriesIds, countryToAdd])
        }
        countryIdSelect.current.value = ""
        validateForm()
    }

    function submitForm() {
        const body = {
            name: input.name,
            difficult: input.difficult,
            season: input.season,
            description: input.description,
            countriesIds: countriesIds.map(el => el[0])
        }
        axios.post('http://localhost:3001/activity', body)
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                submitForm()}}>
                <label htmlFor="name">Nombre de la actividad:</label>
                <input type="text" name="name" value={input.name} onChange={handleChange}/>
                <label htmlFor="difficult">Dificultad:</label>
                <select name="difficult" value={input.difficult} onChange={handleChange}>
                    <option></option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label htmlFor="season">Temporada:</label>
                <select name="season" value={input.season} onChange={handleChange}>
                    <option></option>
                    <option>Verano</option>
                    <option>Otoño</option>
                    <option>Invierno</option>
                    <option>Primavera</option>
                </select>
                <label htmlFor="description">Descripción de la actividad:</label>
                <input type="text" name="description" value={input.description} onChange={handleChange}/>
                <label htmlFor="countries">Paises donde se puede realizar la actividad:</label>
                <select name="countries" ref={countryIdSelect} onKeyPress={(e) => e.key === "Enter" ? addCountry(e) : null} onChange={validateForm}>
                    <option></option>
                    {countries.map(country => 
                        <option value={country.id}>{country.name}</option>
                    )}        
                </select>
                <div>
                    <ul>
                        {countriesIds.map((countryId) => (
                            <li>
                                <span>{countryId[1]}</span>
                                <button onClick={(e) => {e.preventDefault()
                                    removeCountryId(countryId[0])}}>X</button>
                            </li>
                        ))}
                    </ul>
                </div>
                {
                    error.length !== 0 ? (<span>{error}</span>) : (<input type="submit" value="Enviar actividad"/>)
                } 
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.countries
})

export default connect(mapStateToProps)(ActivityForm)
