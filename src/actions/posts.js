import * as constants from "../utils/constants";
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

export const getPosts = data => {
    const token = localStorage.getItem("token");
    return function(dispatch) {
        return axios({
            method: 'get',
            url: url + "posts/",
            data: data,
            headers: {
                authorization: token
            }
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.GET_POSTS,  data: res.data });
            return res;
        }).catch(err => {
            return err;
        })
    }
}