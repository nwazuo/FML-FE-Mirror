import * as actionTypes from "./actions";
import Server from "../services/server/Server";

// Sign Up Users 
export const doSignupUsers = (userData, history) => dispatch => {
    Server.post('/api/users/register', userData).then(
        res => {
            history.push("/login")
        }
    ).catch(err => {
        dispatch({
            type: actionTypes.SIGN_UP,
            payload: err.response.data
        })
    });
}
