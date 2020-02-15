import React from "react";
import {Pagination} from "react-bootstrap";
import './productsList.scss';
import {Link, withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTotalNumberOfPages} from "../../store/selectors";

function PaginationComponent({currentPage}) {

    const numberOfPages = useSelector(getTotalNumberOfPages);
    let origin = window.location.pathname;

    if(origin.indexOf('page')){
        origin = origin.slice(0, origin.indexOf('/page'));
    }

    let items = [];

    items.push(
        <li key={0} className={`page-item${(currentPage === 1) ? ' disabled' : ''}`}>
            <Link className={'page-link'} to={`${origin}/page/${currentPage - 1}`}>
                {'<'}
            </Link>
        </li>
    );
    for (let number = 1; number <= numberOfPages; number++) {
        if(numberOfPages>20 && number===20) items.push(<div className='line-break'>{'\n'}</div>);
        items.push(
            <li key={number} className={`page-item${number === currentPage ? ' active' : ''}`}>
                <Link className={'page-link'} to={`${origin}/page/${number}`}>
                    {number}
                </Link>
            </li>
        );
    }
    items.push(
        <li key={numberOfPages + 1} className={`page-item${currentPage === numberOfPages ? ' disabled' : ''}`}>
            <Link className={'page-link'} to={`${origin}/page/${currentPage + 1}`}>
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

