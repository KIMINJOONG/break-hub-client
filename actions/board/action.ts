import { LOAD_BOARDS_REQUEST, LOAD_BOARD_REQUEST } from './type';

export const loadBoardsAction = () => ({
  type: LOAD_BOARDS_REQUEST,
});

export const loadBoardAction = (categorySeq: number, boardSeq: number) => ({
  type: LOAD_BOARD_REQUEST,
  categorySeq,
  boardSeq,
});
