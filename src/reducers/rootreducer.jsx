import { combineReducers } from 'redux';
import { userReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
});

export default rootreducer;
