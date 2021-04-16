import { logInForm } from '../../type/server';
import { LOAD_ME_REQUEST, LOG_IN_REQUEST } from './type';

export const logInAction = (data: logInForm) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const loadMeAction = () => ({
  type: LOAD_ME_REQUEST,
});
