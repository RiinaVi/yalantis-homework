import React from "react";
import {Modal, Button, Spinner} from "react-bootstrap";
import FormComponent from "./FormComponent";
import {submit, reset} from 'redux-form'
import {useDispatch} from "react-redux";
import Icon from "antd/es/icon";

export default function ModalComponent(props) {

    const {isFormForEdition, show, onHide, isSubmitting} = props;

    const dispatch = useDispatch();

    const title = isFormForEdition ? 'Edit product' : 'Add new product';

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <Icon type="close" onClick={onHide}/>
            </Modal.Header>
            <Modal.Body>
                <FormComponent {...props}/>
            </Modal.Body>
            <Modal.Footer>
                <Button disabled={isSubmitting}
                        onClick={() => {
                            dispatch(submit('addProduct'));
                        }}
                        variant="success"
                        type='submit'>
                    Save
                    {
                        isSubmitting &&
                        <Spinner animation={"border"}
                                 as="span"
                                 size="sm"
                                 role="status"
                                 aria-hidden="true"
                        />
                    }
                </Button>
                {
                    isFormForEdition &&
                    <Button disabled={isSubmitting}
                            variant="danger"
                            type='button'
                            onClick={() => {
                                dispatch(reset('addProduct'));
                            }}
                    >
                        Discard
                    </Button>
                }
            </Modal.Footer>
        </Modal>
    );
}

