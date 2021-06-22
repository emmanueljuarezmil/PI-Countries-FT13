import {GET_COUNTRIES, ADD_ACTIVITY, ADD_FULL_COUNTRY} from '../actions'

const initialState = {
    activities: [],
    countries: [],
    countryFull: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }
        case ADD_FULL_COUNTRY:
            return {
                ...state,
                countryFull: {
                    id: action.payload[0].id,
                    name: action.payload[0].name,
                    flag: action.payload[0].flag,
                    continent: action.payload[0].continent,
                    capital: action.payload[0].capital,
                    subregion: action.payload[0].subregion,
                    area: action.payload[0].area,
                    poblation: action.payload[0].poblation,
                    activities: action.payload[0].activities
                }
            }
        default:
            return state;
    }
}

export default reducer;