import './ActivityForm.css'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountriesForActivities } from '../../actions'
import { Link } from "react-router-dom"

const ActivityForm = () => {
    const [input, setInput] = useState({
        name: '',
        difficult: '',
        season: '',
        description: '',
        duration: '',
        countryId: '',
        countriesIds: []
      });

    const [error, setError] = useState('Debes ingresar una actividad y al menos un pais');

    const dispatch = useDispatch()
    const countriesForActivities = useSelector(state => state.countriesForActivities)

    useEffect(() => {
        if(!countriesForActivities.length) dispatch(getCountriesForActivities())
    },[dispatch, countriesForActivities])

    useEffect(() => {
        if(!input.name.length || !input.countriesIds.length) setError('Debes ingresar al menos el nombre de la actividad y un pais')
        if(input.name.length && input.countriesIds.length) setError('')
    },[input, input.countriesIds])

    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const submitForm = (e) => {}

    const addCountry = (e) => {
        e.preventDefault()
        const id = input.countryId
        const countriesIds = input.countriesIds
        if(!countriesIds.includes(id) && id !== '') {
            countriesIds.push(id)
            setInput({
                ...input,
                countriesIds,
                countryId: ''
            })
        }
        else {
            setInput({
                ...input,
                countryId: ''
            })
        }
    }
    
    return (
        <div>
            <div className='activityform-form'>
                <form onSubmit={(e) => {submitForm(e)}}>
                    <div className='activityform-form-item'>
                        <span>Nombre de la actividad</span>
                        <input type="text" name="name" value={input.name} onChange={handleChange}/>
                    </div>
                     <div className='activityform-form-item'>
                        <span htmlFor="name">Duración de la actividad (minutos)</span>
                        <input type="number" name="duration" value={input.duration} onChange={handleChange} min="0"/>
                    </div>
                    <div className='activityform-form-item'>
                        <span>Dificultad</span>
                        <select name="difficult" value={input.difficult} onChange={handleChange}>
                            <option></option>
                            <option value="1">Muy fácil</option>
                            <option value="2">Fácil</option>
                            <option value="3">Intermedia</option>
                            <option value="4">Dificil</option>
                            <option value="5">Muy dificil</option>
                        </select>
                    </div>
                    <div className='activityform-form-item'>
                        <span>Temporada en que se puede realizar</span>
                        <select name="season" value={input.season} onChange={handleChange}>
                            <option value="">Cualquiera</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                        </select>
                    </div>
                    <div className='activityform-form-item'>
                        <span>Descripción de la actividad</span>
                        <input type="text" name="description" value={input.description} onChange={handleChange}/>
                    </div>
                    <div className='activityform-form-item'>
                        <span>Paises en donde se puede realizar la actividad</span>
                        <select
                        name="countryId"
                        value={input.countryId}
                        onChange={handleChange}>
                            <option value=''></option>
                            {countriesForActivities && countriesForActivities.map(country => 
                                <option value={country.id} key={country.id}>{country.name}</option>
                            )}        
                        </select>
                        <button onClick={(e) => addCountry(e)}>Añadir pais</button>
                    </div>
                    {/*<div className='activityform-countries'>
                            {countriesIds.map((countryId) => (
                                <span className='activityform-countries-item'>
                                    {`${countryId[1]} `}
                                    <button className='activityform-countries-item-delete' onClick={(e) => {e.preventDefault()
                                        removeCountryId(countryId[0])}}>X</button>
                                </span>
                            ))}
                    </div>*/}
                    <div className='activityform-submit'>
                        {
                            error.length !== 0 ? (<span className='activityform-error'>{error}</span>) : (<input className='activityform-submit-button' type="submit" value="Enviar actividad"/>)
                        } 
                    </div>
                </form>
            </div>
            <Link to='/home'>
                Regresar al home
            </Link>
        </div>
    )
}

export default ActivityForm
