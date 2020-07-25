import { combineReducers } from 'redux';
import { userReducer } from './allReducers';
import { dataReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
});

export default rootreducer;
