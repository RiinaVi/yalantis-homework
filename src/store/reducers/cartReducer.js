import {
    CHANGE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_PRODUCT, INCREASE_QUANTITY,
    LIST_ADD_TO_CART,
    PAGE_ADD_TO_CART
} from "../constants/actionTypes";

import {load} from 'redux-localstorage-simple';

let initialProducts = load({namespace: 'products-app'});

export default function cartReducer(state = initialProducts.cart || {}, {type, id, name, price, quantity}) {
    switch (type) {
        case LIST_ADD_TO_CART:
            return {
                ...state,
                [id]: {
                    id, name, price
                },
            };
        case PAGE_ADD_TO_CART:
            return {
                ...state,
                [id]: {
                    id, name, price
                }
            };
        case DELETE_PRODUCT:
            delete state[id];
            return {
                ...state,
            };
        case CHANGE_QUANTITY:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    quantity: quantity
                }
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    quantity: state[id].quantity > 1 ? --state[id].quantity : 1
                }
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                [id]: {
                    ...state[id],
                    quantity: ++state[id].quantity || 2
                }
            };
        default:
            return state;
    }
}
