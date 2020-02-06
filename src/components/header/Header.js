import React from "react";
import CartWidget from "../cart/cartWidget/CartWidget";
import {Navbar, Nav} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
import './header.scss';

function Header({location}) {
    const {pathname} = location;

    return (
        <Navbar bg="light" variant="light">
            <Link className={'productsLink mr-auto'} to="/">Products</Link>
            {pathname !== '/cart' &&
            <Nav className="ml-auto">
                <CartWidget/>
            </Nav>
            }
        </Navbar>
    );
}

export default withRouter(Header);
