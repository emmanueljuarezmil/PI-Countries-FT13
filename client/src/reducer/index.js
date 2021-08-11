import {
    GET_COUNTRIES,
    SET_CURRENT_PAGE,
    SET_SEARCHED_COUNTRIES,
    SET_ORDER_BY,
    SET_ORDER_TYPE,
    GET_ACTIVITIES,
    SET_ACTIVITY_FILTER,
    GET_COUNTRY_DETAIL,
    SET_CONTINENT_FILTER
} from '../constants'

const initialState = {
    activities: [],
    countries: [],
    countryDetail: {},
    currentPage: 1,
    totalPages: 0,
    searchedCountries: '',
    orderBy: 'name',
    orderType: 'ASC',
    activityFilter: '',
    continents: [],
    continentFilter: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload.countries,
                totalPages: action.payload.totalPages,
                continents: action.payload.continents
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case SET_SEARCHED_COUNTRIES:
            return {
                ...state,
                searchedCountries: action.payload
            }
        case SET_ORDER_TYPE:
            return {
                ...state,
                orderType: action.payload
            }
        case SET_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case SET_ACTIVITY_FILTER:
            return {
                ...state,
                activityFilter: action.payload
            }
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        case SET_CONTINENT_FILTER:
            return {
                ...state,
                continentFilter: action.payload
            }
        default:
            return state;
    }
}

export default reducer;