import {SET_TOTAL_NUMBER_OF_PRODUCTS} from "../constants/actionTypes/page";

export function setTotalNumberOfProducts(totalNumberOfProducts) {
    return{
        type: SET_TOTAL_NUMBER_OF_PRODUCTS,
        payload: totalNumberOfProducts
    }
}
