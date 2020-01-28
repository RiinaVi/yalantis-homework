import React from "react";
import img from '../../../imageNoImageSmall.gif';
import {Image} from "react-bootstrap";
import './cartPage.scss'

export default function CartPageItem(props) {
    let product = props.item;

    return (
        <tr>
            <td><Image src={img} width={'100px'} height={'100px'} rounded/></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity ? product.quantity : 1}</td>
            <td>{product.quantity ? product.price * product.quantity : product.price}</td>
        </tr>
    );
}