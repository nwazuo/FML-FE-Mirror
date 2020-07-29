import { CREATE_BLOG_POST,GET_ALL_BLOG_POST,GET_BLOG_POST,COMMENT_BLOG_POST } from './types';
  
const initialState = {
    createPost:false,
    data:{}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_BLOG_POST:
            return {
                ...state,
                createPost:true,
                data:action.payload
            };
        // case GET_ALL_BLOG_POST:
        //     return {
        //         ...state,
        //         fundee: action.payload
        // };
        // case GET_BLOG_POST:
        //     return {
        //         ...state,
        //         fundee: action.payload
        // };
        // case COMMENT_BLOG_POST:
        //     return {
        //         ...state,
        //         fundee: action.payload
        // }

        default:
        return state;
    }
}