import {LOAD_PRODUCTS, UPDATE_FILTERS} from "../constants/actionTypes";

export function loadProducts(products) {
    return {
        type: LOAD_PRODUCTS, products
    }
}

export function setFilteredProducts(products) {
    return {
        type: UPDATE_FILTERS,
        products
    }
}

const initialState = {
    allProducts: [],
};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                allProducts: [...action.products]
            };
        case UPDATE_FILTERS:
            return {
                ...state,
                queryFilters: [...action.products]
            };
        default:
            return state;
    }
}
