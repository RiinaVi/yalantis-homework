import {LIST_ADD_TO_CART, PAGE_ADD_TO_CART} from "../constants/actionTypes";

const initialState = {
    productsInCart: {}
    ,
    // cartSum: 100
};

export default function productsReducer(state = initialState.productsInCart, {type, id, name, price, quantity}) {
    switch (type) {
        case LIST_ADD_TO_CART:
            return{
                ...state,
                [id]: {
                    id, name, price, quantity
                },
            };
        case PAGE_ADD_TO_CART:
            return {...state.productsInCart, [id]: {id, name, price, quantity}};
        default:
            return state;
    }
}
