import {getFilters, getPageNumber} from "../selectors";
import {toQueryString} from "../../utils/customFunctions";
import {setLoadingStatus} from "../actions/loadingStatusActions";
import {
    createSubmitProduct,
    dataGetter,
    deleteSubmitProduct,
    editSubmitProduct,
    fetchItem,
    fetchProducts,
    postNewProduct
} from "./requests";
import {loadCurrentProduct, setProducts, submitProduct, deleteProduct} from "../actions/productsActions";
import { setTotalNumberOfProducts} from "../actions/pageActions";
import {put, call, select, delay} from 'redux-saga/effects'
import {loadOrigins} from "../actions/originsActions";
import {hideAlert, showAlert} from "../actions/alertActions";
import {LOAD_CURRENT_PRODUCT} from "../constants/actionTypes";
import {setAllOrders, setCurrentOrder} from "../actions/ordersActions";
import httpClient from "../../api/httpClient";

function changeURL(url) {
    window.history.pushState(null, '', window.location.pathname + '?' + url);
}

export function* workerSaveToURL() {
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
    // yield delay(3000);
    const origins = yield httpClient.get( '/products-origins');
    yield call(workerLoadOrigins, origins);
    const {data} = yield call(fetchProducts, filters);

    yield put(setProducts(data.items));
    yield put(setTotalNumberOfProducts(data.totalItems));
    yield put(setLoadingStatus(false));
}

export function* workerLoadOrigins(res) {
    yield put(loadOrigins(res.data.items));
}

export function* workerCreateProduct(action) {
    let res = yield call(createSubmitProduct, action.payload);
    yield put(submitProduct(res.data));
    yield put(showAlert('A new product was created!', 'success'));
}

export function* workerEditProduct(action) {
    let res = yield call(editSubmitProduct, action.payload);
    yield put(submitProduct(res.data));
    yield put(showAlert('The product was edited!', 'warning'));
}

export function* workerDeleteProduct(action) {
    yield call(deleteSubmitProduct, action.payload);
    yield put(deleteProduct(action.payload));
    yield put(showAlert('Your product was deleted!', 'danger'));
}

export function* workerLoadOrders() {
    yield put(setLoadingStatus(true));
    let {data} = yield httpClient.get('/orders');
    yield put(setAllOrders(data.items));
    yield put(setLoadingStatus(false));
}

export function* workerAddOrder({payload}) {
    yield call(postNewProduct, payload);
    yield put(showAlert('Your order was submitted!', 'success'));
}

export function* workerAlertHider() {
    yield delay(2000);
    yield put(hideAlert());
}

export function* workerDebounce() {
    yield delay(3000);
    yield call(workerLoadProducts);
}
