import {SET_PRICE_RANGE, SET_PRODUCTS_PER_PAGE, SET_ORIGINS} from "../constants/actionTypes";

const initialState = {
    minPrice: '',
    maxPrice: '',
    origins: '',
};

export default function (state = initialState, {type, payload}) {
    switch (type) {
        case SET_PRICE_RANGE:
            return {
                ...state,
                minPrice: payload.minPrice,
                maxPrice: payload.maxPrice,
            };
        case SET_ORIGINS:
            return {
                ...state,
                origins: payload.origins
            };
        case SET_PRODUCTS_PER_PAGE:
            return {
                ...state,
                perPage: payload.perPage
            };
        default:
            return state;
    }
}
