import {DELETE_PRODUCT, CHANGE_QUANTITY} from '../constants/actionTypes';

const initialState = {};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_PRODUCT:
            return state;
        case CHANGE_QUANTITY:
            return state;
        default:
            return state;
    }
}
