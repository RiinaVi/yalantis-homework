import React from "react";
import {Accordion, Card, Form} from "react-bootstrap";
import {origins} from "../../../store/constants/filtersParameters";
import './filter.scss'

let checkedInputs = [];

export default function OriginFilter({applyOriginFilter}) {

    const onChangeHandler = (e) => {
        checkedInputs.push(e.target.name);
        applyOriginFilter(checkedInputs);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Origin <div className={'arrow-up'}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Form.Group>
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
