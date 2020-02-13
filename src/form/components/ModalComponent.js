import React from "react";
import {Modal, Button} from "react-bootstrap";
import FormComponent from "./FormComponent";
import {submit, reset} from 'redux-form'
import {useDispatch} from "react-redux";

export default function ModalComponent(props) {

    const {isFormForEdition, show, onHide, isSubmitting} = props;

    const dispatch = useDispatch();

    const title = isFormForEdition ? 'Edit product' : 'Add new product';

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header>
                <Modal.Title>{title}</Modal.Title>
                <Button variant="outline-secondary"
                        onClick={onHide}>
                    &#10006;
                </Button>
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

