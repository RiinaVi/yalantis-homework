import {takeLeading, takeEvery, all, takeLatest, debounce} from 'redux-saga/effects'
import {
    ADD_ORDER, CREATE_MY_PRODUCT, DELETE_MY_PRODUCT, EDIT_MY_PRODUCT, LOAD_CURRENT_PRODUCT, LOAD_DATA, SET_ALL_ORDERS,
    SET_CURRENT_ORDER, SET_ORIGINS, SET_PAGE_NUMBER, SET_PRICE_RANGE, SET_PRODUCTS_PER_PAGE
} from "../constants/actionTypes";
import {
    workerAddOrder, workerCreateProduct, workerDeleteProduct, workerEditProduct, workerLoadItem, workerLoadOrders,
    workerLoadProducts, workerSetFilters
} from "./workers";

export function* watchRootSaga() {
    yield all([
        // debounce(1000, LOAD_DATA, workerLoadProducts),
        takeLatest(LOAD_DATA, workerLoadProducts),
        debounce(1000,[SET_PRODUCTS_PER_PAGE, SET_PRICE_RANGE, SET_ORIGINS, SET_PAGE_NUMBER], workerSetFilters),
        takeLatest([SET_PRODUCTS_PER_PAGE, SET_PRICE_RANGE, SET_ORIGINS, SET_PAGE_NUMBER], workerSetFilters),
        takeLeading([LOAD_CURRENT_PRODUCT, SET_CURRENT_ORDER], workerLoadItem),
        takeEvery(EDIT_MY_PRODUCT, workerEditProduct),
        takeEvery(CREATE_MY_PRODUCT, workerCreateProduct),
        takeEvery(DELETE_MY_PRODUCT, workerDeleteProduct),
        takeLeading(SET_ALL_ORDERS, workerLoadOrders),
        takeEvery(ADD_ORDER, workerAddOrder),
    ])
}


