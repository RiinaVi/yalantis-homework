import React from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {useDispatch} from "react-redux";
import {setPriceRange, setOrigins, setProductsPerPage} from "../../../store/actions/queryActions";
import PerPageSelect from "./PerPageSelect";
import './filter.scss'
import {withRouter} from "react-router-dom";

function Filters({history}) {

    const dispatch = useDispatch();
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
