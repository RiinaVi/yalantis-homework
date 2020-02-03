import {createSelector} from "reselect";

const getCartSum = state => state.cartSum;
const getProduct = (state, productId) => state.productsInCart[productId].price;

export const getCartSumSelector = createSelector(
    getCartSum,
    getProduct,
    (currentSum, productPrice) => currentSum + productPrice
);
