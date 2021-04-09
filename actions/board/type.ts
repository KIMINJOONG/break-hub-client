export const LOAD_BOARDS_REQUEST = 'LOAD_BOARDS_REQUEST';
export const LOAD_BOARDS_SUCCESS = 'LOAD_BOARDS_SUCCESS';
export const LOAD_BOARDS_FAILURE = 'LOAD_BOARDS_FAILURE';

export const LOAD_BOARD_REQUEST = 'LOAD_BOARD_REQUEST';
export const LOAD_BOARD_SUCCESS = 'LOAD_BOARD_SUCCESS';
export const LOAD_BOARD_FAILURE = 'LOAD_BOARD_FAILURE';

export const ADD_BOARD_REQUEST = 'ADD_BOARD_REQUEST';
export const ADD_BOARD_SUCCESS = 'ADD_BOARD_SUCCESS';
export const ADD_BOARD_FAILURE = 'ADD_BOARD_FAILURE';

export const UPDATE_BOARD_REQUEST = 'UPDATE_BOARD_REQUEST';
export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS';
export const UPDATE_BOARD_FAILURE = 'UPDATE_BOARD_FAILURE';

interface ILOAD_BOARDS_REQUEST {
  type: typeof LOAD_BOARDS_REQUEST;
}
interface ILOAD_BOARDS_SUCCESS {
  type: typeof LOAD_BOARDS_SUCCESS;
  data: any;
}
interface ILOAD_BOARDS_FAILURE {
  type: typeof LOAD_BOARDS_FAILURE;
  error: Error;
}

interface ILOAD_BOARD_REQUEST {
  type: typeof LOAD_BOARD_REQUEST;
  categorySeq: number;
  boardSeq: number;
}
interface ILOAD_BOARD_SUCCESS {
  type: typeof LOAD_BOARD_SUCCESS;
  data: any;
}
interface ILOAD_BOARD_FAILURE {
  type: typeof LOAD_BOARD_FAILURE;
  error: Error;
}

interface IADD_BOARD_REQUEST {
  type: typeof ADD_BOARD_REQUEST;
  data: any;
}
interface IADD_BOARD_SUCCESS {
  type: typeof ADD_BOARD_SUCCESS;
  data: any;
}
interface IADD_BOARD_FAILURE {
  type: typeof ADD_BOARD_FAILURE;
  error: Error;
}

interface IUPDATE_BOARD_REQUEST {
  type: typeof UPDATE_BOARD_REQUEST;
  data: any;
}
interface IUPDATE_BOARD_SUCCESS {
  type: typeof UPDATE_BOARD_SUCCESS;
  seq: number;
  data: any;
}
interface IUPDATE_BOARD_FAILURE {
  type: typeof UPDATE_BOARD_FAILURE;
  error: Error;
}

export type boardActionType =
  | ILOAD_BOARDS_REQUEST
  | ILOAD_BOARDS_SUCCESS
  | ILOAD_BOARDS_FAILURE
  | ILOAD_BOARD_REQUEST
  | ILOAD_BOARD_SUCCESS
  | ILOAD_BOARD_FAILURE
  | IADD_BOARD_REQUEST
  | IADD_BOARD_SUCCESS
  | IADD_BOARD_FAILURE
  | IUPDATE_BOARD_REQUEST
  | IUPDATE_BOARD_SUCCESS
  | IUPDATE_BOARD_FAILURE;
