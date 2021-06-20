import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES'

export function getCountries() {
  return async(dispatch) => {
    const response = await axios.get('http://localhost:3001/countries')
    dispatch({type: GET_COUNTRIES, payload: response.data})
  }
}