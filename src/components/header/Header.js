import React, {useContext} from "react";
import CartWidget from "../cart/cartWidget/CartWidget";
import {Navbar, Nav} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
import {CartContext} from "../../providers/CartProvider";
import './header.scss';

function Header(props) {
    const {cartSum} = useContext(CartContext);
    const {pathname} = props.location;

    return (
        <Navbar bg="light" variant="light">
            <Link className={'productsLink'} to="/">Products</Link>
            <Nav className="ml-auto">
                {pathname !== '/cart' &&
                <CartWidget sum={cartSum}/>
                }
            </Nav>
        </Navbar>
    );
}

export default withRouter(Header);
