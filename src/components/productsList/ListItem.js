import React from "react";
import {Button, Card} from "react-bootstrap";
import {Icon} from 'antd';
import img from "../../imageNoImageSmall.gif";
import {formatDate} from '../customFunctions';
import './productsList.scss';
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";

export default function ListItem({product}) {
    const dispatch = useDispatch();

    const {id, name, origin, price, updatedAt} = product;

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(showAlert('The product was added to the cart!', 'success'));
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000);
    };

    return (
        <Card style={{marginBottom: '10px'}} className={'productCard'}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Link to={`/product/${id}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
                <Card.Text>
                    Origin: {origin}<br/>{price} $
                </Card.Text>
                <Button onClick={() =>
                    clickHandler(product)
                } variant="outline-success">
                    Add to cart
                    <Icon type="shopping-cart"/>
                </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last
                    updated {formatDate(updatedAt)}</small>
            </Card.Footer>
        </Card>
    );
}

