import {DELETE_PRODUCT, CHANGE_QUANTITY} from '../constants/actionTypes';

export function deleteProduct() {
    return {
        type: DELETE_PRODUCT
    }
}

export function changeQuantity() {
    return {
        type: CHANGE_QUANTITY
    }
}
