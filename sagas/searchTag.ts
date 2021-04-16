import { all, fork, put, takeLatest, delay, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  ADD_SEARCH_TAG_FAILURE,
  ADD_SEARCH_TAG_REQUEST,
  ADD_SEARCH_TAG_SUCCESS,
  LOAD_SEARCH_TAGS_FAILURE,
  LOAD_SEARCH_TAGS_REQUEST,
  LOAD_SEARCH_TAGS_SUCCESS,
  REMOVE_SEARCH_TAG_FAILURE,
  REMOVE_SEARCH_TAG_REQUEST,
  REMOVE_SEARCH_TAG_SUCCESS,
  UPDATE_SEARCH_TAG_FAILURE,
  UPDATE_SEARCH_TAG_REQUEST,
  UPDATE_SEARCH_TAG_SUCCESS,
} from '../actions/searchTag/type';
import Cookies from 'js-cookie';

function loadSearchTagAPI() {
  return axios.get(`/searchTags`, { withCredentials: true });
}

function* loadSearchTag() {
  try {
    const result: AxiosResponse<any> = yield call(loadSearchTagAPI);
    yield delay(1000);
    yield put({
      // put은 dispatch 동일
      type: LOAD_SEARCH_TAGS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOAD_SEARCH_TAGS_FAILURE,
      error: e.response.data,
    });
  }
}

function addSearchTagAPI(data: any) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.post('/searchTags', data, { headers: { Authorization } });
}

function* addSearchTag(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(addSearchTagAPI, action.data);
    yield put({
      // put은 dispatch 동일
      type: ADD_SEARCH_TAG_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: ADD_SEARCH_TAG_FAILURE,
      error: e.response.data,
    });
  }
}

function updateSearchTagAPI(seq: number, data: any) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.patch(`/searchTags/${seq}`, data, {
    headers: { Authorization },
  });
}

function* updateSearchTag(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(
      updateSearchTagAPI,
      action.seq,
      action.data
    );
    yield put({
      // put은 dispatch 동일
      type: UPDATE_SEARCH_TAG_SUCCESS,
      data: result.data,
    });
  } catch (e: any) {
    // loginAPI 실패
    yield put({
      type: UPDATE_SEARCH_TAG_FAILURE,
      error: e.response.data,
    });
  }
}

function removeSearchTagAPI(seq: number) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.delete(`/searchTags/${seq}`, { headers: { Authorization } });
}

function* removeSearchTag(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(
      removeSearchTagAPI,
      action.seq
    );
    yield put({
      // put은 dispatch 동일
      type: REMOVE_SEARCH_TAG_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: REMOVE_SEARCH_TAG_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadSearchTag() {
  yield takeLatest(LOAD_SEARCH_TAGS_REQUEST, loadSearchTag);
}

function* watchAddSearchTag() {
  yield takeLatest(ADD_SEARCH_TAG_REQUEST, addSearchTag);
}

function* watchRemoveSearchTag() {
  yield takeLatest(REMOVE_SEARCH_TAG_REQUEST, removeSearchTag);
}

function* watchUpdateSearchTag() {
  yield takeLatest(UPDATE_SEARCH_TAG_REQUEST, updateSearchTag);
}

export default function* searchTagSaga() {
  yield all([
    fork(watchLoadSearchTag),
    fork(watchAddSearchTag),
    fork(watchRemoveSearchTag),
    fork(watchUpdateSearchTag),
  ]);
}
