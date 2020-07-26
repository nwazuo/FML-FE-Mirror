import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_ERRORS,
  CLEAR_ERRORS,
  REGISTERED_USER,
} from './types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  errors: null,
  message: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        credentials: action.payload,
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
    case REGISTERED_USER:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}
