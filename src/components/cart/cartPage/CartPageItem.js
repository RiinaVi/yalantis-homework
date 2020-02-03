import React from "react";
import img from '../../../imageNoImageSmall.gif';
import {Image} from "react-bootstrap";
import './cartPage.scss'
import {Link} from "react-router-dom";

import {connect} from "react-redux";

export default function CartPageItem({item}) {
    const {id, name, price, quantity} = item;

    return (
        <tr>
            <td><Image src={img} width={'100px'} height={'100px'} rounded/></td>
            <td><Link to={`/product/${id}`}>{name}</Link></td>
            <td>{price}</td>
            <td>{quantity ? quantity : 1}</td>
            <td>{quantity ? price * quantity : price}</td>
        </tr>
    );
}

