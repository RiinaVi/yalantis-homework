import {
    SET_PRICE_RANGE,
    SET_PRODUCTS_PER_PAGE,
    SET_ORIGINS,
    SET_PAGE_NUMBER,
} from "../constants/actionTypes";

import {parse} from 'qs'

let search = parse(window.location.search.slice(1));

const initialState = {
    minPrice: search.minPrice || 0,
    maxPrice: search.maxPrice || 1000,
    origins: search.origins ? search.origins.split(',') : [],
    perPage: search.perPage || 50,
    page: search.page || 1
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
             return {...state,
                origins: payload.origins};
        case SET_PRODUCTS_PER_PAGE:
            return {
                ...state,
                perPage: payload
            };
        case SET_PAGE_NUMBER:
            return state;
            // return {
            //     ...state,
            //     page: payload
            // };
        default:
            return state;
    }
}
