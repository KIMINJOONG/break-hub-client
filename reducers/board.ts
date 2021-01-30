import produce from 'immer';
import {
  boardActionType,
  LOAD_BOARDS_FAILURE,
  LOAD_BOARDS_REQUEST,
  LOAD_BOARDS_SUCCESS,
} from '../actions/board/type';

export const initialState = {
  boards: [] as Array<any>,
  loadBoardsLoading: false,
  loadBoardsDone: false,
  loadBoardsError: null as any,
};

const reducer = (state = initialState, action: boardActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
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
