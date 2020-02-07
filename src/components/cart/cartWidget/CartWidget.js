import React from "react";
import {Link} from "react-router-dom";
import {getCartQuantity, getCartSum} from "../../../store/selectors";
import {Tooltip} from "react-bootstrap";
import {useSelector} from "react-redux";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import './cartWidget.scss';

export default function CartWidget() {
    const quantity = useSelector(getCartQuantity);
    const cartSum = useSelector(getCartSum);

    return (
        <div className={'cartWidget'}>
            <div className="total">
                <OverlayTrigger
                    placement={'bottom'}
                    overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>
                            {quantity} items
                        </Tooltip>
                    }>
                    <span>{`Total: $${cartSum}`}</span>
                </OverlayTrigger>
            </div>
            <Link to="/cart">
                Show cart
            </Link>
        </div>
    );
}

