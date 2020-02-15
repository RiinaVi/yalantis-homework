import {SET_ALL_ORDERS, SET_CURRENT_ORDER} from "../constants/actionTypes";

const initialState = {
    allOrders: [],
    currentOrder: {}
};

export default function ordersReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_ALL_ORDERS:
            return {
                ...state, allOrders: payload
            };
        case SET_CURRENT_ORDER:
            return {
                ...state, currentOrder: payload
            };
        default:
            return state;
    }
}
