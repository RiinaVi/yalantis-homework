import React, {useEffect, useState} from "react";
import {Nav} from "react-bootstrap";
import './cartWidget.scss';
import {Icon} from 'antd';

export default function CartWidget() {

    const [sum, setSum] = useState(0);
    let currentSum = localStorage.getItem('selectedItems') ?
        JSON.parse(localStorage.getItem('selectedItems')).sum : 0;

    useEffect(() => {
        setSum(currentSum);
    }, [currentSum]);

    return (
        <div className={'cartWidget'}>
            <div className={'sum'}>{sum}</div>
            <Nav.Link href="/cart">
                Show cart
                <Icon type="shopping-cart"/>
            </Nav.Link>
        </div>
    );
}
