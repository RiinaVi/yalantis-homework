import {
    CHANGE_QUANTITY, DECREASE_QUANTITY,
    DELETE_FROM_CART,
    INCREASE_QUANTITY, ADD_TO_CART, ADD_ORDER
} from "../constants/actionTypes/cart";

export function addToCart({id, name, price, quantity}) {
    return {
        type: ADD_TO_CART,
        payload: {
            id, name, price, quantity
        }
    }
}


export function deleteFromCart(id) {
    return {
        type: DELETE_FROM_CART,
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


export function addOrder(products) {
    return{
        type: ADD_ORDER,
        payload: products
    }
}

