import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import usersReducer from './usersReducer';
import campaignReducer from './campaignReducer';

export default combineReducers({
  error: errorReducer,
  auth: authReducer,
  // user : usersReducer,
  campaign : campaignReducer
});