import {SET_PRICE_RANGE, SET_PRODUCTS_PER_PAGE, SET_ORIGINS} from "../constants/actionTypes";

export function setPriceRange([minPrice, maxPrice]) {
    return {
        type: SET_PRICE_RANGE,
        minPrice, maxPrice,
    }
}

export function setOrigins(origins) {
    return {
        type: SET_ORIGINS,
        origins
    }
}

export function setProductsPerPage(perPage) {
    return {
        type: SET_PRODUCTS_PER_PAGE,
        perPage
    }
}
