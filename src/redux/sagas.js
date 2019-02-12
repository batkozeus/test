import { put, call, takeEvery, all } from 'redux-saga/effects'
import axios from 'axios';
import {
    signUpRequest,
    signUpSuccess,
    signUpError,
    getUsersRequest,
    getUsersSuccess,
    getUsersError,
    signOutRequest,
    actionTypes
} from './actions';

axios.defaults.baseURL = 'https://reqres.in';

function* signUp (credentials) {
    yield put(signUpRequest());
    try {
        const loginData = yield call(axios.get, 'api/register', credentials.payload);
        yield put(signUpSuccess(loginData));
    } catch (error) {
        yield put(signUpError(error));
    }
};

function* getUsers () {
    yield put(getUsersRequest());
    try {
        const userData = yield call(axios.get, '/api/users?page=2');
        yield put(getUsersSuccess(userData.data.data));
    } catch (error) {
        yield put(getUsersError(error));
    }
};

function* signOut () {
    yield put(signOutRequest());
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