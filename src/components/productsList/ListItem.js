import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Icon} from 'antd';
import img from "../../imageNoImageSmall.gif";
import {formatDate} from '../customFunctions';
import './productsList.scss';
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";
import {withRouter} from 'react-router-dom';
import ModalComponent from "../../form/components/ModalComponent";
import useHandleEditSubmit from "../../form/useHandleEditSubmit";
import useHandleDelete from "../../form/useHandleDelete";

function ListItem({product, location}) {
    const dispatch = useDispatch();
    const {pathname} = location;

    const {id, name, origin, price, updatedAt} = product;

    const [modalShow, setModalShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShow = () => setModalShow(true);
    const onHideHandler = () => {
        setModalShow(false)
    };

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(showAlert('The product was added to the cart!', 'success'));
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000);
    };

    const onSubmitHandler = useHandleEditSubmit();
    const onDeleteProduct = useHandleDelete();

    const submitFunctionCustomHandler = (function (data) {
        setIsSubmitting(true);
        onSubmitHandler(data).then(() => {
            setModalShow(false);
            setIsSubmitting(false);
        })
    });

    return (
        <Card style={{marginBottom: '10px'}} className={'productCard'}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
                <Link to={`/product/${id}`}>
                    <Card.Title>{name}</Card.Title>
                </Link>
                <Card.Text>
                    Origin: {origin}<br/>{price} $
                </Card.Text>

                {pathname.includes('/my-products') ?
                    <>
                        <Button variant='outline-warning'
                                onClick={() => handleShow()}
                        >Edit </Button>
                        <Button variant='outline-danger'
                                onClick={() => onDeleteProduct(id)}
                        >
                            &#10006;
                        </Button>
                    </>
                    :
                    <Button onClick={() =>
                        clickHandler(product)}
                            variant="outline-success">
                        Add to cart
                        <Icon type="shopping-cart"/>
                    </Button>
                }
                <ModalComponent onSubmit={submitFunctionCustomHandler}
                                initialValues={product}
                                show={modalShow}
                                onHide={onHideHandler}
                                isSubmitting={isSubmitting}
                                isFormForEdition={true}/>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last
                    updated {formatDate(updatedAt)}</small>
            </Card.Footer>
        </Card>
    );
}

export default withRouter(ListItem);

