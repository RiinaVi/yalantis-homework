import React, {useRef} from "react";
import Accordion from "react-bootstrap/Accordion";
import {Button, Card} from "react-bootstrap";
import './filter.scss'
import {perPageValues} from "../../../store/constants/filtersParameters";

export default function PerPageSelect({applyProductsPerPage}) {
    const inputs = useRef();
    const onChangeHandler = () => {
        let checkedInput = inputs.current.querySelector('input:checked');
        applyProductsPerPage(checkedInput.value);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    Show:
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <div className={'arrow-up'} />
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div ref={inputs}>
                            {perPageValues.map((perPage, index)=>(
                                <label key={index}>
                                    <input onClick={onChangeHandler}
                                           type="radio"
                                           name={'perPage'}
                                           value={perPage}/>
                                    {perPage+' '}
                                    items
                                </label>
                            ))}
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
