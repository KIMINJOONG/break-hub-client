export const LOAD_BOARDS_REQUEST = 'LOAD_BOARDS_REQUEST';
export const LOAD_BOARDS_SUCCESS = 'LOAD_BOARDS_SUCCESS';
export const LOAD_BOARDS_FAILURE = 'LOAD_BOARDS_FAILURE';

export const LOAD_BOARD_REQUEST = 'LOAD_BOARD_REQUEST';
export const LOAD_BOARD_SUCCESS = 'LOAD_BOARD_SUCCESS';
export const LOAD_BOARD_FAILURE = 'LOAD_BOARD_FAILURE';

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

export type boardActionType =
  | ILOAD_BOARDS_REQUEST
  | ILOAD_BOARDS_SUCCESS
  | ILOAD_BOARDS_FAILURE
  | ILOAD_BOARD_REQUEST
  | ILOAD_BOARD_SUCCESS
  | ILOAD_BOARD_FAILURE;
