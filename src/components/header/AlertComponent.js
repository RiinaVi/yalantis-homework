import React, {useContext} from "react";
import {Alert} from "react-bootstrap";
import {CartContext} from "../../providers/CartProvider";
import './header.scss';

export default function AlertComponent() {
    const {alertVisibility, setAlertVisibility} = useContext(CartContext);
    return(
        <Alert className={'alert'}
               show={alertVisibility}
               variant={'success'}
               onClose={() =>setAlertVisibility(false)} dismissible>
            Product was added to the cart!
        </Alert>
    )
}
