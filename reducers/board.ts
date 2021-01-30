import produce from 'immer';
import {
  boardActionType,
  LOAD_BOARDS_FAILURE,
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
  LOAD_BOARD_FAILURE,
  LOAD_BOARD_REQUEST,
  LOAD_BOARD_SUCCESS,
} from '../actions/board/type';
import { Board } from '../type/server';

export const initialState = {
  boards: [] as Array<Board>,
  loadBoardsLoading: false,
  loadBoardsDone: false,
  loadBoardsError: null as any,
  board: null as Board | null,
  loadBoardLoading: false,
  loadBoardDone: false,
  loadBoardError: null as any,
};

const reducer = (state = initialState, action: boardActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_BOARD_REQUEST: {
        draft.board = null;
        draft.loadBoardLoading = true;
        draft.loadBoardDone = false;
        draft.loadBoardError = null;
        break;
      }
      case LOAD_BOARD_SUCCESS: {
        draft.board = action.data;
        draft.loadBoardLoading = false;
        draft.loadBoardDone = true;
        break;
      }
      case LOAD_BOARD_FAILURE: {
        draft.loadBoardLoading = false;
        draft.loadBoardError = action.error;
        break;
      }
      case LOAD_BOARDS_REQUEST: {
        draft.boards = [];
        draft.loadBoardsLoading = true;
        draft.loadBoardsDone = false;
        draft.loadBoardsError = null;
        break;
      }
      case LOAD_BOARDS_SUCCESS: {
        draft.boards = action.data;
        draft.loadBoardsLoading = false;
        draft.loadBoardsDone = true;
        break;
      }
      case LOAD_BOARDS_FAILURE: {
        draft.loadBoardsLoading = false;
        draft.loadBoardsError = action.error;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
