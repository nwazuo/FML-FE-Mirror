import {SET_ERRORS,CLEAR_ERRORS} from '../reducers/types';
import Server from '../services/server/Server';
let baseURL = 'https://api.fundmylaptop.com';




export const createBlogPost = (userData) => (dispatch) => {
    Server.post(`${baseURL}/api/blog`, userData)
      .then((res) => {
        dispatch({ type: CLEAR_ERRORS });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: SET_ERRORS,
          payload: err.response.data,
        });
      });
};
