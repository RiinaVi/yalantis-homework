import React, {useEffect} from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {useDispatch} from "react-redux";
import {setPriceRange, setOrigins, setProductsPerPage} from "../../../store/actions/queryActions";
import PerPageSelect from "./PerPageSelect";
import './filter.scss'
import {withRouter} from "react-router-dom";
import axios from "axios";
import {loadOrigins} from "../../../store/actions/originsActions";

function Filters({history}) {

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/products-origins`)
            .then((res) => {
                dispatch(loadOrigins(res.data.items.reduce((acc, current) => {
                    acc.push(current);
                    return acc
                }, [])));
            })
    }, [dispatch]);

    const applyOriginFilter = origins => {
        applyFilter(setOrigins, origins);
    };

    const applyPriceFilter = (priceRange) => {
        applyFilter(setPriceRange, priceRange);
    };

    const applyProductsPerPage = perPage => {
        applyFilter(setProductsPerPage, perPage);
    };

    const applyFilter = (setter, setterValue) => {
        dispatch(setter(setterValue));
        if (history.location.pathname.indexOf('page') > 0) {
            history.push(history.location.pathname.slice(0, history.location.pathname.indexOf('page')));
        }
    };

    return (
        <>
            <OriginFilter applyOriginFilter={applyOriginFilter}/>
            <PriceFilter applyPriceFilterHandler={applyPriceFilter}/>
            <PerPageSelect applyProductsPerPage={applyProductsPerPage}/>
        </>
    )
}

export default withRouter(Filters);
