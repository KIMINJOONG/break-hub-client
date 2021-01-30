import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import searchRequirement from './searchRequirement';
import board from './board';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.kohubi.xyz'
    : 'http://localhost:4000';

export default function* rootSaga() {
  yield all([call(searchRequirement), call(board)]);
}
