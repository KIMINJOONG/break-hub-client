import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOARDS_FAILURE,
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
} from '../actions/board/type';

const dummyBoards = [
  {
    seq: 1,
    title: '디시즈 탑셋',
    content: '내용입니다.',
    youtubeLink: '유튜브 링크',
    category: 1,
    search: ['프리즈를 잘하는', '리듬을 잘타는', '미국'],
  },
  {
    seq: 2,
    title: '이세이 탑셋',
    content: '내용입니다.2',
    youtubeLink: '유튜브 링크2',
    category: 1,
    search: [
      '프리즈를 잘하는',
      '리듬을 잘타는',
      '비트킬러',
      '파워무브를 잘하는',
      '일본',
    ],
  },
  {
    seq: 3,
    title: '홍텐 탑셋',
    content: '내용입니다.3',
    youtubeLink: '유튜브 링크3',
    category: 1,
    search: ['프리즈를 잘하는', '레전드', '한국'],
  },
];
function loadBoardsAPI(seq: number) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* loadBoards(action: any) {
  try {
    //   const result = yield call(loadBoardsAPI, action.seq);
    const result = {
      data: dummyBoards,
    };
    // yield delay(3000);
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

function* watchLoadBoards() {
  yield takeLatest(LOAD_BOARDS_REQUEST, loadBoards);
}

export default function* searchRequirementSaga() {
  yield all([fork(watchLoadBoards)]);
}
