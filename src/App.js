import React, {useState} from 'react';
import './components/productsList/ProductsList';
import ProductsList from "./components/productsList/ProductsList";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CartPage from "./components/cart/cartPage/CartPage";
import Header from "./components/header/Header";
import ProductPage from "./components/productPage/ProductPage";
import {Alert} from "react-bootstrap";
import './App.css';

import {alertTimer} from './components/customFunctions';

function App() {
    const ITEMS_KEY_NAME = 'selectedItems',
        [cartSum, setCartSum] = useState(0),
        [alertVisibility, setAlertVisibility] = useState(false);

    function addToCart(product) {

        let selectedItems = localStorage.getItem(ITEMS_KEY_NAME) ? JSON.parse(localStorage.getItem(ITEMS_KEY_NAME)) : {
                'items': [],
                'sum': 0
            },
            items = selectedItems.items,
            sum = selectedItems.sum;

        if (items.some(e => e.id === product.id)) {
            items.forEach((currentProduct, index) => {
                if (currentProduct.id === product.id) {
                    return items[index].quantity = items[index].quantity + 1 || 2;
                }
            })
        } else {
            items.push(product);
        }
        sum += +product.price;
        selectedItems.sum = sum;
        setCartSum(sum);

        localStorage.setItem(ITEMS_KEY_NAME, JSON.stringify(selectedItems));
        alertTimer(1000, setAlertVisibility);
    }

    return (
        <Router>
            <Header cartSum={cartSum}/>
            <Alert.Link href="/cart">
                <Alert className={'alert'} show={alertVisibility} variant={'success'}
                       onClose={() => setAlertVisibility(false)} dismissible>
                    Product was added to the cart!
                </Alert>
            </Alert.Link>
            <Switch>
                <Route exact path="/cart" component={CartPage}>
                </Route>
                <Route path='/product/:someProductId'>
                    <ProductPage addToCart={addToCart}/>
                </Route>
                <Route path="/">
                    <ProductsList addToCart={addToCart}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;