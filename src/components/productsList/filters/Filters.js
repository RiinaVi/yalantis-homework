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
        dispatch(setOrigins(origins));
        history.push("/page/1");
    };

    const applyPriceFilter = (priceRange) => {
        dispatch(setPriceRange(priceRange));
        history.push("/page/1");
    };

    const applyProductsPerPage = perPage => {
        dispatch(setProductsPerPage(perPage));
        history.push("/page/1");
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
