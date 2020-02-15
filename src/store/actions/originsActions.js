import {LOAD_ORIGINS} from "../constants/actionTypes";

export function loadOrigins(origins) {
    return {
        type: LOAD_ORIGINS,
        payload: origins
    }
}
