import {SET_TOTAL_NUMBER_OF_PAGES} from "../constants/actionTypes";

const initialState = {
    totalNumberOfPages: 0
};

export default function pageReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_TOTAL_NUMBER_OF_PAGES:
            return {
                ...state,
                totalNumberOfPages: payload
            };
        default:
            return state
    }
}
