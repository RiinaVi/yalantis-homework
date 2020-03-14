import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';
import img from '../../imageNoImageSmall.gif';
import {Button, Image, Container, Col, Row, Spinner} from "react-bootstrap";
import {Icon} from "antd";
import './productPage.scss';
import {formatDate} from '../../utils/customFunctions';

import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";
import {getCurrentProduct, getLoadingStatus} from "../../store/selectors";
import {loadCurrentProduct} from "../../store/actions/productsActions";

export default function ProductPage() {
    let {someProductId} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadCurrentProduct(someProductId));
    },[dispatch,someProductId]);

    const loadingStatus = useSelector(getLoadingStatus);
    const data = useSelector(getCurrentProduct);

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(showAlert('The product was added to the cart!', 'success'));
        setTimeout(() => dispatch(hideAlert()), 2000);
    };

    return (
        <div className={'productInfoContainer'}>
            {loadingStatus &&
            <Spinner animation="border" role="status" variant="secondary"/>
            }
            {!loadingStatus && data &&
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
        </div>
    );
}



