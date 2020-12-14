import { createStore, applyMiddleware } from 'redux';
import * as constants from '../utils/constants';
import thunk from 'redux-thunk';
import jwt_decode from "jwt-decode";

const initialState = {   //initialState is a plain object that "describes" our app state
    user: {},
    profiles: [],
    boosted_posts: [],
    startAgeFilter: "",
    endAgeFilter: "",
    cityFilter: "",
    educationFilter: "",
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
}

// Reducer:
// interceptor between action and store/state
// accepts data from action, affects state
export const app = function (state = initialState, action) {
    switch (action.type) {

        case constants.REGISTER:
            console.log(action);
            return state;

        case constants.LOGIN:
            const token = action.data.access_token;
            const decoded_token = jwt_decode(action.data.access_token);
            const role = decoded_token.authorities[0];
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            return {
                ...state,
                token: token,
                role: role
            }

        case constants.LOGOUT:
            console.log(action);
            localStorage.removeItem("token");
            return {
                ...state,
                token: null
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
