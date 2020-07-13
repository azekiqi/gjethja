import * as constants from "../utils/constants";
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

export const getProfiles = (filters) => {
    return function(dispatch) {
        return axios({
            method: 'get',
            url: url + `profiles`,
            headers: {
                authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.GET_PROFILES,  data: res.data });
            return res;
        }).catch(err => {
            return err;
        })
    }
}