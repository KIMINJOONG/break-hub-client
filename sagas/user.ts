import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  LOAD_ME_FAILURE,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
} from '../actions/user/type';
import { logInForm } from '../type/server';
import Cookies from 'js-cookie';

function logInAPI(data: logInForm) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  return axios.post(`/auth/login`, data);
}

function* logIn(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(logInAPI, action.data);
    Cookies.set('token', `Bearer ${result.data.access_token as string}`);
    yield put({
      // put은 dispatch 동일
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOG_IN_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function loadMeAPI() {
  // const token = Cookies.get('token');
  // const Authorization = token ? token : '';
  return axios.get(`/auth/me`);
}

function* loadMe() {
  try {
    const result: AxiosResponse<any> = yield call(loadMeAPI);
    yield put({
      // put은 dispatch 동일
      type: LOAD_ME_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOAD_ME_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadMe() {
  yield takeLatest(LOAD_ME_REQUEST, loadMe);
}

export default function* searchTagSaga() {
  yield all([fork(watchLogIn), fork(watchLoadMe)]);
}
