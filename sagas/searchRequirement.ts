import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_SEARCH_REQUIREMENT_FAILURE,
  ADD_SEARCH_REQUIREMENT_REQUEST,
  ADD_SEARCH_REQUIREMENT_SUCCESS,
  LOAD_SEARCH_REQUIREMENTS_FAILURE,
  LOAD_SEARCH_REQUIREMENTS_REQUEST,
  LOAD_SEARCH_REQUIREMENTS_SUCCESS,
  REMOVE_SEARCH_REQUIREMENT_FAILURE,
  REMOVE_SEARCH_REQUIREMENT_REQUEST,
  REMOVE_SEARCH_REQUIREMENT_SUCCESS,
  UPDATE_SEARCH_REQUIREMENT_FAILURE,
  UPDATE_SEARCH_REQUIREMENT_REQUEST,
  UPDATE_SEARCH_REQUIREMENT_SUCCESS,
} from '../actions/searchRequirement/type';

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

function loadSearchRequirementAPI() {
  return;
}

function* loadSearchRequirement(action: any) {
  try {
    //   const result = yield call(loadSearchRequirementAPI);
    const result = {
      data: dummyData,
    };
    yield delay(1000);
    yield put({
      // put은 dispatch 동일
      type: LOAD_SEARCH_REQUIREMENTS_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: LOAD_SEARCH_REQUIREMENTS_FAILURE,
      error: e.response.data,
    });
  }
}

function addSearchRequirementAPI(data: any) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* addSearchRequirement(action: any) {
  try {
    //   const result = yield call(addSearchRequirementAPI, action.data);
    const result = {
      data: action.data,
    };
    // yield delay(3000);
    yield put({
      // put은 dispatch 동일
      type: ADD_SEARCH_REQUIREMENT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: ADD_SEARCH_REQUIREMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function updateSearchRequirementAPI(seq: number, data: any) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* updateSearchRequirement(action: any) {
  try {
    //   const result = yield call(updateSearchRequirementAPI, action.seq, action.data);
    const result = {
      data: action.data,
    };
    // yield delay(3000);
    yield put({
      // put은 dispatch 동일
      type: UPDATE_SEARCH_REQUIREMENT_SUCCESS,
      data: result.data,
    });
  } catch (e: any) {
    // loginAPI 실패
    yield put({
      type: UPDATE_SEARCH_REQUIREMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function removeSearchRequirementAPI(seq: number) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* removeSearchRequirement(action: any) {
  try {
    //   const result = yield call(removeSearchRequirement, action.seq);
    const result = {
      data: {
        seq: action.seq,
      },
    };
    // yield delay(3000);
    yield put({
      // put은 dispatch 동일
      type: REMOVE_SEARCH_REQUIREMENT_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.log(e);
    // loginAPI 실패
    yield put({
      type: REMOVE_SEARCH_REQUIREMENT_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchLoadSearchRequirement() {
  yield takeLatest(LOAD_SEARCH_REQUIREMENTS_REQUEST, loadSearchRequirement);
}

function* watchAddSearchRequirement() {
  yield takeLatest(ADD_SEARCH_REQUIREMENT_REQUEST, addSearchRequirement);
}

function* watchRemoveSearchRequirement() {
  yield takeLatest(REMOVE_SEARCH_REQUIREMENT_REQUEST, removeSearchRequirement);
}

function* watchUpdateSearchRequirement() {
  yield takeLatest(UPDATE_SEARCH_REQUIREMENT_REQUEST, updateSearchRequirement);
}

export default function* searchRequirementSaga() {
  yield all([
    fork(watchLoadSearchRequirement),
    fork(watchAddSearchRequirement),
    fork(watchRemoveSearchRequirement),
    fork(watchUpdateSearchRequirement),
  ]);
}
