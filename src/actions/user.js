import * as constants from "../utils/constants";
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

// are called by the user
// whenever it is needed to activate reducer
// in order to affect state
export const register = data => {
    return function(dispatch) {
        axios({
            method: 'post',
            url: url + "seekers/register",
            data: data
        }).then(res => {
            console.log(res);
            return { type: constants.REGISTER,  data: res }
        })
    }

}

export const confirm = data => {
    return function(dispatch) {
        axios({
            method: 'get',
            url: url + "confirm-account?token=" + data,
        }).then(res => {
            console.log(res);
            return { type: constants.CONFIRM,  data: res }
        })
    }

}
