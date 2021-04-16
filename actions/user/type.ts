import { BasicResponse } from '../../type/basicResponse';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOAD_ME_REQUEST = 'LOAD_ME_REQUEST';
export const LOAD_ME_SUCCESS = 'LOAD_ME_SUCCESS';
export const LOAD_ME_FAILURE = 'LOAD_ME_FAILURE';

interface ILOG_IN_REQUEST {
  data: any;
  type: typeof LOG_IN_REQUEST;
}

interface ILOG_IN_SUCCESS {
  type: typeof LOG_IN_SUCCESS;
  data: BasicResponse<any>;
}

interface ILOG_IN_FAILURE {
  type: typeof LOG_IN_FAILURE;
  error: any;
}

interface ILOAD_ME_REQUEST {
  data: any;
  type: typeof LOAD_ME_REQUEST;
}

interface ILOAD_ME_SUCCESS {
  type: typeof LOAD_ME_SUCCESS;
  data: BasicResponse<any>;
}

interface ILOAD_ME_FAILURE {
  type: typeof LOAD_ME_FAILURE;
  error: any;
}

export type UserActionType =
  | ILOG_IN_REQUEST
  | ILOG_IN_SUCCESS
  | ILOG_IN_FAILURE
  | ILOAD_ME_REQUEST
  | ILOAD_ME_SUCCESS
  | ILOAD_ME_FAILURE;
