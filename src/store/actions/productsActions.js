import {LIST_ADD_TO_CART, PAGE_ADD_TO_CART} from "../constants/actionTypes";

export function listAddToCart({id, name, price, quantity}) {
    return {
        type: LIST_ADD_TO_CART,
        id,
        name,
        price,
        quantity
    }
}

export function pageAddToCart({id, name, price, quantity}) {
    return {
        type: PAGE_ADD_TO_CART,
        id,
        name,
        price,
        quantity
    }
}
