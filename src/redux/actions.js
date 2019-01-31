export const actionTypes = {
    SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
    GET_USERS_REQUEST: 'session/GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'session/GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'session/GET_USERS_ERROR',
    SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
    SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
    SIGN_OUT_ERROR: 'session/SIGN_OUT_ERROR'
  };
  
  export const signUpRequest = () => ({
    type: actionTypes.SIGN_UP_REQUEST
  });
  
  export const signUpSuccess = data => ({
    type: actionTypes.SIGN_UP_SUCCESS,
    payload: data
  });
  
  export const signUpError = error => ({
    type: actionTypes.SIGN_UP_ERROR,
    payload: {
      error
    }
  });
  
  export const getUsersRequest = () => ({
    type: actionTypes.GET_USERS_REQUEST
  });
  
  export const getUsersSuccess = data => ({
    type: actionTypes.GET_USERS_SUCCESS,
    payload: data
  });
  
  export const getUsersError = error => ({
    type: actionTypes.GET_USERS_ERROR,
    payload: {
      error
    }
  });
  
  export const signOutRequest = () => ({
    type: actionTypes.SIGN_OUT_REQUEST
  });
  
  export const signOutSuccess = () => ({
    type: actionTypes.SIGN_OUT_SUCCESS
  });