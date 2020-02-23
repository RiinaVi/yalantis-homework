import {takeLeading, takeEvery, takeLatest} from 'redux-saga/effects'
import {ADD_ORDER, CREATE_MY_PRODUCT, DELETE_MY_PRODUCT, EDIT_MY_PRODUCT, LOAD_CURRENT_PRODUCT, LOAD_DATA, SET_ALL_ORDERS,
    SET_CURRENT_ORDER, SET_ORIGINS, SET_PAGE_NUMBER, SET_PRICE_RANGE, SET_PRODUCTS_PER_PAGE} from "../constants/actionTypes";
import {workerAddOrder, workerCreateProduct, workerDeleteProduct, workerEditProduct, workerLoadItem, workerLoadOrders,
    workerLoadProducts, workerSetFilters} from "./workers";

export function* watchRootSaga() {
    yield takeLeading(LOAD_DATA, workerLoadProducts);

    yield takeLeading([SET_PRODUCTS_PER_PAGE, SET_PRICE_RANGE, SET_ORIGINS, SET_PAGE_NUMBER], workerSetFilters);

    yield takeLeading([LOAD_CURRENT_PRODUCT, SET_CURRENT_ORDER], workerLoadItem);

    yield takeEvery(EDIT_MY_PRODUCT, workerEditProduct);
    yield takeEvery(CREATE_MY_PRODUCT, workerCreateProduct);
    yield takeEvery(DELETE_MY_PRODUCT, workerDeleteProduct);

    yield takeLeading(SET_ALL_ORDERS, workerLoadOrders);

    yield takeEvery(ADD_ORDER, workerAddOrder);
}


