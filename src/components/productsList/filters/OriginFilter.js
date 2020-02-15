import React from "react";
import {Accordion, Card, Form} from "react-bootstrap";
import './filter.scss'
import {useSelector} from "react-redux";
import {getOrigins} from "../../../store/selectors";

let checkedInputs = [];

export default function OriginFilter({applyOriginFilter}) {

    const origins = useSelector(getOrigins);

    const onChangeHandler = (e) => {
        const origin = e.target.name;

        checkedInputs.includes(origin) ?
            checkedInputs = checkedInputs.filter(item => item !== origin) :
            checkedInputs.push(origin);

        applyOriginFilter(checkedInputs);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Origin <div className='arrow-up'>&#10094;</div>
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
                                        id={origin.value}
                                        name={origin.value}
                                        label={origin.displayName}
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
