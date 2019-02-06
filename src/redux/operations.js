import axios from 'axios';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  signOutRequest,
} from './actions';

axios.defaults.baseURL = 'https://reqres.in';


export const signUp = credentials => dispatch => {
    dispatch(signUpRequest());
  
    axios
      .get('api/register', credentials)
      .then((data) => {  
        dispatch(signUpSuccess(data));
      })
      .catch(error => dispatch(signUpError(error)));
  };

export const getUsers = () => dispatch => {
  dispatch(getUsersRequest());

  axios
    .get('/api/users?page=2')
    .then((response) => {
      dispatch(getUsersSuccess(response.data.data));
    })
    .catch(error => dispatch(getUsersError(error)));
};

export const signOut = () => dispatch => {
  dispatch(signOutRequest());
};
