import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilters, getPageNumber, getTotalNumberOfProducts} from "../../store/selectors";
import {setPageNumber, setProductsPerPage} from "../../store/actions/queryActions";
import {Pagination} from 'antd';
import {perPageValues} from "../../store/constants/filtersParameters";
import './productsList.scss';

function PaginationComponent() {

    const dispatch = useDispatch();
    let currentPage = parseInt(useSelector(getPageNumber)) || 1;
    const pageSize = parseInt(useSelector(getFilters).perPage) || 50;
    const total = parseInt(useSelector(getTotalNumberOfProducts));

    function onClickHandler(num) {
        dispatch(setPageNumber(num));
    }

    function onShowSizeChange(current, pageSize) {
        dispatch(setProductsPerPage(pageSize));
    }

    return (
        <Pagination current={currentPage}
                    onChange={(num) => {
                        onClickHandler(num)
                    }}
                    pageSize={pageSize}
                    defaultCurrent={1}
                    total={total}
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    pageSizeOptions={perPageValues}
        />
    );
}

export default PaginationComponent

