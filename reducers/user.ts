import produce from 'immer';
import {
  LOAD_ME_FAILURE,
  LOAD_ME_REQUEST,
  LOAD_ME_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  UserActionType,
} from '../actions/user/type';

export const initialState = {
  me: null as any | null,
  loadMeMessage: '',
  loadMeDone: false,
  loadMeLoading: false,
  loadMeError: null as any | null,
  logIn: {} as any | null,
  logInMessage: '',
  logInLoading: false,
  logInDone: false,
  logInError: null as any,
};

const reducer = (state = initialState, action: UserActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_ME_REQUEST: {
        draft.loadMeLoading = true;
        break;
      }
      case LOAD_ME_SUCCESS: {
        draft.me = action.data;
        draft.loadMeLoading = false;
        draft.loadMeDone = true;
        break;
      }
      case LOAD_ME_FAILURE: {
        draft.me = null;
        draft.loadMeLoading = false;
        draft.loadMeError = action.error;
        break;
      }
      case LOG_IN_REQUEST: {
        draft.logInLoading = true;
        break;
      }
      case LOG_IN_SUCCESS: {
        draft.me = action.data.data;
        draft.logInMessage = action.data.message;
        draft.logInDone = true;
        draft.logInLoading = false;
        break;
      }
      case LOG_IN_FAILURE: {
        draft.me = null;
        draft.logInMessage = action.error.message;
        draft.logInDone = true;
        draft.logInLoading = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
