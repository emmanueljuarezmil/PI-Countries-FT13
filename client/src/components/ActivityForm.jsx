import React, { useState, useRef, useEffect } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { addActivity, getCountries } from '../actions';

function ActivityForm({countries, addActivity}) {
    const [input, setInput] = useState({
        name: '',
        difficult: '',
        season: '',
        description: '',
        duration: ''
      });

    const [countriesIds, setCountriesIds] = useState([])
    
    const [error, setError] = useState('Debes ingresar una actividad y al menos un pais');

    useEffect(() => {
        if(!input.name.length || !countriesIds.length) setError('Debes ingresar al menos el nombre de la actividad y un pais')
        if(input.name.length && countriesIds.length) setError('')
    },[input, countriesIds])

    function handleChange(e) {
        e.preventDefault()
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const countryIdSelect = useRef(null)
    
    function removeCountryId(countryId) {
        setCountriesIds(countriesIds.filter((el) => el[0] !== countryId))
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
    }

    async function submitForm(e) {
        e.preventDefault()
        try {
            const data = {
                name: input.name,
                difficult: parseInt(input.difficult),
                season: input.season,
                duration: parseInt(input.duration),
                description: input.description,
                countriesIds: countriesIds.map(el => el[0])
            }
            const response = await axios({
                method: 'POST',
                url: 'http://localhost:3001/activity',
                data
            })
            var activity = response.data
            activity.countries = activity.countries.map(el => el.id)
            addActivity(activity)
            getCountries()
            setInput({name: '', difficult: '', season: '', description: '', duration: ''})  
            setCountriesIds([])
            window.alert('Actividad añadida con éxito')
        }
        catch(err) {
            console.error(err)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => {submitForm(e)}}>
                <label htmlFor="name">Nombre de la actividad:</label>
                <input type="text" name="name" value={input.name} onChange={handleChange}/>
                <label htmlFor="name">Duracion en minutos de la actividad:</label>
                <input type="number" name="duration" value={input.duration} onChange={handleChange} min="0"/>
                <label htmlFor="difficult">Dificultad:</label>
                <select name="difficult" value={input.difficult} onChange={handleChange}>
                    <option></option>
                    <option value="1">Muy fácil</option>
                    <option value="2">Fácil</option>
                    <option value="3">Intermedia</option>
                    <option value="4">Dificil</option>
                    <option value="5">Muy dificil</option>
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
                <label htmlFor="countries">Paises donde se puede realizar la actividad (ingresar cada pais con enter):</label>
                <select name="countries" ref={countryIdSelect} onKeyPress={(e) => e.key === "Enter" ? addCountry(e) : null}>
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
                                    removeCountryId(countryId[0])}}>Eliminar pais</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    {
                        error.length !== 0 ? (<span>{error}</span>) : (<input type="submit" value="Enviar actividad"/>)
                    } 
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    countries: state.countries
})

const mapDispatchToProps = (dispatch) => {
    return {
      addActivity: activity => dispatch(addActivity(activity))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm)
