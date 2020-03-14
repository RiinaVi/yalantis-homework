import {createSelector} from "reselect";

export const getProductsInCart = state => state.cart;
export const getProducts = state => Object.values(state.products);
export const getFilters = state => state.queryFilters;
export const getAlert = state => state.alert;
export const getOrigins = state => state.origins.origins;

const getPageState = state => state.pages;
const getOrders = state => state.orders;
const getWholeProductsState = state => state.products;

export const getTotalNumberOfProducts = createSelector(getPageState,
    pageState => pageState.totalNumberOfProducts);


export const getPageNumber = createSelector(getFilters,
    filters => filters.page
);

export const getAllOrders = createSelector(getOrders,
    orders => orders.allOrders);

export const getCurrentOrder = createSelector(getOrders,
    orders => orders.currentOrder);

export const getLoadingStatus = state => state.loadingStatus.state;

export const getCurrentProduct = createSelector(getWholeProductsState,
    products => products.product);

export const getCartSum = createSelector(
    getProductsInCart,
    products => Object.values(products).reduce((acc, {price, quantity}) => acc + price * (quantity || 1), 0)
);

export const getCartQuantity = createSelector(
    getProductsInCart,
    products => Object.keys(products).length
);
