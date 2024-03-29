import {
    DELETE_PRODUCT,
    LOAD_CURRENT_PRODUCT,
    LOAD_PRODUCTS,
    SUBMIT_PRODUCT
} from "../constants/actionTypes/products";

import {EDIT_MY_PRODUCT,DELETE_MY_PRODUCT} from '../constants/actionTypes/form'

const initialState = {

};

export default function productsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOAD_PRODUCTS:
            let products = {};
            payload.products.forEach(item => {
                products[item.id] = item;
            });
            return {
                ...products
            };
        case LOAD_CURRENT_PRODUCT:
            return {
                ...state,
                product: payload
            };
        case SUBMIT_PRODUCT:
            return {
                ...state,
                [payload.id]: payload,
            };
        case EDIT_MY_PRODUCT:
            return {
                ...state,
                [payload.id]: payload
            };
        case DELETE_PRODUCT:
        case DELETE_MY_PRODUCT:
            const newState = Object.assign({}, state);
            delete newState[payload];
            return newState;
        default:
            return state;
    }
}
