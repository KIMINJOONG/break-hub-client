import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import searchRequirement from './searchRequirement';
import board from './board';

// (이전상태, 액션) => 다음상태
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        searchRequirement,
        board,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
