import {createSelector} from "reselect";

export const getProductsInCart = state => state.cart;
export const getProducts = state => state.products.allProducts;
export const getFilters = state => state.queryFilters;
export const getAlert = state => state.alert;

export const getCartSum = createSelector(
    getProductsInCart,
    products => Object.values(products).reduce((acc, {price, quantity}) => acc + price * (quantity || 1), 0)
);

export const getCartQuantity = createSelector(
    getProductsInCart,
    products => Object.keys(products).length
);
