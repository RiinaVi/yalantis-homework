import React from "react";
import CartWidget from "../cart/cartWidget/CartWidget";
import {Navbar, Nav} from "react-bootstrap";
import {withRouter} from 'react-router-dom';
import './header.scss';

function Header(props) {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Products</Navbar.Brand>
            <Nav className="ml-auto">
                {props.location.pathname !== '/cart' &&
                <CartWidget sum={props.cartSum}/>
                }
            </Nav>
        </Navbar>
    );
}

export default withRouter(Header);