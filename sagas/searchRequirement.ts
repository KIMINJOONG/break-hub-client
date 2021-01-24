import {
    all,
    fork,
    put,
    takeLatest,
    delay,
  } from "redux-saga/effects";
import axios from 'axios';
import { LOAD_SEARCH_REQUIREMENT_FAILURE, LOAD_SEARCH_REQUIREMENT_REQUEST, LOAD_SEARCH_REQUIREMENT_SUCCESS } from "../actions/searchRequirement/type";

const dummyData = [{
    name: '에너지있는',
    code: '001',
    createdAt: '2020-01-27' 
}, {
    name: '유연한',
    code: '002',
    createdAt: '2020-01-27' 
}, {
    name: '파워무브',
    code: '003',
    createdAt: '2020-01-27' 
}]
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
            type: LOAD_SEARCH_REQUIREMENT_SUCCESS,
            data: result.data,
        });
    } catch (e) {

        console.log('ㅇㅔ러');
        console.log(e);
      // loginAPI 실패
      yield put({
        type: LOAD_SEARCH_REQUIREMENT_FAILURE,
        error: e.response.data,
      });
    }
  }

function* watchLoadSearchRequirement() {
    yield takeLatest(LOAD_SEARCH_REQUIREMENT_REQUEST, loadSearchRequirement);
}

export default function* searchRequirementSaga() {
    yield all([
        fork(watchLoadSearchRequirement),
    ]);
}