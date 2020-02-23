import {SET_TOTAL_NUMBER_OF_PAGES, SET_TOTAL_NUMBER_OF_PRODUCTS} from "../constants/actionTypes";


export function setTotalNumberOfPages(totalNumberOfPages) {
    return {
        type: SET_TOTAL_NUMBER_OF_PAGES,
        payload: totalNumberOfPages
    }
}

export function setTotalNumberOfProducts(totalNumberOfProducts) {
    return{
        type: SET_TOTAL_NUMBER_OF_PRODUCTS,
        payload: totalNumberOfProducts
    }
}


