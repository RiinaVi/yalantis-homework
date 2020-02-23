import {createSelector} from "reselect";

export const getProductsInCart = state => state.cart;
export const getProducts = state => Object.values(state.products);
export const getFilters = state => state.queryFilters;
export const getAlert = state => state.alert;
export const getOrigins = state => state.origins.origins;
export const getTotalNumberOfProducts = state => state.pages.totalNumberOfProducts;
export const getPageNumber = state => state.queryFilters.page;
export const getAllOrders = state => state.orders.allOrders;
export const getCurrentOrder = state=> state.orders.currentOrder;
export const getLoadingStatus = state => state.loadingStatus.state;
export const getCurrentProduct = state => state.products.product;

export const getCartSum = createSelector(
    getProductsInCart,
    products => Object.values(products).reduce((acc, {price, quantity}) => acc + price * (quantity || 1), 0)
);

export const getCartQuantity = createSelector(
    getProductsInCart,
    products => Object.keys(products).length
);
