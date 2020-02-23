import {  SET_TOTAL_NUMBER_OF_PRODUCTS} from "../constants/actionTypes";

const initialState = {
    totalNumberOfProducts: 0,
};

export default function pageReducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_TOTAL_NUMBER_OF_PRODUCTS:
            return {
                ...state, totalNumberOfProducts: payload
            };
        default:
            return state
    }
}
