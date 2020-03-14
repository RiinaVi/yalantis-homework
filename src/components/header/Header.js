import React, {useState} from "react";
import CartWidget from "../cart/cartWidget/CartWidget";
import ModalComponent from "../../form/components/ModalComponent";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link, withRouter} from 'react-router-dom';
import useHandleSubmit from "../../form/useHandleSubmit";
import {createMyProduct} from "../../store/actions/formActions";
import Icon from "antd/es/icon";
import './header.scss';

function Header({location}) {
    const {pathname} = location;

    const [modalShow, setModalShow] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleShow = () => setModalShow(true);
    const onHideHandler = () => {
        setModalShow(false)
    };

    const onSubmitHandler = useHandleSubmit();

    const submitFunctionCustomHandler = (function (data) {
        setIsSubmitting(true);

        onSubmitHandler(data, createMyProduct).then(() => {
            setModalShow(false);
            setIsSubmitting(false);
        });
    });


    return (
        <Navbar bg="light" variant="light">
            <Link className={'productsLink mr-auto'} to="/">Products</Link>
            <Link className={' productsLink mr-auto'} to='/my-products'>My products</Link>
            <Button onClick={() => handleShow()}
                    className={'mr-auto'} variant="outline-warning"><Icon type="plus"/> product
            </Button>
            <ModalComponent
                isFormForEdition={false}
                isSubmitting={isSubmitting}
                onSubmit={submitFunctionCustomHandler}
                show={modalShow} onHide={onHideHandler}/>
            {pathname !== '/cart' &&
            <Nav className="ml-auto">
                <CartWidget/>
            </Nav>
            }
        </Navbar>
    );
}

export default withRouter(Header);
