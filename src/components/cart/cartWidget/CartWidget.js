import React, {useContext} from "react";
import './cartWidget.scss';
import {Icon} from 'antd';
import {Link} from "react-router-dom";
import {CartContext} from "../../../providers/CartProvider";

export default function CartWidget() {
    const {cartSum} = useContext(CartContext);

    return (
        <div className={'cartWidget'}>
            <div className={'sum'}>
                {cartSum}
            </div>
            <Link to="/cart">
                Show cart
                <Icon type="shopping-cart"/>
            </Link>
        </div>
    );
}
