import produce from 'immer';
import {
  SearchTagActionType,
  ONCHANGE_ADD_SEARCH_TAG,
  UPDATE_SEARCH_TAG_REQUEST,
  UPDATE_SEARCH_TAG_FAILURE,
  UPDATE_SEARCH_TAG_SUCCESS,
  REMOVE_SEARCH_TAG_REQUEST,
  REMOVE_SEARCH_TAG_SUCCESS,
  REMOVE_SEARCH_TAG_FAILURE,
  ADD_SEARCH_TAG_REQUEST,
  ADD_SEARCH_TAG_SUCCESS,
  ADD_SEARCH_TAG_FAILURE,
  LOAD_SEARCH_TAGS_SUCCESS,
  LOAD_SEARCH_TAGS_FAILURE,
  LOAD_SEARCH_TAGS_REQUEST,
} from '../actions/searchTag/type';
import { BasicResponse } from '../type/basicResponse';
import { searchTag } from '../type/server';

export const initialState = {
  searchTags: [] as Array<searchTag>,
  searchTagsLoading: false,
  searchTagsDone: false,
  searchTagsError: null as any,
  addSearchTag: null,
  addSearchTagLoading: false,
  addSearchTagDone: false,
  addSearchTagError: null as any,
  updateSearchTag: null as null | BasicResponse<searchTag>,
  updateSearchTagLoading: false,
  updateSearchTagDone: false,
  updateSearchTagError: null as any,
  removeSearchTag: null as null | BasicResponse<searchTag>,
  removeSearchTagLoading: false,
  removeSearchTagDone: false,
  removeSearchTagMessage: '',
  removeSearchTagError: null as any,
};

const reducer = (state = initialState, action: SearchTagActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ONCHANGE_ADD_SEARCH_TAG: {
        const targetIndex = draft.searchTags.findIndex(
          (item: searchTag) => action.seq === item.seq
        );
        draft.searchTags[targetIndex] = {
          ...draft.searchTags[targetIndex],
          [action.e.target.name]: action.e.target.value,
        };
        break;
      }
      case UPDATE_SEARCH_TAG_REQUEST: {
        draft.updateSearchTag = null;
        draft.updateSearchTagLoading = true;
        draft.updateSearchTagDone = false;
        draft.updateSearchTagError = null;
        break;
      }
      case UPDATE_SEARCH_TAG_SUCCESS: {
        const updateIndex = draft.searchTags.findIndex(
          (item: searchTag) => action.data.data.seq === item.seq
        );

        draft.searchTags[updateIndex] = { ...action.data.data };
        draft.updateSearchTag = action.data;
        draft.updateSearchTagLoading = false;
        draft.updateSearchTagDone = true;
        draft.updateSearchTagError = null;
        break;
      }
      case UPDATE_SEARCH_TAG_FAILURE: {
        draft.updateSearchTag = null;
        draft.updateSearchTagLoading = true;
        draft.updateSearchTagDone = false;
        draft.updateSearchTagError = action.error;
        break;
      }
      case REMOVE_SEARCH_TAG_REQUEST: {
        draft.removeSearchTag = null;
        draft.removeSearchTagLoading = true;
        draft.removeSearchTagDone = false;
        draft.removeSearchTagError = null;
        break;
      }
      case REMOVE_SEARCH_TAG_SUCCESS: {
        draft.searchTags = state.searchTags.filter(
          (searchTag: searchTag) => searchTag.seq !== action.data.data.seq
        );
        draft.removeSearchTag = action.data;
        draft.removeSearchTagLoading = false;
        draft.removeSearchTagDone = true;
        draft.removeSearchTagError = null;
        break;
      }
      case REMOVE_SEARCH_TAG_FAILURE: {
        draft.removeSearchTag = null;
        draft.removeSearchTagLoading = true;
        draft.removeSearchTagDone = false;
        draft.removeSearchTagError = action.error;
        break;
      }
      case ADD_SEARCH_TAG_REQUEST: {
        draft.addSearchTag = null;
        draft.addSearchTagLoading = true;
        draft.addSearchTagDone = false;
        draft.addSearchTagError = null;
        break;
      }
      case ADD_SEARCH_TAG_SUCCESS: {
        draft.searchTags.push(action.data);
        draft.addSearchTagLoading = false;
        draft.addSearchTagDone = true;
        draft.addSearchTagError = null;
        break;
      }
      case ADD_SEARCH_TAG_FAILURE: {
        draft.addSearchTag = null;
        draft.addSearchTagLoading = true;
        draft.addSearchTagDone = false;
        draft.addSearchTagError = action.error;
        break;
      }
      case LOAD_SEARCH_TAGS_REQUEST: {
        draft.searchTags = [];
        draft.searchTagsLoading = true;
        draft.searchTagsDone = false;
        draft.searchTagsError = null;
        break;
      }
      case LOAD_SEARCH_TAGS_SUCCESS: {
        draft.searchTags = action.data;
        draft.searchTagsLoading = false;
        draft.searchTagsDone = true;
        break;
      }
      case LOAD_SEARCH_TAGS_FAILURE: {
        draft.searchTagsLoading = false;
        draft.searchTagsError = action.error;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
