import {} from '../action-types'
import {combineReducers} from 'redux'


function activities(state = [],action) {
    switch(action.type) {
        default:
            return state
    }
}

function page(state = 1,action) {
    switch(action.type) {
        default:
            return state
    }
}



let rootReducer = combineReducers({activities, page})

export default rootReducer;