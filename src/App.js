import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";
import CartPage from "./components/cart/cartPage/CartPage";
import Header from "./components/header/Header";
import ProductPage from "./components/productPage/ProductPage";
import ProductsContainer from "./components/productsList/ProductsContainer";
import AlertComponent from "./components/header/AlertComponent";
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import OrdersHistoryPage from "./components/orders/OrdersHistoryPage";
import OrderPage from "./components/orders/OrderPage";

export default function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Alert.Link href="/cart">
                    <AlertComponent/>
                </Alert.Link>
                <Switch>
                    <Route exact path="/cart" component={CartPage}/>
                    <Route path='/product/:someProductId' component={ProductPage}/>
                    <Route path="/page/:pageNumber" component={ProductsContainer}/>
                    <Route exact path="/" component={ProductsContainer}/>
                    <Route exact path='/my-products' component={ProductsContainer}/>
                    <Route path='/my-products/page/:pageNumber' component={ProductsContainer}/>
                    <Route exact path='/my-orders' component={OrdersHistoryPage}/>
                    <Route path='/my-orders/:orderId' component={OrderPage}/>
                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}



