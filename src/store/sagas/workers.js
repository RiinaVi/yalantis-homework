import {getFilters, getPageNumber} from "../selectors";
import { toQueryString} from "../../components/customFunctions";
import {setLoadingStatus} from "../actions/loadingStatusActions";
import {createSubmitProduct, dataGetter, deleteSubmitProduct, editSubmitProduct, fetchItem, fetchProducts, postNewProduct} from "./requests";
import {loadCurrentProduct, loadProducts, submitProduct, deleteProduct} from "../actions/productsActions";
import {setTotalNumberOfPages, setTotalNumberOfProducts} from "../actions/pageActions";
import {put, call, select, delay} from 'redux-saga/effects'
import {loadOrigins} from "../actions/originsActions";
import {hideAlert, showAlert} from "../actions/alertActions";
import {LOAD_CURRENT_PRODUCT} from "../constants/actionTypes";
import {setAllOrders, setCurrentOrder} from "../actions/ordersActions";

function changeURL(url) {
    window.history.pushState(null, '', window.location.pathname + '?' + url);
}

export function* workerSetFilters() {
    const filters = yield select(getFilters);
    const pageNumber = yield select(getPageNumber);
    let url = toQueryString({...filters, page: pageNumber});
    if (!window.location.pathname.includes('/my-products')) yield call(changeURL, url);
}

export function* workerLoadItem(action) {
    let actionFunction = action.type === LOAD_CURRENT_PRODUCT ? loadCurrentProduct : setCurrentOrder;
    yield put(setLoadingStatus(true));
    let res = yield call(fetchItem, action);
    yield put(actionFunction(res.data));
    yield put(setLoadingStatus(false));
}

export function* workerLoadProducts() {
    const filters = yield select(getFilters);
    yield put(setLoadingStatus(true));
    yield delay(1000);
    yield call(workerLoadOrigins);
    const res = yield call(fetchProducts, filters);

    yield put(loadProducts(res.data.items));
    yield put(setTotalNumberOfProducts(res.data.totalItems));
    yield put(setTotalNumberOfPages(Math.ceil(res.data.totalItems / res.data.perPage)));
    yield put(setLoadingStatus(false));
}

export function* workerLoadOrigins() {
    const res = yield call(dataGetter, null);
    yield put(loadOrigins(res.data.items.reduce((acc, current) => {
        acc.push(current);
        return acc
    }, [])));
}

export function* workerCreateProduct(action) {
    let res = yield call(createSubmitProduct, action.payload);
    yield put(submitProduct(res.data));
    yield put(showAlert('A new product was created!', 'success'));
    yield delay(2000);
    yield put(hideAlert());
}

export function* workerEditProduct(action) {
    let res = yield call(editSubmitProduct, action.payload);
    yield put(submitProduct(res.data));
    yield put(showAlert('The product was edited!', 'warning'));
    yield delay(2000);
    yield put(hideAlert());
}

export function* workerDeleteProduct(action) {
    yield call(deleteSubmitProduct, action.payload);
    yield put(deleteProduct(action.payload));
    yield put(showAlert('Your product was deleted!', 'danger'));
    yield delay(2000);
    yield put(hideAlert());
}

export function* workerLoadOrders({type}) {
    yield put(setLoadingStatus(true));
    let res = yield call(dataGetter, type);
    yield put(setAllOrders(res.data.items));
    yield put(setLoadingStatus(false));
}

export function* workerAddOrder({payload}) {
    yield call(postNewProduct, payload);
    yield put(showAlert('Your order was submitted!', 'success'));
    yield delay(2000);
    yield put(hideAlert());
}
