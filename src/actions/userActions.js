import {
  SET_USER,
  // SET_AUTHENTICATED,
  SET_ERRORS,
  // SET_UNAUTHENTICATED,
  LOADING_USER,
  CLEAR_ERRORS,
} from '../reducers/types';

import pageurl from '../components/router/url/pageurl';

import Server from '../services/server/Server';

import axios from 'axios';

let baseURL = "https://api.fundmylaptop.com";

console.log(baseURL);

const setAuthorizationHeader = (token) => {
  const Token = `Bearer ${token}`;
  localStorage.setItem('Token', Token);
  axios.defaults.headers.common['Authorization'] = Token;
};

export const loginUser = (formInput, history) => (dispatch) => {
  axios
    .post(`${baseURL}/api/users/login`, formInput)
    .then((res) => {
      dispatch({ type: CLEAR_ERRORS });
      console.log(res.data);
      const { token, ...userData } = res.data.data;
      let userDetails = { ...userData };
      console.log(userDetails);
      setAuthorizationHeader(token);
      dispatch({ type: LOADING_USER });
      dispatch({
        type: SET_USER,
        payload: userDetails,
      });

      history.push(pageurl.USER_PROFILE_PAGE_URL);
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const registerUser = (userData, history) => dispatch => {
  Server.post(`${baseURL}/api/users/register`, userData).then(
    res => {
      dispatch({ type: CLEAR_ERRORS });
      console.log(res.data);
      dispatch({ type: LOADING_USER })
      history.push(pageurl.LOGIN_PAGE_URL);
    }).catch(err => {
      console.log(err.response.data);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
}
