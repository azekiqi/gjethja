import { createStore, applyMiddleware } from 'redux';
import * as constants from '../utils/constants';
import thunk from 'redux-thunk';

const initialState = {   //initialState is a plain object that "describes" our app state
    user: {},
    posts: []
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

        default:
            return state;
    }
};

export const store = createStore(app, applyMiddleware(thunk)); // main store, the state of the entire application
