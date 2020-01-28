import React from "react";
import {Button, Card} from "react-bootstrap";
import img from "../../imageNoImageSmall.gif";
import {Icon} from 'antd';
import './productsList.scss';
import {formatDate} from '../customFunctions';

export default function ListItem(props) {
    return (
        <Card style={{marginBottom: '10px'}} className={'productCard'}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Card.Link href={`/product/${props.product.id}`}>
                    <Card.Title>{props.product.name}</Card.Title>
                </Card.Link>
                <Card.Text>
                    {'Origin: ' + props.product.origin}<br/>{props.product.price + '$'}
                </Card.Text>
                <Button onClick={() => props.addToCart(props.product)} variant="outline-success">Add to
                    cart <Icon type="shopping-cart"/>
                </Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last
                    updated {formatDate(props.product.updatedAt)}</small>
            </Card.Footer>
        </Card>

    );
}