import Server from '../services/server/Server';
import { CREATE_BLOG_POST,GET_ALL_BLOG_POST,GET_BLOG_POST,COMMENT_BLOG_POST,SET_ERRORS } from '../reducers/types';

const token = localStorage.getItem('FMLToken');
const createBlogPostEndPoint  = process.env.REACT_APP_CREATE_BLOG_POST_END_POINT;
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};

export const creteBlogPost = (formInput) => (dispatch) => {
    Server.authBlogPost(`${createBlogPostEndPoint}`,formInput,token,headers)
    .then(response=>{
        dispatch({
            type: CREATE_BLOG_POST,
            payload: response.data
        })
    })  
    .catch(err => {
        console.log(err)
        dispatch({
            type: SET_ERRORS,
            payload: err,
          });
    })  
}






