import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_BOARDS_FAILURE,
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARD_FAILURE,
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
} from '../actions/board/type';
import { Board } from '../type/server';

const dummyBoards = [
  {
    seq: 1,
    title: '디시즈 탑셋',
    content: '내용입니다.',
    videoLink: '65cQw-NG5gk',
    category: 1,
    search: ['프리즈를 잘하는', '리듬을 잘타는', '미국'],
  },
  {
    seq: 2,
    title: '이세이 탑셋',
    content: '내용입니다.2',
    videoLink: 'LJGLn-IwpN4',
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
    videoLink: 'sNaXIbcbYdQ',
    category: 1,
    search: ['프리즈를 잘하는', '레전드', '한국'],
  },
  {
    seq: 4,
    title: '알코릴 탑셋',
    content: '내용입니다.4',
    videoLink: 'Otf37Rq_KHA',
    category: 1,
    search: ['프리즈를 잘하는', '파워무브를 잘하는', '러시아'],
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

function loadBoardAPI(categorySeq: number, boardSeq: number) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* loadBoard(action: any) {
  try {
    //   const result = yield call(loadBoardAPI, action.categorySeq, action.boardSeq);
    const result = {
      data: dummyBoards.find((board: Board) => board.seq === action.boardSeq),
    };
    // yield delay(3000);
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

function* watchLoadBoards() {
  yield takeLatest(LOAD_BOARDS_REQUEST, loadBoards);
}

function* watchLoadBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, loadBoard);
}

export default function* searchRequirementSaga() {
  yield all([fork(watchLoadBoards), fork(watchLoadBoard)]);
}
