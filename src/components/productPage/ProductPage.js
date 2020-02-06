import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import img from '../../imageNoImageSmall.gif';
import {Button, Image, Container, Col, Row, Spinner} from "react-bootstrap";
import {Icon} from "antd";
import './productPage.scss';
import {formatDate} from '../customFunctions';

import {useDispatch, useSelector} from "react-redux";
import {increaseQuantity, pageAddToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";
import {isProductInCart} from "../../store/selectors";
import {connect} from "react-redux";

function ProductPage({hideAlert, showAlert}) {
    let {someProductId} = useParams();
    const [data, setData] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const dispatch = useDispatch();
    const inCart = useSelector(isProductInCart);

    const clickHandler = (product) => {
        if (inCart(product.id)) {
            dispatch(increaseQuantity(product.id));
        } else {
            dispatch(pageAddToCart(product))
        }
        showAlert();
        setTimeout(hideAlert, 2000);
    };


    useEffect(() => {
        axios.get(`https://yalantis-react-school.herokuapp.com/api/v1/products/${someProductId}`)
            .then(res => {
                setData(res.data);
                setLoadingStatus(false);
            });
    }, [someProductId]);

    return (
        <div className={'productInfoContainer'}>
            {!loadingStatus &&
            <Container>
                <p>{data.name}</p>
                <Row>
                    <Col>
                        <Image src={img} rounded/>
                    </Col>
                    <Col>
                        <div className={'price'}>${data.price}</div>
                        <div>Origin: {data.origin}</div>
                        <div>Created at: {formatDate(data.createdAt)}</div>
                        <div>Updated at: {formatDate(data.updatedAt)}</div>
                        <Button onClick={() =>
                            clickHandler(data)
                        } variant="outline-success">
                            Add to cart
                            <Icon type="shopping-cart"/>
                        </Button>
                    </Col>
                </Row>
            </Container>
            }
            {loadingStatus &&
            <Spinner animation="border" role="status" variant="secondary"/>
            }
        </div>
    );
}

const mapDispatchToProps = {
    showAlert,
    hideAlert
};

export default connect(null, mapDispatchToProps)(ProductPage);

