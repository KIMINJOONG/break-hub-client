import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  ADD_BOARD_FAILURE,
  ADD_BOARD_REQUEST,
  ADD_BOARD_SUCCESS,
  LOAD_BOARDS_FAILURE,
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARD_FAILURE,
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
  REMOVE_BOARD_FAILURE,
  REMOVE_BOARD_REQUEST,
  REMOVE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILURE,
  UPDATE_BOARD_REQUEST,
  UPDATE_BOARD_SUCCESS,
} from '../actions/board/type';
import { Board } from '../type/server';
import Cookies from 'js-cookie';

function loadBoardsAPI() {
  //     const token = jsCookie.get("token");
  // const Authorization = token ? `token=${token}` : "";
  return axios.get(`/boards`, { withCredentials: true });
}

function* loadBoards() {
  try {
    const result: AxiosResponse<any> = yield call(loadBoardsAPI);
    yield put({
      // put은 dispatch 동일
      type: LOAD_BOARDS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOAD_BOARDS_FAILURE,
      error: e.response.data,
    });
  }
}

function loadBoardAPI(boardSeq: number) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  return axios.get(`/boards/${boardSeq}`, { withCredentials: true });
}

function* loadBoard(action: any) {
  try {
    const result: AxiosResponse<Board[]> = yield call(
      loadBoardAPI,
      action.boardSeq
    );
    yield put({
      // put은 dispatch 동일
      type: LOAD_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOAD_BOARD_FAILURE,
      error: e.response.data,
    });
  }
}

function addBoardAPI(data: any) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.post('/boards', data, { headers: { Authorization } });
}

function* addBoard(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(addBoardAPI, action.data);
    // yield delay(3000);
    yield put({
      // put은 dispatch 동일
      type: ADD_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: ADD_BOARD_FAILURE,
      error: e.response.data,
    });
  }
}

function updateBoardAPI(seq: number, data: any) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.patch(`/boards/${seq}`, data, { headers: { Authorization } });
}

function* updateBoard(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(
      updateBoardAPI,
      action.seq,
      action.data
    );
    yield put({
      // put은 dispatch 동일
      type: UPDATE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: UPDATE_BOARD_FAILURE,
      error: e.response.data,
    });
  }
}

function removeBoardAPI(seq: number) {
  const token = Cookies.get('token');
  const Authorization = token ? token : '';
  return axios.delete(`/boards/${seq}`, { headers: { Authorization } });
}

function* removeBoard(action: any) {
  try {
    const result: AxiosResponse<any> = yield call(removeBoardAPI, action.seq);
    yield put({
      // put은 dispatch 동일
      type: REMOVE_BOARD_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: REMOVE_BOARD_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadBoards() {
  yield takeLatest(LOAD_BOARDS_REQUEST, loadBoards);
}

function* watchLoadBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, loadBoard);
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD_REQUEST, updateBoard);
}

function* watchRemoveBoard() {
  yield takeLatest(REMOVE_BOARD_REQUEST, removeBoard);
}

export default function* boardSaga() {
  yield all([
    fork(watchLoadBoards),
    fork(watchLoadBoard),
    fork(watchAddBoard),
    fork(watchUpdateBoard),
    fork(watchRemoveBoard),
  ]);
}
