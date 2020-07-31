import Server from '../services/server/Server';
import { CREATE_BLOG_POST,GET_ALL_BLOG_POST,GET_BLOG_POST,COMMENT_BLOG_POST,SET_ERRORS } from '../reducers/types';

const token = localStorage.getItem('FMLToken');
const createBlogPostEndPoint  = process.env.REACT_APP_CREATE_BLOG_POST_END_POINT;
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};

export const createBlogPost = (formInput) => (dispatch) => {
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
export const getAllBlogPost = () => (dispatch) => {
    Server.get(`${createBlogPostEndPoint}`)
    .then(response=>{
        dispatch({
            type: GET_ALL_BLOG_POST,
            payload: response.data.data,
        });  
    })
    .catch(error=>{console.log(error)});    
}
export const getBlogPost = (id) => (dispatch) => { 
    console.log(id,'id')
    Server.get(`${createBlogPostEndPoint}/${id}`)
    .then(response=>{
        dispatch({
            type: GET_BLOG_POST,
            payload: response.data,
        })
    })
    .catch(error=>{console.log(error)});
};
export const addcomment = (id,data) => (dispatch) => { 
    Server.authBlogPost(`${createBlogPostEndPoint}/${id}/comment`,data,token,headers)
    .then(response=>{
        dispatch({
            type: COMMENT_BLOG_POST,
                payload: response.data,
        })
    })
    .catch(error=>{
        console.log(error)
    });    
};