import Server from '../services/server/Server';
import { RECOVER_PASSWORD,RESET_PASSWORD } from '../reducers/types';

const resetPasswordAPI = process.env.REACT_APP_CREATE_RESET_PASSWORD_END_POINT;
// const recoverpasswordAPI = process.env.REACT_APP_CREATE_RECOVER_PASSWORD_END_POINT
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};
const recoverpasswordAPI = 'http://api.fundmylaptop.com/api/usere/forgot_password'

export const recoverPassword = (formInput) => (dispatch) => {
    Server.post(`${recoverpasswordAPI}`,formInput,headers)
    .then(response=>{
        dispatch({
            type: RECOVER_PASSWORD,
            payload: response.data
        })
    })  
    .catch(err => {
        console.log(err)
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: err,
        //   });
    })      
}

export const resetPassword = (formInput,password_token) => (dispatch) => {
    Server.authBlogPost(`${resetPasswordAPI}`,formInput,password_token,headers)
    .then(response=>{
        dispatch({
            type: RESET_PASSWORD,
            payload: response.data
        })
    })  
    .catch(err => {
        console.log(err)
        // dispatch({
        //     type: SET_ERRORS,
        //     payload: err,
        //   });
    })      
}
