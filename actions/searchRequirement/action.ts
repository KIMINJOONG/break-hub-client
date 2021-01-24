import { searchRequirement } from '../../type/server';
import {
  LOAD_SEARCH_REQUIREMENTS_REQUEST,
  ADD_SEARCH_REQUIREMENT_REQUEST,
  REMOVE_SEARCH_REQUIREMENT_REQUEST,
  UPDATE_SEARCH_REQUIREMENT_REQUEST,
  ONCHANGE_ADD_SEARCH_REQUIREMENT,
} from './type';

export const loadSearchRequirementsAction = () => ({
  type: LOAD_SEARCH_REQUIREMENTS_REQUEST,
});

export const addSearchRequirementAction = (data: searchRequirement) => ({
  type: ADD_SEARCH_REQUIREMENT_REQUEST,
  data,
});

export const updateSearchRequirementAction = (
  seq: number,
  data: searchRequirement
) => ({
  type: UPDATE_SEARCH_REQUIREMENT_REQUEST,
  seq,
  data,
});

export const removeSearchRequirementAction = (seq: number) => ({
  type: REMOVE_SEARCH_REQUIREMENT_REQUEST,
  seq,
});

export const onChangeAddSearchAction = (
  index: number,
  e: React.ChangeEvent
) => ({
  type: ONCHANGE_ADD_SEARCH_REQUIREMENT,
  index,
  e,
});
