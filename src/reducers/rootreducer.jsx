import { combineReducers } from 'redux';
import { userReducer, contactReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
 contact: contactReducer,
});

export default rootreducer;
