import {
    CHANGE_QUANTITY,
    DECREASE_QUANTITY,
    DELETE_PRODUCT, INCREASE_QUANTITY,
    ADD_TO_CART
} from "../constants/actionTypes";

import {load} from 'redux-localstorage-simple';
import {increaseQuantity} from "../actions/cartActions";

let initialProducts = load({namespace: 'products-app'});

export default function cartReducer(state = initialProducts.cart || {}, {payload, type}) {
    let newState;
    switch (type) {
        case ADD_TO_CART:
            if (state[payload.id]) {
                cartReducer(state, increaseQuantity(payload.id));
                return state;
            }
            return {
                ...state,
                [payload.id]: {
                    id: payload.id, name: payload.name, price: payload.price
                },
            };

        case DELETE_PRODUCT:
            newState = Object.assign({}, state);
            delete newState[payload.id];
            return newState;

        case CHANGE_QUANTITY:
            return {
                ...state,
                [payload.id]: {
                    ...state[payload.id],
                    quantity: payload.quantity
                }
            };
        case DECREASE_QUANTITY:
            newState = Object.assign({}, state);
            newState[payload.id].quantity =
                state[payload.id].quantity > 1 ? state[payload.id].quantity - 1 : 1;
            return newState;

        case INCREASE_QUANTITY:
            newState = Object.assign({}, state);
            newState[payload.id].quantity =
                state[payload.id].quantity ? state[payload.id].quantity + 1 : 2;
            return newState;

        default:
            return state;
    }
}
