import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
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

const dummyData = [
  {
    seq: 1,
    name: '에너지있는',
    code: '001',
    createdAt: '2020-01-27',
  },
  {
    seq: 2,
    name: '유연한',
    code: '002',
    createdAt: '2020-01-27',
  },
  {
    seq: 3,
    name: '파워무브',
    code: '003',
    createdAt: '2020-01-27',
  },
];

function loadSearchTagAPI() {
  return;
}

function* loadSearchTag(action: any) {
  try {
    //   const result = yield call(loadSearchTagAPI);
    const result = {
      data: dummyData,
    };
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
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* addSearchTag(action: any) {
  try {
    //   const result = yield call(addSearchTagAPI, action.data);
    const result = {
      data: action.data,
    };
    // yield delay(3000);
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
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* updateSearchTag(action: any) {
  try {
    //   const result = yield call(updateSearchTagAPI, action.seq, action.data);
    const result = {
      data: action.data,
    };
    // yield delay(3000);
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
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* removeSearchTag(action: any) {
  try {
    //   const result = yield call(removeSearchTag, action.seq);
    const result = {
      data: {
        seq: action.seq,
      },
    };
    // yield delay(3000);
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
