import { searchTag } from '../../type/server';
import {
  ADD_SEARCH_TAG_REQUEST,
  LOAD_SEARCH_TAGS_REQUEST,
  ONCHANGE_ADD_SEARCH_TAG,
  REMOVE_SEARCH_TAG_REQUEST,
  UPDATE_SEARCH_TAG_REQUEST,
} from './type';

export const loadSearchTagsAction = () => ({
  type: LOAD_SEARCH_TAGS_REQUEST,
});

export const addSearchTagAction = (data: searchTag) => ({
  type: ADD_SEARCH_TAG_REQUEST,
  data,
});

export const updateSearchTagAction = (seq: number, data: searchTag) => ({
  type: UPDATE_SEARCH_TAG_REQUEST,
  seq,
  data,
});

export const removeSearchTagAction = (seq: number) => ({
  type: REMOVE_SEARCH_TAG_REQUEST,
  seq,
});

export const onChangeAddSearchAction = (e: React.ChangeEvent, seq: number) => ({
  type: ONCHANGE_ADD_SEARCH_TAG,
  seq,
  e,
});
