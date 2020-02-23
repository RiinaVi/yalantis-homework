import React, {useState} from "react";
import {Button, Card} from "react-bootstrap";
import {Icon} from 'antd';
import img from "../../imageNoImageSmall.gif";
import {formatDate} from '../customFunctions';
import './productsList.scss';
import {Link} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
import {hideAlert, showAlert} from "../../store/actions/alertActions";
import {withRouter} from 'react-router-dom';
import ModalComponent from "../../form/components/ModalComponent";
import useHandleSubmit from "../../form/useHandleSubmit";
import useHandleDelete from "../../form/useHandleDelete";
import {editMyProduct} from "../../store/actions/formActions";
import {getLoadingStatus} from "../../store/selectors";

function ListItem({product, location}) {
    const dispatch = useDispatch();
    const {pathname} = location;

    const {id, name, origin, price, updatedAt} = product;

    const [modalShow, setModalShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShow = () => setModalShow(true);
    const onHideHandler = () => setModalShow(false);

    const loadingProducts = useSelector(getLoadingStatus);

    const clickHandler = (product) => {
        dispatch(addToCart(product));
        dispatch(showAlert('The product was added to the cart!', 'success'));
        setTimeout(() => {
            dispatch(hideAlert())
        }, 2000);
    };

    const onSubmitHandler = useHandleSubmit();
    const onDeleteProduct = useHandleDelete();

    const submitFunctionCustomHandler = (function (data) {
        setIsSubmitting(true);
        onSubmitHandler(data, editMyProduct).then(() => {
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
            </Card.Body>
            {!loadingProducts &&
            <div className={'buttons'}>
                {pathname.includes('/my-products') ?
                <>
                    <Button variant='outline-primary'
                            onClick={handleShow}>
                        <Icon type="edit"/>
                    </Button>
                    <Button variant='outline-primary'
                            onClick={() => onDeleteProduct(id)}>
                        <Icon type="delete"/>
                    </Button>
                </>
                :
                <Button className={'cart-button'} onClick={() =>
                    clickHandler(product)}
                        variant="outline-success">
                    Add to cart &nbsp;
                    <Icon type="shopping-cart"/>
                </Button>
                }
            </div>
            }
            <ModalComponent onSubmit={submitFunctionCustomHandler}
                            initialValues={product}
                            show={modalShow}
                            onHide={onHideHandler}
                            isSubmitting={isSubmitting}
                            isFormForEdition={true}/>
            <Card.Footer>
                <small className="text-muted">
                    Last updated {formatDate(updatedAt)}
                </small>
            </Card.Footer>
        </Card>
    );
}

export default withRouter(ListItem);

