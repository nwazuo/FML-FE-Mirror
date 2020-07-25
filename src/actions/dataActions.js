import { FETCH_FAQS, FETCH_SEARCH_FAQS } from '../reducers/types'
import axios from 'axios'


function fetchData (data) {
    return {
        type: FETCH_FAQS,
        payload: data,
    }
}

function fetchSearchData (data) {
    return {
        type: FETCH_SEARCH_FAQS,
        payload: data,
    }
}

export function fetchFaqs () {
    return dispatch => {
        axios
            .get('https://api.fundmylaptop.com/api/faqs')
            .then(res => dispatch(fetchData(res.data.data)))
            .catch(err => console.error(err))
    }
}

export function fetchSearchFaqs (query) {
    return dispatch => {
        axios
            .get(`https://api.fundmylaptop.com/api/search/faqs?q=${query}`)
            .then(res => dispatch(fetchSearchData(res.data.data)))
            .catch(err => console.error(err))
    }
}