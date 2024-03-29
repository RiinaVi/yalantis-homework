import {
    SET_PRICE_RANGE,
    SET_PRODUCTS_PER_PAGE,
    SET_ORIGINS,
    SET_PAGE_NUMBER,
} from "../constants/actionTypes/query";

export function setPriceRange([minPrice, maxPrice]) {
    return {
        type: SET_PRICE_RANGE,
        payload: {
            minPrice, maxPrice
        }
    }
}

export function setOrigins(origins) {
    return {
        type: SET_ORIGINS,
        payload: {origins}
    }
}

export function setProductsPerPage(perPage) {
    return {
        type: SET_PRODUCTS_PER_PAGE,
        payload: perPage
    }
}

export function setPageNumber(page) {
    return{
        type: SET_PAGE_NUMBER,
        payload: page
    }
}

