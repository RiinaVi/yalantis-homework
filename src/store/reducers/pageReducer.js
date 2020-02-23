import { SET_TOTAL_NUMBER_OF_PAGES, SET_TOTAL_NUMBER_OF_PRODUCTS} from "../constants/actionTypes";

const initialState = {
    totalNumberOfPages: 0,
    totalNumberOfProducts: 0,
};

export default function pageReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_TOTAL_NUMBER_OF_PAGES:
            return {
                ...state,
                totalNumberOfPages: payload
            };
        case SET_TOTAL_NUMBER_OF_PRODUCTS:
            return {
                ...state, totalNumberOfProducts: payload
            };
        default:
            return state
    }
}
