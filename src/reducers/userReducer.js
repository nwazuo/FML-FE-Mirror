import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  SET_OTHER_USER,
  UNSET_OTHER_USER,
  // SET_ERRORS,
  // CLEAR_ERRORS,
  REGISTERED_USER,
} from './types';

const initialState = {
  authenticated: false,
  loading: false,
  credentials: {},
  errors: null,
  message: null,
  otherUser: {},
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
        ...state,
        authenticated: true,
        loading: false,
        credentials: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: false,
      };
    case SET_OTHER_USER:
      return {
        ...state,
        otherUser: action.payload,
      };
    case UNSET_OTHER_USER:
      return {
        ...state,
        otherUser: {},
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
