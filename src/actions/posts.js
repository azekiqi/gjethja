import * as constants from "../utils/constants";
import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL;

export const getPosts = filters => {
    const token = localStorage.getItem("token");
    return function(dispatch) {
        return axios({
            method: 'get',
            url: url + `posts`,
            headers: {
                authorization: "Bearer " + token
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

export const createPost = data => {
    const token = localStorage.getItem("token");
    return function(dispatch) {
        return axios({
            method: 'post',
            url: url + "posts",
            data: data,
            headers: {
                authorization: "Bearer " + token
            }
        }).then(res => {
            console.log(res);
            dispatch({ type: constants.CREATE_POST,  data: res.data });
            return res;
        }).catch(err => {
            return err;
        })
    }
}