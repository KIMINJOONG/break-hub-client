import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import searchTag from './searchTag';
import board from './board';
import user from './user';

// (이전상태, 액션) => 다음상태
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        searchTag,
        board,
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
