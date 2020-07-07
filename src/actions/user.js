import * as constants from "../utils/constants";
import axios from 'axios';

// are called by the user
// whenever it is needed to activate reducer
// in order to affect state
export const register = data => {
    axios({
        method: 'post',
        url: "http://localhost:8383/api/seekers/register",
        data: data
    }).then(res => {
        console.log(res);
        return { type: constants.REGISTER,  data: res }
    })
}