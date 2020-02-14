import {LOAD_PRODUCTS} from "../constants/actionTypes";

export function loadProducts(products) {
    return {
        type: LOAD_PRODUCTS,
        payload: {
            products
        }
    }
}
