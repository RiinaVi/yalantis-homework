import React from "react";
import {Button, Card} from "react-bootstrap";
import {Icon} from 'antd';
import img from "../../imageNoImageSmall.gif";
import {formatDate} from '../customFunctions';
import './productsList.scss';
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {listAddToCart} from "../../store/actions/productsActions";

function ListItem(props) {
    const product = props.product;
    const {id, name, origin, price, updatedAt} = props.product;



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
                    props.listAddToCart(product)
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

const mapDispatchToProps = {
    listAddToCart
};

export default connect(null, mapDispatchToProps)(ListItem);
