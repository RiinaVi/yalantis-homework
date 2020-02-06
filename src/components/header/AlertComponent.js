import React from "react";
import {Alert} from "react-bootstrap";
import './header.scss';

export default function AlertComponent({alert}) {
    const {variant, text, visible} = alert;
    return(
        <Alert className={'alert'}
               show={visible}
               variant={variant}
               dismissible>
            {text}
        </Alert>
    )
}
