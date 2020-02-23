import {SET_LOADING_STATUS} from "../constants/actionTypes";

const initialState = false;

export default function loadingStatusReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_LOADING_STATUS:
            return {
                ...state,
                state: payload
            };
        default:
            return state
    }
}
