import React, {useRef} from "react";
import {Accordion, Button, Card, Form} from "react-bootstrap";
import {origins} from "../../../store/constants/filtersParameters";
import './filter.scss'

export default function OriginFilter({applyOriginFilter}) {
    const checkboxes = useRef();

    const onChangeHandler = () => {
        let checkedInputs = checkboxes.current.querySelectorAll('input:checked');
        let checkedInputsNames = Array.from(checkedInputs).map(input => input.name);
        applyOriginFilter(checkedInputsNames);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                    Origin
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <div className={'arrow-up'}/>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form.Group ref={checkboxes}>
                            {origins.map((origin, index) => {
                                return (
                                    <Form.Check
                                        key={index}
                                        type={'checkbox'}
                                        onClick={onChangeHandler}
                                        custom
                                        id={origin}
                                        name={origin}
                                        label={origin}
                                    />
                                )
                            })}
                        </Form.Group>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
