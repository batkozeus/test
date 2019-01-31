import { combineReducers } from 'redux';
import { actionTypes } from './actions';

const users = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_USERS_SUCCESS:
      return payload;

    case actionTypes.GET_USERS_ERROR:
      return null;

    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case actionTypes.SIGN_UP_SUCCESS:
      return true;

    case actionTypes.SIGN_UP_ERROR:
    case actionTypes.SIGN_OUT_SUCCESS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  users,
  isAuthenticated
});