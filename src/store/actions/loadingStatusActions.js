import {LOAD_DATA, SET_LOADING_STATUS} from "../constants/actionTypes";

export function setLoadingStatus(loadingStatus) {
    return{
        type: SET_LOADING_STATUS,
        payload: loadingStatus
    }
}

export function loadData() {
    return{
        type: LOAD_DATA
    }
}
