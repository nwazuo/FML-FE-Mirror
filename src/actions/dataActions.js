import { FETCH_FAQS, FETCH_SEARCH_FAQS, ADD_FAQS } from '../reducers/types'
import axios from 'axios'

export function fetchFaqs () {
    return dispatch => {
        axios
            .get('https://api.fundmylaptop.com/api/faqs')
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
            .get(`https://api.fundmylaptop.com/api/search/faqs?q=${query}`)
            .then(res => dispatch({
                type: FETCH_SEARCH_FAQS,
                payload: res.data.data
            }))
            .catch(err => console.error(err))
    }
}

export function addFaqs (query) {
    return dispatch => {
        axios
            .post('https://api.fundmylaptop.com/api/faqs/create', {
                question: query
            })
            .then(res => console.log(res))
            .then(res => dispatch({
                type: ADD_FAQS,
                payload: res
            }))
            .catch(err => console.error(err))
    }
}