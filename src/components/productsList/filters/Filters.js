import React from "react";
import OriginFilter from "./OriginFilter";
import PriceFilter from "./PriceFilter";
import {useDispatch} from "react-redux";
import {setPriceRange, setOrigins, setPageNumber} from "../../../store/actions/queryActions";
import './filter.scss'

function Filters() {

    const dispatch = useDispatch();

    const applyOriginFilter = origins => {
        applyFilter(setOrigins, origins);
    };

    const applyPriceFilter = priceRange => {
        applyFilter(setPriceRange, priceRange);
    };

    const applyFilter = (setter, setterValue) => {
        dispatch(setter(setterValue));
        dispatch(setPageNumber('1'));
    };

    return (
        <>
            <OriginFilter applyOriginFilter={applyOriginFilter}/>
            <PriceFilter applyPriceFilterHandler={applyPriceFilter}/>
        </>
    )
}

export default Filters;
