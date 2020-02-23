import ProductsList from "./ProductsList";
import React, {useEffect} from "react";
import Filters from "./filters/Filters";
import {Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom';
import PaginationComponent from "./PaginationComponent";
import {getFilters} from "../../store/selectors";
import {loadData} from "../../store/actions/loadingStatusActions";

function ProductsContainer({history}) {

    const filters = useSelector(getFilters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData());
    }, [
        Object.values(filters),
        history.location.pathname,
        dispatch]);

    return (
        <>
            <Container className='products-container'>
                <Row>
                    <Col md={2}>
                        <Filters/>
                    </Col>
                    <Col md={10}>
                        <ProductsList/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{span: 10, offset: 2}}>
                        <Container>
                            <PaginationComponent/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default withRouter(ProductsContainer);
