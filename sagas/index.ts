import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import searchTag from './searchTag';
import board from './board';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'http://3.112.197.185:4000/'
    : 'http://localhost:4000';

axios.defaults.withCredentials = true;
export default function* rootSaga() {
  yield all([call(searchTag), call(board)]);
}
