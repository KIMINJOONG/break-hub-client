import { all, fork, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
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
} from '../actions/board/type';
import { Board } from '../type/server';

const dummyBoards: Board[] = [
  {
    seq: 1,
    title: '디시즈 탑셋',
    content: '내용입니다.',
    videoUrl: '65cQw-NG5gk',
    category: {
      seq: 1,
      name: '동영상 게시판',
      createdAt: '2021-03-15',
      updatedAt: '2021-03-15',
    },
    searchTags: [
      {
        seq: 1,
        name: '프리즈를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 2,
        name: '리듬을 잘타는',
        createdAt: '2021-03-15',
      },
      {
        seq: 6,
        name: '미국',
        createdAt: '2021-03-15',
      },
    ],
  },
  {
    seq: 2,
    title: '이세이 탑셋',
    content: '내용입니다.2',
    videoUrl: 'LJGLn-IwpN4',
    category: {
      seq: 1,
      name: '동영상 게시판',
      createdAt: '2021-03-15',
      updatedAt: '2021-03-15',
    },
    searchTags: [
      {
        seq: 1,
        name: '프리즈를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 2,
        name: '리듬을 잘타는',
        createdAt: '2021-03-15',
      },
      {
        seq: 3,
        name: '비트킬러',
        createdAt: '2021-03-15',
      },
      {
        seq: 4,
        name: '파워무브를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 5,
        name: '일본',
        createdAt: '2021-03-15',
      },
    ],
  },
  {
    seq: 3,
    title: '홍텐 탑셋',
    content: '내용입니다.3',
    videoUrl: 'sNaXIbcbYdQ',
    category: {
      seq: 1,
      name: '동영상 게시판',
      createdAt: '2021-03-15',
      updatedAt: '2021-03-15',
    },
    searchTags: [
      {
        seq: 1,
        name: '프리즈를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 7,
        name: '레전드',
        createdAt: '2021-03-15',
      },
      {
        seq: 8,
        name: '한국',
        createdAt: '2021-03-15',
      },
    ],
  },
  {
    seq: 4,
    title: '알코릴 탑셋',
    content: '내용입니다.4',
    videoUrl: 'Otf37Rq_KHA',
    category: {
      seq: 1,
      name: '동영상 게시판',
      createdAt: '2021-03-15',
      updatedAt: '2021-03-15',
    },
    searchTags: [
      {
        seq: 1,
        name: '프리즈를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 4,
        name: '파워무브를 잘하는',
        createdAt: '2021-03-15',
      },
      {
        seq: 9,
        name: '러시아',
        createdAt: '2021-03-15',
      },
    ],
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

function addBoardAPI(data: any) {
  //     const token = jsCookie.get("token");
  //   const Authorization = token ? `token=${token}` : "";
  //   return axios.post("/addSearch", data, { headers: { Authorization } });
}

function* addBoard(action: any) {
  try {
    //   const result = yield call(addBoardAPI, action.data);
    const result = {
      data: action.data,
    };
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

function* watchLoadBoards() {
  yield takeLatest(LOAD_BOARDS_REQUEST, loadBoards);
}

function* watchLoadBoard() {
  yield takeLatest(LOAD_BOARD_REQUEST, loadBoard);
}

function* watchAddBoard() {
  yield takeLatest(ADD_BOARD_REQUEST, addBoard);
}

export default function* boardSaga() {
  yield all([fork(watchLoadBoards), fork(watchLoadBoard), fork(watchAddBoard)]);
}
