import produce from 'immer';
import { SearchRequirementActionType, LOAD_SEARCH_REQUIREMENT_FAILURE, LOAD_SEARCH_REQUIREMENT_REQUEST, LOAD_SEARCH_REQUIREMENT_SUCCESS } from '../actions/searchRequirement/type';

export const initialState = {
    searchRequirements: null,
    searchRequirementsLoading: false,
    searchRequirementsDone: false,
    searchRequirementsError: null,
};

const reducer = (state = initialState, action: SearchRequirementActionType) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_SEARCH_REQUIREMENT_REQUEST: {
                console.log('request')
                draft.searchRequirements = null;
                draft.searchRequirementsLoading = true;
                draft.searchRequirementsDone = false;
                draft.searchRequirementsError = null;
                break;
            }
            case LOAD_SEARCH_REQUIREMENT_SUCCESS: {
                console.log("SUCCESS");
                draft.searchRequirements = action.data;
                draft.searchRequirementsLoading = false;
                draft.searchRequirementsDone = true;
                break;
            }
            case LOAD_SEARCH_REQUIREMENT_FAILURE: {
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
