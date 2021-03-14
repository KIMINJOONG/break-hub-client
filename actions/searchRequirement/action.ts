import { searchTag } from '../../type/server';
import {
  LOAD_SEARCH_REQUIREMENTS_REQUEST,
  ADD_SEARCH_REQUIREMENT_REQUEST,
  REMOVE_SEARCH_REQUIREMENT_REQUEST,
  UPDATE_SEARCH_REQUIREMENT_REQUEST,
  ONCHANGE_ADD_SEARCH_REQUIREMENT,
} from './type';

export const loadSearchTagsAction = () => ({
  type: LOAD_SEARCH_REQUIREMENTS_REQUEST,
});

export const addSearchTagAction = (data: searchTag) => ({
  type: ADD_SEARCH_REQUIREMENT_REQUEST,
  data,
});

export const updateSearchTagAction = (seq: number, data: searchTag) => ({
  type: UPDATE_SEARCH_REQUIREMENT_REQUEST,
  seq,
  data,
});

export const removeSearchTagAction = (seq: number) => ({
  type: REMOVE_SEARCH_REQUIREMENT_REQUEST,
  seq,
});

export const onChangeAddSearchAction = (e: React.ChangeEvent, seq: number) => ({
  type: ONCHANGE_ADD_SEARCH_REQUIREMENT,
  seq,
  e,
});
