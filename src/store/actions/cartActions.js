import {
    CHANGE_QUANTITY, DECREASE_QUANTITY,
    DELETE_PRODUCT,
    INCREASE_QUANTITY,
    LIST_ADD_TO_CART,
    PAGE_ADD_TO_CART
} from "../constants/actionTypes";

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

export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT, id
    }
}

export function changeQuantity(id, quantity) {
    return {
        type: CHANGE_QUANTITY, id, quantity
    }
}

export function increaseQuantity(id) {
    return {
        type: INCREASE_QUANTITY, id
    }
}

export function decreaseQuantity(id) {
    return {
        type: DECREASE_QUANTITY, id
    }
}
