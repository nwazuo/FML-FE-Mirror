import { FETCH_FAQS, FETCH_SEARCH_FAQS, ADD_FAQS } from './types'

const initialState = {
    faqs: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FAQS:
            return {...state, faqs: action.payload}
        case FETCH_SEARCH_FAQS:
            return {...state, faqs: action.payload}
        case ADD_FAQS:
                return {...state}
        default:
            return state
    }
}

export const getFaqs = state => state.data.faqs