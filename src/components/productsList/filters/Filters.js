import React from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {useDispatch} from "react-redux";
import {setPriceRange, setOrigins, setPageNumber} from "../../../store/actions/queryActions";
import {withRouter} from "react-router-dom";
import './filter.scss'

function Filters({history}) {

    const dispatch = useDispatch();

    const applyOriginFilter = origins => {

        applyFilter(setOrigins, origins);

    };

    const applyPriceFilter = (priceRange) => {
        applyFilter(setPriceRange, priceRange);
    };


    const applyFilter = (setter, setterValue) => {
        dispatch(setter(setterValue));
        if (history.location.pathname.indexOf('page') > 0) {
            history.push(history.location.pathname.slice(0, history.location.pathname.indexOf('page')));
        }
        dispatch(setPageNumber(1));
    };

    return (
        <>
            <OriginFilter applyOriginFilter={applyOriginFilter}/>
            <PriceFilter applyPriceFilterHandler={applyPriceFilter}/>
        </>
    )
}

export default withRouter(Filters);
