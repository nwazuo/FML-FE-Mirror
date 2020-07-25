import { LOADING_USER, SET_ERRORS, LOADING_UI, LOADED_UI } from './types';
const initialState = {
  loading: false,
  errors: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case LOADED_UI:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
