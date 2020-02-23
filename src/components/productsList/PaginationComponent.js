import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilters, getPageNumber, getTotalNumberOfProducts} from "../../store/selectors";
import {setPageNumber, setProductsPerPage} from "../../store/actions/queryActions";
import {Pagination} from 'antd';
import './productsList.scss';

function PaginationComponent() {

    const dispatch = useDispatch();
    let currentPage = parseInt(useSelector(getPageNumber)) || 1;
    const pageSize = parseInt(useSelector(getFilters).perPage) || 50;
    const total = parseInt(useSelector(getTotalNumberOfProducts));

    function onClickHandler(e) {
        dispatch(setPageNumber(e));
    }

    function onShowSizeChange(current, pageSize) {
        dispatch(setProductsPerPage(pageSize));
    }
    return (
        <Pagination current={currentPage}
                    onChange={(e) => {onClickHandler(e)}}
                    pageSize={pageSize}
                    defaultCurrent={1}
                    total={total}
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    pageSizeOptions={['10', '25', '50']}
        />
    );
}

export default PaginationComponent

