import {combineReducers} from "redux";
import cartsReducer from "./cartReducer";
import alertReducer from "./alertReducer";
import productsReducer from "./productsReducer";
import queryReducer from "./queryReducer";
import {reducer as formReducer} from 'redux-form';
import originsReducer from "./originsReducer";
import pageReducer from "./pageReducer";
import ordersReducer from "./ordersReducer";
import loadingStatusReducer from "./loadingStatusReducer";

const appReducer = combineReducers({
    cart: cartsReducer,
    alert: alertReducer,
    products: productsReducer,
    queryFilters: queryReducer,
    origins: originsReducer,
    pages: pageReducer,
    orders: ordersReducer,
    loadingStatus: loadingStatusReducer,
    form: formReducer
});

export default function rootReducer(state, action) {
    return (appReducer(state, action));
};
