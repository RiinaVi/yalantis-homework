import { DELETE_PRODUCT, LOAD_PRODUCTS, SUBMIT_PRODUCT} from "../constants/actionTypes";

const initialState = {};


export default function productsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOAD_PRODUCTS:
            let products = {};
            payload.products.forEach(item => {
                products[item.id] = item;
            });
            return {
                ...products
            };
        case SUBMIT_PRODUCT:
            return {
                ...state,
                [payload.id]: payload
            };
        case DELETE_PRODUCT:
            const newState = Object.assign({}, state);
            delete newState[payload];
            return newState;
        default:
            return state;
    }
}
