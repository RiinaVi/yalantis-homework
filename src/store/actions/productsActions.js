import {
    DELETE_PRODUCT,
    LOAD_CURRENT_PRODUCT,
    LOAD_PRODUCTS,
    SUBMIT_PRODUCT
} from "../constants/actionTypes";

export function setProducts(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products
        }
    }
}

export function loadCurrentProduct(productId) {
    return{
        type: LOAD_CURRENT_PRODUCT,
        payload : productId
    }
}

export function submitProduct(product) {
    return {
        type: SUBMIT_PRODUCT,
        payload: product
    }
}

export function deleteProduct(id) {
    return{
        type: DELETE_PRODUCT,
        payload: id
    }
}

