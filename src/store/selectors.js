import {createSelector} from "reselect";

export const getProductsInCart = state => state.cart;
export const getProducts = state => Object.values(state.products);
export const getFilters = state => state.queryFilters;
export const getAlert = state => state.alert;
export const getOrigins = state => state.filters.origins;
export const getTotalNumberOfPages = state => state.pages.totalNumberOfPages;
export const getAllOrders = state => state.orders.allOrders;
export const getCurrentOrder = state=> state.orders.currentOrder;

export const getCartSum = createSelector(
    getProductsInCart,
    products => Object.values(products).reduce((acc, {price, quantity}) => acc + price * (quantity || 1), 0)
);

export const getCartQuantity = createSelector(
    getProductsInCart,
    products => Object.keys(products).length
);
