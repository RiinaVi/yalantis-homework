import {combineReducers} from "redux";
import cartsReducer from "./cartReducer";
import alertReducer from "./alertReducer";
import productsReducer from "./productsReducer";
import queryReducer from "./queryReducer";
import {reducer as formReducer} from 'redux-form';

const appReducer = combineReducers({
    cart: cartsReducer,
    alert: alertReducer,
    products: productsReducer,
    queryFilters: queryReducer,
    form: formReducer
});

export default function rootReducer(state, action) {
    return (appReducer(state, action));
};
