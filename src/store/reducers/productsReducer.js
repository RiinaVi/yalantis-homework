import {LOAD_PRODUCTS} from "../constants/actionTypes";

const initialState = {
    allProducts: [],
};

export default function productsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case LOAD_PRODUCTS:
            return {
                ...state,
                allProducts: [...payload.products]
            };
        default:
            return state;
    }
}
