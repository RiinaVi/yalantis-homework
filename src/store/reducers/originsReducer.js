import {LOAD_ORIGINS} from "../constants/actionTypes";

const initialState = {
    origins: []
};


export default function originsReducer(state=initialState, {type, payload}) {
    switch (type) {
        case  LOAD_ORIGINS:
            return {
                ...state,
                origins: payload
            };
        default: return state
    }
}
