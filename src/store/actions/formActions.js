import {CREATE_MY_PRODUCT, DELETE_MY_PRODUCT, EDIT_MY_PRODUCT} from "../constants/actionTypes/form";

export function createMyProduct(newProduct) {
    return {type: CREATE_MY_PRODUCT, payload: newProduct}
}

export function editMyProduct(product) {
    return {type: EDIT_MY_PRODUCT, payload: product}
}

export function deleteMyProduct(id) {
    return {type: DELETE_MY_PRODUCT, payload: id}
}
