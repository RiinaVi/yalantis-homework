import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import img from '../../imageNoImageSmall.gif';
import {Button, Image, Container, Col, Row, Spinner} from "react-bootstrap";
import {Icon} from "antd";
import './productPage.scss';
import {formatDate} from '../customFunctions';

import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";

export default function ProductPage() {
    let {someProductId} = useParams();
    const [data, setData] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(true);

    const dispatch = useDispatch();

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(showAlert('The product was added to the cart!', 'success'));
        setTimeout(() =>
            dispatch(hideAlert())
        , 2000);
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



