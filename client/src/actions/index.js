import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ADD_ACTIVITY = 'ADD_ACTIVITY'
export const ADD_FULL_COUNTRY = 'ADD_FULL_COUNTRY'

export function getCountries() {
  return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/countries')
    dispatch({type: GET_COUNTRIES, payload: response.data})
  }
}

export function addActivity(activity) {
  return {
    type: ADD_ACTIVITY,
    payload: activity
  }
}

export function addFullCountry(id) {
  return async(dispatch) => {
    const response = await axios.get(`http://localhost:3001/countries/${id}`)
    dispatch({type: ADD_FULL_COUNTRY, payload: response.data})
  }
}