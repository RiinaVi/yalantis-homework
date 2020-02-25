import {LOAD_ORIGINS} from "../constants/actionTypes/origins";

export function loadOrigins(origins) {
    return {
        type: LOAD_ORIGINS,
        payload: origins
    }
}
