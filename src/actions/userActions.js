import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  CLEAR_ERRORS,
} from '../reducers/types';
import axios from 'axios';
let baseURL = 'https://api.fundmylaptop.com';

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

      history.push('/profile');
    })
    .catch((err) => {
      console.log(err);
      //   dispatch({
      //     type: SET_ERRORS,
      //     payload: err.response.data,
      //   });
    });
};
