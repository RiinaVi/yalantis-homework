import { combineReducers } from "redux";
import cartsReducer from "./cartReducer";
import alertReducer from "./alertReducer";
import productsReducer from "./productsReducer";
import queryReducer from "./queryReducer";

const rootReducer = combineReducers({
    cart: cartsReducer,
    alert: alertReducer,
    products: productsReducer,
    queryFilters: queryReducer,
});

export default rootReducer;
