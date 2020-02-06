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
import {useSelector} from "react-redux";
import {getAlert} from "./store/selectors";

export default function App() {
    const alert = useSelector(getAlert);
    return (
        <Router>
            <Header/>
            <Alert.Link href="/cart">
                <AlertComponent alert={alert}/>
            </Alert.Link>
            <Switch>
                <Route exact path="/cart" component={CartPage}/>
                <Route path='/product/:someProductId' component={ProductPage}/>
                <Route path="/page/:pageNumber" component={ProductsContainer}/>
                <Route path="/" component={ProductsContainer}/>
                <Route path='*'>
                    <Redirect to='/'/>
                </Route>
            </Switch>
        </Router>
    );
}



