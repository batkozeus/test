import keyMirror from 'keymirror';

// keyMirror - key represents value
export const actionTypes = keyMirror({
  SIGN_UP_REQUEST: null,
  SIGN_UP_SUCCESS: null,
  SIGN_UP_ERROR: null,
  GET_USERS_REQUEST: null,
  GET_USERS_SUCCESS: null,
  GET_USERS_ERROR: null,
  SIGN_OUT_REQUEST: null,
  SIGN_OUT_SUCCESS: null,
  SIGN_UP_SAGA: null,
  GET_USERS_SAGA: null,
  SIGN_OUT_SAGA: null,
  HIDE_MODAL: null,
  SHOW_MODAL: null
});
  
export const signUpSaga = (data) => ({
  type: actionTypes.SIGN_UP_SAGA,
  payload: data
});

export const getUsersSaga = () => ({
  type: actionTypes.GET_USERS_SAGA
});

export const signOutSaga= () => ({
  type: actionTypes.SIGN_OUT_SAGA
});

export const showModal = ( modalProps, modalType ) => ({
  type: actionTypes.SHOW_MODAL,
  modalProps,
  modalType
});

export const hideModal = () => ({
  type: actionTypes.HIDE_MODAL
});