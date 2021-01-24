import {
  LOAD_SEARCH_REQUIREMENT_REQUEST,
  ADD_SEARCH_REQUIREMENT_REQUEST,
} from './type';

export const loadSearchRequirementsAction = () => ({
  type: LOAD_SEARCH_REQUIREMENT_REQUEST,
});

export const addSearchRequirementAction = () => ({
  type: ADD_SEARCH_REQUIREMENT_REQUEST,
});
