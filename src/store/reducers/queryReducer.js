import { SET_PRICE_RANGE, SET_PRODUCTS_PER_PAGE, SET_ORIGINS} from "../constants/actionTypes";


const initialState = {
    minPrice: '',
    maxPrice: '',
    origins: '',
    perPage: 10,
    page: 1,
};

export default function productsReducer(state = initialState, {type, minPrice, maxPrice, origins, perPage}) {
    switch (type) {
        case SET_PRICE_RANGE:
            return {
                ...state,
                minPrice: minPrice,
                maxPrice: maxPrice,
            };
        case SET_ORIGINS:
            return {
                ...state,
                origins: origins
            };
        case SET_PRODUCTS_PER_PAGE:
            return {
                ...state,
                perPage: perPage
            };
        default:
            return state;
    }
}
