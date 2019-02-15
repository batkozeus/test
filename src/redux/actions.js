export const actionTypes = {
    SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
    SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
    SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
    GET_USERS_REQUEST: 'session/GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'session/GET_USERS_SUCCESS',
    GET_USERS_ERROR: 'session/GET_USERS_ERROR',
    SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
    SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
    SIGN_UP_SAGA: 'session/SIGN_UP_SAGA',
    GET_USERS_SAGA: 'session/GET_USERS_SAGA',
    SIGN_OUT_SAGA: 'session/SIGN_OUT_SAGA'
  };
  
export const signUpSaga = (data) =>  ({
    type: actionTypes.SIGN_UP_SAGA,
    payload: data
});

export const getUsersSaga = () =>  ({
    type: actionTypes.GET_USERS_SAGA
});

export const signOutSaga= () =>  ({
    type: actionTypes.SIGN_OUT_SAGA
});
