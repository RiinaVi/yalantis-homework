import {SET_ALL_ORDERS, SET_CURRENT_ORDER} from "../constants/actionTypes/orders";

export function setAllOrders(orders) {
    return{
        type: SET_ALL_ORDERS, payload: orders
    }
}

export function setCurrentOrder(order) {
    return{
        type: SET_CURRENT_ORDER, payload: order
    }
}
