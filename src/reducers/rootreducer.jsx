import { combineReducers } from 'redux';
import { userReducer, uiReducer,fundeeReducer,dataReducer,blogReducer,passwordReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
  fundee:fundeeReducer,
  blog:blogReducer,
  password:passwordReducer
});

export default rootreducer;