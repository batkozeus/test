import { put, call, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';
import {
    actionTypes
} from './actions';

axios.defaults.baseURL = 'https://reqres.in';

function* signUp (credentials) {
    yield put({
        type: actionTypes.SIGN_UP_REQUEST
    });
    try {
        const loginData = yield call(axios.get, 'api/register', credentials.payload);
        yield put({
            type: actionTypes.SIGN_UP_SUCCESS,
            payload: loginData
        });
    } catch (error) {
        yield put({
            type: actionTypes.SIGN_UP_ERROR,
            payload: {
                error
            }
        });
    }
};

function* getUsers () {
    yield put({
        type: actionTypes.GET_USERS_REQUEST
    });
    try {
        const userData = yield call(axios.get, '/api/users?page=2');
        yield put({
            type: actionTypes.GET_USERS_SUCCESS,
            payload: userData.data.data
        });
    } catch (error) {
        yield put({
            type: actionTypes.GET_USERS_ERROR,
            payload: {
                error
            }
        });
    }
};

function* signOut () {
    yield put({
        type: actionTypes.SIGN_OUT_REQUEST
    });
};

export function* watchSignUp() {
    yield takeEvery(actionTypes.SIGN_UP_SAGA, signUp)
}

export function* watchGetUsers() {
    yield takeEvery(actionTypes.GET_USERS_SAGA , getUsers)
}

export function* watchSignOut() {
    yield takeEvery(actionTypes.SIGN_OUT_SAGA, signOut)
}

export default function* rootSaga() {
    yield all([
        watchSignUp(),
        watchGetUsers(),
        watchSignOut ()
    ])
};