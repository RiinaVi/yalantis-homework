import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ListItem from "./ListItem";
import {Col, Container, Row, Spinner} from "react-bootstrap";
import './productsList.scss';

export default function ProductsList(props) {
    const [data, setData] = useState(null),
        [loadingStatus, setLoadingStatus] = useState(true);

    useEffect(() => {
        axios.get('https://yalantis-react-school.herokuapp.com/api/v1/products')
            .then(res => {
                if (!data) {
                    setLoadingStatus(false);
                    setData(res.data.items)
                }
            });
    });

    return (
        <div className={'productsListContainer'}>
            {loadingStatus &&
            <Spinner animation="border" role="status" variant="secondary"/>
            }
            {
                data &&
                <Container>
                    <Row>
                        {data.map((product) => {
                            return (
                                <Col md={4} key={product.id}>
                                    <ListItem dateGetter={props.dateGetter} product={product}
                                              addToCart={props.addToCart}/>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            }
        </div>
    );
}