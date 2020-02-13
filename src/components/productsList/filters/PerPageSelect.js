import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {Card} from "react-bootstrap";
import {perPageValues} from "../../../store/constants/filtersParameters";
import './filter.scss'


export default function PerPageSelect({applyProductsPerPage}) {

    const onChangeHandler = (e) => {
        applyProductsPerPage(e.target.value);
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Show: <div className='arrow-up'>&#10094;</div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div>
                            {perPageValues.map((perPage, index) => (
                                <label key={index}>
                                    <input onClick={onChangeHandler}
                                           type="radio"
                                           name={'perPage'}
                                           value={perPage}/>
                                    {perPage + ' '}
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
