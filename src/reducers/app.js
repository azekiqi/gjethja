import { createStore, applyMiddleware } from 'redux';
import * as constants from '../utils/constants';
import thunk from 'redux-thunk';

const initialState = {   //initialState is a plain object that "describes" our app state
    user: {}
}

// Reducer:
// interceptor between action and store/state
// accepts data from action, affects state
const app = function (state = initialState, action) {
    switch (action.type) {
        case constants.REGISTER:
            console.log(action.data);
            return state;
        case constants.LOGIN:
            return state;
        default:
            return state;
    }
};

export const store = createStore(app, applyMiddleware(thunk)); // main store, the state of the entire application
