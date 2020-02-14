import React from 'react';
import ListItem from "./ListItem";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import './productsList.scss';
import { useSelector} from "react-redux";
import {getProducts} from "../../store/selectors";

export default function ProductsList({loadingProducts, total}) {

    const products = useSelector(getProducts);

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

