import {HIDE_ALERT, SHOW_ALERT} from "../constants/actionTypes/alert";

export function showAlert(text, variant) {
    return {
        type: SHOW_ALERT,
        payload: {
            text, variant
        }
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}
