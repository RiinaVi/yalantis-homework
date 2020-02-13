import {DELETE_PRODUCT, LOAD_PRODUCTS, SUBMIT_PRODUCT} from "../constants/actionTypes";

export function loadProducts(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products
        }
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
