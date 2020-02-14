import React, {useState} from "react";
import {Accordion, Card} from "react-bootstrap";
import {Slider} from "antd";
import 'antd/dist/antd.css';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {minPrice, maxPrice} from "../../../store/constants/filtersParameters";
import './filter.scss'
import debounce from 'lodash.debounce';

const debouncedFunction = debounce((applyPriceFilterHandler, [minPrice, maxPrice]) => {
    applyPriceFilterHandler([minPrice, maxPrice]);
}, 300);

export default function PriceFilter({applyPriceFilterHandler}) {
    const [minFilterPrice, setMinFilterPrice] = useState(0);
    const [maxFilterPrice, setMaxFilterPrice] = useState(1000);

    const onPriceRangeChangeHandler = ([minPrice, maxPrice]) => {
        setMinFilterPrice(minPrice);
        setMaxFilterPrice(maxPrice);
        debouncedFunction(applyPriceFilterHandler, [minPrice, maxPrice]);
    };

    const onMinPriceInputChangeHandler = (e) => {
        setMinFilterPrice(e.target.value);
    };

    const onMaxPriceInputChangeHandler = (e) => {
        setMaxFilterPrice(e.target.value);
    };

    const marks = {
        0: '0',
        500: '$500',
        1000: '$1000'
    };

    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                    Price, $
                    <div className={'arrow-up arrow'}/>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Min</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={minFilterPrice}
                                onChange={onMinPriceInputChangeHandler}
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>Max</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                value={maxFilterPrice}
                                onChange={onMaxPriceInputChangeHandler}
                            />
                        </InputGroup>
                        <Slider marks={marks} onChange={onPriceRangeChangeHandler}
                                value={[minFilterPrice, maxFilterPrice]} range min={minPrice} max={maxPrice}/>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}
