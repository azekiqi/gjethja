import { createStore, applyMiddleware } from 'redux';
import * as constants from '../utils/constants';
import thunk from 'redux-thunk';

const initialState = {   //initialState is a plain object that "describes" our app state
    user: {},
    posts: [],
    profiles: [],
    startAgeFilter: "",
    endAgeFilter: "",
    cityFilter: "",
    educationFilter: "",
}

// Reducer:
// interceptor between action and store/state
// accepts data from action, affects state
const app = function (state = initialState, action) {
    switch (action.type) {

        case constants.REGISTER:
            console.log(action);
            return state;

        case constants.LOGIN:
            console.log(action);
            localStorage.setItem("token", action.data.accessToken);
            return state;

        case constants.GET_POSTS:
            console.log(action);
            return {
                ...state,
                posts: action.data
            }

        case constants.GET_PROFILES:
            console.log(action);
            return {
                ...state,
                profiles: action.data
            }

        case constants.SET_FILTERS:
            switch (action.payload.filter) {
                case("startAgeFilter"):
                    return { ...state, [action.payload.filter]: action.payload.value }
                case("endAgeFilter"):
                    return { ...state, [action.payload.filter]: action.payload.value }
                case("cityFilter"):
                    return { ...state, [action.payload.filter]: action.payload.value }
                case("educationFilter"):
                    return { ...state, [action.payload.filter]: action.payload.value }
            }

        default:
            return state;
    }
};

export const store = createStore(app, applyMiddleware(thunk)); // main store, the state of the entire application
