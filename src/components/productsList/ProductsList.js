import React from 'react';
import ListItem from "./ListItem";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getLoadingStatus, getProducts, getTotalNumberOfProducts} from "../../store/selectors";
import './productsList.scss';

export default function ProductsList() {

    const products = useSelector(getProducts);
    const loadingProducts = useSelector(getLoadingStatus);
    const total = useSelector(getTotalNumberOfProducts);

    return (
        <div className={'productsListContainer'}>
            {loadingProducts &&
            <Spinner animation="border" role="status" variant="secondary"/>
            }
            {
                !loadingProducts && products &&
                <Container>
                    <Row>
                        <Col md={12} className={'productsFound'}>
                            {total} products found
                        </Col>
                    </Row>
                    <Row>
                        {products.map((product) => {
                            return (
                                <Col md={4} key={product.id}>
                                    <ListItem product={product}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            }
        </div>
    );
}

