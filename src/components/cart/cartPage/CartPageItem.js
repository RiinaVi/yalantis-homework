import React from "react";
import img from '../../../imageNoImageSmall.gif';
import {Image, Button, InputGroup} from "react-bootstrap";
import './cartPage.scss'
import {Link} from "react-router-dom";
import {
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeQuantity
} from "../../../store/actions/cartActions";

import {useDispatch} from "react-redux";
import {hideAlert, showDeleteAlert} from "../../../store/actions/alertActions";
import FormControl from "react-bootstrap/FormControl";
import {connect} from "react-redux";

function CartPageItem({item, hideAlert, showDeleteAlert}) {
    const {id, name, price, quantity} = item;

    const dispatch = useDispatch();

    const keyPressHandler = (e) => {
        dispatch(changeQuantity(id, e.target.value))
    };

    const decreaseHandler = () => {
        dispatch(decreaseQuantity(id));
    };

    const increaseHandler = () => {
        dispatch(increaseQuantity(id));
    };

    const deleteClickHandler = () => {
        dispatch(deleteProduct(id));
        showDeleteAlert();
        setTimeout(hideAlert, 2000);
    };

    return (
        <tr>
            <td>
                <Button onClick={deleteClickHandler} variant="danger" size={'sm'}
                        aria-label={`Delete ${name}`}>&times;</Button>
            </td>
            <td><Image src={img} width={'100px'} height={'100px'} rounded/></td>
            <td><Link to={`/product/${id}`}>{name}</Link></td>
            <td>${price}</td>
            <td>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={decreaseHandler} size={'sm'} variant="primary">-</Button>
                    </InputGroup.Prepend>
                    <FormControl onChange={keyPressHandler} type={'number'} value={quantity || 1}/>
                    <InputGroup.Append>
                        <Button onClick={increaseHandler} size={'sm'} variant="primary">+</Button>
                    </InputGroup.Append>
                </InputGroup>
            </td>
            <td>${quantity ? price * quantity : price}</td>
        </tr>
    );
}

const mapDispatchToProps = {
    hideAlert, showDeleteAlert
};

export default connect(null, mapDispatchToProps)(CartPageItem);

