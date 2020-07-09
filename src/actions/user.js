import * as constants from "../utils/constants";
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

// are called by the user
// whenever it is needed to activate reducer
// in order to affect state
export const register = data => {
    return function(dispatch) {
        return axios({
            method: 'post',
            url: url + "seekers/register",
            data: data
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.REGISTER,  data: res.data });
            return res;
        }).catch(err => {
            return err;
        })
    }

}

export const login = data => {
    return function(dispatch) {
        return axios({
            method: 'post',
            url: url + "login",
            data: data
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.LOGIN,  data: res.data });
            return res;
        }).catch(err => {
            return err;
        })
    }

}

export const confirm = data => {
    return function(dispatch) {
        return axios({
            method: 'get',
            url: url + "confirm-account?token=" + data,
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.CONFIRMED,  data: res });
            return res;
        }).catch(err => {
            return err;
        })
    }

}
