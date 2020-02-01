import React, {useContext} from "react";
import {Button, Card} from "react-bootstrap";
import {Icon} from 'antd';
import img from "../../imageNoImageSmall.gif";
import {formatDate} from '../customFunctions';
import {CartContext} from "../../providers/CartProvider";
import './productsList.scss';
import {Link} from "react-router-dom";

export default function ListItem({product}) {
    const {id, name, origin, price, updatedAt} = product;
    const {addToCart} = useContext(CartContext);

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
                <Button onClick={() => addToCart(product)} variant="outline-success">
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
