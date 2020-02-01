import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from "react-bootstrap";
import ProductsList from "./components/productsList/ProductsList";
import CartPage from "./components/cart/cartPage/CartPage";
import Header from "./components/header/Header";
import ProductPage from "./components/productPage/ProductPage";
import AlertComponent from "./components/header/AlertComponent";
import CartProvider from "./providers/CartProvider";
import ProductProvider from "./providers/ProductProvider";
import './App.css';

export default function App() {
    return (
        <CartProvider>
            <Router>
                <Header/>
                <Alert.Link href="/cart">
                    <AlertComponent/>
                </Alert.Link>
                <Switch>
                    <Route exact path="/cart" component={CartPage}/>
                    <Route path='/product/:someProductId' component={ProductPage}/>
                    <Route path="/">
                        <ProductProvider>
                            <ProductsList/>
                        </ProductProvider>
                    </Route>
                    <Route path='*'>
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </Router>
        </CartProvider>
    );
}
