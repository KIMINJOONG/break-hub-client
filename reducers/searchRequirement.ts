import produce from 'immer';
import {
  SearchRequirementActionType,
  LOAD_SEARCH_REQUIREMENTS_FAILURE,
  LOAD_SEARCH_REQUIREMENTS_REQUEST,
  LOAD_SEARCH_REQUIREMENTS_SUCCESS,
  ADD_SEARCH_REQUIREMENT_REQUEST,
  ADD_SEARCH_REQUIREMENT_FAILURE,
  ADD_SEARCH_REQUIREMENT_SUCCESS,
  UPDATE_SEARCH_REQUIREMENT_REQUEST,
  UPDATE_SEARCH_REQUIREMENT_SUCCESS,
  UPDATE_SEARCH_REQUIREMENT_FAILURE,
  REMOVE_SEARCH_REQUIREMENT_REQUEST,
  REMOVE_SEARCH_REQUIREMENT_SUCCESS,
  REMOVE_SEARCH_REQUIREMENT_FAILURE,
  ONCHANGE_ADD_SEARCH_REQUIREMENT,
} from '../actions/searchRequirement/type';
import { searchRequirement } from '../type/server';

export const initialState = {
  searchRequirements: [] as any,
  searchRequirementsLoading: false,
  searchRequirementsDone: false,
  searchRequirementsError: null,
  addSearchRequirement: null,
  addSearchRequirementLoading: false,
  addSearchRequirementDone: false,
  addSearchRequirementError: null,
  updateSearchRequirement: null,
  updateSearchRequirementLoading: false,
  updateSearchRequirementDone: false,
  updateSearchRequirementError: null,
  removeSearchRequirement: null,
  removeSearchRequirementLoading: false,
  removeSearchRequirementDone: false,
  removeSearchRequirementError: null,
};

const reducer = (state = initialState, action: SearchRequirementActionType) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ONCHANGE_ADD_SEARCH_REQUIREMENT: {
        const targetIndex = draft.searchRequirements.findIndex(
          (item: searchRequirement) => action.seq === item.seq
        );
        draft.searchRequirements[targetIndex] = {
          ...draft.searchRequirements[targetIndex],
          [action.e.target.name]: action.e.target.value,
        };
        break;
      }
      case UPDATE_SEARCH_REQUIREMENT_REQUEST: {
        draft.updateSearchRequirement = null;
        draft.updateSearchRequirementLoading = true;
        draft.updateSearchRequirementDone = false;
        draft.updateSearchRequirementError = null;
        break;
      }
      case UPDATE_SEARCH_REQUIREMENT_SUCCESS: {
        const updateIndex = draft.searchRequirements.findIndex(
          (item: searchRequirement) => action.data.seq === item.seq
        );
        draft.searchRequirements[updateIndex] = action.data;
        draft.updateSearchRequirementLoading = false;
        draft.updateSearchRequirementDone = true;
        draft.updateSearchRequirementError = null;
        break;
      }
      case UPDATE_SEARCH_REQUIREMENT_FAILURE: {
        draft.updateSearchRequirement = null;
        draft.updateSearchRequirementLoading = true;
        draft.updateSearchRequirementDone = false;
        draft.updateSearchRequirementError = action.error;
        break;
      }
      case REMOVE_SEARCH_REQUIREMENT_REQUEST: {
        draft.removeSearchRequirement = null;
        draft.removeSearchRequirementLoading = true;
        draft.removeSearchRequirementDone = false;
        draft.removeSearchRequirementError = null;
        break;
      }
      case REMOVE_SEARCH_REQUIREMENT_SUCCESS: {
        draft.searchRequirements = draft.searchRequirements.filter(
          (item: searchRequirement) => item.seq !== action.data.seq
        );
        draft.removeSearchRequirementLoading = false;
        draft.removeSearchRequirementDone = true;
        draft.removeSearchRequirementError = null;
        break;
      }
      case REMOVE_SEARCH_REQUIREMENT_FAILURE: {
        draft.removeSearchRequirement = null;
        draft.removeSearchRequirementLoading = true;
        draft.removeSearchRequirementDone = false;
        draft.removeSearchRequirementError = action.error;
        break;
      }
      case ADD_SEARCH_REQUIREMENT_REQUEST: {
        draft.addSearchRequirement = null;
        draft.addSearchRequirementLoading = true;
        draft.addSearchRequirementDone = false;
        draft.addSearchRequirementError = null;
        break;
      }
      case ADD_SEARCH_REQUIREMENT_SUCCESS: {
        draft.searchRequirements.push(action.data);
        draft.addSearchRequirementLoading = false;
        draft.addSearchRequirementDone = true;
        draft.addSearchRequirementError = null;
        break;
      }
      case ADD_SEARCH_REQUIREMENT_FAILURE: {
        draft.addSearchRequirement = null;
        draft.addSearchRequirementLoading = true;
        draft.addSearchRequirementDone = false;
        draft.addSearchRequirementError = action.error;
        break;
      }
      case LOAD_SEARCH_REQUIREMENTS_REQUEST: {
        draft.searchRequirements = [];
        draft.searchRequirementsLoading = true;
        draft.searchRequirementsDone = false;
        draft.searchRequirementsError = null;
        break;
      }
      case LOAD_SEARCH_REQUIREMENTS_SUCCESS: {
        draft.searchRequirements = action.data;
        draft.searchRequirementsLoading = false;
        draft.searchRequirementsDone = true;
        break;
      }
      case LOAD_SEARCH_REQUIREMENTS_FAILURE: {
        draft.searchRequirementsLoading = false;
        draft.searchRequirementsError = action.error;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
