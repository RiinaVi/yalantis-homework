import React from "react";
import {Alert} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getAlert} from "../../store/selectors";
import './header.scss';

export default function AlertComponent() {
    const {variant, text, visible} = useSelector(getAlert);
    return(
        <Alert className={'alert'}
               show={visible}
               variant={variant}
               dismissible>
            {text}
        </Alert>
    )
}
