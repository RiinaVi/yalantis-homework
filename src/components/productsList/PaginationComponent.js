import React from "react";
import {Pagination} from "react-bootstrap";
import './productsList.scss';
import {Link, withRouter} from "react-router-dom";

function PaginationComponent({currentPage, numberOfPages, history}) {

    const {location} = history;
    const {pathname} = location;

    let items = [];
    items.push(
        <li key={0} className={`page-item${currentPage === 1 ? ' disabled' : ''}`}>
            <Link className={'page-link'} to={`${pathname}/page/${currentPage - 1}`}>
                {'<'}
            </Link>
        </li>
    );
    for (let number = 1; number <= numberOfPages; number++) {
        items.push(
            <li key={number} className={`page-item${number === currentPage ? ' active' : ''}`}>
                <Link className={'page-link'} to={`${pathname}/page/${number}`}>
                    {number}
                </Link>
            </li>
        );
    }
    items.push(
        <li key={numberOfPages + 1} className={`page-item${currentPage === numberOfPages ? ' disabled' : ''}`}>
            <Link className={'page-link'} to={`${pathname}/page/${currentPage + 1}`}>
                {'>'}
            </Link>
        </li>
    );
    return (
        <Pagination>
            {items}
        </Pagination>
    );
}

export default withRouter(PaginationComponent)

