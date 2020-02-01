import React, {useContext} from 'react';
import ListItem from "./ListItem";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import {ProductContext} from "../../providers/ProductProvider";
import './productsList.scss';

export default function ProductsList() {
    const {products, loadingProducts} = useContext(ProductContext);

    return (
        <div className={'productsListContainer'}>
            {loadingProducts &&
            <Spinner animation="border" role="status" variant="secondary"/>
            }
            {
                !loadingProducts && products &&
                <Container>
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
