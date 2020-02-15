import ProductsList from "./ProductsList";
import React, {useEffect, useState} from "react";
import axios from "axios";
import Filters from "./filters/Filters";
import {Col, Container, Row} from "react-bootstrap";
import {loadProducts} from "../../store/actions/productsActions";
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import {toQueryString} from "../customFunctions";
import {getFilters} from "../../store/selectors";
import {withRouter} from 'react-router-dom';
import {setTotalNumberOfPages} from "../../store/actions/pageActions";


function ProductsContainer({location}) {
    const filters = useSelector(getFilters);
    const dispatch = useDispatch();
    const {pathname} = location;

    const [loadingProducts, setLoadingProducts] = useState(false);
    const [totalResult, setTotalResult] = useState(null);

    const pageNumber = parseInt(useParams().pageNumber || filters.page) || 1;

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_API_KEY
        }

    };

    useEffect(() => {
        setLoadingProducts(true);
        axios.get(`${process.env.REACT_APP_API_URL}/products?` + toQueryString({
            ...filters,
            page: pageNumber,
            editable: pathname.includes('/my-products')
        }),
            config
        )
            .then(({data}) => {
                setLoadingProducts(false);
                dispatch(loadProducts(data.items));
                setTotalResult(data.totalItems);
                dispatch(setTotalNumberOfPages(Math.ceil(data.totalItems / data.perPage)));
            });
    }, [filters, pageNumber, pathname, dispatch]);


    return (
        <>
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
                    <PaginationComponent currentPage={pageNumber}/>
                </Row>
            </Container>
        </>
    )
}

export default withRouter(ProductsContainer);
