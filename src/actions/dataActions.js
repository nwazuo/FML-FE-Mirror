// import {FORM_SUBMITED} from '../reducers/types';
import axios from 'axios';
import {CREATE_REQUEST, SET_ERRORS} from '../reducers/types';
// let baseURL = process.env.REACT_APP_BASE_URL;
let baseURL = 'https://api.fundmylaptop.com';

// const getAuthorization = localStorage.getItem('FMLToken');


export const loanRequest = (formInput) => (dispatch) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
    axios
        .post(`${baseURL}/api/campaigns/createRequest`, formInput)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: CREATE_REQUEST,
                payload: res.data
            })
        })
        .catch(err => {
            // console.log(getAuthorization);
            console.log(err)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.message,
              });
        })
} 