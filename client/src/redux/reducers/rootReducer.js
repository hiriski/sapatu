import { combineReducers } from 'redux';
import auth from './authReducer';
import product from './productReducer';
import alert from './alertReducer';

export default combineReducers({
  auth,
  product,
  alert,
});
