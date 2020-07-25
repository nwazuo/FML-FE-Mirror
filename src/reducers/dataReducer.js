import {CREATE_REQUEST, SET_ERRORS,  LOADING_USER, CLEAR_ERRORS} from './types';
  
  const initialState = {
    createdRequest: false,
    loading: false,
    errors: null,
    data: {}
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case CREATE_REQUEST:
        return {
          ...state,
          createdRequest: true,
          data: action.payload
        };
      case LOADING_USER:
        return {
          ...state,
          loading: true,
        };
      case SET_ERRORS:
        return {
          ...state,
          errors: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          errors: null,
        };
      default:
        return state;
    }
  }
  