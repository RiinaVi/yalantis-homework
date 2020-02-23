import React from "react";
import {Alert} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getAlert} from "../../store/selectors";
import {hideAlert} from "../../store/actions/alertActions";
import './header.scss';

export default function AlertComponent() {
    const {variant, text, visible} = useSelector(getAlert);
    const dispatch = useDispatch();

    return(
        <Alert className={'alert'}
               show={visible}
               variant={variant}
               dismissible
               onClose={() => dispatch(hideAlert())}
               >
            {text}
        </Alert>
    )
}
