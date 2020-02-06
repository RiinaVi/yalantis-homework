import ProductsList from "./ProductsList";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Filters from "./filters/Filters";
import {Col, Container, Row} from "react-bootstrap";
import {loadProducts} from "../../store/reducers/productsReducer";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import {toQueryString} from "../customFunctions";
import {getFilters} from "../../store/selectors";

export default function ProductsContainer() {
    const filters = useSelector(getFilters);
    const dispatch = useDispatch();

    const [loadingProducts, setLoadingProducts] = useState(false);

    const [totalNumberOfPages, setTotalNumberOfPages] = useState(null);
    const [totalResult, setTotalResult] = useState(null);

    const pageNumber = parseInt(useParams().pageNumber || filters.page);

    useEffect(() => {
        setLoadingProducts(true);
        axios.get('https://yalantis-react-school.herokuapp.com/api/v1/products?' + toQueryString({
            ...filters,
            page: pageNumber
        }))
            .then(({data}) => {
                setLoadingProducts(false);
                dispatch(loadProducts(data.items));
                setTotalResult(data.totalItems);
                setTotalNumberOfPages(Math.ceil(data.totalItems / data.perPage));
            });
    }, [filters, pageNumber, loadProducts]);


    return (
        <Container>
            <Row>
                <Col md={2}>
                    <Filters/>
                </Col>
                <Col md={10}>
                    <ProductsList loadingProducts={loadingProducts} total={totalResult}/>
                </Col>
            </Row>
            <Row>
                <PaginationComponent numberOfPages={totalNumberOfPages} currentPage={pageNumber}/>
            </Row>
        </Container>
    )
}
