import {
    DELETE_MY_PRODUCT,
    DELETE_PRODUCT, EDIT_MY_PRODUCT,
    LOAD_CURRENT_PRODUCT,
    LOAD_PRODUCTS,
    SUBMIT_PRODUCT
} from "../constants/actionTypes";

const initialState = {};

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
