import {takeLeading, takeEvery, all, takeLatest, debounce} from 'redux-saga/effects'
import {SHOW_ALERT} from "../constants/actionTypes/alert";
import {CREATE_MY_PRODUCT, DELETE_MY_PRODUCT, EDIT_MY_PRODUCT,} from "../constants/actionTypes/form";
import {SET_ALL_ORDERS, SET_CURRENT_ORDER,} from "../constants/actionTypes/orders";
import {LOAD_CURRENT_PRODUCT} from "../constants/actionTypes/products";
import {LOAD_DATA} from "../constants/actionTypes/loadingStatus";
import {FILTERS_CHANGE_ACTIONS} from "../constants/actionTypes/query";
import {ADD_ORDER} from "../constants/actionTypes/cart";
import {
    workerAddOrder,
    workerAlertHider,
    workerCreateProduct,
    workerDeleteProduct,
    workerEditProduct,
    workerLoadItem,
    workerLoadOrders,
    workerLoadProducts,
    workerSaveToURL
} from "./workers";

export function* watchRootSaga() {
    yield all([
        takeLatest(LOAD_DATA, workerLoadProducts),
        takeLatest(FILTERS_CHANGE_ACTIONS, workerSaveToURL),
        debounce(2000, FILTERS_CHANGE_ACTIONS, workerLoadProducts),
        takeLeading([LOAD_CURRENT_PRODUCT, SET_CURRENT_ORDER], workerLoadItem),
        takeEvery(EDIT_MY_PRODUCT, workerEditProduct),
        takeEvery(CREATE_MY_PRODUCT, workerCreateProduct),
        takeEvery(DELETE_MY_PRODUCT, workerDeleteProduct),
        takeLeading(SET_ALL_ORDERS, workerLoadOrders),
        takeEvery(ADD_ORDER, workerAddOrder),
        takeEvery(SHOW_ALERT, workerAlertHider)
    ])
}


