import {takeLeading, takeEvery, all, takeLatest, debounce} from 'redux-saga/effects'
import {
    ADD_ORDER,
    CREATE_MY_PRODUCT,
    DELETE_MY_PRODUCT,
    EDIT_MY_PRODUCT,
    FILTERS_CHANGE_ACTIONS,
    LOAD_CURRENT_PRODUCT,
    LOAD_DATA,
    SET_ALL_ORDERS,
    SET_CURRENT_ORDER,
    SHOW_ALERT
} from "../constants/actionTypes";
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


