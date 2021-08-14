import axios from 'axios'
import { 
    BACKENDURL,
    GET_COUNTRIES,
    SET_CURRENT_PAGE,
    SET_SEARCHED_COUNTRIES,
    SET_ORDER_BY,
    SET_ORDER_TYPE,
    GET_ACTIVITIES,
    GET_ACTIVITIES_FOR_SEARCH_BAR,
    SET_ACTIVITY_FILTER,
    GET_COUNTRY_DETAIL,
    SET_CONTINENT_FILTER,
    GET_COUNTRIES_FOR_ACTIVITIES
} from '../constants'

export const getCountries = ( 
  name,
  orderBy,
  orderType,
  page,
  itemsPerPage,
  activityFilter,
  continentFilter
  ) => {
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`${BACKENDURL}/countries?name=${name}&orderBy=${orderBy}&orderType=${orderType}&page=${page}&itemsPerPage=${itemsPerPage}&activityFilter=${activityFilter}&continentFilter=${continentFilter}`)
        dispatch({
          type: GET_COUNTRIES,
          payload: data
        })
    } catch (err) {
        console.error(err)
    }
  }
}

export const getCountriesForActivities = () => {
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`${BACKENDURL}/countriesForActivities`)
        dispatch({
          type: GET_COUNTRIES_FOR_ACTIVITIES,
          payload: data
        })
    } catch (err) {
        console.error(err)
    }
  }
}

export const getActivities = () => {
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`${BACKENDURL}/activity`)
        dispatch({
          type: GET_ACTIVITIES,
          payload: data
        })
    } catch (err) {
        console.error(err)
    }
  }
}

export const getActivitiesForSearchBar = () => {
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`${BACKENDURL}/activitySearchBar`)
        dispatch({
          type: GET_ACTIVITIES_FOR_SEARCH_BAR,
          payload: data
        })
    } catch (err) {
        console.error(err)
    }
  }
}

export const getCountryDetail = (id) => {
  return async (dispatch) => {
    try {
        const { data } = await axios.get(`${BACKENDURL}/countries/${id}`)
        dispatch({
          type: GET_COUNTRY_DETAIL,
          payload: data
        })
    } catch (err) {
        console.error(err)
    }
  }
}

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: page
  }
}

export const setSearch = (searched) => {
  return {
    type: SET_SEARCHED_COUNTRIES,
    payload: searched
  }
}

export const setOrderBy = (orderBy) => {
  return {
    type: SET_ORDER_BY,
    payload: orderBy
  }
}

export const setOrderType = (orderType) => {
  return {
    type: SET_ORDER_TYPE,
    payload: orderType
  }
}

export const setActivityFilter = (id) => {
  return {
    type: SET_ACTIVITY_FILTER,
    payload: id
  }
}

export const setContinentFilter = (continent) => {
  return {
    type: SET_CONTINENT_FILTER,
    payload: continent
  }
}