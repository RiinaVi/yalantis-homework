import {HIDE_ALERT, SHOW_ALERT, SHOW_DELETE_ALERT} from "../constants/actionTypes";

const initialState = {
    visible: false,
    variant: '',
    text: ''
};

export default function alertReducer(state=initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state,
                visible: true,
                text: 'Product was added to the cart!',
                variant: 'success'
            };
        case HIDE_ALERT:
            return {
                ...state,
                visible: false
            };
        case SHOW_DELETE_ALERT:
            return {
                ...state,
                visible: true,
                text: 'Product was deleted from the cart!',
                variant: 'danger'
            };
        default:return state;
    }
}
