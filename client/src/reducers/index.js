import {GET_COUNTRIES, ADD_ACTIVITY} from '../actions'

const initialState = {
    activities: [],
    countries: []
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
        default:
            return state;
    }
}

export default reducer;