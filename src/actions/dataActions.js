// import {FORM_SUBMITED} from '../reducers/types';
import axios from 'axios';
import {CREATE_REQUEST, SET_ERRORS, FETCH_FAQS, FETCH_SEARCH_FAQS, ADD_FAQS, DELETE_FAQS} from '../reducers/types';
// let baseURL = process.env.REACT_APP_BASE_URL;
let baseURL = 'https://api.fundmylaptop.com';

// const getAuthorization = localStorage.getItem('FMLToken');


export const loanRequest = (formInput) => (dispatch) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
    axios
        .post(`${baseURL}/api/campaigns/createRequest`, formInput)
        .then(res => {
            // console.log(res.data)
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

export function fetchFaqs () {
    return dispatch => {
        axios
            .get(`${baseURL}/api/faqs`)
            .then(res => dispatch({
                type: FETCH_FAQS,
                payload: res.data.data
            }))
            .catch(err => console.error(err))
    }
}

export function fetchSearchFaqs (query) {
    return dispatch => {
        axios
            .get(`${baseURL}/api/search/faqs?q=${query}`)
            .then(res => dispatch({
                type: FETCH_SEARCH_FAQS,
                payload: res.data.data
            }))
            .catch(err => console.error(err))
    }
}

export function addFaqs (data) {
    return dispatch => {
        axios
            .post(`${baseURL}/api/faqs/create`, data)
            .then(res => dispatch({
                type: ADD_FAQS,
                payload: res.statusText
            }))
            .catch(err => console.error(err))
    }
}

export function deleteFaqs (data) {
    return dispatch => {
        console.log(data)
        //axios
        //    .delete(`${baseURL}/api/faqs/create`, data)
        //    .then(res => dispatch({
        //        type: ADD_FAQS,
        //        payload: res.statusText
        //    }))
        //    .catch(err => console.error(err))
    }
}
