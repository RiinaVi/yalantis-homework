import {HIDE_ALERT, SHOW_ALERT} from "../constants/actionTypes/alert";

const initialState = {
    visible: false,
    variant: '',
    text: ''
};

export default function alertReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SHOW_ALERT:
            return {
                ...state,
                variant: payload.variant,
                text: payload.text,
                visible: true
            };
        case HIDE_ALERT:
            return {
                ...state,
                visible: false
            };
        default:
            return state;
    }
}
