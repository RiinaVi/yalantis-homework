import {
    CHANGE_QUANTITY, DECREASE_QUANTITY,
    DELETE_PRODUCT,
    INCREASE_QUANTITY, ADD_TO_CART
} from "../constants/actionTypes";

export function addToCart({id, name, price, quantity}) {
    return {
        type: ADD_TO_CART,
        payload: {
            id, name, price, quantity
        }
    }
}


export function deleteProduct(id) {
    return {
        type: DELETE_PRODUCT,
        payload:{
            id
        }
    }
}

export function changeQuantity(id, quantity) {
    return {
        type: CHANGE_QUANTITY,
        payload: {
            id, quantity
        }
    }
}

export function increaseQuantity(id) {
    return {
        type: INCREASE_QUANTITY,
        payload: {
            id
        }
    }
}

export function decreaseQuantity(id) {
    return {
        type: DECREASE_QUANTITY,
        payload: {
            id
        }
    }
}
