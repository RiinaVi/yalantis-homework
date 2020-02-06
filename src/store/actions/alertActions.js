import {HIDE_ALERT, SHOW_ALERT, SHOW_DELETE_ALERT} from "../constants/actionTypes";

export function showAlert() {
    return {
        type: SHOW_ALERT
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function showDeleteAlert() {
    return {
        type: SHOW_DELETE_ALERT
    }
}
